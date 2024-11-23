import { BalancesWithTotals } from "../../hooks/useQuerySneakyTokens";
import { formatTokenAmount, formatUsd } from "../../utils/format";
import { queryNfts } from "../../hooks/useQueryNfts/useQueryUserNfts";
import { nftsValueSummary, sneakyTokensSummary } from "./portfolioHelpers";
import { StatsBreakdown } from "./StatsBreakdown";

type Props = {
  tokens: NonNullable<Awaited<ReturnType<typeof queryNfts>>> | undefined;
  sneakyBalance: BalancesWithTotals;
};

export const PortfolioStats = ({ tokens, sneakyBalance }: Props) => {
  const tokenSummary = sneakyTokensSummary(sneakyBalance);

  const totalNftsCount = tokens?.length || 0;
  const { usdValueFormatted: allNftsUsd, ...allNftsCombinedFloor } =
    nftsValueSummary(tokens || []);

  const totalPortfolioUsdValue = formatUsd(
    (allNftsCombinedFloor?.usdValue || 0) + tokenSummary.sneakyTokenUsd
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

      {osmosisBalance && stargazeBalance && (
        <StatsBreakdown
          {...{
            ...tokenSummary,
            totalNftsCount,
            allNftsUsd,
            tokenFloors: allNftsCombinedFloor.tokenFloors,
            osmosisBalance,
            stargazeBalance,
            totalFormattedAmount: sneakyBalance.totalFormattedAmount,
          }}
        />
      )}
    </>
  );
};
