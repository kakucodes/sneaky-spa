import { CollectionInfo } from "../../hooks/useQueryCollections/useQueryCollections";
import { NftInfo } from "../../hooks/useQueryNfts/useQueryUserNfts";
import { DecoratedCollectionImage } from "../DecoratedCollectionImage/DecoratedCollectionImage";
import { Nft } from "../Main/Nft/Nft";

type Props = {
  collection: CollectionInfo;
  nfts: NftInfo[];
};

export const LargeCollectionDisplay = ({ collection, nfts }: Props) => {
  console.log({ nfts });
  return (
    <div className="row ">
      <div className="col-4 col-xxl-3 col-xl-3 col-lg-3 col-md-6 col-sm-12 col-xs-12">
        <DecoratedCollectionImage collection={collection} ownedCount={false} />
      </div>
      <div className="row col-8 col-xxl-9 col-xl-9 col-lg-9 col-md-6 col-sm-12 col-xs-12 mb-2 border-bottom gx-1">
        {nfts.length > 0 ? (
          nfts.map((nft) => (
            <div
              key={nft.tokenId}
              className="col-4 col-xxl-3 col-lg-4 col-md-6 col-sm-6"
            >
              <Nft
                // @ts-ignore
                token={nft}
              />
            </div>
          ))
        ) : (
          <div
            style={{
              border: "5px dashed gray",
              borderRadius: "15px",
              maxHeight: "97%",
              color: "gray",
              fontWeight: "bold",
              alignItems: "center",
              justifyContent: "center",
              display: "flex",
              flexDirection: "column",
            }}
            className="border-4 border-gray-400 border-dashed rounded-lg p-8 max-w-sm mx-auto text-center flex flex-col items-center gap-2"
          >
            <div>You don't own any</div>
            <div>{collection.name?.toUpperCase()}</div>
            <div>:&apos;&#40;</div>
          </div>
        )}
      </div>
    </div>
  );
};
