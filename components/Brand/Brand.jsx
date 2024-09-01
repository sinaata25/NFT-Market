import React from 'react'
import Image from 'next/image'
//internal import
import Style from "./Brand.module.css"
import images from "../../img"
import { Button } from "../../components/ComponentIndex"
const Brand = () => {
  return (
    <div className={Style.Brand}>
        <div className={Style.Brand_box}>
            <div className={Style.Brand_box_left}>
                <Image src={images.logo} alt="brand logo" className={Style.Brand_box_left_img} />
                <h1>Earn free crypto with cys</h1>
                <p>A creative agency that lead and inspire</p>
                <div className={Style.Brand_box_left_btn}>
                    <Button btnName="Create" handleClick={()=>{}} />
                    <Button btnName="Discover" handleClick={()=>{}} />
                </div>
            </div>
            <div className={Style.Brand_box_right}>
                 <Image src={images.earn} alt="brand logo" className={Style.Brand_box_right_img} />
            </div>
        </div>
    </div>
  )
}

export default Brand