import { useAccount } from "graz";
import { useWalletConnectModal } from "../WalletConnectionModal/ConnectionModalProvider";

export const DisconnectedDashboard = () => {
  const { openModal } = useWalletConnectModal();
  const { isConnected } = useAccount();

  return (
    <div
      className="d-flex flex-column justify-content-center align-items-center text-center pt-4"
      style={{ height: "100vh" }}
    >
      <h2 className="text-uppercase display-3 text-nowrap fw-bold mb-0">
        <span>Sneaky</span> <br />
        <span>Dashboard</span>
        <br />
      </h2>
      <p>
        <strong>All</strong> your Sneaky assets,
        <br />
        all in one place.
      </p>
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
  );
};
