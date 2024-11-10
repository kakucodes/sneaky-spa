import { useQuery } from "@tanstack/react-query";
import { request } from "graphql-request";
import { CollectionsQueryDocument } from "../../gql/graphql";
import { COLLECTION_ADDRS, STARGAZE_ENDPOINT } from "../../config";

export const useQueryCollections = () =>
  useQuery({
    queryKey: ["collections"],
    queryFn: () =>
      request(STARGAZE_ENDPOINT, CollectionsQueryDocument, {
        filtersByAddrs: COLLECTION_ADDRS,
      }),
  });
