import { getAvailableWallets, useAccount, useConnect, WalletType } from "graz";
import { useState } from "react";
import { ConnectedButton } from "./WalletConnected";
import { useWalletConnectModal } from "./ConnectionModalProvider";
import Modal from "react-bootstrap/Modal";

export const ConnectionModal = () => {
  const availableWallets = getAvailableWallets();
  const { isModalOpen, closeModal } = useWalletConnectModal();
  const { connect } = useConnect();
  const { isConnected, isConnecting } = useAccount();
  const [errorMessage, setErrorMessage] = useState("");
  const handleConnectModal = (walletType: WalletType) => () => {
    connect({
      chainId: "stargaze-1",
      walletType,
    });
    closeModal();
  };

  return (
    <Modal show={isModalOpen} onHide={closeModal} size="sm" centered>
      <Modal.Body>
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
              disabled={
                !(availableWallets.keplr || availableWallets.wc_keplr_mobile)
              }
              onClick={handleConnectModal(
                availableWallets.keplr
                  ? WalletType.KEPLR
                  : WalletType.WC_KEPLR_MOBILE
              )}
            >
              Keplr Wallet
            </button>
            <button
              className="btn btn-outline-dark"
              onClick={handleConnectModal(
                availableWallets.leap
                  ? WalletType.LEAP
                  : WalletType.WC_LEAP_MOBILE
              )}
              disabled={
                !(availableWallets.leap || availableWallets.wc_leap_mobile)
              }
            >
              Leap Wallet
            </button>
            <button type="button" className="btn btn-dark" data-bs-dismiss="modal" onClick={closeModal}>Close</button>
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
          </div>
        )}
      </Modal.Body>
    </Modal>
  );
};
