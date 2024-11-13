import { COLLECTION_ADDRS } from "../../config";
import { PortfolioStats } from "../PortfolioStats/PortfolioStats";
import { Collection } from "./Collection/Collection";
import { useQueryNfts } from "./useQueryUserNfts";
import { useAccount } from "graz";

export const Main = () => {
  const { data: userNfts, isLoading: isUserNftsLoading } = useQueryNfts();
  const { isDisconnected } = useAccount();

  const collections =
    userNfts &&
    COLLECTION_ADDRS.flatMap((collectionAddr) => {
      const collectionInfo = userNfts.collections?.find(
        ({ contractAddress }) => contractAddress === collectionAddr
      );
      const nfts =
        userNfts.tokens?.filter(
          ({ collection }) => collection?.contractAddress === collectionAddr
        ) || [];

      return collectionInfo ? [{ collectionInfo, nfts }] : [];
    });

  return (
    <main>
      <PortfolioStats tokens={userNfts?.tokens} />

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
          <h1 className="display-5 lh-1 mb-2">
            Sneaky <br />
            <span className="fw-bold">Dashboard</span>
          </h1>
          <p className="lead lh-sm">
            All of your Sneaky assets,
            <br /> all in one place.
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
