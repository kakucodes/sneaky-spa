import { CollectionInfo } from "../../hooks/useQueryCollections/useQueryCollections";
import { NftInfo } from "../../hooks/useQueryNfts/useQueryUserNfts";
import { DecoratedCollectionImage } from "../DecoratedCollectionImage/DecoratedCollectionImage";

type Props = {
  title: string;
  collections: { collectionInfo: CollectionInfo; nfts: NftInfo[] }[];
  showCollectionImage?: boolean;
  makeCollectionImagesSquare?: boolean;
  showCollectionTitles?: boolean;
};

export const HorizontalCollectionRoll = ({
  title,
  collections,
  showCollectionImage = true,
  makeCollectionImagesSquare = false,
  showCollectionTitles = true,
}: Props) => {
  return (
    <div>
      <h2 className="h3">{title}</h2>

      <div className="row flex-nowrap overflow-auto py-1">
        {collections.map(({ collectionInfo, nfts }) => (
          <DecoratedCollectionImage
            key={collectionInfo.contractAddress}
            collection={collectionInfo}
            ownedCount={nfts.length}
            makeCollectionImageSquare={makeCollectionImagesSquare}
            showCollectionImage={showCollectionImage}
            showCollectionTitle={showCollectionTitles}
          />
        ))}
      </div>
    </div>
  );
};
