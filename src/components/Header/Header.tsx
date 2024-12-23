import { useAccount, useDisconnect } from "graz";
import { useWalletConnectModal } from "../WalletConnectionModal/ConnectionModalProvider";

export const Header = () => {
  const { openModal } = useWalletConnectModal();
  const { isConnected } = useAccount();
  const { disconnect } = useDisconnect();

  console.log("isConnected: ", isConnected);

  return (
    <header className="border-bottom py-2">
      <div className="container-xxl ">
        <div className="row">
          <div className="col-8">
            <h1 className="fw-bold fs-3 pt-2 lh-1">
              <img
                src={`${process.env.PUBLIC_URL}/pignose.svg`}
                height={"25px"}
                width={"25px"}
                alt="Sneaky Dash Logo"
                className="me-2"
              />
              Sneaky Dash
            </h1>
          </div>
          <div className="col-4 text-end">
            {isConnected ? (
              <button
                type="button"
                className="btn btn-outline-dark"
                onClick={() => disconnect()}
              >
                Disconnect
              </button>
            ) : (
              <button
                type="button"
                onClick={openModal}
                className="btn btn-outline-dark"
              >
                Connect
              </button>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};
