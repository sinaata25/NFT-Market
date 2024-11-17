import React, { createContext, useState, useEffect } from 'react';
import { ethers } from 'ethers';
import { createHelia } from 'helia'
import { unixfs } from '@helia/unixfs'
import { CID } from 'multiformats/cid'
import NFTMArketInstance from "../contracts/NFTMarketInstance"
import { type } from 'os';
import { PinataSDK } from "pinata-web3";
const axios = require('axios');
const FormData = require('form-data');



export const Web3Context = createContext({});

const pinApiKey="bc22f52eca6e04f50045"
const pinApiSecret="7b6cfcc9738f5835fd7d5514b147019fe0c6d26737e08005b76f30b52c5c8c6a"
const pinJWT="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySW5mb3JtYXRpb24iOnsiaWQiOiJhNDY0YjE2Mi01OTA0LTQ0MmMtOTAxNS00ZmJiOTM5Zjc3NWYiLCJlbWFpbCI6InNpbmEuYXRhMjVAZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsInBpbl9wb2xpY3kiOnsicmVnaW9ucyI6W3siZGVzaXJlZFJlcGxpY2F0aW9uQ291bnQiOjEsImlkIjoiRlJBMSJ9LHsiZGVzaXJlZFJlcGxpY2F0aW9uQ291bnQiOjEsImlkIjoiTllDMSJ9XSwidmVyc2lvbiI6MX0sIm1mYV9lbmFibGVkIjpmYWxzZSwic3RhdHVzIjoiQUNUSVZFIn0sImF1dGhlbnRpY2F0aW9uVHlwZSI6InNjb3BlZEtleSIsInNjb3BlZEtleUtleSI6ImJjMjJmNTJlY2E2ZTA0ZjUwMDQ1Iiwic2NvcGVkS2V5U2VjcmV0IjoiN2I2Y2ZjYzk3MzhmNTgzNWZkN2Q1NTE0YjE0NzAxOWZlMGM2ZDI2NzM3ZTA4MDA1Yjc2ZjMwYjUyYzVjOGM2YSIsImV4cCI6MTc2MzM3MjcxMn0.rDRJjpJi2emUgei2e5fkbyx8IzqFYum6GHx8M0ZlKnY"


const pinata =new PinataSDK(pinApiKey, pinApiSecret);


// Provider component
export const Web3Provider = ({ children }) => { 

  const [NFTmarketContract, setNFTmarketContract] = useState()
  const [currentAccount, setCurrentAccount] = useState("")
  const [signer, setSigner] = useState(null);
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [isConnected, setIsConnected] = useState(false);


  const checkWalletConnection = async () => {
    if (typeof window !== "undefined" && typeof window.ethereum !== "undefined") {
      try {
        const provider = new ethers.BrowserProvider(window.ethereum);
        const accounts = await provider.send('eth_requestAccounts', []);
        setSigner(provider.getSigner());
        setCurrentAccount(accounts[0]);
        setNFTmarketContract(NFTMArketInstance(provider));
        setIsConnected(true);
      } catch (err) {
        console.log(err.message);
      }
    } else {
      console.log("Please install MetaMask first!");
    }
  };

  const disconnectWallet = () => {
    setSigner(null);
    setCurrentAccount("");
    setIsConnected(false);
    console.log("Wallet disconnected");
  };

  async function uploadImageToIPFS(file) {
    try {
    const form = new FormData();
    form.append('file', file);
    const request = await fetch(
      "https://api.pinata.cloud/pinning/pinFileToIPFS",
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${pinJWT}`,
        },
        body: form,
      }
    );
    const response = await request.json();
    const ipfsHash = response.IpfsHash;
    const ipfsUrl = `https://ipfs.io/ipfs/${ipfsHash}`;
    console.log(ipfsUrl);
    return ipfsUrl;
  }catch (error) {
      console.log(error);    
    }
  }
  
  /*const imagePath = 'path_to_your_image.jpg'; 
  uploadImageToIPFS(imagePath).then((cid) => {
    console.log('Image uploaded successfully:', cid);
  });*/

  const createNFT=async(formInput,fileUrl,router)=>{

      const {name,description,price}=formInput;
      if(!name || !description || !price || !fileUrl)
        return console.log("data is missing");

      const data=JSON.stringify({name,description,image:fileUrl});  
      try {
        const added=await client.add(data)
        const url=`http://ipfs.infura.io/ipfs/${added.path}`
        //await createSale(url,price);
      } catch (error) {
        console.log(error);
      }
  }
  const getlistprice = async () => {
    checkWalletConnection();
    try {
      if (!NFTmarketContract) {
        console.log("NFT market contract is not initialized");
        return;
      }
      const listingPrice = await NFTmarketContract.getListingPrice();
      console.log("Listing Price:", listingPrice.toString());
      return listingPrice;
    } catch (error) {
      console.error("Error getting listing price:", error);
    }
  };
  
  const createSale=async(url,formInpurPrice,isReselling,id)=>{
    checkWalletConnection();
    try {
      const price=ethers.utils.parseUints(formInpurPrice,"ether");
      const listPrice=getlistprice();
      const transaction=!isReselling ? await NFTmarketContract.createToken(url,price,{value:listPrice.toString()}) : await NFTmarketContract.reSellToken(url,price,{value:listPrice.toString()});
      await transaction.wait();

    } catch (error) {
      console.log(error);
    }
  }

  const fetchNFTs = async () => {
    checkWalletConnection();
    try {
      if (!NFTmarketContract) {
        console.log("NFT market contract is not initialized");
        return;
      }
      
      const items = await NFTmarketContract.fetchMarketItem();
      
      const fetchedNFTs = await Promise.all(items.map(async item => {
        const tokenURI = await NFTmarketContract.tokenURI(item.tokenId);
        const metadata = await fetch(tokenURI).then(res => res.json());
  
        return {
          price: ethers.utils.formatUnits(item.price.toString(), "ether"),
          tokenId: item.tokenId.toNumber(),
          seller: item.seller,
          owner: item.owner,
          image: metadata.image,
          name: metadata.name,
          description: metadata.description,
        };
      }));
  
      console.log("Fetched NFTs:", fetchedNFTs);
      return fetchedNFTs;
  
    } catch (error) {
      console.log("Error fetching NFTs:", error);
    }
  };

  const fetchMyNFTsOrListedNFTs = async (type) => {
    checkWalletConnection();
    try {
      if (!NFTmarketContract) {
        console.log("NFT market contract is not initialized");
        return;
      }
  
      const data = type === "fetchItemsListed"
        ? await NFTmarketContract.fetchItemsListed()
        : await NFTmarketContract.fetchMyNft();
  

      const items = await Promise.all(data.map(async item => {
        const tokenURI = await NFTmarketContract.tokenURI(item.tokenId);
        const metadata = await fetch(tokenURI).then(res => res.json());
  
        return {
          price: ethers.utils.formatUnits(item.price.toString(), "ether"),
          tokenId: item.tokenId.toNumber(),
          seller: item.seller,
          owner: item.owner,
          image: metadata.image,
          name: metadata.name,
          description: metadata.description,
        };
      }));
  
      console.log("Fetched NFTs:", items);
      return items;
  
    } catch (error) {
      console.log("Error fetching NFTs:", error);
    }
  };

  //BUY NFT FUNCTION
  const buyNFT = async (nft) => {
    checkWalletConnection();
    try { 
      if (!NFTmarketContract) {
        console.log("NFT market contract is not initialized");
        return;
      }
      const price = ethers.utils.parseUnits(nft.price.toString(), "ether");
      const transaction = await NFTmarketContract.createMarketSell(nft.tokenId, { value: price });
      await transaction.wait();
      console.log("NFT purchased successfully!");
    } catch (error) {
      console.log("Error buying NFT:", error);
    }
  };
  

  useEffect(() => {
   // checkWalletConnection();
  }, [currentAccount]);





  return (
    <Web3Context.Provider value={{currentAccount,isConnected,checkWalletConnection,disconnectWallet,uploadImageToIPFS,createNFT}}>
      <div>
        {children}
      </div>
    </Web3Context.Provider>
  );
};
