import { Fragment } from 'react';
import { match, P } from "ts-pattern";
import { useQuerySneakyTokens } from "../../hooks/useQuerySneakyTokens";
import { formatTokenAmount } from "../../utils/format";
import { queryNfts } from "../Main/useQueryUserNfts";

type Props = {
  tokens:
    | NonNullable<Awaited<ReturnType<typeof queryNfts>>>["tokens"]
    | undefined;
};

export const PortfolioStats = ({ tokens }: Props) => {
  const { data: sneakyBalance, isLoading: isSneakyBalanceLoading } =
    useQuerySneakyTokens();

  console.log({ sneakyBalance });

  const usdSneakyValue = sneakyBalance?.usd
    ? new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD",
        trailingZeroDisplay: "stripIfInteger",
      }).format(sneakyBalance.usd)
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

  return (
    <>
      <div className="d-flex flex-column justify-content-center align-items-center text-center dokdo" style={{ height: "85vh" }}>
        <h3 className="text-uppercase fw-bold h4 mb-0">Sneaky Portfolio</h3>
        <p className="display-1 lh-1 mb-0">
          {(() => {
            const formattedValue = new Intl.NumberFormat('en-US', {
              style: 'currency',
              currency: 'USD',
              minimumFractionDigits: 2,
              maximumFractionDigits: 2,
            }).format(
              (allNftsCombinedFloor?.usdValue || 0) + (sneakyBalance?.usd || 0)
            );

            const [mainPart, decimalPart] = formattedValue.split('.');

            return (
              <>
                <span className="fw-bold display-6 text-body-secondary"><small>&asymp;</small></span>
                <span>{mainPart}</span>
                <span className="display-6 text-dark-emphasis link-offset-2 link-body-emphasis">.<u>{decimalPart}</u> </span>
                <span className="fs-2 bg-dark rounded-3 text-light px-2">USD</span>
              </>
            );
          })()}
        </p>
        <p className="text-uppercase fw-bold fs-4 mb-0">Total</p>
      </div>
      <div className="row">
        <div className="col">
        <p>{totalNftsCount}</p>
        <p>${allNftsCombinedFloor?.usdValue?.toFixed(2)}</p>
        <p>
          {allNftsCombinedFloor?.tokenFloors &&
            Object.values(allNftsCombinedFloor.tokenFloors)
              .map(({ amount, symbol }) => {
                const formattedAmount = new Intl.NumberFormat('en-US', {
                  minimumFractionDigits: 6,
                  maximumFractionDigits: 6,
                }).format(Number(amount) / 1000000);
                return `${formattedAmount} ${symbol}`;
              })
              .join(", ")}
        </p>
        </div>
        <div className="col">
          <p>
            {isSneakyBalanceLoading || !sneakyBalance ? (
              <span className="spinner-border spinner-border-sm" role="status">
                <span className="visually-hidden">Loading...</span>
              </span>
            ) : (
              <>{sneakyBalance.totalFormattedAmount}</>
            )} SNEAKY
          </p>
          <p>{usdSneakyValue}</p>
        </div>
      </div>

      {sneakyBalance && (
        <>
          {Object.entries(sneakyBalance.chainBalances).map((bal) =>
            match(bal)
              .with(['osmosis-1', P._], ([chainId, { formattedAmount }]) => (
                <Fragment key={chainId}>
                  <p>
                    <strong>Osmosis</strong>: {formatTokenAmount(formattedAmount)} $SNEAKY
                  </p>
                  {sneakyBalance.poolBalances && (
                    <>
                      <p>
                        Wallet Balance:{' '}
                        {formatTokenAmount(
                          formattedAmount -
                            Number(sneakyBalance.poolBalances.total.amount) / 1_000_000
                        )}
                      </p>
                      <p>
                        Pool 1910:{' '}
                        {formatTokenAmount(
                          Number(sneakyBalance.poolBalances.clPoolShare.amount) / 1_000_000
                        )}{' '}
                        $SNEAKY
                      </p>
                      <p>
                        Pool 1403:{' '}
                        {formatTokenAmount(
                          Number(
                            sneakyBalance.poolBalances.balancerPoolShare.sneakyTokens.amount
                          ) / 1_000_000
                        )}{' '}
                        $SNEAKY
                      </p>
                    </>
                  )}
                </Fragment>
              ))
              .with(['stargaze-1', P._], ([chainId, { formattedAmount }]) => (
                <p key={chainId}>
                  <strong>Stargaze</strong>: {formatTokenAmount(formattedAmount)} $SNEAKY
                </p>
              ))
              .otherwise(([chainId, { formattedAmount }]) => (
                <p key={chainId}>
                  Unknown Chain ({chainId}): {formatTokenAmount(formattedAmount)} $SNEAKY
                </p>
              ))
          )}
        </>
      )}
    </>
  );
};
