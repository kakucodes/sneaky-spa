import { useAccount } from "graz";
import { useWalletConnectModal } from "../WalletConnectionModal/ConnectionModalProvider";

export const Header = () => {
  const { openModal } = useWalletConnectModal();
  const { isConnected } = useAccount();

  return (
    <header className="fixed-top">
      <div className="container-xxl pt-3">
        <div className="row">
          <div className="col-6"></div>
          <div className="col-6 text-end">
            <button
              type="button"
              className={`btn ${
                isConnected ? "btn-outline-dark" : "btn-outline-dark"
              }`}
              onClick={openModal}
            >
              {isConnected ? "Connected" : "Connect"}
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};
