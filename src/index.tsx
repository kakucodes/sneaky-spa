import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { GrazProvider } from "graz";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { WalletModalContextProvider } from "./components/WalletConnectionModal/ConnectionModalProvider";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <QueryClientProvider client={new QueryClient()}>
      <GrazProvider
        grazOptions={{
          chains: [
            {
              rpc: "https://rpc.stargaze-apis.com/",
              rest: "https://rest.stargaze-apis.com/",
              chainId: "stargaze-1",
              chainName: "Stargaze",
              stakeCurrency: {
                coinDenom: "stars",
                coinMinimalDenom: "ustars",
                coinGeckoId: "stargaze",
                coinDecimals: 6,
              },
              bip44: {
                coinType: 118,
              },
              bech32Config: {
                bech32PrefixAccAddr: "stars",
                bech32PrefixAccPub: "starspub",
                bech32PrefixValAddr: "starsvaloper",
                bech32PrefixValPub: "starsvaloperpub",
                bech32PrefixConsAddr: "starsvalcons",
                bech32PrefixConsPub: "starsvalconspub",
              },
              currencies: [
                {
                  coinDenom: "stars",
                  coinMinimalDenom: "ustars",
                  coinGeckoId: "stargaze",
                  coinDecimals: 6,
                },
                {
                  coinDenom: "SNEAKY",
                  coinMinimalDenom:
                    "factory/stars1xx5976njvxpl9n4v8huvff6cudhx7yuu8e7rt4/usneaky",
                  coinGeckoId: "sneaky-coin",
                  coinDecimals: 6,
                },
              ],
              feeCurrencies: [
                {
                  coinDenom: "stars",
                  coinMinimalDenom: "ustars",
                  coinGeckoId: "stargaze",
                  coinDecimals: 6,
                  gasPriceStep: {
                    low: 1,
                    average: 1.1,
                    high: 1.2,
                  },
                },
              ],
            },
          ],
          walletConnect: {
            options: {
              projectId: "34b07e7cd516d7da87accd8ce536a80b",
              name: "Sneaky Dashboard",
              metadata: {
                name: "Sneaky Dashboard",
                description:
                  "Sneaky Productions Dashboard - All your Sneaky Productions' assets in one place.",
                url: "https://dashboard.sneaky.productions",
                icons: [`https://kakucodes.github.io/sneaky-spa/wenmoon.png`],
              },
            },
          },
        }}
      >
        <WalletModalContextProvider>
          <App />
        </WalletModalContextProvider>
      </GrazProvider>
    </QueryClientProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
