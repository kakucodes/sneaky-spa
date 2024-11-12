import { useState } from "react";
import { useAccount, useConnect, WalletType } from "graz";

import { ConnectedButton } from "./ConnectedButton";

export const Header = () => {
  const { connect } = useConnect();
  const { isConnected, isConnecting } = useAccount();
  const [errorMessage, setErrorMessage] = useState("");

  const handleConnect = () => {
    // Check if Keplr is available
    if (typeof window.keplr === "undefined") {
      setErrorMessage("Please enable the Keplr or Leap browser wallet extension.");
      return;
    }

    connect({
      chainId: "stargaze-1",
      walletType: WalletType.KEPLR,
    });
  };

  return (
    <header>
      {isConnected ? (
        <ConnectedButton />
      ) : isConnecting ? (
        <p>Connecting...</p>
      ) : (
        <div>
          <button className="btn btn-outline-dark" onClick={handleConnect}>Connect Wallet</button>
          {errorMessage && (
            <div className="alert alert-light alert-dismissible fade show" role="alert">
              <strong>D'Oh!</strong> {errorMessage}.
              <button type="button" className="btn-close" aria-label="Close" onClick={() => setErrorMessage("")}></button>
            </div>
          )}
        </div>
      )}
    </header>
  );
};
