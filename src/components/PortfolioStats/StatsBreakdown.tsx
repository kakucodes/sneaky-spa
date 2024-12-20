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
    <div className="row gy-5">
        <div className="col-12 col-md-6 col-xl-3">
          <h4 className="fw-bold">Osmosis</h4>
          {osmosisBalance && (
            <p>
              Osmosis SNEAKY Wallet Balance:{" "}
              {formatTokenAmount(osmosisBalance.walletBalance.formattedAmount)}
            </p>
          )}
          <p>Pool 1910: {pool1910SneakyFormatted} $SNEAKY</p>
          <p>Pool 1403: {pool1403SneakyFormatted} $SNEAKY</p>

          <p>
            <strong>Osmosis Total: </strong>:{" "}
            {formatTokenAmount(osmosisBalance.formattedAmount)} SNEAKY
          </p>
        </div>
        <div className="col-12 col-md-6 col-xl-3">
          <h4 className="fw-bold">Stargaze</h4>

          <p>
            Wallet Balance:{" "}
            {formatTokenAmount(stargazeBalance.walletBalance.formattedAmount)}{" "}
            SNEAKY
          </p>

          <p>Pool: {stargazePoolSneakyFormatted} SNEAKY</p>
          <p>
            Stargaze Total: {formatTokenAmount(stargazeBalance.formattedAmount)}{" "}
            SNEAKY
          </p>
        </div>
        <div className="col-12 col-md-6 col-xl-3">
          <h4 className="fw-bold">Sneaky Total</h4>

          <p>Total SNEAKY: {totalFormattedAmount}</p>

          <p>Total Sneaky Value: {sneakyTokenUsdFormatted}</p>
        </div>
        <div className="col-12 col-md-6 col-xl-3">
          <h4 className="fw-bold">NFTs</h4>
          <p>Total NFTs: {totalNftsCount}</p>
          <p>
            NFTs STARS Value:
            {tokenFloors &&
              Object.values(tokenFloors)
                .map(({ amount, symbol }) => ` ${formatTokenAmount(amount, 6)}`)
                .join(", ")}
          </p>
          <p>NFTs USD Value: {allNftsUsd}</p>
        </div>
    </div>
  );
};
