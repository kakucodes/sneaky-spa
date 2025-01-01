import React, { useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "./App.css";
import { Header } from "./components/Header/Header";
import { Dashboard } from "./components/Dashboard/Dashboard";
import { Footer } from "./components/Footer/Footer";
import { usePrefetchQueries } from "./hooks/usePrefetchQueries";
import { Store } from "./components/Store/Store";

function App({}: {}) {
  // return isFetched ? (
  //   <div className="container-xxl">
  //     <Header />
  //     {/* <Dashboard /> */}
  //     <Store />
  //     <Footer />
  //   </div>
  // ) : (
  //   <Footer />
  // );

  return "App Component";
}

export default App;
