import { usePrefetchQuery, useQuery } from "@tanstack/react-query";

export type OsmosisToken = {
  symbol: string;
  denom: string;
  name: string;
  display: string;
  main: boolean;
  exponent: number;
  coingecko_id: null | string;
  volume_24h: number;
  volume_24h_change: number;
  price: number;
  price_1h_change: number;
  price_24h_change: number;
  price_7d_change: number;
  liquidity: number;
  liquidity_24h_change: number;
  coingecko_mcap: null | string;
};

export const useQueryOsmosisToken = (symbol: string) =>
  useQuery({
    queryKey: ["osmosis-token", symbol],
    queryFn: () =>
      fetch(`https://public-osmosis-api.numia.xyz/tokens/v2/${symbol}`)
        .then((res) => res.json())
        .then((data: [OsmosisToken]) => data[0]),
    staleTime: 1000 * 60 * 60 * 20,
  });

export const usePrefetchOsmosisToken = (symbol: string) =>
  usePrefetchQuery({
    queryKey: ["osmosis-token", symbol],
    queryFn: () =>
      fetch(`https://public-osmosis-api.numia.xyz/tokens/v2/${symbol}`)
        .then((res) => res.json())
        .then((data: [OsmosisToken]) => data[0]),
    staleTime: 1000 * 60 * 60 * 20,
  });
