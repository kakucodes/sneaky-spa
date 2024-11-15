import { COLLECTION_ADDRS } from "../../config";
import { PortfolioStats } from "../PortfolioStats/PortfolioStats";
import { Collection } from "./Collection/Collection";
import { useQueryNfts } from "../../hooks/useQueryNfts/useQueryUserNfts";
import { useAccount } from "graz";
import { useQueryCollections } from "../../hooks/useQueryCollections/useQueryCollections";

export const Main = () => {
  const { data: userNfts } = useQueryNfts();

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
    });

  return (
    <main>
      {isConnected && userNfts && (
        <div>
          <PortfolioStats tokens={userNfts} />
        </div>
      )}
      {userNfts && collections ? (
        <div>
          {collections.map(({ collectionInfo, nfts }) => (
            <Collection
              key={collectionInfo.contractAddress}
              collection={collectionInfo}
              nfts={nfts}
            />
          ))}
        </div>
      ) : isDisconnected ? (
        <div
          className="d-flex flex-column justify-content-center align-items-center text-center"
          style={{ height: "85vh" }}
        >
          <h1 className="dokdo text-uppercase display-3 mb-0">
            <span>Sneaky</span> <br />
            <span className="fw-bold">Dashboard</span>
          </h1>
          <p className="lead lh-base">
            <span className="fw-bold fst-italic">All</span> your Sneaky assets
            <br /> <i>all in one place</i>. 😊
          </p>
        </div>
      ) : (
        <div className="spinner-border" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      )}
    </main>
  );
};
