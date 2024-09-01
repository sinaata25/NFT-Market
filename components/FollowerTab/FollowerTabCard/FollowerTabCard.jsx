import React,{useState} from 'react'
import Image from 'next/image'
import { MdVerified } from 'react-icons/md'
import { TiTick } from 'react-icons/ti'
//internal import
import Style from "./FollowerTabCard.module.css"
import images from "../../../img"

const FollowerTabCard = ({i,el}) => {
  const [following,setFollowing]=useState(false);

  const followMe=()=>{
    if(!following){
      setFollowing(true);
    }else{
      setFollowing(false);
    }
  }

  return (
    <div className={Style.FollowerTabCard} >
      <div className={Style.FollowerTabCard_rank}>
        <p>
          #{i+1}<span>🥇</span>
        </p>
      </div>
      <div className={Style.FollowerTabCard_box}>
        <div className={Style.FollowerTabCard_box_img}>
          <Image className={Style.FollowerTabCard_box_img_img} objectFit="cover" src={el.background} alt="profile background"  />
        </div>
        <div className={Style.FollowerTabCard_box_profile}>
          <Image src={el.user} className={Style.FollowerTabCard_box_profile_img} alt="profile picture"  />
        </div>
        <div className={Style.FollowerTabCard_box_info}>
          <div className={Style.FollowerTabCard_box_info_name}>
              <h4>
                Alex peterson {""}{" "}
                <span>
                  <MdVerified/>
                </span>
              </h4>
              <p>12.321 ETH</p>
          </div>
          <div className={Style.FollowerTabCard_box_info_following}>
              {
                following?(
                  <a onClick={()=>followMe()}>Follow{""}{" "}
                  <span>
                    <TiTick/>
                  </span>
                  </a>
                ):(<a onClick={()=>followMe()} >
                  Following
                </a>)
              }
          </div>
        </div>
      </div>
    </div>
  )
}

export default FollowerTabCard