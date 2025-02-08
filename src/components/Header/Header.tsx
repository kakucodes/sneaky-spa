// import { Link } from "@tanstack/react-router";
/* import { useMatchRoute } from "@tanstack/react-router";
import { useAccount, useDisconnect } from "graz";
import { useWalletConnectModal } from "../WalletConnectionModal/ConnectionModalProvider";
import { useState } from "react";
import { match } from "ts-pattern"; */
import Link from "next/link";
import Image from "next/image";
import { Navbar, Container, Nav } from "react-bootstrap";

export const Header = () => {
  /*   const [isNavOpen, setIsNavOpen] = useState(false);
  const { openModal } = useWalletConnectModal();
  const { isConnected } = useAccount();
  const { disconnect } = useDisconnect();
  const matchRoute = useMatchRoute(); */

  /*   const getCurrentPage = () => {
    if (matchRoute({ to: "/dashboard" })) return "Dashboard";
    if (matchRoute({ to: "/shop" })) return "Shop";
    return "Home";
  }; */

  const pages = [
    // { name: "Home", path: "/" },
    { name: "Dashboard", path: "/dashboard" },
    { name: "Shop", path: "/shop" },
  ];

  return (
    <header className="fixed-top">
      <Navbar expand="sm">
        <Container fluid="xxl">
          <Navbar.Brand
            as={Link}
            href="/"
            className="dokdo fw-bold text-uppercase"
          >
            <Image
              src="/pignose.svg"
              alt="Sneaky Productions Logo"
              width={30}
              height={24}
            />
          </Navbar.Brand>
          {/* <Navbar.Toggle
            aria-controls="basic-navbar-nav"
            className="border-0"
          /> */}
          {/* <Navbar.Collapse id="basic-navbar-nav"> */}
          <Nav>
            <div className="d-flex flex-row">
              {pages.map((page) => (
                <Nav.Item key={page.path} className="px-2 px-sm-0">
                  <Nav.Link
                    as={Link}
                    href={page.path}
                    className="dokdo text-uppercase fw-bold fs-4"
                  >
                    {page.name}
                  </Nav.Link>
                </Nav.Item>
              ))}
            </div>
          </Nav>
          {/* </Navbar.Collapse> */}
        </Container>
      </Navbar>
      {/* <div className="row">
          Title/Menu
          <div className="col-8">
            <h1 className="fw-bold fs-3 pt-2 text-nowrap lh-1">
              <Link to="/" className="text-decoration-none text-dark d-inline-flex align-items-center">
                <img
                  src={`${process.env.PUBLIC_URL}/pignose.svg`}
                  height="25px"
                  width="25px"
                  alt="Logo"
                  className="me-2"
                />
                <span>Sneaky Productions</span>
              </Link>
            </h1>
            <ul className="list-unstyled list-inline mt-2">
              {pages.map((page) => (
                <li key={page.path} className="list-inline-item py-1">
                  <Link to={page.path} className="text-decoration-none text-dark fw-bold fs-5">
                    {page.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          */}
      {/* Header Button
          <div className="col-4 text-end d-flex align-items-center justify-content-end">
            {match([isConnected, getCurrentPage() === "Dash"] as const)
              .with([false, false], () => (
                <Link
                  to="/dashboard"
                  onClick={openModal}
                  className="btn btn-outline-dark"
                >
                  <span>Dashboard</span>
                </Link>
              ))
              .with([true, false], () => (
                <Link to="/dashboard" className="btn btn-outline-dark">
                  <span>Dashboard</span>
                </Link>
              ))
              .with([true, true], () => (
                <button
                  type="button"
                  className="btn btn-outline-dark"
                  onClick={() => disconnect()}
                >
                  <span>Disconnect</span>
                </button>
              ))
              .with([false, true], () => (
                <button
                  type="button"
                  onClick={openModal}
                  className="btn btn-outline-dark"
                >
                  <span>Connect</span>
                </button>
              ))
              .exhaustive()}
          </div>
        </div>
        */}
    </header>
  );
};
