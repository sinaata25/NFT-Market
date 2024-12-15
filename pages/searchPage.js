import React, { useState, useEffect, useContext } from 'react';
import Style from "../styles/searchPage.module.css";
import { Slider, Brand, Filter } from "../components/ComponentIndex";
import { SearchBar } from "../SearchPage/searchBarIndex";
import NftCardTwo from "../collectionPage/NftCardTwo/NftCardTwo";
import images from "../img";
import { Web3Context } from '../web3/web3Context';
import Loader from "../components/Loader/Loader"

const searchPage = () => {
  const { fetchNFTs } = useContext(Web3Context);
  const [NFTs, setNFTs] = useState([]);
  const [NFTsCopy, setNFTsCopy] = useState([]);
  const [loading, setLoading] = useState(true);  

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
    //console.log(NFTs)

    loadNFTs();
  }, [fetchNFTs]);

  /*const collectionArray = [
    images.nft_image_1,
    images.nft_image_2,
    images.nft_image_3,
    images.nft_image_2,
    images.nft_image_5,
    images.nft_image_1,
  ];*/


  const onHandleSearch=(value)=>{
    const filteredNFTs=NFTs.filter(({name})=>
      name.toLowerCase().includes(value.toLowerCase(
    )))
    if(filteredNFTs.length===0){
      setNFTs(NFTsCopy)
    }else{
      setNFTs(filteredNFTs)
    }
  }

  const onClearSearch=()=>{
    if(NFTs.length && NFTsCopy.length){
      setNFTs(NFTsCopy);
    }
  }


  return (
    <div className={Style.searchPage}>
      <SearchBar onHandleSearch={onHandleSearch} onClearSearch={onClearSearch} />
      <Filter />
      {NFTs.length==0 ? (
        <Loader/>
      ) : (
        <NftCardTwo NFTData={NFTs} />
      )}
      <Slider />
      <Brand />
    </div>
  );
};

export default searchPage;
