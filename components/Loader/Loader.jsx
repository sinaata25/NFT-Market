import React from 'react'
import Style from "./Loader.module.css"
import Image from 'next/image'
import images from "../../img"


const Loader = () => {
  return (
    <div className={Style.Loader}>
        <div className={Style.Loader_box}>
            <div className={Style.Loader_box_img}>
                <Image src={images.loading} alt="loader" width={150} height={150} className={Style.Loader_box_img_img} objectFit="cover" />

            </div>
        </div>
    </div>
  )
}

export default Loader