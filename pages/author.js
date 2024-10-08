import React,{useState,useEffect} from 'react'
import Style from "../styles/author.module.css"
import {Banners,NftCardTwo} from "../collectionPage/collectionIndex"
import { Brand,Title } from '../components/ComponentIndex'
import images from "../img"
import { AuthorProfileCard,AuthorTabs } from '../authorPage/componentIndex'
import FollowerTabCard from '../components/FollowerTab/FollowerTabCard/FollowerTabCard'
const author = () => {

  const popularArray =[
    images.user1,
    images.user2,
    images.user3,
    images.user4,
    images.user5,
    images.user6,
    images.user7,
    images.user8,
  ]
  const [collectiables,setCollectiables]=useState(true);
  const [created,setCreated]=useState(false);
  const [like,setLike]=useState(false);
  const [follower,setFollower]=useState(false);
  const [following,setFollowing]=useState(false);


  return (
    <div className={Style.banner}>
        <Banners bannerImage={images.creatorbackground1} />
        <AuthorProfileCard/>
        <AuthorTabs collectiables={setCollectiables} created={setCreated} like={setLike} follower={setFollower} following={setFollowing} />
        <Title heading="popular creators" paragraph="Click on music icon and enjoy NFT music or audio" />
        {/*
          popularArray.map((el,i)=>(
            <FollowerTabCard key={i+1} i={i} el={el}/>
          ))*/
        }
        <Brand/>
    </div>
  )
}

export default author