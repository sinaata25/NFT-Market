import React from 'react'
//Internal Import
import Style from "../styles/index.module.css"
import {HeroSection,Service,BigNftSlider,Subscribe} from "../components/ComponentIndex"

const Home = () => {
  return (
    <div className={Style.homePage} >
      <HeroSection/>
      <Service/>
      <BigNftSlider/>
      <Subscribe/>
    </div>
  )
}

export default Home