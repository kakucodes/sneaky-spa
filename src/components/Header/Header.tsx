import { useAccount } from "graz";

export const Header = () => {
  const { isConnected } = useAccount();

  return (
    <header>
      <div className="row">
        <div className="col-6"></div>
        <div className="col-6 text-end">
          <button
            type="button"
            className={`btn ${
              isConnected ? "btn-outline-dark" : "btn-outline-dark"
            }`}
            data-bs-toggle="modal"
            data-bs-target="#walletModal"
          >
            {isConnected ? "Connected" : "Connect"}
          </button>
        </div>
      </div>
    </header>
  );
};
