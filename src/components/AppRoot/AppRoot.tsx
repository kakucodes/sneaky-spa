import { useEffect } from "react";
import { usePrefetchQueries } from "../../hooks/usePrefetchQueries";
import { Header } from "../Header/Header";
import { Outlet } from "@tanstack/react-router";
import { Footer } from "../Footer/Footer";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "../../App.css";

const initialLoader = document.getElementById("initial-loader");

export const AppRoot = () => {
  const { isFetched } = usePrefetchQueries();

  useEffect(() => {
    if (isFetched) {
      initialLoader && initialLoader.remove();
    }
  }, [isFetched]);

  return isFetched ? (
    <div className="container-xxl">
      <Header />
      {/* <Dashboard /> */}
      {/* <Store /> */}
      <Outlet />
      <Footer />
    </div>
  ) : (
    <Footer />
  );
};
