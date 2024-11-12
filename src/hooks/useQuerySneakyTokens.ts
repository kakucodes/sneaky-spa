import { useAccount } from "graz";
import { SNEAKY_TOKEN_CHAINS } from "../config";
import { bech32 } from "bech32";
import { useQuery } from "@tanstack/react-query";
import { formatTokenAmount } from "../utils/format";
import { useQueryOsmosisToken } from "./useQueryOsmosisToken";

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
  usdValue: number | undefined
): BalancesWithTotals => {
  const condensedBalances = Object.entries(balances).map(
    ([chainId, chainBalances]): [
      chainId: SneakyTokenChain,
      amounts: { amount: bigint; formattedAmount: number; usd?: number }
    ] => {
      const sneakyChainId = chainId as SneakyTokenChain;
      const { amount, formatted_amount } =
        chainBalances.denoms[SNEAKY_TOKEN_CHAINS[sneakyChainId]]!;
      const formattedAmount = parseFloat(formatted_amount);

      return [
        sneakyChainId,
        {
          amount: BigInt(amount),
          formattedAmount,
          usd: usdValue !== undefined ? usdValue * formattedAmount : undefined,
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
      };
    },
  };
};

export const useQuerySneakyTokens = () => {
  const { data: sneakyTokenData } = useQueryOsmosisToken("SNEAKY");
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

  return {
    ...sneakyBalanceQuery,
    data: sneakyBalanceQuery.data
      ? getBalancesWithTotals(sneakyBalanceQuery.data, sneakyTokenData?.price)
      : undefined,
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
    };
  };
};
