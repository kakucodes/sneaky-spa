import { useAccount, useDisconnect } from "graz";
import { useWalletConnectModal } from "../WalletConnectionModal/ConnectionModalProvider";
import { Link, useMatchRoute } from "@tanstack/react-router";
import { ChevronDown } from "lucide-react";
import { useState } from "react";
import { match } from "ts-pattern";

export const Header = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);
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
    { name: "Dash(board)", path: "/dashboard" },
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
                <div
                  className="dropdown d-inline-block"
                  onMouseEnter={() => setIsNavOpen(true)}
                  onMouseLeave={() => setIsNavOpen(false)}
                  onTouchStart={() => setIsNavOpen(!isNavOpen)}
                >
                  <button
                    className="btn btn-link shadow-none text-dark p-0 d-inline-flex align-items-center fs-3 fw-bold"
                    data-bs-toggle="dropdown"
                    data-bs-auto-close="outside"
                    aria-expanded="false"
                    type="button"
                  >
                    {getCurrentPage()}
                    <ChevronDown className="ms-1" size={20} />
                  </button>
                  <ul className={`dropdown-menu ${isNavOpen ? "show" : ""}`}>
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
          <div className="col-4 text-end d-flex align-items-center justify-content-end">
            {match([isConnected, getCurrentPage() === "Dash"] as const)
              .with([false, false], () => (
                <Link
                  to="/dashboard"
                  onClick={openModal}
                  className="btn btn-outline-dark"
                >
                  Go to Dash
                </Link>
              ))
              .with([true, false], () => (
                <Link to="/dashboard" className="btn btn-outline-dark">
                  Go to Dash
                </Link>
              ))
              .with([true, true], () => (
                <button
                  type="button"
                  className="btn btn-outline-dark"
                  onClick={() => disconnect()}
                >
                  Disconnect
                </button>
              ))
              .with([false, true], () => (
                <button
                  type="button"
                  onClick={openModal}
                  className="btn btn-outline-dark"
                >
                  Connect
                </button>
              ))
              .exhaustive()}
          </div>
        </div>
      </div>
    </header>
  );
};
