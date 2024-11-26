import React,{useEffect, useState} from 'react'
import Image from 'next/image'
import { MdVerified,MdCloudUpload,MdTimer,MdReportProblem,MdOutlineDeleteSweep } from 'react-icons/md'
import { BsThreeDots } from 'react-icons/bs'
import { FaWallet,FaPercentage } from 'react-icons/fa'
import { TiSocialFacebook,TiSocialLinkedin,TiSocialYoutube,TiSocialInstagram,TiArrowSortedDown,TiSocialTwitter,TiArrowSortedUp} from 'react-icons/ti'
import { BiTransferAlt,BiDollar } from 'react-icons/bi'
import Style from "./NFTDescription.module.css"
import images from "../../img"
import Button from "../../components/Button/Button"
import NFTTabs from "../NFTTabs/NTFTabs"
import { ethers } from 'ethers';

const NFTDescription = ({nft}) => {


  const [social,setSocial]=useState(false);
  const [NFTMenu, setNFTMenu] = useState(false);
  const [history, setHistory] = useState(true)
  const [provanance, setProvanance] = useState(false)
  const [owner, setOwner] = useState(false)

  const historyArray=[
    images.user1,
    images.user2,
    images.user3,
    images.user4,
    images.user5,
    images.user6,
  ]
  const provananceArray=[
    images.user8,
    images.user10,
    images.user5,
    images.user6,
  ]
  const ownerArray=[
    images.user2,
    images.user4,
    images.user5,
    images.user6,
    images.user7,
    images.user9,
  ]

  const openSocial=()=>{
    if(!social){
      setSocial(true);
      setNFTMenu(false);
    }else{
      setSocial(false);
    }
  }

  const openNFTMenu=()=>{
    if(!NFTMenu){
      setNFTMenu(true);
      setSocial(false);
    }else{
      setNFTMenu(false);
    }
  }

  const openTabs=(e)=>{
    const btnText=e.target.innerText;
    if(btnText == "Bid History"){
      setHistory(true);
      setProvanance(false);
      setOwner(false);
    }else if(btnText == "Provanance"){
      setHistory(false);
      setProvanance(true);
      setOwner(false);
    }
  }

  const openOwner=()=>{
    if(!owner){
        setOwner(true);
        setHistory(false);
        setProvanance(false);
    }else{
        setOwner(false);
        setHistory(true);
    }
  }

  

  return (
    <div className={Style.NFTDescription}>
      <div className={Style.NFTDescription_box}>
        {/*part one*/}
        <div className={Style.NFTDescription_box_share} >
          <p>Virtual Worlds</p>
          <div className={Style.NFTDescription_box_share_box}>
            <MdCloudUpload className={Style.NFTDescription_box_share_box_icon} onClick={()=>openSocial()} />
            {social && (
            <div className={Style.NFTDescription_box_share_box_social} >
                <a href="#" className={Style.NFTDescription_box_share_box_social_txt}  >
                    <TiSocialFacebook /> Facebook
                </a>
                <a href="#" className={Style.NFTDescription_box_share_box_social_txt} >
                    <TiSocialInstagram/> Instagram
                </a>
                <a href="#" className={Style.NFTDescription_box_share_box_social_txt} >
                    <TiSocialLinkedin/> Linkedin
                </a>
                <a href="#" className={Style.NFTDescription_box_share_box_social_txt} >
                    <TiSocialYoutube/> Youtube
                </a >
                <a href="#"  className={Style.NFTDescription_box_share_box_social_txt}>
                    <TiSocialTwitter/> Twitter
                </a>
            </div>
            )}
            <BsThreeDots className={Style.NFTDescription_box_share_box_icon} onClick={()=>openNFTMenu()} />
            {NFTMenu && (
              <div className={Style.NFTDescription_box_share_box_social}>
                <a href="#"  className={Style.NFTDescription_box_share_box_social_txt}>
                  <BiDollar/> Change Price 
                </a>
                <a href="#"  className={Style.NFTDescription_box_share_box_social_txt}>
                  <BiTransferAlt/> Transfer 
                </a>
                <a href="#"  className={Style.NFTDescription_box_share_box_social_txt}>
                  <MdReportProblem/> Report abouse 
                </a>
                <a href="#"  className={Style.NFTDescription_box_share_box_social_txt}>
                  <MdOutlineDeleteSweep/> Delete item 
                </a>
              </div>
            )}
          </div>
        </div>
        <div className={Style.NFTDescription_box_profile}>
          <h1>{nft.name} #{nft.tokenId}</h1>
          <div className={Style.NFTDescription_box_profile_box}>
              <div className={Style.NFTDescription_box_profile_box_left}>
                  <Image src={images.user5} alt="profile" className={Style.NFTDescription_box_profile_box_left_img} />
                  <div className={Style.NFTDescription_box_profile_box_left_info}>
                    <small>Creator</small> <br/>
                    <span>
                      Karila Costa <MdVerified/>
                    </span>
                  </div>
              </div>
              <div className={Style.NFTDescription_box_profile_box_right}>
               <Image src={images.user3} alt="profile" className={Style.NFTDescription_box_profile_box_left_img} />
               <div className={Style.NFTDescription_box_profile_box_right_info}>
                  <small>Creator</small> <br></br>
                  <span>
                   Karila Costa <MdVerified/>
                  </span>
               </div>
              </div>
          </div>
        
        <div className={Style.NFTDescription_box_profile_biding}>
            <p>
              <MdTimer/> <span>Auction ending in:</span> 
            </p>
            <div className={Style.NFTDescription_box_profile_biding_box_timer}>
              <div className={Style.NFTDescription_box_profile_biding_box_timer_item}>
                <p>2</p>
                <span>Days</span>
              </div>
              <div className={Style.NFTDescription_box_profile_biding_box_timer_item}>
                <p>10</p>
                <span>Hours</span>
              </div>
              <div className={Style.NFTDescription_box_profile_biding_box_timer_item}>
                <p>40</p>
                <span>mins</span>
              </div>
              <div className={Style.NFTDescription_box_profile_biding_box_timer_item}>
                <p>15</p>
                <span>secs</span>
              </div>
            </div>
            <div className={Style.NFTDescription_box_profile_biding_box_price}>
              <div className={Style.NFTDescription_box_profile_biding_box_price_bid}>
                <small>Current Bid</small>
                <p>
                {nft.price} ETH <span>(≈ $3,221.22)</span>
                </p>
              </div>
              <span>[96 in stock]</span>
            </div>
            <div className={Style.NFTDescription_box_profile_biding_box_button}>
              <Button
               icon= {<FaWallet/>}
               btnName="Place a bid"
               handleClick={()=>{}}
               classStyle={Style.button}
              />
              <Button
               icon= {<FaPercentage/>}
               btnName="Make Offer"
               handleClick={()=>{}}
               classStyle={Style.button}
              />
            </div>
            <div className={Style.NFTDescription_box_profile_biding_box_tabs}>
                <button onClick={(e)=>openTabs(e)} >Bid History</button>
                <button onClick={(e)=>openTabs(e)} >Provanance</button>
                <button onClick={(e)=>openOwner()} >Owner</button>
            </div>
            {history && (
              <div className={Style.NFTDescription_box_profile_biding_box_card} >
                  <NFTTabs dataTab={historyArray} />
              </div>
            )}
             {provanance && (
              <div className={Style.NFTDescription_box_profile_biding_box_card} >
                  <NFTTabs dataTab={provananceArray} />
              </div>
            )}
            {owner && (
              <div className={Style.NFTDescription_box_profile_biding_box_card} >
                  <NFTTabs dataTab={ownerArray} icon={<MdVerified/>} />
              </div>
            )}
        </div>
      </div>
      </div>
    </div>
  )
}

export default NFTDescription