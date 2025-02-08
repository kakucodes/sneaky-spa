import { CollectionInfo } from "../../hooks/useQueryCollections/useQueryCollections";
import { NftInfo } from "../../hooks/useQueryNfts/useQueryUserNfts";
import { DecoratedCollectionImage } from "../DecoratedCollectionImage/DecoratedCollectionImage";
import { Nft } from "../Dashboard/Nft/Nft";

type Props = {
  collection: CollectionInfo;
  nfts: NftInfo[];
};

export const LargeCollectionDisplay = ({ collection, nfts }: Props) => {
  console.log({ nfts });
  return (
    <div className="row" style={{ maxWidth: "100vw" }}>
      <div className="col-12 col-xxl-3 col-xl-3 col-lg-3 col-md-5 col-sm-6 col-xs-12">
        <DecoratedCollectionImage
          collection={collection}
          ownedCount={false}
          showCollectionTitle={false}
        />
      </div>

      <div className="row col-12 col-xxl-9 col-xl-9 col-lg-9 col-md-7 col-sm-6 col-xs-12 mb-2 border-bottom gx-1 ">
        {nfts.length > 0 ? (
          nfts.map((nft) => (
            <div
              key={nft.tokenId}
              className="d-flex flex-column align-items-center col-4 col-xxl-3 col-lg-4 col-md-6 col-sm-6"
            >
              <Nft
                // @ts-expect-error nft should match up enough
                token={nft}
              />
            </div>
          ))
        ) : (
          <div
            style={{
              width: "100%",
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
            <div>You don&apos;t own any</div>
            <div>{collection.name?.toUpperCase()}</div>
            <div>:&apos;&#40;</div>
          </div>
        )}
      </div>
    </div>
  );
};
