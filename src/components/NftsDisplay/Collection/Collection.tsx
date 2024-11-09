import { match, P } from "ts-pattern"
import { CollectionMintStatus, NftCollectionFragment, NftFragment } from "../../../gql/graphql"
import { Nft } from "../Nft/Nft"


type Props = {
    collection: NftCollectionFragment,
    nfts: NftFragment[]
}

export const Collection = ({ collection, nfts }: Props) => {

    return <div><div>{collection.name} {match([collection.mintStatus, collection.minter?.publicSale?.endTime])
        .with([CollectionMintStatus.FullyMinted, P._], () => <></>)
        .with([P.nullish, P._], () => <></>)
        .with([CollectionMintStatus.Minting,
        P.string.and(P.when((endTime) =>
            new Date(Number((BigInt(endTime as string) / 1000000n).toString())) < new Date())
        )], () => <></>)
        .with([CollectionMintStatus.Minting, P._], () => <a target="_blank" referrerPolicy="no-referrer" rel="noreferrer"
            href={`https://www.stargaze.zone/l/${collection.contractAddress}`}>Mint Now!</a>)
        .with([CollectionMintStatus.Upcoming, P._], () => <>Coming Soon</>)

        .exhaustive()}</div>
        <div className="collectionNfts">{nfts.length === 0 ? "None :(" : nfts.map(nft =>
            <Nft key={`${nft.tokenId}`} token={nft} />
        )}</div>
        <br /></div>

}