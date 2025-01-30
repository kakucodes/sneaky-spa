import { useQuery } from "@tanstack/react-query";
import { getStoreCards, getStorePlushies } from "../../utils/storeItems";

export const useQueryPlushies = () =>
  useQuery({
    queryKey: ["plushies"],
    queryFn: getStorePlushies,
    staleTime: 1000 * 60 * 60,
  });

export const useQueryCards = () =>
  useQuery({
    queryKey: ["cards"],
    queryFn: getStoreCards,
    staleTime: 1000 * 60 * 60,
  });
