import React from 'react'
import Image from 'next/image'
import Style from "./Profile.module.css"
import { TiSocialFacebook,TiSocialLinkedin,TiSocialYoutube,TiSocialInstagram,TiArrowSortedDown,TiSocialTwitter,TiArrowSortedUp} from 'react-icons/ti'
import images from "../../img"


const collectionProfile = () => {
  const cardArray=[1,2,3,4];

  return (
    <div className={Style.collectionProfile}>
      <div className={Style.collectionProfile_box}>
        <div className={Style.collectionProfile_box_left}>
          <Image src={images.nft_image_1} alt="nft image" className={Style.collectionProfile_box_left_img} />
          <div className={Style.collectionProfile_box_left_social}>
            <a href="#">
              <TiSocialFacebook/>
            </a>
            <a href="#">
              <TiSocialInstagram/>
            </a>
            <a href="#">
              <TiSocialLinkedin/>
            </a>
            <a href="#">
              <TiSocialTwitter/>
            </a>
          </div>
        </div>
        <div className={Style.collectionProfile_box_middle}>
          <h1>Awesome NFTs Collection</h1>
          <p>some text</p>
          <div className={Style.collectionProfile_box_middle_box}>
              {cardArray.map((el,i)=>(
                <div className={Style.collectionProfile_box_middle_box_item}>
                  <small>Floor price</small>
                    <p>${i+1}95,8739</p>
                    <span>+{i+2}.11%</span>
                </div>
              ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default collectionProfile