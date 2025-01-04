import { useQuery } from "@tanstack/react-query";
import { getStoreItems } from "../../utils/storeItems";

export const useQueryPlushies = () =>
  useQuery({
    queryKey: ["plushies"],
    queryFn: getStoreItems,
    staleTime: 1000 * 60 * 60,
  });
