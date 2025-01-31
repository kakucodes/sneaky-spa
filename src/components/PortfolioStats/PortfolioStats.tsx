import { BalancesWithTotals } from "../../hooks/useQuerySneakyTokens";
import { formatUsd } from "../../utils/format";
import { queryNfts } from "../../hooks/useQueryNfts/useQueryUserNfts";
import { nftsValueSummary, sneakyTokensSummary } from "./portfolioHelpers";
import { StatsBreakdown } from "./StatsBreakdown";
/* import { useState } from "react"; */
/* import { useAccount } from "graz"; */
import { useDisconnect } from "graz";
/* import { useWalletConnectModal } from "../WalletConnectionModal/ConnectionModalProvider"; */
import Link from "next/link";

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

  /*   const { openModal } = useWalletConnectModal();
  const { isConnected } = useAccount(); */
  const { disconnect } = useDisconnect();

  return (
    <>
      <div
        className="d-flex flex-column justify-content-center align-items-center text-center "
        style={{ height: "100vh" }}
      >
        <h3
          data-aos="fade"
          data-aos-delay="350"
          className="text-uppercase fw-bold h4 mb-2"
        >
          Portfolio
        </h3>
        <p
          data-aos="fade"
          data-aos-delay="400"
          className="dokdo display-1 lh-1 mb-2"
        >
          <span className="display-6">
            <small>&asymp;</small>
          </span>
          <span>{totalPortfolioDollars}</span>
          <span className="display-6 link-offset-2">
            &nbsp;.&nbsp;<u>{totalPortfolioDecimals}</u>{" "}
          </span>
          <span className="fs-2 bg-dark rounded-3 text-light px-2">USD</span>
        </p>
        <p
          data-aos="fade"
          data-aos-delay="450"
          className="dokdo text-uppercase fw-bold fs-4"
        >
          Total Value
        </p>
        <p data-aos="fade" data-aos-delay="500">
          <Link
            className="link-dark link-offset-2 link-underline-opacity-0 link-underline-opacity-50-hover"
            href="/"
            onClick={(e) => {
              e.preventDefault(); // Prevent default link behavior
              disconnect(); // Call the disconnect function
            }}
          >
            Disconnect
          </Link>
          <span>&nbsp;|&nbsp;</span>
          <a
            className="link-dark link-offset-2 link-underline-opacity-0 link-underline-opacity-50-hover"
            data-bs-toggle="collapse"
            href="#collapseExample"
            role="button"
            aria-expanded="false"
            aria-controls="collapseExample"
          >
            <span>Breakdown</span>
          </a>
        </p>
        <div className="collapse" id="collapseExample">
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
        </div>
      </div>
    </>
  );
};
