import React,{useEffect,useState,useContext} from 'react'
import { useRouter } from 'next/router'
import Button from "../components/ComponentIndex"
import Category from "../components/Category/Category"
import Brand from "../components/Brand/Brand"
import NFTDetailsPage from "../NFTDetailsPage/NFTDetailsPage"
import { Web3Context } from '../web3/web3Context'
import { ethers } from 'ethers';
const NFTDetails = () => {
  const {currentAccount}=useContext(Web3Context);
  const [nft, setNft] = useState({
    image:"",
    tokenId:"",
    name:"",
    owner:"",
    price:"",
    seller:""
  })

  const router=useRouter();
  useEffect(()=>{
    if(!router.isReady)return;
    setNft(router.query);
  },[router.isReady])





  return (
    <div>
      <NFTDetailsPage nft={nft} />
      <Category/>
      <Brand/>
    </div>
  )
}

export default NFTDetails