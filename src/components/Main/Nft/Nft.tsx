import { NftFragment } from "../../../gql/graphql";

type Props = {
  token: NftFragment & { count: number };
};

export const Nft = ({
  token: { name, metadata, rarityScore, tokenId, count },
}: Props) => {
  return (
    <div className="col-12 col-md-6 col-xl-4">
      <h4>
        {name} {count > 1 && `x${count}`} 
        {count === 1 && ` (#${tokenId})`}
        <span className="text-uppercase small">{rarityScore && ` (${rarityScore.toFixed(0)})`}</span>
      </h4>
      <img
        className="img-fluid custom-border custom-border-width mb-2"
        alt={name || ""}
        src={"https://ipfs.io/ipfs/" + metadata?.image?.replace("ipfs://", "")}
        width={296}
      />
    </div>
  );
};
