import { useAccount, useDisconnect } from "graz";
import { useWalletConnectModal } from "../WalletConnectionModal/ConnectionModalProvider";
import { Link, useMatchRoute } from "@tanstack/react-router";
import { ChevronDown } from "lucide-react";

export const Header = () => {
  const { openModal } = useWalletConnectModal();
  const { isConnected } = useAccount();
  const { disconnect } = useDisconnect();
  const matchRoute = useMatchRoute();

  const getCurrentPage = () => {
    if (matchRoute({ to: "/dashboard" })) return "Dash";
    if (matchRoute({ to: "/shop" })) return "Shop";
    return "Prods";
  };

  const pages = [
    { name: "Dash", path: "/dashboard" },
    { name: "Shop", path: "/shop" },
    { name: "Prods", path: "/" },
  ];

  return (
    <header className="border-bottom py-2">
      <div className="container-xxl ">
        <div className="row">
          <div className="col-8">
            <h1 className="fw-bold fs-3 pt-2 lh-1">
              <Link to="/" className="text-decoration-none text-dark">
                <img
                  src={`${process.env.PUBLIC_URL}/pignose.svg`}
                  height={"25px"}
                  width={"25px"}
                  alt="Sneaky Dash Logo"
                  className="me-2"
                />
                Sneaky{" "}
                <div className="dropdown d-inline-block">
                  <button
                    className="btn nav-btn btn-outline-dark text-dark text-decoration-none p-0 d-inline-flex align-items-center fs-3 fw-bold"
                    data-bs-toggle="dropdown"
                    data-bs-auto-close="outside"
                    aria-expanded="false"
                    type="button"
                  >
                    {getCurrentPage()}
                    <ChevronDown className="ms-1" size={20} />
                  </button>
                  <ul className="dropdown-menu">
                    {pages
                      .filter((page) => page.name !== getCurrentPage())
                      .map((page) => (
                        <li key={page.path}>
                          <Link to={page.path} className="dropdown-item">
                            <h1>{page.name}</h1>
                          </Link>
                        </li>
                      ))}
                  </ul>
                </div>
              </Link>
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
