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
      <h2>
        Total Sneaky Portfolio Value (Nft floors + $SNEAKY):{" "}
        {new Intl.NumberFormat("en-US", {
          style: "currency",
          currency: "USD",
          trailingZeroDisplay: "stripIfInteger",
        }).format(
          (allNftsCombinedFloor?.usdValue || 0) + (sneakyBalance?.usd || 0)
        )}
      </h2>
      {tokens !== undefined && (
        <>
          <h2>Sneaky NFTs Count: {totalNftsCount}</h2>
          {allNftsCombinedFloor && (
            <div>
              NFTs Floor Value:{" "}
              {Object.values(allNftsCombinedFloor.tokenFloors)
                .map(
                  ({ amount, symbol }) =>
                    `${new Intl.NumberFormat(navigator.languages, {
                      maximumSignificantDigits: 3,
                    }).format(Number(amount) / 1_000_000)} ${symbol}`
                )
                .join(", ")}
              (
              {new Intl.NumberFormat("en-US", {
                style: "currency",
                currency: "USD",
                trailingZeroDisplay: "stripIfInteger",
              }).format(allNftsCombinedFloor.usdValue)}
              )
            </div>
          )}
        </>
      )}
      <hr />
      <p className="fw-bold mb-0">
        {isSneakyBalanceLoading || !sneakyBalance ? (
          <span className="spinner-border spinner-border-sm" role="status">
            <span className="visually-hidden">Loading...</span>
          </span>
        ) : (
          <>{sneakyBalance.totalFormattedAmount} $SNEAKY</>
        )}
      </p>
      <p className="small">({usdSneakyValue})</p>
      {sneakyBalance && (
        <ul className="list-unstyled">
          {Object.entries(sneakyBalance.chainBalances).map((bal) =>
            match(bal)
              .with(["stargaze-1", P._], ([chainId, { formattedAmount }]) => (
                <li key={chainId}>
                  <strong>Stargaze</strong>:{" "}
                  {formatTokenAmount(formattedAmount)} $SNEAKY
                </li>
              ))
              .with(
                ["osmosis-1", P._],
                ([chainId, { formattedAmount, walletBalance }]) => (
                  <li key={chainId}>
                    <strong>Osmosis</strong>:{" "}
                    {formatTokenAmount(formattedAmount)} $SNEAKY
                    {sneakyBalance.poolBalances && (
                      <div>
                        <div>
                          Wallet Balance:{" "}
                          {formatTokenAmount(walletBalance.formattedAmount)}
                        </div>
                        <div>
                          Pool 1910:{" "}
                          {formatTokenAmount(
                            Number(
                              sneakyBalance.poolBalances.clPoolShare.amount
                            ) / 1_000_000
                          )}{" "}
                          $SNEAKY
                        </div>
                        <div>
                          Pool 1403:{" "}
                          {formatTokenAmount(
                            Number(
                              sneakyBalance.poolBalances.balancerPoolShare
                                .sneakyTokens.amount
                            ) / 1_000_000
                          )}{" "}
                          $SNEAKY
                        </div>
                      </div>
                    )}
                  </li>
                )
              )
              .otherwise(([chainId, { formattedAmount }]) => (
                <li key={chainId}>
                  Unknown Chain (chainId): {formatTokenAmount(formattedAmount)}{" "}
                  $SNEAKY
                </li>
              ))
          )}
        </ul>
      )}
    </>
  );
};