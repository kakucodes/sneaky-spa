import { match, P } from "ts-pattern";
import { CollectionInfo } from "../../hooks/useQueryCollections/useQueryCollections";
import { formatTokenAmount } from "../../utils/format";
import { CollectionMintStatus } from "../../gql/graphql";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Tooltip, { TooltipProps } from "react-bootstrap/Tooltip";
import Image from "next/image";
import { useMemo } from "react";
import { isOECollectionAddress, OE_ASSET_URLS } from "../../config";
import { RoughLink } from "../RoughLink/RoughLink";

type Props = {
  collection: CollectionInfo;
  ownedCount: number | false;
  makeCollectionImageSquare?: boolean;
  showCollectionTitle?: boolean;
  descriptionTooltip?: boolean;
};

export const DecoratedCollectionImage = ({
  collection,
  ownedCount,
  makeCollectionImageSquare = false,

  descriptionTooltip = true,
  showCollectionTitle = true,
}: Props) => {
  const collectionFloor =
    collection.floor &&
    collection.floor.symbol &&
    `${formatTokenAmount(collection.floor.amount, 6)} ${
      collection.floor.symbol
    }`;
  // const collectionFloorUsd =
  //   collection.floor?.amountUsd && formatUsd(collection.floor.amountUsd);

  const MintInfo = match([
    collection.mintStatus,

    collection.minter?.publicSale?.endTime,
  ])
    .with([CollectionMintStatus.FullyMinted, P._], () => undefined)
    .with([P.nullish, P._], () => undefined)
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
      () => undefined
    )
    .with([CollectionMintStatus.Minting, P._], () => (
      // <a
      //   className="link-offset-2 link-underline-opacity-0 link-dark"
      //   target="_blank"
      //   referrerPolicy="no-referrer"
      //   rel="noreferrer"
      //   href={`https://www.stargaze.zone/l/${collection.contractAddress}`}
      // >
      <RoughLink
        href={`https://www.stargaze.zone/l/${collection.contractAddress}`}
      >
        <span>Mint Now!</span>
      </RoughLink>

      // </a>
    ))
    .with([CollectionMintStatus.Upcoming, P._], () => "Coming Soon")
    .exhaustive();

  const renderTooltip = (props: TooltipProps) => (
    <Tooltip id="button-tooltip" {...props}>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <p>
          <strong>{collection.name}</strong> - {collection.description}
        </p>
        {isOECollectionAddress(collection.contractAddress) && (
          <Image
            alt={`${collection.name} nft art asset`}
            width={100}
            height={100}
            objectFit="cover"
            className="mb-1"
            src={OE_ASSET_URLS[collection.contractAddress]}
          />
        )}
      </div>
    </Tooltip>
  );

  // Generate random number for Collection title rotation class.
  const randomNumber = useMemo(() => Math.floor(Math.random() * 4) + 1, []);

  return (
    <div style={{ width: "auto" }}>
      <OverlayTrigger
        placement="top"
        delay={{ show: 250, hide: 400 }}
        overlay={renderTooltip}
        {...(descriptionTooltip ? {} : { show: false })}
      >
        <div
          className={`d-flex flex-column align-items-center mt-md-${randomNumber}`}
        >
          {showCollectionTitle && (
            <h3
              className={`h5 bg-white bg-opacity-75 fw-bold text-dark border border-dark custom-border custom-border-width text-nowrap test p-1 px-2 z-3 title-rotate-${randomNumber}`}
            >
              {collection.name}
            </h3>
          )}
          <div className={`mb-4 rotate-${randomNumber}`}>
            <div className="position-relative d-inline-block">
              {
                <Image
                  style={{
                    ...(makeCollectionImageSquare
                      ? { objectFit: "cover", height: "260px" }
                      : {}),
                    width: "260px",
                  }}
                  height={260}
                  objectFit="cover"
                  width={260}
                  className="img-fluid custom-border custom-border-width"
                  alt={""}
                  src={
                    collection.media?.visualAssets?.sm?.webpUrl ||
                    collection.media?.fallbackUrl ||
                    ""
                  }
                />
              }
              {MintInfo && (
                <p className="position-absolute top-0 end-0 bg-white bg-opacity-75 small fw-bold text-dark border-dark custom-border custom-border-width-2 px-2 py-1 shadow-sm mt-3 me-3">
                  {MintInfo}
                </p>
              )}
              {ownedCount !== false && (
                <p className="position-absolute bottom-0 start-0 bg-white bg-opacity-75 small fw-bold text-dark border-dark custom-border custom-border-width-2 px-2 py-1 shadow-sm mb-3 ms-3">
                  <span>Owned: {ownedCount}</span>
                </p>
              )}
              {collectionFloor && (
                <p className="position-absolute bottom-0 end-0 bg-white bg-opacity-75 small fw-bold text-dark border-dark custom-border custom-border-width-2 px-2 py-1 shadow-sm mb-3 me-3">
                  {collectionFloor}
                </p>
              )}
            </div>
          </div>
        </div>
      </OverlayTrigger>
    </div>
  );
};
