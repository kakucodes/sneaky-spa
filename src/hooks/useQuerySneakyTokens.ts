import { useAccount } from "graz";
import { SNEAKY_TOKEN_CHAINS } from "../config";
import { bech32 } from "bech32";
import { useQuery } from "@tanstack/react-query";
import { formatTokenAmount } from "../utils/format";
import { useQueryOsmosisToken } from "./useQueryOsmosisToken";
import { Coin, osmosis } from "osmojs";
import { bigint } from "ts-pattern/dist/patterns";
import { coin } from "@cosmjs/stargate";
import { Pool } from "osmojs/osmosis/gamm/v1beta1/balancerPool";

const changeHrp = (address: string, hrp: string): string | undefined => {
  try {
    const { words } = bech32.decode(address);
    return bech32.encode(hrp, words);
  } catch (error) {
    console.error(error);
  }
};

export type SneakyTokenChain = keyof typeof SNEAKY_TOKEN_CHAINS;
export type SneakyTokenDenom = (typeof SNEAKY_TOKEN_CHAINS)[SneakyTokenChain];

type UserSneakyAddresses = { [ChainId in SneakyTokenChain]: string };

type SneakyPoolShares = {
  total: Coin;
  clPoolShare: Coin;
  balancerPoolShare: {
    sneakyTokens: Coin;
    totalGamms: Coin;
    locked: {
      sneakyTokens: Coin;
      gamms: Coin;
    };
    liquid: {
      sneakyTokens: Coin;
      gamms: Coin;
    };
  };
};

export type OsmojsQueryClient = Awaited<
  ReturnType<typeof osmosis.ClientFactory.createRPCQueryClient>
>;

const getUserCLPoolShare = (
  client: OsmojsQueryClient,
  address: string,
  poolId: number,
  denom: string
) =>
  client.osmosis.concentratedliquidity.v1beta1
    .userPositions({ address, poolId: BigInt(poolId) })
    .then(({ positions }) =>
      positions
        .map(
          ({ asset0, asset1 }): Coin =>
            asset0.denom === denom ? asset0 : asset1
        )
        .reduce(
          ({ denom, amount: prevAmount }, { amount: nextAmount }) =>
            coin(Number(prevAmount) + Number(nextAmount), denom),
          coin(0, denom)
        )
    );

const getUserBalancerPoolShare = (
  client: OsmojsQueryClient,
  address: string,
  poolId: number,
  targetDenom: string
) =>
  Promise.all([
    client.osmosis.gamm.v1beta1
      .pool({ poolId: BigInt(poolId) })
      .then(({ pool }) =>
        pool && "totalShares" in pool && "poolAssets" in pool ? pool : undefined
      )
      .then((pool) => ({
        totalShares: {
          denom: pool?.totalShares.denom,
          amount: Number(pool?.totalShares.amount),
        },
        asset: pool?.poolAssets
          .filter(({ token: { denom } }) => denom === targetDenom)
          .map(({ token, weight }) => ({ token, weight: Number(weight) }))?.[0],
        totalWeight: Number(pool?.totalWeight),
      })),
    client.cosmos.bank.v1beta1
      .balance({ address, denom: `gamm/pool/${poolId}` })
      .then(({ balance }) => balance),
    client.osmosis.lockup
      .accountLockedCoins({ owner: address })
      .then(({ coins }) =>
        coins
          .filter(({ denom }) => denom === `gamm/pool/${poolId}`)
          .reduce(
            ({ denom, amount: prevAmount }, { amount: nextAmount }) =>
              coin((BigInt(prevAmount) + BigInt(nextAmount)).toString(), denom),
            coin(0, `gamm/pool/${poolId}`)
          )
      ),
  ]).then(([pool, liquidGamms, lockedGamms]) => {
    // const sneakyTokenWeight = (pool.asset?.weight || 0) / pool.totalWeight;
    const lockedSneakyTokens = parseInt(
      (
        Number(pool.asset?.token.amount) *
        (Number(lockedGamms.amount) / pool.totalShares.amount)
      ).toString(),
      10
    );
    const liquidSneakyTokens = parseInt(
      (
        Number(pool.asset?.token.amount) *
        (Number(liquidGamms?.amount) / pool.totalShares.amount)
      ).toString(),
      10
    );

    return {
      sneakyTokens: coin(lockedSneakyTokens + liquidSneakyTokens, targetDenom),
      totalGamms: coin(
        (
          BigInt(lockedGamms.amount) + BigInt(liquidGamms?.amount || 0)
        ).toString(),
        `gamm/pool/${poolId}`
      ),
      locked: {
        sneakyTokens: coin(lockedSneakyTokens, targetDenom),
        gamms: lockedGamms,
      },
      liquid: {
        sneakyTokens: coin(liquidSneakyTokens, targetDenom),
        gamms: liquidGamms || coin(0, `gamm/pool/${poolId}`),
      },
    };
  });

const getSneakyPoolShares = (
  client: OsmojsQueryClient,
  address: string
): Promise<SneakyPoolShares> =>
  Promise.all([
    getUserCLPoolShare(client, address, 1910, SNEAKY_TOKEN_CHAINS["osmosis-1"]),
    getUserBalancerPoolShare(
      client,
      address,
      1403,
      SNEAKY_TOKEN_CHAINS["osmosis-1"]
    ),
  ]).then(([clPoolShare, balancerPoolShare]) => ({
    total: coin(
      Number(clPoolShare.amount) +
        Number(balancerPoolShare.sneakyTokens.amount),
      SNEAKY_TOKEN_CHAINS["osmosis-1"]
    ),
    clPoolShare,
    balancerPoolShare,
  }));

const useQuerySneakyPools = (address: string | undefined) =>
  useQuery({
    queryKey: ["sneakyPools", address],
    queryFn: () =>
      address
        ? osmosis.ClientFactory.createRPCQueryClient({
            rpcEndpoint: "https://rpc.cosmos.directory/osmosis",
          }).then((client) => getSneakyPoolShares(client, address))
        : undefined,
    enabled: !!address,
  });

const useQuerySkipBalances = (addresses: UserSneakyAddresses | undefined) =>
  useQuery({
    queryKey: ["skipBalances"],
    queryFn: () =>
      fetch("https://api.skip.build/v2/info/balances", {
        method: "POST",
        body: JSON.stringify({
          chains: addresses
            ? Object.fromEntries(
                Object.entries(addresses).map(([chainId, userAddress]) => [
                  chainId,
                  {
                    denoms:
                      chainId in SNEAKY_TOKEN_CHAINS
                        ? [SNEAKY_TOKEN_CHAINS[chainId as SneakyTokenChain]]
                        : [],
                    address: userAddress,
                  },
                ])
              )
            : {},
        }),
      })
        .then((res) => res.json())
        .then((resp: BalancesResp) => resp.chains),
    enabled: !!addresses,
  });

const getBalancesWithTotals = (
  balances: BalancesResp["chains"],
  usdValue: number | undefined,
  poolBalances: SneakyPoolShares | undefined
): BalancesWithTotals => {
  const condensedBalances = Object.entries(balances).map(
    ([chainId, chainBalances]): [
      chainId: SneakyTokenChain,
      amounts: {
        amount: bigint;
        formattedAmount: number;
        usd?: number;
        walletBalance: {
          amount: bigint;
          formattedAmount: number;
          usd?: number;
        };
      }
    ] => {
      const sneakyChainId = chainId as SneakyTokenChain;
      const { amount, formatted_amount } =
        chainBalances.denoms[SNEAKY_TOKEN_CHAINS[sneakyChainId]]!;
      const formattedAmount =
        parseFloat(formatted_amount) +
        (sneakyChainId === "osmosis-1"
          ? Number(poolBalances?.total?.amount || 0) / 1_000_000
          : 0);

      return [
        sneakyChainId,
        {
          amount:
            sneakyChainId === "osmosis-1"
              ? BigInt(amount) + BigInt(poolBalances?.total?.amount || 0)
              : BigInt(amount),
          formattedAmount,
          usd: usdValue !== undefined ? usdValue * formattedAmount : undefined,
          walletBalance: {
            amount: BigInt(amount),
            formattedAmount: parseFloat(formatted_amount),
            usd:
              usdValue !== undefined
                ? usdValue * parseFloat(formatted_amount)
                : 0,
          },
        },
      ];
    }
  );

  const totals = condensedBalances.reduce<{
    totalAmount: bigint;
    totalFormattedAmount: number;
    usd?: number;
  }>(
    (
      { totalAmount, totalFormattedAmount, usd: totalUsd },
      [
        _,
        {
          amount: chainAmount,
          formattedAmount: chainFormattedAmount,
          usd: chainUsd,
        },
      ]
    ) => ({
      totalAmount: totalAmount + chainAmount,
      totalFormattedAmount: totalFormattedAmount + chainFormattedAmount,
      usd: chainUsd !== undefined ? (totalUsd || 0) + chainUsd : undefined,
    }),
    { totalAmount: 0n, totalFormattedAmount: 0, usd: undefined }
  );

  return {
    usd: totals.usd,
    totalAmount: totals.totalAmount,
    totalFormattedAmount: formatTokenAmount(totals.totalFormattedAmount),
    // TODO: fix this stubborn type to avoid the cast. it's logically right but as is not ideal
    chainBalances: condensedBalances.reduce(
      (allChainBals, [chainId, chainBalance]) => ({
        ...allChainBals,
        [chainId]: chainBalance,
      }),
      {}
    ) as {
      [ChainId in SneakyTokenChain]: {
        amount: bigint;
        formattedAmount: number;
        usd?: number;
        walletBalance: {
          amount: bigint;
          formattedAmount: number;
          usd?: number;
        };
      };
    },
    poolBalances,
  };
};

export const useQuerySneakyTokens = () => {
  const { data: sneakyTokenData, isLoading: isSneakyTokenDataLoading } =
    useQueryOsmosisToken("SNEAKY");
  const { data: account } = useAccount();

  const stargazeAddress = account?.bech32Address;
  const osmosisAddress = stargazeAddress
    ? changeHrp(stargazeAddress, "osmo")
    : undefined;

  const sneakyBalanceQuery = useQuerySkipBalances(
    stargazeAddress && osmosisAddress
      ? { "osmosis-1": osmosisAddress, "stargaze-1": stargazeAddress }
      : undefined
  );
  const { isLoading: areSneakyBalancesLoading } = sneakyBalanceQuery;
  const { data: poolTokens, isLoading: areSneakyPoolsLoading } =
    useQuerySneakyPools(osmosisAddress);

  return {
    ...sneakyBalanceQuery,
    data: sneakyBalanceQuery.data
      ? getBalancesWithTotals(
          sneakyBalanceQuery.data,
          sneakyTokenData?.price,
          poolTokens
        )
      : undefined,
    areAnyLoading:
      isSneakyTokenDataLoading ||
      areSneakyBalancesLoading ||
      areSneakyBalancesLoading ||
      areSneakyPoolsLoading,
  };
};

type BalancesResp = {
  chains: Record<
    SneakyTokenChain,
    {
      denoms: Partial<
        Record<
          SneakyTokenDenom,
          {
            amount: string;
            decimals: number;
            formatted_amount: string;
          }
        >
      >;
    }
  >;
};

export type BalancesWithTotals = {
  totalAmount: bigint;
  totalFormattedAmount: string;
  usd?: number;
  chainBalances: {
    [ChainId in SneakyTokenChain]: {
      amount: bigint;
      formattedAmount: number;
      usd?: number;
      walletBalance: {
        amount: bigint;
        formattedAmount: number;
        usd?: number;
      };
    };
  };
  poolBalances: SneakyPoolShares | undefined;
};
