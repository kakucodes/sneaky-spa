import { useAccount } from "graz";
import { useWalletConnectModal } from "../WalletConnectionModal/ConnectionModalProvider";

export const DisconnectedDashboard = () => {
  const { openModal } = useWalletConnectModal();
  const { isConnected } = useAccount();

  return (
    <div
      className="d-flex flex-column justify-content-center align-items-center text-center pt-4 vh-100">
      <h1 className="text-uppercase display-3 text-nowrap fw-bold mb-0">
        <span data-aos="fade" data-aos-delay="350">Sneaky</span> <br />
        <span data-aos="fade" data-aos-delay="400">Dashboard</span>
        <br />
      </h1>
      <p data-aos="fade" data-aos-delay="450">
        <strong>All</strong> your Sneaky assets, <br />
        all in one place.
      </p>
      <button
        data-aos="fade" data-aos-delay="500"
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
