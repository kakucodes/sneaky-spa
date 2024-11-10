import { useQuery } from "@tanstack/react-query";
import { request } from "graphql-request";
import { StargazeNameQueryDocument } from "../../gql/graphql";
import { STARGAZE_ENDPOINT } from "../../config";
import { useAccount } from "graz";

export const useQueryStargazeName = () => {
  const { data } = useAccount();
  const stargazeAddr = data?.bech32Address;

  return useQuery({
    queryKey: ["stargaze-name", stargazeAddr],
    queryFn: () =>
      request(STARGAZE_ENDPOINT, StargazeNameQueryDocument, {
        ownerAddr: stargazeAddr,
      }).then(
        ({ names }) =>
          names?.names.find(
            ({ associatedAddr }) => associatedAddr === stargazeAddr
          )?.name
      ),
    enabled: !!stargazeAddr,
  });
};
