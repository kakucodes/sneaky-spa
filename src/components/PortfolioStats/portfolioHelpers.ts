import { queryNfts } from "../../hooks/useQueryNfts/useQueryUserNfts";
import { BalancesWithTotals } from "../../hooks/useQuerySneakyTokens";
import { formatTokenAmount, formatUsd } from "../../utils/format";

export const sneakyTokensSummary = (balance: BalancesWithTotals) => {
  const sneakyTokenUsdFormatted = balance?.usd ? formatUsd(balance.usd) : "-";

  const sneakyTokenUsd = balance.usd || 0;

  const pool1910SneakyFormatted = formatTokenAmount(
    balance.osmoPoolBalances?.clPoolShare.amount || 0,
    6
  );
  const pool1403SneakyFormatted = formatTokenAmount(
    balance.osmoPoolBalances?.balancerPoolShare.sneakyTokens.amount || 0,
    6
  );

  const stargazePoolSneakyFormatted = formatTokenAmount(
    balance.stargazePoolBalance?.amount,
    6
  );

  return {
    stargazePoolSneakyFormatted,
    sneakyTokenUsdFormatted,
    sneakyTokenUsd,
    pool1403SneakyFormatted,
    pool1910SneakyFormatted,
  };
};

export const nftsValueSummary = (
  tokens: NonNullable<Awaited<ReturnType<typeof queryNfts>>>
) => {
  const combinedFloor = tokens
    ?.filter(
      ({ collection }) => collection.floor?.amount && collection.floor.denom
    )
    ?.map(({ collection }) => ({
      amount: Number(collection.floor?.amount) || 0,
      amountUsd: collection.floor?.amountUsd || 0,
      denom: collection.floor?.denom || "",
      symbol: collection.floor?.symbol || "",
    }))
    ?.reduce<{
      tokenFloors: Record<
        string,
        { amount: number; amountUsd: number; denom: string; symbol: string }
      >;
      usdValue: number;
    }>(
      (
        { tokenFloors: prevTokenFloors, usdValue: prevUsdValue },
        { amount, amountUsd, denom, symbol }
      ) => ({
        tokenFloors: {
          ...prevTokenFloors,
          [denom]: {
            amount: (prevTokenFloors?.[denom]?.amount || 0) + amount,
            symbol,
            denom,
            amountUsd: (prevTokenFloors?.[denom]?.amountUsd || 0) + amountUsd,
          },
        },
        usdValue: prevUsdValue + amountUsd,
      }),
      { tokenFloors: {}, usdValue: 0 }
    );

  return {
    ...combinedFloor,
    usdValueFormatted: formatUsd(combinedFloor.usdValue),
  };
};
