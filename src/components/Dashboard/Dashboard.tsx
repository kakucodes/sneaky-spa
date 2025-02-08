"use client";
import {
  COLLECTION_ADDRS,
  isOECollectionAddress,
  MAIN_COLLECTION_ADDRS,
  PLUSHIE_COLLECTION_ADDRS,
} from "@/config";
import { useAccount } from "graz";
import { useQueryNfts } from "../../hooks/useQueryNfts/useQueryUserNfts";
import { useQuerySneakyTokens } from "../../hooks/useQuerySneakyTokens";
import { useQueryCollections } from "../../hooks/useQueryCollections/useQueryCollections";
import { ConnectionModal } from "../WalletConnectionModal/ConnectionModal";
import { DisconnectedDashboard } from "../Dashboard/DisconnectedDashboard";
import { PortfolioStats } from "../PortfolioStats/PortfolioStats";
import { LoadingPorfolioStats } from "../PortfolioStats/LoadingPortfolioStats";
import { HorizontalCollectionRoll } from "../HorizontalCollectionRoll/HorizontalCollectionRoll";
import { LargeCollectionDisplay } from "../LargeCollectionDisplay/LargeCollectionDIsplay";
import { Container } from "react-bootstrap";

export const Dashboard = () => {
  // Wallet Connection
  const { isDisconnected, isConnected } = useAccount();

  // User Asset Data
  const { data: userNfts } = useQueryNfts();
  const { data: sneakyBalance, areAnyLoading: isSneakyBalanceLoading } =
    useQuerySneakyTokens();
  const { data: collectionsData } = useQueryCollections();

  const collections =
    userNfts &&
    COLLECTION_ADDRS.flatMap((collectionAddr) => {
      const collectionInfo = collectionsData?.find(
        ({ contractAddress }) => contractAddress === collectionAddr
      );
      const nfts =
        userNfts?.filter(
          ({ collection }) => collection?.contractAddress === collectionAddr
        ) || [];

      return collectionInfo ? [{ collectionInfo, nfts }] : [];
    }).sort(
      (a, b) =>
        (b.collectionInfo.floor?.amountUsd || 0) -
        (a.collectionInfo.floor?.amountUsd || 0)
    );

  const mainCollections = (collections || []).filter(
    ({ collectionInfo: { contractAddress } }) =>
      MAIN_COLLECTION_ADDRS.includes(contractAddress)
  );

  const oeCollections = (collections || []).filter(
    ({ collectionInfo: { contractAddress } }) =>
      isOECollectionAddress(contractAddress)
  );

  const plushieCollections = (collections || []).filter(
    ({ collectionInfo: { contractAddress } }) =>
      PLUSHIE_COLLECTION_ADDRS.includes(contractAddress)
  );

  // Debugging
  console.log("userNfts: ", userNfts);
  console.log("collections: ", collections);
  console.log("collectionsData: ", collectionsData);
  console.log("sneakyBalance: ", sneakyBalance);

  return (
    <main>
      <Container fluid="xxl">
        <ConnectionModal />
        {isConnected && userNfts && !isSneakyBalanceLoading && sneakyBalance ? (
          <PortfolioStats tokens={userNfts} sneakyBalance={sneakyBalance} />
        ) : (
          isConnected && <LoadingPorfolioStats />
        )}
        <div style={{ maxWidth: "100vw" }}>
          {userNfts && collections ? (
            <>
              {mainCollections.map(({ collectionInfo, nfts }) => (
                <LargeCollectionDisplay
                  key={collectionInfo.contractAddress}
                  collection={collectionInfo}
                  nfts={nfts}
                />
              ))}
              <HorizontalCollectionRoll
                title="Open Editions"
                collections={oeCollections}
                showCollectionTitles={false}
              />
              <HorizontalCollectionRoll
                title="Plushies"
                collections={plushieCollections}
                makeCollectionImagesSquare
              />
              {/* <pre>{JSON.stringify(userNfts, null, 2)}</pre> */}
            </>
          ) : isDisconnected ? (
            <DisconnectedDashboard />
          ) : (
            <div className="d-flex flex-column justify-content-center align-items-center text-center vh-100">
              <div className="spinner-border" role="status">
                <span className="visually-hidden">Loading...</span>
              </div>
            </div>
          )}
        </div>
      </Container>
    </main>
  );
};
