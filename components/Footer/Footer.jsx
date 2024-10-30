import React from 'react'
import Image from 'next/image'
import { TiSocialFacebook,TiSocialLinkedin,TiSocialYoutube,TiSocialInstagram,TiArrowSortedDown,TiSocialTwitter,TiArrowSortedUp} from 'react-icons/ti'
import { RiSendPlaneFill } from 'react-icons/ri'
//Internal Import
import Style from "./Footer.module.css"
import images from "../../img"
import {Discover,HelpCenter} from "../navBar/index"
import { Input } from 'postcss'


const Footer = () => {
  return (
    <div className={Style.footer} >
      <div className={Style.footer_box} >
        <div className={Style.footer_box_social} >
          <Image src={images.logo} alt="footer logo" height={100} width={100} />
          <p>The best digital marketplace for non-fungible tokens(NFTS)</p>
          <div className={Style.footer_social} >
            <a href="#" className={Style.social} >
              <TiSocialFacebook/> 
            </a>
            <a href="#" className={Style.social} >
              <TiSocialLinkedin/>
            </a>
            <a href="#" className={Style.social} >
              <TiSocialTwitter/>
            </a>
            <a href="#" className={Style.social} >
              <TiSocialYoutube/>
            </a>
            <a href="#" className={Style.social} >
              <TiSocialInstagram/>
            </a>
          </div>
        </div>
        <div className={Style.footer_box_discover} >
          <h3>Discover</h3>
            <Discover/>
        </div>

        <div className={Style.footer_box_help} >
          <h3>Help Center</h3>
            <HelpCenter/>
        </div>
        <div className={Style.subscribe}>
        <h3>Subscribe</h3>
        
        <div className={Style.subscribe_box} >
          <input type='email' placeholder="enter your email *" />
          <RiSendPlaneFill className={Style.subscribe_box_send}/>
        </div>  
        <div className={Style.subscribe_box_info} >
          <p>Discover,collect and sell NFTs</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer