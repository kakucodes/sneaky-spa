import { useQuery } from "@tanstack/react-query";
import request from "graphql-request";
import { useAccount } from "graz";
import { COLLECTION_ADDRS, STARGAZE_ENDPOINT } from "../../config";
import {
  NftFragment,
  UserNftsQueryDocument,
  UserNftsQueryQuery,
} from "../../gql/graphql";

export type NftInfo = NonNullable<
  UserNftsQueryQuery["tokens"]
>["tokens"][number] &
  NftFragment;

export const queryNfts = (address: string) =>
  request(STARGAZE_ENDPOINT, UserNftsQueryDocument, {
    tokensOwnerAddrOrName: address,
    filterByCollectionAddrs: COLLECTION_ADDRS,
  }).then(({ tokens }) =>
    // @ts-ignore
    tokens?.tokens.sort((a, b) => (b?.rarityScore || 0) - (a?.rarityScore || 0))
  );

export const useQueryNfts = () => {
  const { data: account } = useAccount();

  return useQuery({
    queryKey: ["user-nfts", account?.bech32Address],
    queryFn: () =>
      account?.bech32Address ? queryNfts(account.bech32Address) : undefined,
    enabled: !!account?.bech32Address,
  });
};
