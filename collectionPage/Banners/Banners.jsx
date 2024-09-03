import React from 'react'
import Style from "./Banners.module.css"
import Image from 'next/image'
const Banners = ({bannerImage}) => {
  return (
    <div className={Style.banner}>
      <div className={Style.banner_img}>
        <Image src={bannerImage} objectFit="cover" alt="background" className={Style.banner_img_img} />
      </div>
      <div className={Style.banner_img_mobile}>
        <Image src={bannerImage} objectFit="cover" alt="background" width={1600} height={900} />
      </div>
    </div>
  )
}

export default Banners