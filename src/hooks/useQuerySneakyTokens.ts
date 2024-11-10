import { useAccount } from "graz";
import { SNEAKY_TOKEN_CHAINS } from "../config";
import { bech32 } from "bech32";
import { useQuery } from "@tanstack/react-query";
import { formatTokenAmount } from "../utils/format";

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
  balances: BalancesResp["chains"]
): BalancesWithTotals => {
  const condensedBalances = Object.entries(balances).map(
    ([chainId, chainBalances]): [
      chainId: SneakyTokenChain,
      amounts: { amount: bigint; formattedAmount: number }
    ] => {
      const sneakyChainId = chainId as SneakyTokenChain;
      const { amount, formatted_amount } =
        chainBalances.denoms[SNEAKY_TOKEN_CHAINS[sneakyChainId]]!;

      return [
        sneakyChainId,
        {
          amount: BigInt(amount),
          formattedAmount: parseFloat(formatted_amount),
        },
      ];
    }
  );

  const totals = condensedBalances.reduce<{
    totalAmount: bigint;
    totalFormattedAmount: number;
  }>(
    (
      { totalAmount, totalFormattedAmount },
      [_, { amount: chainAmount, formattedAmount: chainFormattedAmount }]
    ) => ({
      totalAmount: totalAmount + chainAmount,
      totalFormattedAmount: totalFormattedAmount + chainFormattedAmount,
    }),
    { totalAmount: 0n, totalFormattedAmount: 0 }
  );

  return {
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
      };
    },
  };
};

export const useQuerySneakyTokens = () => {
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
      ? getBalancesWithTotals(sneakyBalanceQuery.data)
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
  chainBalances: {
    [ChainId in SneakyTokenChain]: {
      amount: bigint;
      formattedAmount: number;
    };
  };
};
