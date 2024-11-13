import { NftFragment } from "../../../gql/graphql";

type Props = {
  token: NftFragment;
};

export const Nft = ({
  token: { name, description, metadata, rarityScore, tokenId },
}: Props) => {
  return (
    <div className="col">
      <h4>
        #{tokenId} {name} {rarityScore && `(${rarityScore.toFixed(0)})`}
      </h4>
      <img
        alt={name || ""}
        src={"https://ipfs.io/ipfs/" + metadata?.image?.replace("ipfs://", "")}
        width={296}
      />
    </div>
  );
};
