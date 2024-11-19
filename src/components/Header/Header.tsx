import { useAccount } from "graz";
import { useWalletConnectModal } from "../WalletConnectionModal/ConnectionModalProvider";

export const Header = () => {
  const { openModal } = useWalletConnectModal();
  const { isConnected } = useAccount();

  return (
    <header className="fixed-top">
      <div className="container-xxl pt-3">
        <div className="row">
          <div className="col-9">
            <h1 className="fw-bold fs-3 pt-2 lh-1">
              <span className="text-stroke text-white"> Sneaky</span>
              <span className="fs-4 grayscale"> · </span>
              <span className="text-stroke text-white">Productions</span>
            </h1>
          </div>
          <div className="col-3 text-end">
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
