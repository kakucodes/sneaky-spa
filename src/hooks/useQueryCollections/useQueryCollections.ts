import { usePrefetchQuery, useQuery } from "@tanstack/react-query";
import { request } from "graphql-request";
import {
  CollectionsQueryDocument,
  CollectionsQueryQuery,
  UserNftCollectionFragment,
} from "../../gql/graphql";
import { COLLECTION_ADDRS, STARGAZE_ENDPOINT } from "../../config";

export type CollectionInfo = NonNullable<
  CollectionsQueryQuery["collections"]
>["collections"][number] &
  UserNftCollectionFragment;

const queryCollection = {
  queryKey: ["collections"],
  queryFn: () =>
    request(STARGAZE_ENDPOINT, CollectionsQueryDocument, {
      filtersByAddrs: COLLECTION_ADDRS,
    }).then(({ collections }) =>
      collections?.collections.sort(
        (a, b) => (b.floor?.amountUsd || 0) - (a.floor?.amountUsd || 0)
      )
    ),
  staleTime: 1000 * 60 * 30,
};

export const useQueryCollections = () => useQuery(queryCollection);

export const usePrefetchCollections = () => usePrefetchQuery(queryCollection);
