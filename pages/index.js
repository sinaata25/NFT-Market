import React from 'react'
//Internal Import
import Style from "../styles/index.module.css"
import {HeroSection,Service,BigNftSlider,Subscribe,Title} from "../components/ComponentIndex"

const Home = () => {
  return (
    <div className={Style.homePage} >
      <HeroSection/>
      <Service/>
      <BigNftSlider/>
      <Title heading="Browse by category"  paragraph="Explore the most featured categories" />
      <Subscribe/>
    </div>
  )
}

export default Home