import React from 'react'
//Internal Import
import Style from "../styles/index.module.css"
import {HeroSection,Service,BigNftSlider,Subscribe,Title,Category,Filter,NFTCard, Collection,FollowerTab,AudioLive,Slider,Brand} from "../components/ComponentIndex"

const Home = () => {
  return (
    <div className={Style.homePage} >
      <HeroSection/>
      <Service/>
      <BigNftSlider/>
        <Title heading="Audio Collection"  paragraph="Discover the most outstanding NFTs in all topics of life" />
        <AudioLive/>
      <FollowerTab/>
      <Title heading="Explore NFT Videos"  paragraph="Click on play icon and enjoy NFTs Video" />
      <Slider/>
      <Collection/>
      <Title heading="Featured NFTs"  paragraph="Discover the most outstanding NFTs in all topics of life" />
      <Filter/>
      <NFTCard/>
      <Title heading="Browse by category"  paragraph="Explore the most featured categories" />
      <Category/>
      <Subscribe/>
      <Brand/>
    </div>
  )
}

export default Home