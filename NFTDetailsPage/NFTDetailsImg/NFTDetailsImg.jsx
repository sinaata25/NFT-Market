import React,{useState,useEffect} from 'react'
import Image from 'next/image'
import { BsImage, BsImages } from 'react-icons/bs'
import { AiFillHeart,AiOutlineHeart } from 'react-icons/ai'
import { TiArrowSortedDown,TiArrowSortedUp } from 'react-icons/ti'
import Style from "./NFTDetailsImg.module.css"
import images from "../../img"

const NFTDetailsImg = () => {
  const [description, setDescription] = useState(true);
  const [details, setDetails] = useState(true);
  const [like, setLike] = useState(false);

  const openDescription = ()=>{
    if(!description){
        setDescription(true);
    }else{
        setDescription(false);
    }
  }

  const openDetails = ()=>{
    if(!details){
        setDetails(true);
    }else{
        setDetails(false);
    }
  }

  const likeNFT = ()=>{
    if(!like){
        setLike(true);
    }else{
        setLike(false);
    }
  }



  return (
    <div className={Style.NFTDetailsImg} >
      <div className={Style.NFTDetailsImg_box}>
        <div className={Style.NFTDetailsImg_box_NFT}>
          <div className={Style.NFTDetailsImg_box_NFT_like}>
            <BsImages className={Style.NFTDetailsImg_box_NFT_like_icon} />
            <p onClick={()=>likeNFT()}>
              {
                like ? (<AiOutlineHeart className={Style.NFTDetailsImg_box_NFT_like_icon} />) :
                (<AiFillHeart className={Style.NFTDetailsImg_box_NFT_like_icon} />)
              }
              <span>23</span>
            </p>
          </div>
          <div className={Style.NFTDetailsImg_box_NFT_img}>
              <Image
              src={images.nft_image_1}
              className={Style.NFTDetailsImg_box_NFT_img_img}
              alt="NFT image"
              objectFit="cover"
              />
          </div>
        </div>
        <div className={Style.NFTDetailsImg_box_description} onClick={()=>openDescription()} >
            <p>Description</p>
            {description ? <TiArrowSortedUp/> : <TiArrowSortedDown/>}
        </div>
        {
          description && (
            <div className={Style.NFTDetailsImg_box_description_box}>
                <p>
                  Tattoed kitty Gang is a collection of 666 badass kitty gangestres,
                  with symbol of tatoos living in the proud kitty gang metavers.
                </p>
            </div>
          )
        }
        <div className={Style.NFTDetailsImg_box_details} onClick={()=>openDetails()} >
          <p>Details</p>
          {details ? <TiArrowSortedUp/> : <TiArrowSortedDown/>}
        </div>
        {details && (        <div className={Style.NFTDetailsImg_box_details_box}>
          <small>2000 x 2000 px.Image(685KB)</small>
          <p>
            <small>Contract Address</small>
            <br></br>
            0x7Ac23CC637833BdBc311c3ea9b065E240872193b
          </p>
          <p>
            <small>Token Id</small>
            1000261615
          </p>
        </div>)}

      </div>
    </div>
  )
}

export default NFTDetailsImg