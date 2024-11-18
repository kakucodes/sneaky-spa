import { useAccount, useDisconnect } from "graz";
import { useQueryStargazeName } from "../../hooks/useQueryStargazeName/useQueryStargazeName";
import { shortenAddress } from "../../utils/shortenAddress";

export const ConnectedButton = () => {
  const { data: walletData } = useAccount();
  const { disconnect } = useDisconnect();
  const { data: sgName } = useQueryStargazeName();
  const name =
    sgName ||
    (walletData &&
      (walletData.name || shortenAddress(walletData.bech32Address))) ||
    "";
  const shortAddress = walletData?.bech32Address
    ? shortenAddress(walletData.bech32Address)
    : "";

  return (
    <div>
      <p className="mb-0">
        <strong>Wallet Name</strong>: {name}
      </p>
      <p>{shortAddress}</p>

      <div className="d-grid gap-2">
        <button className="btn btn-outline-dark" onClick={() => disconnect()}>
          Disconnect
        </button>
      </div>
    </div>
  );
};
