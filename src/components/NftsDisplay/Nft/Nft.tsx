import { NftFragment } from "../../../gql/graphql";

type Props = {
  token: NftFragment;
};

export const Nft = ({
  token: { name, description, metadata, rarityScore, tokenId },
}: Props) => {
  return (
    <span>
      <h5>
        #{tokenId} {name} {rarityScore && `(${rarityScore.toFixed(0)})`}
      </h5>
      <img
        alt={name || ""}
        src={"https://ipfs.io/ipfs/" + metadata?.image?.replace("ipfs://", "")}
        height={200}
      />
    </span>
  );
};
