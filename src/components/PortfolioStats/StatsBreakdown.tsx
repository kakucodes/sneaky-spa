import { BalancesWithTotals } from "../../hooks/useQuerySneakyTokens";
import { formatTokenAmount } from "../../utils/format";

type Props = {
  stargazePoolSneakyFormatted: string;
  sneakyTokenUsdFormatted: string;
  pool1403SneakyFormatted: string;
  pool1910SneakyFormatted: string;
  totalNftsCount: number;
  allNftsUsd: string;
  osmosisBalance: BalancesWithTotals["chainBalances"]["osmosis-1"];
  stargazeBalance: BalancesWithTotals["chainBalances"]["stargaze-1"];
  totalFormattedAmount: string;
  tokenFloors: Record<
    string,
    {
      amount: number;
      amountUsd: number;
      denom: string;
      symbol: string;
    }
  >;
};

export const StatsBreakdown = ({
  sneakyTokenUsdFormatted,
  totalNftsCount,
  osmosisBalance,
  stargazeBalance,
  tokenFloors,
  allNftsUsd,
}: Props) => {
  return (
    <>
      <h4 className="fw-bold">Sneaky NFTs</h4>
      <p>Owned: {totalNftsCount}</p>
      <p>
        Token Value:{" "}
        {(tokenFloors &&
          Object.values(tokenFloors)
            .map(({ amount }) => ` ${formatTokenAmount(amount, 6)}`)
            .join(", ")) ||
          0}{" "}
        STARS
      </p>
      <p>USD Value: {allNftsUsd}</p>
      <h4 className="fw-bold">$SNEAKY Token</h4>
      <p>
        Stargaze: {formatTokenAmount(stargazeBalance.formattedAmount)} SNEAKY
      </p>
      <p>Osmosis: {formatTokenAmount(osmosisBalance.formattedAmount)} SNEAKY</p>
      <p>USD Value: {sneakyTokenUsdFormatted}</p>
    </>
  );
};
