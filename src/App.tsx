import React from "react";
import "./App.css";
import { Header } from "./components/Header/Header";
import { NftsDisplay } from "./components/NftsDisplay/NftsDisplay";

function App() {
  return (
    <div className="App">
      <Header />
      <header className="App-header">
        <NftsDisplay />

        {/* <ul>
          {collections?.collections?.collections.map((collection) =>
            <li key={collection.contractAddress}>
              <h3>{collection.name}</h3>
              <p>{collection.description}</p>

            </li>
          )}
        </ul> */}
      </header>
    </div>
  );
}

export default App;
