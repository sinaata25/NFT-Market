import React from 'react'
import { useState,useEffect,useCallback } from 'react'
import Image from 'next/image'
import { AiFillFire,AiFillHeart,AiOutlineHeart} from 'react-icons/ai'
import { MdVerified,MdTimer } from 'react-icons/md'
import { TbArrowBigLeftLines,TbArrowBigRightLine } from 'react-icons/tb'
//Internal Import
import Style from "./BigNftSlider.module.css"
import images from "../../img"
import Button from "../Button/Button"

const BigNftSlider = () => {
    const [idNumber, setIdNumber] = useState(1);
    const sliderData=[
        {
            title:"Hello NFT",
            id:1,
            name:"Sina Ataei",
            collection:"GYm",
            price:"00000064664 ETH",
            like:5,
            image:images.user1,
            nftImage:images.nft_image_1,
            time:{
                days:10,
                hours:5,
                minutes:11,
                seconds:39
            }
        },
        {
            title:"SMT NFT",
            id:2,
            name:"Ali Shokri",
            collection:"Home",
            price:"00000000012 ETH",
            like:103,
            image:images.user2,
            nftImage:images.nft_image_2,
            time:{
                days:8,
                hours:7,
                minutes:3,
                seconds:45
            }
        },
        {
            title:"Gym NFT",
            id:3,
            name:"Sam Tevez",
            collection:"MK",
            price:"0000002 ETH",
            like:2,
            image:images.user3,
            nftImage:images.nft_image_3,
            time:{
                days:32,
                hours:7,
                minutes:8,
                seconds:55
            }
        },
        {
            title:"HM",
            id:4,
            name:"Mathew Perry",
            collection:"Gym",
            price:"00000548 ETH",
            like:438,
            image:images.user4,
            nftImage:images.nft_image_5,
            time:{
                days:98,
                hours:5,
                minutes:40,
                seconds:30
            }
        }
    ];

//increament
const inc = useCallback(()=>{
    if(idNumber+1<sliderData.length){
        setIdNumber(idNumber+1)
    }
},[idNumber,sliderData.length]);

//decrement
const dec = useCallback(()=>{
    if(idNumber>0){
        setIdNumber(idNumber-1)
    }
},[idNumber,sliderData.length]);




  return(
    <div className={Style.bigNftSlider} >
        <div className={Style.bigNftSlider_box} >
            <div className={Style.bigNftSlider_box_left} >
                <h2>{sliderData[idNumber].title}</h2>
                <div className={Style.bigNftSlider_box_left_creator} >
                    <div className={Style.bigNftSlider_box_left_creator_profile} >
                        <Image  className={Style.bigNftSlider_box_left_creator_profile_img} src={sliderData[idNumber].image} alt="profile image" width={50} height={50} />
                        <div className={Style.bigNftSlider_box_left_creator_profile_img} >
                            <p>Creator</p>
                            <h4>{sliderData[idNumber].name}
                            <span>
                                <MdVerified/>
                            </span>
                            </h4>
                        </div>
                    </div>   
                    <div className={Style.bigNftSlider_box_left_creator_collection} >
                        <AiFillFire className={Style.bigNftSlider_box_left_creator_collection_icon} />
                        <div className={Style.bigNftSlider_box_left_creator_collection_info} >
                            <p>Collection</p>
                            <h4>{sliderData[idNumber].collection}</h4>
                        </div>
                    </div>
                </div>
                <div className={Style.bigNftSlider_box_left_bidding} >
                    <div className={Style.bigNftSlider_box_left_bidding_box} >
                        <small>Current Bid</small>
                        <p>
                        {sliderData[idNumber].price} 
                        <span>$221,21</span>
                        </p>
                    </div>
                    <p className={Style.bigNftSlider_box_left_bidding_box_auction} >
                        <MdTimer className={Style.bigNftSlider_box_left_bidding_box_icon} />
                        <span>Auction ending in</span>
                    </p>
                    <div className={Style.bigNftSlider_box_left_bidding_box_timer} >
                        <div className={Style.bigNftSlider_box_left_bidding_box_timer_item} >
                            <p>{sliderData[idNumber].time.days}</p>
                            <span>Days</span>
                        </div>
                        <div className={Style.bigNftSlider_box_left_bidding_box_timer_item} >
                            <p>{sliderData[idNumber].time.hours}</p>
                            <span>hours</span>
                        </div>
                        <div className={Style.bigNftSlider_box_left_bidding_box_timer_item} >
                            <p>{sliderData[idNumber].time.minutes}</p>
                            <span>mins</span>
                        </div>
                        <div className={Style.bigNftSlider_box_left_bidding_box_timer_item} >
                            <p>{sliderData[idNumber].time.seconds}</p>
                            <span>secs</span>
                        </div>
                    </div>
                    <div className={Style.bigNftSlider_box_left_button} >
                        <Button btnName="place" handleClick={()=>{}} />
                        <Button btnName="view" handleClick={()=>{}} />
                    </div>
                </div>
                <div className={Style.bigNftSlider_box_left_sliderBtn} >
                    <TbArrowBigLeftLines className={Style.bigNftSlider_box_left_sliderBtn_icon} onClick={()=>dec()} />
                    <TbArrowBigRightLine className={Style.bigNftSlider_box_left_sliderBtn_icon} onClick={()=>inc()} />
                </div>
            </div>
            <div className={Style.bigNftSlider_box_right} >
                <div className={Style.bigNftSlider_box_right_box} >
                    <Image src={sliderData[idNumber].nftImage} alt="NFT IMAGE" className={Style.bigNftSlider_box_right_box_img} />
                    <div className={Style.bigNftSlider_box_right_box_like} >
                        <AiFillHeart/>
                        <span>{sliderData[idNumber].like}</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
};



export default BigNftSlider