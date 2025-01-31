"use client";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { GrazProvider } from "graz";
import { WalletModalContextProvider } from "./WalletConnectionModal/ConnectionModalProvider";
import { AppRoot } from "./AppRoot/AppRoot";
import AOS from "aos";
import { useEffect } from "react";

export const AppProviders = ({ children }: { children: React.ReactNode }) => {
  //   useEffect(() => {
  //     if (isFetched) {
  //       initialLoader && initialLoader.remove();
  //     }
  //   }, [isFetched]);

  useEffect(() => {
    // @ts-expect-error import bootstrap js
    import("bootstrap/dist/js/bootstrap.bundle.min.js");
  }, []);

  useEffect(() => {
    AOS.init({
      // Defaults
      // Global settings:
      disable: false, // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
      startEvent: "DOMContentLoaded", // name of the event dispatched on the document, that AOS should initialize on
      initClassName: "aos-init", // class applied after initialization
      animatedClassName: "aos-animate", // class applied on animation
      useClassNames: false, // if true, will add content of `data-aos` as classes on scroll
      disableMutationObserver: false, // disables automatic mutations' detections (advanced)
      debounceDelay: 50, // the delay on debounce used while resizing window (advanced)
      throttleDelay: 99, // the delay on throttle used while scrolling the page (advanced)

      // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
      offset: 120, // offset (in px) from the original trigger point
      delay: 0, // values from 0 to 3000, with step 50ms
      duration: 400, // values from 0 to 3000, with step 50ms
      easing: "ease", // default easing for AOS animations
      once: false, // whether animation should happen only once - while scrolling down
      mirror: false, // whether elements should animate out while scrolling past them
      anchorPlacement: "top-bottom", // defines which position of the element regarding to window should trigger the animation
    });
  }, []);

  return (
    <>
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
            <AppRoot>
              <>{children}</>
            </AppRoot>
          </WalletModalContextProvider>
        </GrazProvider>
      </QueryClientProvider>
    </>
  );
};
