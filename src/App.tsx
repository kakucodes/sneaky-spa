import React from "react";
import { Header } from "./components/Header/Header";
import { Main } from "./components/Main/Main";
import { Footer } from "./components/Footer/Footer";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import "./App.css";

function App() {
  return (
    <div className="container py-4">
      <Header />
      <Main />
      <Footer />
    </div>
  );
}

export default App;