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
          <span className="display-6 text-body-secondary">
            <small>&asymp;</small>
          </span>
          <span>{totalPortfolioDollars}</span>
          <span className="display-6 text-dark-emphasis link-offset-2 link-body-emphasis">
            . <u>{totalPortfolioDecimals}</u>{" "}
          </span>
          <span className="fs-2 bg-dark rounded-3 text-light px-2">USD</span>
        </p>
        <p className="dokdo text-uppercase fw-bold fs-4 mb-3">Total</p>
      </div>
      <div className="row">
        <div className="col-sm-12 col-xl-4">
          <h4>Sneaky Balances</h4>
          {osmosisBalance && (
            <div key="osmosis-1">
              <p>
                <strong>Osmosis</strong>:{" "}
                {formatTokenAmount(osmosisBalance.formattedAmount)} $SNEAKY
              </p>
              <p>
                Wallet Balance:{" "}
                {formatTokenAmount(osmosisBalance.walletBalance.formattedAmount)}{" "}
                SNEAKY
              </p>
            </div>
          )}
          {stargazeBalance && (
            <div key="stargaze-1">
              <p>
                <strong>Stargaze</strong>:{" "}
                {formatTokenAmount(stargazeBalance.formattedAmount)} $SNEAKY
              </p>
              <p>
                Wallet Balance:{" "}
                {formatTokenAmount(stargazeBalance.walletBalance.formattedAmount)}{" "}
                SNEAKY
              </p>
            </div>
          )}
          {sneakyBalance && (
            <>
              <p>Total SNEAKY: {sneakyBalance.totalFormattedAmount}</p>
              <p>Total Sneaky Value: {sneakyTokenUsdFormatted}</p>
            </>
          )}
        </div>
        <div className="col-sm-12 col-xl-4">
          <h4>SNEAKY Pools</h4>
          {sneakyBalance && sneakyBalance.poolBalances && (
            <>
              <p>Pool 1910: {pool1910SneakyFormatted} $SNEAKY</p>
              <p>Pool 1403: {pool1403SneakyFormatted} $SNEAKY</p>
              <p>Stargaze Pool: x SNEAKY</p>
              <p>Total Pools Value USD</p>
            </>
          )}
        </div>
        <div className="col-sm-12 col-xl-4">
          <h4>SNEAKY NFTs</h4>
          <p>Total NFT Collections Held: </p>
          <p>Total NFTs: {totalNftsCount}</p>
          <p>NFTs USD Value: {allNftsUsd}</p>
          <p>
            NFTs STARS Value:
            {allNftsCombinedFloor.tokenFloors &&
              Object.values(allNftsCombinedFloor.tokenFloors)
                .map(({ amount, symbol }) => ` ${formatTokenAmount(amount, 6)}`)
                .join(", ")}
          </p>
        </div>
      </div>
    </>
  );
};
