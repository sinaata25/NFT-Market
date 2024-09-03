import React from 'react'
//internal import
import Style from "../styles/collection.module.css"
import images from "../img"
import {Banners,collectionProfile} from "../collectionPage/collectionIndex"
import {Slider,Brand} from "../components/ComponentIndex"
import Filter from '../components/Filter/Filter'

const collection = () => {
  return (
    <div className={Style.collection}>
      <Banners bannerImage={images.creatorbackground1} />
      <collectionProfile/>
    </div>
  )
}

export default collection