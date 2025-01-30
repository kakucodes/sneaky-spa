import {
  COLLECTION_ADDRS,
  isOECollectionAddress,
  MAIN_COLLECTION_ADDRS,
  PLUSHIE_COLLECTION_ADDRS,
} from "../../config";
import { useAccount } from "graz";
import { useQueryNfts } from "../../hooks/useQueryNfts/useQueryUserNfts";
import { useQuerySneakyTokens } from "../../hooks/useQuerySneakyTokens";
import { useQueryCollections } from "../../hooks/useQueryCollections/useQueryCollections";

import { ConnectionModal } from "../WalletConnectionModal/ConnectionModal";
import { DisconnectedDashboard } from "../Dashboard/DisconnectedDashboard";

import { PortfolioStats } from "../PortfolioStats/PortfolioStats";
import { LoadingPorfolioStats } from "../PortfolioStats/LoadingPortfolioStats";

export const Dashboard = () => {
  // Wallet Connection
  const account = useAccount();
  const { isDisconnected, isConnected } = account ?? {};

  // User Asset Data
  const { data: userNfts } = useQueryNfts();
  const { data: sneakyBalance, areAnyLoading: isSneakyBalanceLoading } =
    useQuerySneakyTokens();
  const { data: collectionsData } = useQueryCollections();

  const collections =
    COLLECTION_ADDRS.flatMap((collectionAddr) => {
      const collectionInfo = collectionsData?.find(
        ({ contractAddress }) => contractAddress === collectionAddr
      );
      const nfts =
        userNfts?.filter(
          ({ collection }) => collection?.contractAddress === collectionAddr
        ) ?? [];

      return collectionInfo ? [{ collectionInfo, nfts }] : [];
    })?.sort(
      (a, b) =>
        (b.collectionInfo.floor?.amountUsd ?? 0) -
        (a.collectionInfo.floor?.amountUsd ?? 0)
    ) ?? [];

  const mainCollections =
    collections?.filter(({ collectionInfo: { contractAddress } }) =>
      MAIN_COLLECTION_ADDRS.includes?.(contractAddress)
    ) ?? [];

  const oeCollections =
    collections?.filter(({ collectionInfo: { contractAddress } }) =>
      isOECollectionAddress?.(contractAddress)
    ) ?? [];

  const plushieCollections =
    collections?.filter(({ collectionInfo: { contractAddress } }) =>
      PLUSHIE_COLLECTION_ADDRS.includes?.(contractAddress)
    ) ?? [];

  console.log("Main Collections:", mainCollections);
  console.log("OE Collections:", oeCollections);
  console.log("Plushie Collections:", plushieCollections);

  return (
    <main>
      <ConnectionModal />
      {isConnected && userNfts && !isSneakyBalanceLoading && sneakyBalance ? (
        <PortfolioStats tokens={userNfts} sneakyBalance={sneakyBalance} />
      ) : (
        isConnected && <LoadingPorfolioStats />
      )}
      {userNfts && collections ? (
        <>
          <div className="row gy-4" style={{ paddingBottom: '12rem' }}>
            {[
              ...mainCollections,
              ...oeCollections,
              ...plushieCollections,
            ]
              .flatMap((collection: any) =>
                collection.nfts.map((nft: any) => ({
                  nft,
                  collection,
                }))
              )
              .map(({ nft, collection }: any, nftIndex: any) => (
                <div key={nftIndex} className="col-12 col-sm-6 col-lg-4 mx-auto px-3">

                      <div className="ratio ratio-1x1 mb-2">
                      <img
                        src={
                          nft.metadata.image?.replace(
                            "ipfs://",
                            "https://ipfs.io/ipfs/"
                          ) || ""
                        }
                        alt={`${nft.metadata.name ?? "NFT"} Image`}
                        className="img-fluid object-fit-cover custom-border"
                      />
                      </div>
                      <p className="text-center fw-bold mb-0">{nft.metadata.name}</p>
                      <p className="text-center small mb-0">{collection.collectionInfo.name} #{nft.tokenId}</p>

                </div>
              ))}
          </div>
          {/* 
          {mainCollections.map((collection: any, index: any) => (
            <div key={index}>
              <img src={collection.collectionInfo.media?.fallbackUrl} alt={`${collection.collectionInfo.name} Preview`} className="img-fluid" />
              <>
                {collection.nfts.map((nft: any, nftIndex: any) => (
                  <div key={nftIndex}>
                      <div className="ratio ratio-1x1">
                        <img src={nft.metadata.image?.replace("ipfs://", "https://ipfs.io/ipfs/") || "" } alt={`${nft.metadata.name ?? "NFT"} Image`} className="img-fluid object-fit-cover w-100 h-100" />
                      </div>
                  </div>
                ))}
              </>
            </div>
          ))}
          */}
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
    </main>
  );
};
