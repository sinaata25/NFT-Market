import React,{useState} from 'react'
import Style from "./AuthorNFTCardBox.module.css"
import images from "../../img"
import {NftCardTwo} from "../../collectionPage/collectionIndex"
import FollowerTabCard from '../../components/FollowerTab/FollowerTabCard/FollowerTabCard'

const AuthorNFTCardBox = ({collectiables,created,like,follower,following,myNFTS,nfts}) => {

    const collectiablesArray=[
        images.nft_image_1,
        images.nft_image_2,
        images.nft_image_3,
        images.nft_image_1,
        images.nft_image_2,
        images.nft_image_3,
        images.nft_image_1,
        images.nft_image_2,
    ]

    const createdArray=[
        images.nft_image_1,
        images.nft_image_2,
        images.nft_image_3,
        images.nft_image_1,
    ]

    const likeArray=[
        images.nft_image_1,
        images.nft_image_1,
        images.nft_image_2,
        images.nft_image_3,
        images.nft_image_1,
        images.nft_image_2,
    ]

    const followerArray=[
        {
            background:images.creatorbackground10,
            user:images.user3
        }
        ,
        {
            background:images.creatorbackground8,
            user:images.user2
        }
        ,
        {
            background:images.creatorbackground5,
            user:images.user4
        }
        ,        {
            background:images.creatorbackground4,
            user:images.user6
        }
        ,        {
            background:images.creatorbackground3,
            user:images.user8
        }
    ]

    const followingArray=[
        {
            background:images.creatorbackground8,
            user:images.user2
        }
        ,
        {
            background:images.creatorbackground5,
            user:images.user4
        }
        ,        {
            background:images.creatorbackground4,
            user:images.user6
        }
    ]

  return (
    <div className={Style.AuthorNFTCardBox}>
        {collectiables && <NftCardTwo NFTData={nfts} />}
        {created && <NftCardTwo NFTData={myNFTS} />}
        {like && <NftCardTwo NFTData={createdArray} />}
        {follower && (
            <div className={Style.AuthorNFTCardBox_box} >
            {followerArray.map((el,i)=>(
                <FollowerTabCard i={i} el={el} />
            ))}
            </div>
        )}

     {following && (
            <div  className={Style.AuthorNFTCardBox_box}>
            {followingArray.map((el,i)=>(
                <FollowerTabCard i={i} el={el} />
            ))}
            </div>
        )}
    </div>
  )
}

export default AuthorNFTCardBox