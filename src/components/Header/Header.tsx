import { useAccount, useDisconnect } from "graz";

export const Header = () => {
  const { isConnected } = useAccount();
  const { disconnect } = useDisconnect();

  return (
    <header className="fixed-top">
      <div className="container-xxl pt-3">
        <div className="row">
          <div className="col-9">
            <h1 className="fw-bold fs-3 pt-2 lh-1">

            </h1>
          </div>
          <div className="col-3 text-end">
          {isConnected && (
            <button
              type="button"
              className="btn btn-outline-dark"
              onClick={() => disconnect()}
            >
              Disconnect
            </button>
          )}
          </div>
        </div>
      </div>
    </header>
  );
};
