import { usePrefetchCollections } from "./useQueryCollections/useQueryCollections";
import { usePrefetchOsmosisToken } from "./useQueryOsmosisToken";

export const usePrefetchQueries = () => {
  usePrefetchCollections();
  usePrefetchOsmosisToken("SNEAKY");
};
