import { useQuery } from "@tanstack/react-query";
import request from "graphql-request";
import { useAccount } from "graz";
import { COLLECTION_ADDRS, STARGAZE_ENDPOINT } from "../../config";
import { UserNftsQueryDocument } from "../../gql/graphql";

export const queryNfts = (address: string) =>
  request(STARGAZE_ENDPOINT, UserNftsQueryDocument, {
    tokensOwnerAddrOrName: address,
    filterByCollectionAddrs: COLLECTION_ADDRS,
  }).then(({ tokens, collections }) => ({
    tokens: tokens?.tokens,
    collections: collections?.collections,
  }));

export const useQueryNfts = () => {
  const { data: account } = useAccount();

  return useQuery({
    queryKey: ["user-nfts", account?.bech32Address],
    queryFn: () =>
      account?.bech32Address ? queryNfts(account.bech32Address) : undefined,
    enabled: !!account?.bech32Address,
  });
};
