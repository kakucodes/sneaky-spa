import { COLLECTION_ADDRS } from "../../config";
import { Collection } from "./Collection/Collection";
import { useQueryNfts } from "./useQueryUserNfts";
import "./nftsDisplay.css";
import { useAccount } from "graz";

export const NftsDisplay = () => {
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
    <div>
      <h2>Collections</h2>
      {userNfts && collections
        ? collections.map(({ collectionInfo, nfts }) => (
            <Collection
              key={collectionInfo.contractAddress}
              collection={collectionInfo}
              nfts={nfts}
            />
          ))
        : isDisconnected
        ? "Connect your wallet please"
        : "Loading Collections..."}
    </div>
  );
};
