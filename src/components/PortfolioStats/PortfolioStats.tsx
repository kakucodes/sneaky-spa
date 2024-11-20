import { BalancesWithTotals } from "../../hooks/useQuerySneakyTokens";
import { formatTokenAmount, formatUsd } from "../../utils/format";
import { queryNfts } from "../../hooks/useQueryNfts/useQueryUserNfts";
import { nftsValueSummary, sneakyTokensSummary } from "./portfolioHelpers";

type Props = {
  tokens: NonNullable<Awaited<ReturnType<typeof queryNfts>>> | undefined;
  sneakyBalance: BalancesWithTotals;
};

export const PortfolioStats = ({ tokens, sneakyBalance }: Props) => {

  const {
    sneakyTokenUsdFormatted,
    sneakyTokenUsd,
    pool1403SneakyFormatted,
    pool1910SneakyFormatted,
  } = sneakyTokensSummary(sneakyBalance);

  const totalNftsCount = tokens?.length || 0;
  const { usdValueFormatted: allNftsUsd, ...allNftsCombinedFloor } =
    nftsValueSummary(tokens || []);

  const totalPortfolioUsdValue = formatUsd(
    (allNftsCombinedFloor?.usdValue || 0) + sneakyTokenUsd
  );

  const [totalPortfolioDollars, totalPortfolioDecimals = "00"] =
    totalPortfolioUsdValue.split(".");

  // Prepare chain-specific balances
  const osmosisBalance = sneakyBalance?.chainBalances["osmosis-1"];
  const stargazeBalance = sneakyBalance?.chainBalances["stargaze-1"];

  return (
    <>
      <div
        className="d-flex flex-column justify-content-center align-items-center text-center"
        style={{ height: "100vh" }}
      >
        <h3 className="text-uppercase fw-bold h4 mb-2">Sneaky Portfolio</h3>
        <p className="dokdo display-1 lh-1 mb-2">
          <span className="display-6">
            <small>&asymp;</small>
          </span>
          <span>{totalPortfolioDollars}</span>
          <span className="display-6 link-offset-2">
            &nbsp;.&nbsp;<u>{totalPortfolioDecimals}</u>{" "}
          </span>
          <span className="fs-2 bg-dark rounded-3 text-light px-2">USD</span>
        </p>
        <p className="dokdo text-uppercase fw-bold fs-4">Total</p>
      </div>

      <div className="d-flex flex-column align-items-center">
        <div className="font-monospace small">
          <p className="mb-0">************************************</p>
          <p className="mb-0">#4304403920592-44-54959503 #44256346</p>
          <p>************************************</p>
          <h4>Osmosis</h4>
          {osmosisBalance && (
            <p>Osmosis SNEAKY Wallet Balance: {formatTokenAmount(osmosisBalance.walletBalance.formattedAmount)}</p>
          )}
          {sneakyBalance && sneakyBalance.poolBalances && (
            <p>Pool 1910: {pool1910SneakyFormatted} $SNEAKY</p>
          )}

          {sneakyBalance && sneakyBalance.poolBalances && (
            <p>Pool 1403: {pool1403SneakyFormatted} $SNEAKY</p>
          )}
          {osmosisBalance && (
            <p><strong>Osmosis Total: </strong>: {formatTokenAmount(osmosisBalance.formattedAmount)} SNEAKY</p>
          )}
          <h4>Stargaze</h4>
          {stargazeBalance && (
            <p>Wallet Balance: {formatTokenAmount(stargazeBalance.walletBalance.formattedAmount)} SNEAKY</p>
          )}
          <p>Pool: x SNEAKY</p>
          <p>Stargaze Total: x SNEAKY</p>
          <h4>Sneaky Total</h4>
          {sneakyBalance && (
            <p>Total SNEAKY: {sneakyBalance.totalFormattedAmount}</p>
          )}
          {sneakyBalance && (
            <p>Total Sneaky Value: {sneakyTokenUsdFormatted}</p>
          )}
          <h4>NFTs</h4>
          <p>Total NFTs: {totalNftsCount}</p>
          <p>
            NFTs STARS Value:
            {allNftsCombinedFloor.tokenFloors &&
              Object.values(allNftsCombinedFloor.tokenFloors)
                .map(({ amount, symbol }) => ` ${formatTokenAmount(amount, 6)}`)
                .join(", ")}
          </p>
          <p>NFTs USD Value: {allNftsUsd}</p>
          <p>************************************</p>
        </div>
      </div>
    </>
  );
};
