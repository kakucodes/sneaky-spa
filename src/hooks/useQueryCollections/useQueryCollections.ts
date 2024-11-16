import { usePrefetchQuery, useQuery } from "@tanstack/react-query";
import { request } from "graphql-request";
import { CollectionsQueryDocument } from "../../gql/graphql";
import { COLLECTION_ADDRS, STARGAZE_ENDPOINT } from "../../config";

const queryCollection = {
  queryKey: ["collections"],
  queryFn: () =>
    request(STARGAZE_ENDPOINT, CollectionsQueryDocument, {
      filtersByAddrs: COLLECTION_ADDRS,
    }).then(({ collections }) => collections?.collections),
};

export const useQueryCollections = () =>
  useQuery({ ...queryCollection, staleTime: 1000 * 60 * 30 });

export const usePrefetchCollections = () => usePrefetchQuery(queryCollection);
