import { NftFragment } from "../../../gql/graphql";

type Props = {
  token: NftFragment & { count: number };
};

export const Nft = ({ token: { name, metadata } }: Props) => {
  return (
    <div className="col-10 col-xxl-7 col-xl-6 col-lg-8 col-sm-12">
      <h4>{name}</h4>
      <img
        className="img-fluid custom-border custom-border-width mb-2"
        alt={name || ""}
        src={"https://ipfs.io/ipfs/" + metadata?.image?.replace("ipfs://", "")}
        width={296}
      />
    </div>
  );
};
