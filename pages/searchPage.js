import React from 'react'
import Style from "../styles/searchPage.module.css"
import {Slider,Brand, Filter} from "../components/ComponentIndex"
import {SearchBar} from "../SearchPage/searchBarIndex"
import NftCardTwo from "../collectionPage/NftCardTwo/NftCardTwo"
import images from "../img"

const searchPage = () => {

    const collectionArray=[
      images.nft_image_1,
      images.nft_image_2,
      images.nft_image_3,
      images.nft_image_2,
      images.nft_image_5,
      images.nft_image_1,
    ]

  return (
    <div className={Style.searchPage}>
        <SearchBar/>
        <Filter/>
        <NftCardTwo NFTData={collectionArray} />
        <Slider/>
        <Brand/>
    </div>
  )
}

export default searchPage