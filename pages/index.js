import React from 'react'
//Internal Import
import Style from "../styles/index.module.css"
import {HeroSection,Service,BigNftSlider,Subscribe,Title,Category,Filter,NFTCard} from "../components/ComponentIndex"

const Home = () => {
  return (
    <div className={Style.homePage} >
      <HeroSection/>
      <Service/>
      <BigNftSlider/>
      <Title heading="Featured NFTs"  paragraph="Discover the most outstanding NFTs in all topics of life" />
      <Filter/>
      <NFTCard/>
      <Title heading="Browse by category"  paragraph="Explore the most featured categories" />
      <Category/>
      <Subscribe/>
    </div>
  )
}

export default Home