import { NftFragment } from "../../../gql/graphql";

type Props = {
  token: NftFragment;
};

export const Nft = ({
  token: { name, metadata, rarityScore, tokenId },
}: Props) => {
  return (
    <div className="col">
      <h4>
        {name} (#{tokenId})
        <span className="text-uppercase small">{rarityScore && `(${rarityScore.toFixed(0)})`}</span>
      </h4>
      {/*
      <img
        alt={name || ""}
        src={"https://ipfs.io/ipfs/" + metadata?.image?.replace("ipfs://", "")}
        width={296}
      />
      */}
    </div>
  );
};
