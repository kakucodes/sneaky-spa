import { useQuery } from "@tanstack/react-query";
import { useGetSgCWClient } from "./useGetCWClient";
import { CosmWasmClient } from "@cosmjs/cosmwasm-stargate";
import { contracts as stardexContracts } from "@stargazezone/stardex-client";
import { SNEAKY_TOKEN_CHAINS, STARGAZE_POOL } from "@/config";
import { useAccount } from "graz";
import { coin } from "@cosmjs/stargate";

export const useQueryStardexPoolPair = (
  client: CosmWasmClient | undefined,
  poolContractAddress: string
) =>
  useQuery({
    queryKey: ["stardexPoolPair", poolContractAddress],
    queryFn: async () => {
      if (!client) {
        throw new Error("Client not found");
      }
      return new stardexContracts.StardexPair.StardexPairQueryClient(
        // @ts-expect-error cosmjs client versions don't match
        client,
        poolContractAddress
      ).pool();
    },
    enabled: !!client,
    staleTime: 1000 * 60 * 20,
  });

export const useQueryStardexSneakyPairInfo = (poolAddress: string) => {
  const { data: client } = useGetSgCWClient();
  return useQueryStardexPoolPair(client, poolAddress);
};

export const useQueryStardexOwnedPoolShares = (
  client: CosmWasmClient | undefined,
  poolAddress: string,
  address: string | undefined
) =>
  useQuery({
    queryKey: ["stardexOwnedPoolShares", poolAddress, address],
    queryFn: async () =>
      client &&
      address &&
      client.getBalance(address, `factory/${poolAddress}/astroport/share`),
    enabled: !!client && !!address,
    staleTime: 1000 * 60 * 20,
  });

const sneakyDenom = SNEAKY_TOKEN_CHAINS["stargaze-1"];

export const useQueryStardexSneakyPoolShare = () => {
  const { data: account, isLoading: isAccountLoading } = useAccount();
  const { data: client, isLoading: isClientLoading } = useGetSgCWClient();
  const { data: poolInfo, isLoading: isPoolInfoLoading } =
    useQueryStardexPoolPair(client, STARGAZE_POOL);
  const { data: ownedPoolShares, isLoading: isOwnedPoolSharesLoading } =
    useQueryStardexOwnedPoolShares(
      client,
      STARGAZE_POOL,
      account?.bech32Address
    );

  const usneakyInPool =
    poolInfo &&
    Number(
      poolInfo?.assets.find(
        ({ info }) =>
          "native_token" in info && info.native_token.denom === sneakyDenom
      )?.amount || "0"
    );

  const ownedSneakyTokens =
    usneakyInPool && poolInfo && ownedPoolShares
      ? coin(
          Number(
            (
              (Number(ownedPoolShares?.amount) / Number(poolInfo.total_share)) *
              usneakyInPool
            ).toFixed(0)
          ),
          sneakyDenom
        )
      : undefined;

  return {
    data: ownedSneakyTokens,
    isLoading:
      isAccountLoading ||
      isClientLoading ||
      isPoolInfoLoading ||
      isOwnedPoolSharesLoading,
  };
};
