import React,{useState} from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { GrClose } from 'react-icons/gr'
import { TiSocialFacebook,TiSocialLinkedin,TiSocialYoutube,TiSocialInstagram,TiArrowSortedDown,TiSocialTwitter,TiArrowSortedUp} from 'react-icons/ti'

//Internal Import
import Style from "./SideBar.module.css"
import images from "../../../img"
import Button from "../../Button/Button"

const SideBar = ({setOpenSideMenu,currentAccount}) => {
  const [openDiscover, setOpenDiscover] = useState(false)
  const [opneHelp, setOpneHelp] = useState(false)
  //discover  
  const discover = [
    {
      name:"Collection",
      link:"collection"
    },
    {
      name:"Search",
      link:"searchPage"
    },
    {
      name:"Author Profile",
      link:"author-profile"
    },
    {
      name:"NFT Details",
      link:"nft-details"
    },
    {
      name:"Account Setting",
      link:"account-setting"
    },
    {
      name:"Connect Wallet",
      link:"connect-wallet"
    },
    {
      name:"Blog",
      link:"blog"
    }

  ]
  //helpCneter
  const helpCenter=[
    {
      name:"About",
      link:"about"
    },
    {
      name:"Contact Us",
      link:"contact-us"
    },
    {
      name:"Sign Up",
      link:"sign-up"
    },
    {
      name:"Sign in",
      link:"sign-in"
    },
    {
      name:"Subscription",
      link:"subscription"
    },
  ]

  const openDiscoverMenu = ()=> {
    if(!openDiscover){
      setOpenDiscover(true);
    }else{
      setOpenDiscover(false);
    }
  }

  const openHelpMenu = ()=> {
    if(!opneHelp){
      setOpneHelp(true);
    }else{
      setOpneHelp(false);
    }
  }

  const closeSideBar = ()=>{
    setOpenSideMenu(false);
  }

  return (
    <div className={Style.sidebar}>
      <GrClose className={Style.sideBar_closeBtn} onClick={()=>closeSideBar()} />
      <div className={Style.sideBar_box} >
        <Image src={images.logo} alt="logo" width={150} height={150} />
        <p>Discover the most outstanding articles on all topics of NFT own stories and share them</p>
        <div className={Style.sideBar_social}>
          <a href="#" >
            <TiSocialFacebook/>
          </a>
          <a href="#" >
            <TiSocialLinkedin/>
          </a>
          <a href="#" >
            <TiSocialTwitter/>
          </a>
          <a href="#" >
            <TiSocialYoutube/>
          </a>
          <a href="#" >
            <TiSocialInstagram/>
          </a>
        </div>
      </div>
      <div className={Style.sideBar_menu} >
        <div>
          <div  className={Style.sideBar_menu_box} onClick={()=>openDiscoverMenu()}>
            <p>Discover</p>
            <TiArrowSortedDown/>
          </div>
          {
            openDiscover && (<div className={Style.sideBar_discover} >
              {
                  discover.map((el,i)=>(
                    <p key={i+1} >
                      <Link href={{pathname:`${el.link}`}} className={Style.sideBar_text} >{el.name}</Link>
                    </p>
                  ))
              }
            </div>)
          }
        </div>

        <div>
          <div  className={Style.sideBar_menu_box} onClick={()=>openHelpMenu()}>
            <p>Help Center</p>
            <TiArrowSortedDown/>
          </div>
          {
            opneHelp && (<div className={Style.sideBar_discover} >
              {
                  helpCenter.map((el,i)=>(
                    <p key={i+1} >
                      <Link href={{pathname:`${el.link}`}}  className={Style.sideBar_text} >{el.name}</Link>
                    </p>
                  ))
              }
            </div>)
          }
        </div>          
      </div>
      
      <div className={Style.sideBar_button} >
        <Button btnName="Create" handleClick={()=>{}} />
        <Button btnName="Connect Wallet" handleClick={()=>{}} />
      </div>

    </div>
  )
}

export default SideBar