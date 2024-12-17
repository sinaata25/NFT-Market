import React,{useContext,useState,useEffect} from 'react'
//Internal Import
import Style from "../styles/index.module.css"
import {HeroSection,Service,BigNftSlider,Subscribe,Title,Category,Filter,NFTCard, Collection,FollowerTab,AudioLive,Slider,Brand} from "../components/ComponentIndex"
import { Web3Context } from '../web3/web3Context'
import Loader from '../components/Loader/Loader'
import {getTopCreators} from "../TopCreators/TopCreators"

const Home = () => {

  const { fetchNFTs } = useContext(Web3Context);
  const [NFTs, setNFTs] = useState([]);
  const [NFTsCopy, setNFTsCopy] = useState([]);
  const [loading, setLoading] = useState(true);  
  const creators=getTopCreators(NFTs)
  useEffect(() => {
    const loadNFTs = async () => {
      try {
        const fetchedNFTs = await fetchNFTs();
        if (Array.isArray(fetchedNFTs)) {
          setNFTs(fetchedNFTs.reverse());
          setNFTsCopy(fetchedNFTs);
        } else {
          console.error('Fetched data is not an array:', fetchedNFTs);
        }
      } catch (error) {
        console.error("Error fetching NFTs:", error);
      } finally {
        setLoading(false);  
      }
    };
    loadNFTs();
  }, [fetchNFTs]);


  return (
    <div className={Style.homePage} >
      <HeroSection/>
      <Service/>
      <BigNftSlider/>
        <Title heading="Audio Collection"  paragraph="Discover the most outstanding NFTs in all topics of life" />
        <AudioLive/>
        {creators.length==0 ? (<Loader/>):<FollowerTab topCreators={creators.reverse()} />}
      <Title heading="Explore NFT Videos"  paragraph="Click on play icon and enjoy NFTs Video" />
      <Slider/>
      <Collection/>
      <Title heading="Featured NFTs"  paragraph="Discover the most outstanding NFTs in all topics of life" />
      <Filter/>
      {NFTs.length==0 ? <Loader/>:<NFTCard NFTData={NFTs}/>}
      <Title heading="Browse by category"  paragraph="Explore the most featured categories" />
      <Category/>
      <Subscribe/>
      <Brand/>
    </div>
  )
}

export default Home