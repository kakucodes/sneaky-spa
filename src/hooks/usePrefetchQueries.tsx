import { STARGAZE_POOL } from "../config";
import { usePrefetchCollections } from "./useQueryCollections/useQueryCollections";
import { usePrefetchOsmosisToken } from "./useQueryOsmosisToken";
import { useQueryStardexSneakyPairInfo } from "./useQueryStardexPoolPair";

export const usePrefetchQueries = () => {
  useQueryStardexSneakyPairInfo(STARGAZE_POOL);
  usePrefetchCollections();
  usePrefetchOsmosisToken("SNEAKY");
};
