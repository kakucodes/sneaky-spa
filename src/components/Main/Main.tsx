import { COLLECTION_ADDRS } from "../../config";
import { Collection } from "./Collection/Collection";
import { useQueryNfts } from "./useQueryUserNfts";
import { useAccount } from "graz";

export const Main = () => {
  const { data: userNfts } = useQueryNfts();
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
      {userNfts && collections ? (
        collections.map(({ collectionInfo, nfts }) => (
          <Collection
            key={collectionInfo.contractAddress}
            collection={collectionInfo}
            nfts={nfts}
          />
        ))
      ) : isDisconnected ? (
        ""
      ) : (
        <div className="spinner-border" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      )}
    </main>
  );
};
