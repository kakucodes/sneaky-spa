import { CosmWasmClient } from "@cosmjs/cosmwasm-stargate";
import { useQuery } from "@tanstack/react-query";

export const useGetSgCWClient = () =>
  useQuery({
    queryKey: ["sgCWClient"],
    queryFn: () =>
      CosmWasmClient.connect("https://rpc.cosmos.directory/stargaze"),
  });
