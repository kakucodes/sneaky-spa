import { useAccount, useConnect, WalletType } from "graz";

import { ConnectedButton } from "./ConnectedButton";

export const Header = () => {
  const { connect } = useConnect();
  const { isConnected, isConnecting } = useAccount();

  return (
    <header>
      {isConnected ? (
        <ConnectedButton />
      ) : isConnecting ? (
        <p>Connecting...</p>
      ) : (
        <button
          onClick={() =>
            connect({ chainId: "stargaze-1", walletType: WalletType.KEPLR })
          }
        >
          Connect Wallet
        </button>
      )}
    </header>
  );
};
