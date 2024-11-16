import { Fragment } from "react";
import { match, P } from "ts-pattern";
import { useQuerySneakyTokens } from "../../hooks/useQuerySneakyTokens";
import { formatTokenAmount, formatUsd } from "../../utils/format";
import { queryNfts } from "../../hooks/useQueryNfts/useQueryUserNfts";

type Props = {
  tokens: NonNullable<Awaited<ReturnType<typeof queryNfts>>> | undefined;
};

export const PortfolioStats = ({ tokens }: Props) => {
  const { data: sneakyBalance, areAnyLoading: isSneakyBalanceLoading } =
    useQuerySneakyTokens();

  console.log({ sneakyBalance, isSneakyBalanceLoading });

  const usdSneakyValue = sneakyBalance?.usd
    ? formatUsd(sneakyBalance.usd)
    : "$X,XXX";

  const totalNftsCount = tokens?.length || 0;
  const allNftsCombinedFloor = tokens
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

  const sneakyUsdValue =
    !isSneakyBalanceLoading && sneakyBalance && sneakyBalance.usd
      ? sneakyBalance.usd
      : 0;

  const totalPortfolioUsdValue = formatUsd(
    (allNftsCombinedFloor?.usdValue || 0) + sneakyUsdValue
  );

  const [totalPortfolioDollars, totalPortfolioDecimals = "00"] =
    totalPortfolioUsdValue.split(".");

  const nftsUsdValue =
    tokens !== undefined &&
    allNftsCombinedFloor &&
    formatUsd(allNftsCombinedFloor?.usdValue);

  return (
    <>
      <div className="d-flex flex-column justify-content-center align-items-center text-center dokdo" style={{ height: "85vh" }}>
        <h3 className="text-uppercase fw-bold h4 mb-0">Sneaky Portfolio</h3>
        <p className="display-1 lh-1 mb-1">
          <span className="display-6 text-body-secondary">
            <small>&asymp;</small>
          </span>
          <span>{totalPortfolioDollars}</span>
          <span className="display-6 text-dark-emphasis link-offset-2 link-body-emphasis">
            . <u>{totalPortfolioDecimals}</u>{" "}
          </span>
          <span className="fs-2 bg-dark rounded-3 text-light px-2">USD</span>
        </p>
        <p className="text-uppercase fw-bold fs-4 mb-3">Total</p>
      </div>
      <div className="row">
        <div className="col-sm-12 col-md-4">
          <p>
            {isSneakyBalanceLoading || !sneakyBalance ? (
              <span className="spinner-border spinner-border-sm" role="status">
                <span className="visually-hidden">Loading...</span>
              </span>
            ) : (
              <>{sneakyBalance.totalFormattedAmount}</>
            )}{" "}
            SNEAKY
          </p>
          <p>{usdSneakyValue}</p>
        </div>
        <div className="col-sm-12 col-md-4">
          {sneakyBalance && (
            <>
              {Object.entries(sneakyBalance.chainBalances).map(([chainId, balance]) => {
                const { formattedAmount, walletBalance } = balance;
                const chainName =
                  chainId === "osmosis-1"
                    ? "Osmosis"
                    : chainId === "stargaze-1"
                    ? "Stargaze"
                    : `Unknown Chain (${chainId})`;

                return (
                  <Fragment key={chainId}>
                    <p>
                      <strong>{chainName}</strong>: {formatTokenAmount(formattedAmount)} $SNEAKY
                    </p>

                    {chainId === "osmosis-1" && sneakyBalance.poolBalances && (
                      <>
                        <p>Wallet Balance: {formatTokenAmount(walletBalance.formattedAmount)}</p>
                        <p>Pool 1910:{" "}{formatTokenAmount(sneakyBalance.poolBalances.clPoolShare.amount, 6)}{" "}$SNEAKY</p>
                        <p>Pool 1403:{" "}{formatTokenAmount(sneakyBalance.poolBalances.balancerPoolShare.sneakyTokens.amount, 6)}{" "}$SNEAKY</p>
                      </>
                    )}
                  </Fragment>
                );
              })}
            </>
          )}
        </div>
        <div className="col-sm-12 col-md-4">
          <p>{totalNftsCount}</p>
            <p>{nftsUsdValue}</p>
            <p>
              {allNftsCombinedFloor?.tokenFloors &&
                Object.values(allNftsCombinedFloor.tokenFloors)
                  .map(
                    ({ amount, symbol }) =>
                      `${formatTokenAmount(amount, 6)} ${symbol}`
                  )
                  .join(", ")}
          </p>
        </div>
      </div>
    </>
  );
};
