/* eslint-disable */
import * as types from './graphql';
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';

/**
 * Map of all GraphQL operations in the project.
 *
 * This map has several performance disadvantages:
 * 1. It is not tree-shakeable, so it will include all operations in the project.
 * 2. It is not minifiable, so the string of a GraphQL query will be multiple times inside the bundle.
 * 3. It does not support dead code elimination, so it will add unused operations.
 *
 * Therefore it is highly recommended to use the babel or swc plugin for production.
 * Learn more about it here: https://the-guild.dev/graphql/codegen/plugins/presets/preset-client#reducing-bundle-size
 */
const documents = {
    "query OeCollectionNftAssetQuery($collectionAddr: String!, $tokenId: String!) {\n  token(collectionAddr: $collectionAddr, tokenId: $tokenId) {\n    metadata\n  }\n}": types.OeCollectionNftAssetQueryDocument,
    "fragment NftCollection on Collection {\n  contractAddress\n  name\n  description\n  floor {\n    amount\n    amountUsd\n    denom\n    symbol\n  }\n  mintStatus\n  highestOffer {\n    offerPrice {\n      amountUsd\n      amount\n      denom\n      symbol\n    }\n  }\n  minter {\n    publicSale {\n      endTime\n    }\n  }\n  media {\n    fallbackUrl\n    height\n    type\n    urls\n    width\n    visualAssets {\n      sm {\n        staticUrl\n        type\n        url\n        webpUrl\n        width\n        height\n      }\n    }\n  }\n}": types.NftCollectionFragmentDoc,
    "fragment Nft on Token {\n  name\n  description\n  metadata\n  rarityScore\n  tokenId\n  collection {\n    contractAddress\n  }\n}": types.NftFragmentDoc,
    "fragment UserNftCollection on Collection {\n  contractAddress\n  name\n  description\n  floor {\n    amount\n    amountUsd\n    denom\n    symbol\n  }\n  mintStatus\n  highestOffer {\n    offerPrice {\n      amountUsd\n      amount\n      denom\n      symbol\n    }\n  }\n  minter {\n    publicSale {\n      endTime\n    }\n  }\n  media {\n    fallbackUrl\n    height\n    type\n    urls\n    width\n    visualAssets {\n      sm {\n        staticUrl\n        type\n        url\n        webpUrl\n        width\n        height\n      }\n    }\n  }\n}": types.UserNftCollectionFragmentDoc,
    "query CollectionsQuery($filtersByAddrs: [String!]) {\n  collections(filterByAddrs: $filtersByAddrs, limit: 50) {\n    collections {\n      ...UserNftCollection\n      contractAddress\n      name\n      description\n      floor {\n        amount\n        amountUsd\n        denom\n        symbol\n      }\n      categories {\n        public\n      }\n      mintStatus\n      highestOffer {\n        offerPrice {\n          amountUsd\n          amount\n          denom\n          symbol\n        }\n      }\n    }\n  }\n}": types.CollectionsQueryDocument,
    "query UserNftsQuery($tokensOwnerAddrOrName: String, $filterByCollectionAddrs: [String!]) {\n  tokens(\n    ownerAddrOrName: $tokensOwnerAddrOrName\n    filterByCollectionAddrs: $filterByCollectionAddrs\n    limit: 200\n  ) {\n    tokens {\n      ...Nft\n      name\n      collection {\n        contractAddress\n        ...NftCollection\n        floor {\n          amount\n          amountUsd\n          denom\n          symbol\n        }\n      }\n      tokenId\n    }\n  }\n}": types.UserNftsQueryDocument,
    "query StargazeNameQuery($ownerAddr: String) {\n  names(ownerAddr: $ownerAddr) {\n    names {\n      name\n      associatedAddr\n    }\n  }\n}": types.StargazeNameQueryDocument,
};

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 *
 *
 * @example
 * ```ts
 * const query = graphql(`query GetUser($id: ID!) { user(id: $id) { name } }`);
 * ```
 *
 * The query argument is unknown!
 * Please regenerate the types.
 */
export function graphql(source: string): unknown;

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query OeCollectionNftAssetQuery($collectionAddr: String!, $tokenId: String!) {\n  token(collectionAddr: $collectionAddr, tokenId: $tokenId) {\n    metadata\n  }\n}"): (typeof documents)["query OeCollectionNftAssetQuery($collectionAddr: String!, $tokenId: String!) {\n  token(collectionAddr: $collectionAddr, tokenId: $tokenId) {\n    metadata\n  }\n}"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "fragment NftCollection on Collection {\n  contractAddress\n  name\n  description\n  floor {\n    amount\n    amountUsd\n    denom\n    symbol\n  }\n  mintStatus\n  highestOffer {\n    offerPrice {\n      amountUsd\n      amount\n      denom\n      symbol\n    }\n  }\n  minter {\n    publicSale {\n      endTime\n    }\n  }\n  media {\n    fallbackUrl\n    height\n    type\n    urls\n    width\n    visualAssets {\n      sm {\n        staticUrl\n        type\n        url\n        webpUrl\n        width\n        height\n      }\n    }\n  }\n}"): (typeof documents)["fragment NftCollection on Collection {\n  contractAddress\n  name\n  description\n  floor {\n    amount\n    amountUsd\n    denom\n    symbol\n  }\n  mintStatus\n  highestOffer {\n    offerPrice {\n      amountUsd\n      amount\n      denom\n      symbol\n    }\n  }\n  minter {\n    publicSale {\n      endTime\n    }\n  }\n  media {\n    fallbackUrl\n    height\n    type\n    urls\n    width\n    visualAssets {\n      sm {\n        staticUrl\n        type\n        url\n        webpUrl\n        width\n        height\n      }\n    }\n  }\n}"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "fragment Nft on Token {\n  name\n  description\n  metadata\n  rarityScore\n  tokenId\n  collection {\n    contractAddress\n  }\n}"): (typeof documents)["fragment Nft on Token {\n  name\n  description\n  metadata\n  rarityScore\n  tokenId\n  collection {\n    contractAddress\n  }\n}"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "fragment UserNftCollection on Collection {\n  contractAddress\n  name\n  description\n  floor {\n    amount\n    amountUsd\n    denom\n    symbol\n  }\n  mintStatus\n  highestOffer {\n    offerPrice {\n      amountUsd\n      amount\n      denom\n      symbol\n    }\n  }\n  minter {\n    publicSale {\n      endTime\n    }\n  }\n  media {\n    fallbackUrl\n    height\n    type\n    urls\n    width\n    visualAssets {\n      sm {\n        staticUrl\n        type\n        url\n        webpUrl\n        width\n        height\n      }\n    }\n  }\n}"): (typeof documents)["fragment UserNftCollection on Collection {\n  contractAddress\n  name\n  description\n  floor {\n    amount\n    amountUsd\n    denom\n    symbol\n  }\n  mintStatus\n  highestOffer {\n    offerPrice {\n      amountUsd\n      amount\n      denom\n      symbol\n    }\n  }\n  minter {\n    publicSale {\n      endTime\n    }\n  }\n  media {\n    fallbackUrl\n    height\n    type\n    urls\n    width\n    visualAssets {\n      sm {\n        staticUrl\n        type\n        url\n        webpUrl\n        width\n        height\n      }\n    }\n  }\n}"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query CollectionsQuery($filtersByAddrs: [String!]) {\n  collections(filterByAddrs: $filtersByAddrs, limit: 50) {\n    collections {\n      ...UserNftCollection\n      contractAddress\n      name\n      description\n      floor {\n        amount\n        amountUsd\n        denom\n        symbol\n      }\n      categories {\n        public\n      }\n      mintStatus\n      highestOffer {\n        offerPrice {\n          amountUsd\n          amount\n          denom\n          symbol\n        }\n      }\n    }\n  }\n}"): (typeof documents)["query CollectionsQuery($filtersByAddrs: [String!]) {\n  collections(filterByAddrs: $filtersByAddrs, limit: 50) {\n    collections {\n      ...UserNftCollection\n      contractAddress\n      name\n      description\n      floor {\n        amount\n        amountUsd\n        denom\n        symbol\n      }\n      categories {\n        public\n      }\n      mintStatus\n      highestOffer {\n        offerPrice {\n          amountUsd\n          amount\n          denom\n          symbol\n        }\n      }\n    }\n  }\n}"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query UserNftsQuery($tokensOwnerAddrOrName: String, $filterByCollectionAddrs: [String!]) {\n  tokens(\n    ownerAddrOrName: $tokensOwnerAddrOrName\n    filterByCollectionAddrs: $filterByCollectionAddrs\n    limit: 200\n  ) {\n    tokens {\n      ...Nft\n      name\n      collection {\n        contractAddress\n        ...NftCollection\n        floor {\n          amount\n          amountUsd\n          denom\n          symbol\n        }\n      }\n      tokenId\n    }\n  }\n}"): (typeof documents)["query UserNftsQuery($tokensOwnerAddrOrName: String, $filterByCollectionAddrs: [String!]) {\n  tokens(\n    ownerAddrOrName: $tokensOwnerAddrOrName\n    filterByCollectionAddrs: $filterByCollectionAddrs\n    limit: 200\n  ) {\n    tokens {\n      ...Nft\n      name\n      collection {\n        contractAddress\n        ...NftCollection\n        floor {\n          amount\n          amountUsd\n          denom\n          symbol\n        }\n      }\n      tokenId\n    }\n  }\n}"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query StargazeNameQuery($ownerAddr: String) {\n  names(ownerAddr: $ownerAddr) {\n    names {\n      name\n      associatedAddr\n    }\n  }\n}"): (typeof documents)["query StargazeNameQuery($ownerAddr: String) {\n  names(ownerAddr: $ownerAddr) {\n    names {\n      name\n      associatedAddr\n    }\n  }\n}"];

export function graphql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> = TDocumentNode extends DocumentNode<  infer TType,  any>  ? TType  : never;