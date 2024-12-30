import { useEffect } from "react";
import { STARGAZE_POOL } from "../config";
import { useQueryCollections } from "./useQueryCollections/useQueryCollections";
import { usePrefetchOsmosisToken } from "./useQueryOsmosisToken";
import { useQueryStardexSneakyPairInfo } from "./useQueryStardexPoolPair";

export const usePrefetchQueries = () => {
  const { isFetched: areStardexPairsFetched } =
    useQueryStardexSneakyPairInfo(STARGAZE_POOL);
  const { isFetched: areCollectionsFetched } = useQueryCollections();
  usePrefetchOsmosisToken("SNEAKY");

  return { isFetched: areStardexPairsFetched && areCollectionsFetched };
};
