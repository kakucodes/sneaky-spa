import { COLLECTION_ADDRS } from "../../config";
import { PortfolioStats } from "../PortfolioStats/PortfolioStats";
import { Collection } from "./Collection/Collection";
import { useQueryNfts } from "../../hooks/useQueryNfts/useQueryUserNfts";
import { useAccount } from "graz";
import { useQueryCollections } from "../../hooks/useQueryCollections/useQueryCollections";
import { ConnectionModal } from "../WalletConnectionModal/ConnectionModal";
import { useQuerySneakyTokens } from "../../hooks/useQuerySneakyTokens";
import { DisconnectedDashboard } from "../DisconnectedDashboard/DisconnectedDashboard";

export const Main = () => {
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
    });

  return (
    <main>
      <ConnectionModal />
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
