import {
  COLLECTION_ADDRS,
  isOECollectionAddress,
  MAIN_COLLECTION_ADDRS,
  PLUSHIE_COLLECTION_ADDRS,
} from "../../config";
import { PortfolioStats } from "../PortfolioStats/PortfolioStats";
import { useQueryNfts } from "../../hooks/useQueryNfts/useQueryUserNfts";
import { useAccount } from "graz";
import { useQueryCollections } from "../../hooks/useQueryCollections/useQueryCollections";
import { ConnectionModal } from "../WalletConnectionModal/ConnectionModal";
import { useQuerySneakyTokens } from "../../hooks/useQuerySneakyTokens";
import { DisconnectedDashboard } from "../DisconnectedDashboard/DisconnectedDashboard";
import { LoadingPorfolioStats } from "../PortfolioStats/LoadingPortfolioStats";
import { HorizontalCollectionRoll } from "../HorizontalCollectionRoll/HorizontalCollectionRoll";
import { LargeCollectionDisplay } from "../LargeCollectionDisplay/LargeCollectionDIsplay";

export const Dashboard = () => {
  const { data: userNfts } = useQueryNfts();
  const { data: sneakyBalance, areAnyLoading: isSneakyBalanceLoading } =
    useQuerySneakyTokens();

  console.log("sneaky balance: ", sneakyBalance);

  const { data: collectionsData } = useQueryCollections();
  const { isDisconnected, isConnected } = useAccount();

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

  return (
    <main>
      <ConnectionModal />
      {/* Can show the portfolio value when the sneaky token info is all finished loading and so is the user's nfts */}
      {isConnected && userNfts && !isSneakyBalanceLoading && sneakyBalance ? (
        <PortfolioStats tokens={userNfts} sneakyBalance={sneakyBalance} />
      ) : (
        isConnected && <LoadingPorfolioStats />
      )}
      {/* Can show the user's nfts when all the nfts and the collections are loaded */}
      {userNfts && collections ? (
        <div className="row gy-5 pt-1">
          <h3 className="h3">Main Collections</h3>
          {/* <h3 className="h1 text-center fw-bold mb-2">Collections</h3>
          <div className="col-1" />
          <p className="mb-5 text-center col-10 mt-0">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maiores
            fugiat vel rem necessitatibus qui sequi nostrum unde. Error iusto
            consectetur corrupti voluptates quam. Ullam, velit maiores dolorem
            culpa doloribus necessitatibus.
          </p> */}
          {mainCollections.map(({ collectionInfo, nfts }) => (
            // <Collection
            //   key={collectionInfo.contractAddress}
            //   collection={collectionInfo}
            //   nfts={nfts}
            // />
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
        </div>
      ) : isDisconnected ? (
        <DisconnectedDashboard />
      ) : (
        <div
          className="d-flex flex-column justify-content-center align-items-center text-center"
          style={{ height: "100vh" }}
        >
          <div className="spinner-border" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        </div>
      )}
    </main>
  );
};
