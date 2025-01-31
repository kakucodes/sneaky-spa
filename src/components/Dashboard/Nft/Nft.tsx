import { NftFragment } from "../../../gql/graphql";
import Image from "next/image";

type Props = {
  token: NftFragment & { count: number };
};

export const Nft = ({ token: { name, metadata } }: Props) => {
  return (
    <div className="col-10 col-xxl-9 col-xl-9 col-lg-10 col-md-11 col-sm-12">
      <h4>{name}</h4>
      <Image
        className="img-fluid custom-border custom-border-width mb-2"
        alt={name || ""}
        src={"https://ipfs.io/ipfs/" + metadata?.image?.replace("ipfs://", "")}
        width={296}
        height={296}
      />
    </div>
  );
};
