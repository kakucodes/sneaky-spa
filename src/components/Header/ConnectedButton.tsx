import { useQuerySneakyTokens } from "../../hooks/useQuerySneakyTokens";
import { useAccount, useDisconnect } from "graz";
import { useQueryStargazeName } from "../../hooks/useQueryStargazeName/useQueryStargazeName";
import { shortenAddress } from "../../utils/shortenAddress";
import { match, P } from "ts-pattern";
import { formatTokenAmount } from "../../utils/format";

export const ConnectedButton = () => {
  const { data: walletData } = useAccount();
  const { disconnect } = useDisconnect();
  const { data: sneakyBalance, isLoading: isSneakyBalanceLoading } =
    useQuerySneakyTokens();
  const { data: sgName } = useQueryStargazeName();
  const name =
    sgName ||
    (walletData &&
      (walletData.name || shortenAddress(walletData.bech32Address))) ||
    "";
  const address = walletData?.bech32Address;

  return (
    <div>
      <button className="btn btn-outline-dark" onClick={() => disconnect()}>
        Disconnect
      </button>
      <p className="mb-0">
        <strong>Wallet Name</strong>: {name}
      </p>
      <p>{address}</p>
      <p className="fw-bold mb-0">
        {isSneakyBalanceLoading || !sneakyBalance ? (
          <span className="spinner-border spinner-border-sm" role="status">
            <span className="visually-hidden">Loading...</span>
          </span>
        ) : (
          <>{sneakyBalance.totalFormattedAmount} $SNEAKY</>
        )}
      </p>
      <p className="small">
        (
        {sneakyBalance?.usd
          ? new Intl.NumberFormat("en-US", {
              style: "currency",
              currency: "USD",
              trailingZeroDisplay: "stripIfInteger",
            }).format(sneakyBalance.usd)
          : "$X,XXX.xx"}
        )
      </p>
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
              .with(["osmosis-1", P._], ([chainId, { formattedAmount }]) => (
                <li key={chainId}>
                  <strong>Osmosis</strong>: {formatTokenAmount(formattedAmount)}{" "}
                  $SNEAKY
                </li>
              ))
              .otherwise(([chainId, { formattedAmount }]) => (
                <li key={chainId}>
                  Unknown Chain (chainId): {formatTokenAmount(formattedAmount)}{" "}
                  $SNEAKY
                </li>
              ))
          )}
        </ul>
      )}
    </div>
  );
};
