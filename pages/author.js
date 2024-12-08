import React,{useState,useEffect,useContext} from 'react'
import Style from "../styles/author.module.css"
import { useRouter } from 'next/router'
import {Banners,NftCardTwo} from "../collectionPage/collectionIndex"
import { Brand,Title } from '../components/ComponentIndex'
import images from "../img"
import { AuthorProfileCard,AuthorTabs,AuthorNFTCardBox } from '../authorPage/componentIndex'
import FollowerTabCard from '../components/FollowerTab/FollowerTabCard/FollowerTabCard'
import { Web3Context } from '../web3/web3Context'
const author = () => {
  const router = useRouter();
  const { seller } = router.query;
  const {fetchMyNFTsOrListedNFTs,currentAccount,fetchNFTs} =useContext(Web3Context);
  const [nft, setNft] = useState([])
  const [myNFTS, setMyNFTS] = useState([])

  useEffect(() => {
    fetchMyNFTsOrListedNFTs("fetchItemsListed", seller).then((items) => {
      if (Array.isArray(items)) {
        const filteredItems = items.filter(item => item.sold !== true); 
        setNft(filteredItems);
      } else {
        console.error("The fetched items are not an array:", items);
      }
    }).catch((error) => {
      console.error("Error fetching items:", error);
    });
  });
  
  useEffect(() => {
    fetchMyNFTsOrListedNFTs("fetchMyNFTS",seller).then((items)=>{
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
        <AuthorProfileCard currentAccount={seller} />
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