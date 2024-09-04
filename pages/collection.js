import React from 'react'
//internal import
import Style from "../styles/collection.module.css"
import images from "../img"
import {Banners,Profile,NftCardTwo} from "../collectionPage/collectionIndex"
import {Slider,Brand,Title} from "../components/ComponentIndex"
import Filter from '../components/Filter/Filter'

const collection = () => {
  const collectionArray=[
    images.nft_image_1,
    images.nft_image_2,
    images.nft_image_3,
    images.nft_image_5,
    images.nft_image_1,
    images.nft_image_2,
    images.nft_image_3
  ]
  return (
    <div className={Style.collection}>
      <Banners bannerImage={images.creatorbackground1} />
      <Profile/>
      <Filter/>
      <NftCardTwo NFTData={collectionArray} />
      <Title heading="Explore NFT Videos"  paragraph="Click on play icon and enjoy NFTs Video" />
      <Slider/>
      <Brand/>
    </div>
  )
}

export default collection