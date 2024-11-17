import { COLLECTION_ADDRS } from "../../config";
import { PortfolioStats } from "../PortfolioStats/PortfolioStats";
import { Collection } from "./Collection/Collection";
import { useQueryNfts } from "../../hooks/useQueryNfts/useQueryUserNfts";
import { useAccount } from "graz";
import { useQueryCollections } from "../../hooks/useQueryCollections/useQueryCollections";
import { WalletConnectionModal } from "../WalletConnectionModal/WalletConnectionModal";
import { useQuerySneakyTokens } from "../../hooks/useQuerySneakyTokens";

export const Main = () => {
  const { data: userNfts } = useQueryNfts();
  const { data: sneakyBalance, areAnyLoading: isSneakyBalanceLoading } =
    useQuerySneakyTokens();

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
      <WalletConnectionModal />
      {/* Can show the portfolio value when the sneaky token info is all finished loading and so is the user's nfts */}
      {isConnected && userNfts && !isSneakyBalanceLoading && sneakyBalance && (
        <div>
          <PortfolioStats tokens={userNfts} sneakyBalance={sneakyBalance} />
        </div>
      )}
      {/* Can show the user's nfts when all the nfts and the collections are loaded */}
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
          <h1 className="text-uppercase display-3 mb-0">
            <span>Sneaky</span> <br />
            <span className="fw-bold">Dashboard</span>
          </h1>
        </div>
      ) : (
        <div
          className="d-flex flex-column justify-content-center align-items-center text-center"
          style={{ height: "85vh" }}
        >
          <div className="spinner-border" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        </div>
      )}
    </main>
  );
};
