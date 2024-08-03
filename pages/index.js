import React from 'react'
//Internal Import
import Style from "../styles/index.module.css"
import {HeroSection} from "../components/ComponentIndex"

const Home = () => {
  return (
    <div className={Style.homePage} >
      <HeroSection/>
    </div>
  )
}

export default Home