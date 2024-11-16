import { match, P } from "ts-pattern";
import {
  CollectionMintStatus,
  NftCollectionFragment,
  NftFragment,
} from "../../../gql/graphql";
import { Nft } from "../Nft/Nft";
import { formatTokenAmount, formatUsd } from "../../../utils/format";

type Props = {
  collection: NftCollectionFragment;
  nfts: NftFragment[];
};

export const Collection = ({ collection, nfts }: Props) => {
  const collectionFloor =
    collection.floor &&
    `${formatTokenAmount(collection.floor.amount, 6)} ${
      collection.floor.symbol
    }`;
  const collectionFloorUsd =
    collection.floor?.amountUsd && formatUsd(collection.floor.amountUsd);

  const MintInfo = match([
    collection.mintStatus,
    collection.minter?.publicSale?.endTime,
  ])
    .with([CollectionMintStatus.FullyMinted, P._], () => <></>)
    .with([P.nullish, P._], () => <></>)
    .with(
      [
        CollectionMintStatus.Minting,
        P.string.and(
          P.when(
            (endTime) =>
              new Date(
                Number((BigInt(endTime as string) / 1000000n).toString())
              ) < new Date()
          )
        ),
      ],
      () => <></>
    )
    .with([CollectionMintStatus.Minting, P._], () => (
      <a
        target="_blank"
        referrerPolicy="no-referrer"
        rel="noreferrer"
        href={`https://www.stargaze.zone/l/${collection.contractAddress}`}
      >
        Mint Now!
      </a>
    ))
    .with([CollectionMintStatus.Upcoming, P._], () => <>Coming Soon</>)
    .exhaustive();

  return (
    <>
      <img
        src={
          collection.media?.visualAssets?.sm?.webpUrl ||
          collection.media?.fallbackUrl ||
          ""
        }
      />
      <div>
        <h3 className="fw-bold">{collection.name}</h3>
        <p className="text-capitalize">{collection.description}</p>

        <div className="row">{MintInfo}</div>
        {collectionFloor && (
          <div>
            Floor: {collectionFloor}{" "}
            {collectionFloorUsd && `(${collectionFloorUsd})`}
          </div>
        )}
        <div>Nfts Owned: {nfts.length}</div>
      </div>
      <div className="row">
        {nfts.length === 0 ? (
          <></>
        ) : (
          nfts.map((nft) => <Nft key={`${nft.tokenId}`} token={nft} />)
        )}
      </div>
    </>
  );
};
