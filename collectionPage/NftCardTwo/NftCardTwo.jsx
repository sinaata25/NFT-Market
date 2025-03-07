import React,{useState,useEffect} from 'react'
import Style from "./NftCardTwo.module.css"
import Image from 'next/image'
import { BsImage } from 'react-icons/bs'
import { AiFillHeart,AiOutlineHeart } from 'react-icons/ai'
import { MdVerified,MdTimer } from 'react-icons/md'
import { LikeProfile } from '../../components/ComponentIndex'
import { ethers } from 'ethers';
import Link from "next/link"

const NftCardTwo = ({NFTData}) => {
    const [like, setLike] = useState(false);
    const [likeInc,setLikeInc]=useState(21);
    const likeNFT=()=>{
        if(!like){
            setLike(true);
            setLikeInc(23);
        }else{
            setLike(false);
            setLikeInc(23+1);
        }
    }

    
    

  return (
    <div className={Style.NftCardTwo}>
        {NFTData.map((el,i)=>(
            <Link href={{pathname:"/NFTDetails" ,query:el}  } key={i+1}  className={Style.link} >
            <div className={Style.NftCardTwo_box} key={i+1}>
                <div className={Style.NftCardTwo_box_like}>
                   <div className={Style.NftCardTwo_box_like_box}>
                      <div className={Style.NftCardTwo_box_like_box_box}>
                            <BsImage className={Style.NftCardTwo_box_like_box_box_icon} />
                            <p onClick={()=>likeNFT()} >
                                {like?<AiOutlineHeart/>:<AiFillHeart/>}
                                {""}
                                <span>{likeInc+1}</span>
                            </p>
                      </div>
                    </div>
                </div>
                <div className={Style.NftCardTwo_box_img}>
                    <Image  alt="NFT" className={Style.NftCardTwo_box_img_img} src={el.image} width={600} height={500} objectFit="cover" />
                </div>    
                <div className={Style.NftCardTwo_box_info}>
                  <div className={Style.NftCardTwo_box_info_left}>
                    <LikeProfile/>
                    <p>{el.name}</p>
                  </div> 
                  <small>4{i+2}</small>
                </div>     
                <div className={Style.NftCardTwo_box_price}>
                    <div className={Style.NftCardTwo_box_price_box}>
                        <small>Current Bid</small>
                        <p>{el.price} ETH</p>
                    </div> 
                    <p className={Style.NftCardTwo_box_price_stock}>
                        <MdTimer/><span>{i+1} hours left</span>
                    </p>
                </div> 
            </div>
            </Link>
        ))}
    </div>
  )
}

export default NftCardTwo