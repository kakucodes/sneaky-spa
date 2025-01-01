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
    .with([CollectionMintStatus.FullyMinted, P._], () => "Fully Minted")
    .with([P.nullish, P._], () => "Unknown")
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
      () => "Mint Finished"
    )
    .with([CollectionMintStatus.Minting, P._], () => (
      <a
        className="link-offset-2 link-underline-opacity-0 link-dark"
        target="_blank"
        referrerPolicy="no-referrer"
        rel="noreferrer"
        href={`https://www.stargaze.zone/l/${collection.contractAddress}`}
      >
        <span>Mint Now!</span>
      </a>
    ))
    .with([CollectionMintStatus.Upcoming, P._], () => "Coming Soon")
    .exhaustive();

  // Group NFTs by name and count duplicates
  const groupedNfts = nfts.reduce((acc, nft) => {
    const { name } = nft;
    if (name) {
      if (!acc[name]) {
        acc[name] = { ...nft, count: 1 };
      } else {
        acc[name].count += 1;
      }
    }
    return acc;
  }, {} as Record<string, NftFragment & { count: number }>);

  // Convert the grouped NFTs into an array, and sort.
  const nftArray = Object.values(groupedNfts).sort((a, b) => b.count - a.count);

  // Sanitization function
  const sanitizeName = (name: string): string =>
    name
      .replace(/\s+/g, "-")
      .replace(/[^a-zA-Z0-9-]/g, "")
      .toLowerCase();

  // Generate sanitized ID (for collapsible NFT columns)
  const sanitizedId = sanitizeName(collection.name ?? "");

  // Generate random number for Collection title rotation class.
  const randomNumber = Math.floor(Math.random() * 4) + 1;

  return (
    <>
      <div className="col-12 col-md-6 col-xl-4">
        <div className={`d-flex flex-column align-items-center mt-md-${randomNumber}`}>
          <h3 className={`h5 bg-white bg-opacity-75 fw-bold text-dark border border-dark custom-border custom-border-width text-nowrap test p-1 px-2 z-3 title-rotate-${randomNumber}`}>
            {collection.name}
          </h3>
          <div className={`mb-4 rotate-${randomNumber}`}>
            <div className="position-relative d-inline-block">
              {
                <img
                  className="img-fluid custom-border custom-border-width"
                  alt={""}
                  src={
                    collection.media?.visualAssets?.sm?.webpUrl ||
                    collection.media?.fallbackUrl ||
                    ""
                  }
                  width="260"
                />
              }
              <p className="position-absolute top-0 end-0 bg-white bg-opacity-75 small fw-bold text-dark border-dark custom-border custom-border-width-2 px-2 py-1 shadow-sm mt-3 me-3">
                {MintInfo}
              </p>
              <p className="position-absolute bottom-0 start-0 bg-white bg-opacity-75 small fw-bold text-dark border-dark custom-border custom-border-width-2 px-2 py-1 shadow-sm mb-3 ms-3">
                <span>Owned: {nfts.length}</span>
              </p>
              <p className="position-absolute bottom-0 end-0 bg-white bg-opacity-75 small fw-bold text-dark border-dark custom-border custom-border-width-2 px-2 py-1 shadow-sm mb-3 me-3">
                {collectionFloor}
              </p>
            </div>
          </div>
          <div style={{ maxWidth: "20rem" }}>
            <button
              type="button"
              className="btn btn-outline-dark fw-bold mb-4"
              data-bs-toggle="modal"
              data-bs-target={`#nfts-${sanitizedId}`}
            >
              <span>View</span>
            </button>
            <p className="">
              {collection.description} Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus placeat aperiam, quibusdam quia hic eligendi adipisci ut veniam consequuntur.
            </p>
          </div>
          <div className="modal fade" id={`nfts-${sanitizedId}`}>
            <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable">
              <div className="modal-content">
                <div className="modal-header border-0">
                  <button
                    type="button"
                    className="btn-close"
                    data-bs-dismiss="modal"
                  ></button>
                </div>
                <div className="modal-body">
                  <div className="row">
                    {nftArray.length > 0 &&
                      nftArray.map((nft) => (
                        <Nft key={nft.tokenId} token={nft} />
                      ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
