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
  stargazePoolSneakyFormatted,
  sneakyTokenUsdFormatted,
  pool1403SneakyFormatted,
  pool1910SneakyFormatted,
  totalNftsCount,
  osmosisBalance,
  stargazeBalance,
  totalFormattedAmount,
  tokenFloors,
  allNftsUsd,
}: Props) => {
  return (
      <div className="row">
        <div className="col">
        <h4 className="fw-bold">NFTs</h4>
          <p><span className="fw-bold">Owned</span><br /> {totalNftsCount}</p>
          <p><span className="fw-bold">Value</span><br />{" "}
            {(tokenFloors &&
              Object.values(tokenFloors)
                .map(({ amount }) => ` ${formatTokenAmount(amount, 6)}`)
                .join(", ")) ||
              0}{" "}
            STARS<br /><small>({allNftsUsd})</small>
          </p>
        </div>
        <div className="col">
          <h4 className="fw-bold">$SNEAKY</h4>
          <p className="fw-bold mb-0">Stargaze</p>
          <p className="small mb-0">Balance: { (Number(stargazeBalance.formattedAmount) - Number(stargazePoolSneakyFormatted)).toFixed(2) }</p>
          <p className="small mb-0">Pool: {Number(stargazePoolSneakyFormatted).toFixed(2)}</p>
          <p className="small fw-bold">Total: {stargazeBalance.formattedAmount.toFixed(2)}</p>
          <p className="fw-bold mb-0">Osmosis</p>
          <p className="small mb-0">Balance: { (Number(osmosisBalance.formattedAmount) - Number(pool1403SneakyFormatted) - Number(pool1910SneakyFormatted)).toFixed(2) }</p>
          <p className="small mb-0">Pool 1403: {Number(pool1403SneakyFormatted).toFixed(2)}</p>
          <p className="small mb-0">Pool 1910: {Number(pool1910SneakyFormatted).toFixed(2)}</p>
          <p className="small fw-bold">Total: {osmosisBalance.formattedAmount.toFixed(2)}</p>
          <p className="mb-0"><span className="fw-bold">Total: {Number(totalFormattedAmount).toFixed(2)}</span><br /><small>({sneakyTokenUsdFormatted})</small></p>
        </div>
      </div>
  );
};
