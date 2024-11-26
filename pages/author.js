import React,{useState,useEffect,useContext} from 'react'
import Style from "../styles/author.module.css"
import {Banners,NftCardTwo} from "../collectionPage/collectionIndex"
import { Brand,Title } from '../components/ComponentIndex'
import images from "../img"
import { AuthorProfileCard,AuthorTabs,AuthorNFTCardBox } from '../authorPage/componentIndex'
import FollowerTabCard from '../components/FollowerTab/FollowerTabCard/FollowerTabCard'
import { Web3Context } from '../web3/web3Context'
const author = () => {

  const {fetchMyNFTsOrListedNFTs,currentAccount} =useContext(Web3Context);

  const [nft, setNft] = useState([])
  const [myNFTS, setMyNFTS] = useState([])

  useEffect(() => {
    fetchMyNFTsOrListedNFTs("fetchItemsListed").then((items)=>{
      setNft(items)
    })
  })
  
  useEffect(() => {
    fetchMyNFTsOrListedNFTs("fetchMyNFTS").then((items)=>{
      setMyNFTS(items)
    })
  })
  

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
  const [collectiables,setCollectiables]=useState(true);
  const [created,setCreated]=useState(false);
  const [like,setLike]=useState(false);
  const [follower,setFollower]=useState(false);
  const [following,setFollowing]=useState(false);


  return (
    <div className={Style.author}>
        <Banners bannerImage={images.creatorbackground8} />
        <AuthorProfileCard/>
        <AuthorTabs setCollectiables={setCollectiables} setCreated={setCreated} setLike={setLike} setFollower={setFollower} setFollowing={setFollowing} />
        {nft && myNFTS ? (<AuthorNFTCardBox collectiables={collectiables} created={created} like={like} follower={follower} following={following} nfts={nft} myNFTS={myNFTS} />):(<div>Loading...</div>)}
        
        <Title heading="popular creators" paragraph="Click on music icon and enjoy NFT music or audio" />
        <div className={Style.author_box}>
          {followerArray.map((el,i)=>(
            <FollowerTabCard i={i} el={el} />
          ))}
        </div>
        <Brand/>
    </div>
  )
}

export default author