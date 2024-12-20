import React,{useState,useEffect} from 'react'
import { RiUserFollowFill,RiUserUnfollowFill,RiAwardLine } from 'react-icons/ri'

//internal import
import Style from "./FollowerTab.module.css"
import FollowerTabCard from "./FollowerTabCard/FollowerTabCard"
import images from "../../img"

const FollowerTab = ({topCreators}) => {

    const followArray=[        {
        background:images.creatorbackground1,
        user:images.user10,
        seller:"10asldjasdasd4654asd1qwe"
    },
    {
        background:images.creatorbackground2,
        user:images.user3,
        seller:"10asldjasdasd4654asd1qwe"
    },
    {
        background:images.creatorbackground3,
        user:images.user6,
        seller:"10asldjasdasd4654asd1qwe"
    },
    {
        background:images.creatorbackground4,
        user:images.user9,
        seller:"10asldjasdasd4654asd1qwe"
    },
]
    const newArray=[        {
        background:images.creatorbackground4,
        user:images.user4,
        seller:"10asldjasdasd4654asd1qwe"
    },
    {
        background:images.creatorbackground6,
        user:images.user6,
        seller:"10asldjasdasd4654asd1qwe"
    },
    {
        background:images.creatorbackground8,
        user:images.user8,
        seller:"10asldjasdasd4654asd1qwe"
    },
    {
        background:images.creatorbackground9,
        user:images.user9,
        seller:"10asldjasdasd4654asd1qwe"
    },
    {
        background:images.creatorbackground1,
        user:images.user1,
        seller:"10asldjasdasd4654asd1qwe"
    }
]
    const [popular, setPopular] = useState(true);
    const [following, setFollowing] = useState(false);
    const [news, setNews] = useState(false);

    const openFollower=()=>{
        if(!following){
            setFollowing(true);
            setNews(false);
            setPopular(false);
        }
    }
    const openNews=()=>{
        if(!news){
            setFollowing(false);
            setNews(true);
            setPopular(false);
        }
    }

    const openPopular=()=>{
        if(!popular){
            setFollowing(false);
            setNews(false);
            setPopular(true);
        }
    }


  return (
    <div className={Style.followerTab} >
        <div className={Style.followerTab_title} >
            <h2>Top Creators List...</h2>
            <div className={Style.followerTab_tabs}>
                <div className={Style.followerTab_tabs_btn}>
                    <button onClick={()=>openPopular()} >
                        <RiUserFollowFill/> Popular
                    </button>
                    <button onClick={()=>openFollower()} >
                        <RiUserFollowFill/> Following
                    </button>
                    <button onClick={()=>openNews()} >
                        <RiAwardLine/> NoteWorthy
                    </button>
                </div>
            </div>
        </div>
        {
            popular && (
                <div className={Style.followerTab_box} >
                    {
                        topCreators.map((el,i)=>(
                            <FollowerTabCard key={i+1} i={i} el={el} />
                        ))
                    }
                </div>
        )}

        {
            following && (
                <div className={Style.followerTab_box} >
                    {
                        followArray.map((el,i)=>(
                            <FollowerTabCard key={i+1} i={i} el={el} />
                        ))
                    }
                </div>
        )}
        {
           news && (
                <div className={Style.followerTab_box} >
                    {
                        newArray.map((el,i)=>(
                            <FollowerTabCard key={i+1} i={i} el={el} />
                        ))
                    }
                </div>
        )}
        <div className={Style.followerTab_member}>
            <div className={Style.followerTab_member_box}>
                <a href="#">Show me more</a>
                <a href="#">Become author</a>
            </div>
        </div>
    </div>
  )
}

export default FollowerTab