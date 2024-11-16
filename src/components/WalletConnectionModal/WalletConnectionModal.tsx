import { useAccount, useConnect, WalletType } from "graz";
import { useState } from "react";
import { ConnectedButton } from "../Header/ConnectedButton";

export const WalletConnectionModal = () => {
  const { connect } = useConnect();
  const { isConnected, isConnecting } = useAccount();
  const [errorMessage, setErrorMessage] = useState("");
  const handleConnect = () => {
    // Check if Keplr is available
    if (typeof window.keplr === "undefined") {
      setErrorMessage("Enable your browser wallet.");
      return;
    }

    connect({
      chainId: "stargaze-1",
      walletType: WalletType.KEPLR,
    });
  };

  return (
    <div
      className="modal fade"
      id="walletModal"
      aria-labelledby="wallet"
      aria-hidden="true"
    >
      <div className="modal-dialog modal-dialog-centered modal-sm">
        <div className="modal-content">
          <div className="modal-body">
            {isConnected ? (
              <ConnectedButton />
            ) : isConnecting ? (
              <div className="spinner-border" role="status">
                <span className="visually-hidden">Loading...</span>
              </div>
            ) : (
              <div className="d-grid gap-2">
                <button
                  className="btn btn-outline-dark"
                  onClick={handleConnect}
                >
                  Keplr Wallet
                </button>
                <button
                  className="btn btn-outline-dark"
                  onClick={handleConnect}
                  disabled
                >
                  Leap Wallet
                </button>
                {errorMessage && (
                  <div
                    className="alert alert-light alert-dismissible fade show mb-0"
                    role="alert"
                  >
                    {errorMessage}
                    <button
                      type="button"
                      className="btn-close"
                      aria-label="Close"
                      onClick={() => setErrorMessage("")}
                    ></button>
                  </div>
                )}
                <button
                  type="button"
                  className="btn btn-dark"
                  data-bs-dismiss="modal"
                >
                  Close
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
