import React from 'react'
import Image from 'next/image'
//internal import
import Style from "./LikeProfile.module.css"
import images from "../../img"

const LikeProfile = () => {
  const imageArray=[1,2,3,4];
  return (
    <div className={Style.like}>
      {imageArray.map((el,i)=>(
        <div className={Style.like_box} key={i+1}>
            <Image src={images.user1}  />
        </div>
      ))}
    </div>
  )
}

export default LikeProfile