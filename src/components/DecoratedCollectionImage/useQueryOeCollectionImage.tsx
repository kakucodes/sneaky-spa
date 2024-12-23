import { useQuery } from "@tanstack/react-query";
import { STARGAZE_ENDPOINT } from "../../config";
import { OeCollectionNftAssetQueryDocument } from "../../gql/graphql";
import request from "graphql-request";

export const useQueryOeCollectionImage = (
  collectionAddr: string,
  enabled: boolean
) =>
  useQuery({
    queryKey: ["oe-collection-image", collectionAddr],
    queryFn: () =>
      request(STARGAZE_ENDPOINT, OeCollectionNftAssetQueryDocument, {
        collectionAddr,
        tokenId: "1",
      })
        .then((resp) => resp.token?.metadata.image as string | undefined)
        .then(
          (image) =>
            image && `https://ipfs.io/ipfs/${image.replace("ipfs://", "")}`
        ),
    enabled,
    staleTime: 1000 * 60 * 30,
  });
