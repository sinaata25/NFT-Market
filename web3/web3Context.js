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
import { useRouter } from 'next/router';




export const Web3Context = createContext({});

const pinApiKey="bc22f52eca6e04f50045"
const pinApiSecret="7b6cfcc9738f5835fd7d5514b147019fe0c6d26737e08005b76f30b52c5c8c6a"
const pinJWT="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySW5mb3JtYXRpb24iOnsiaWQiOiJhNDY0YjE2Mi01OTA0LTQ0MmMtOTAxNS00ZmJiOTM5Zjc3NWYiLCJlbWFpbCI6InNpbmEuYXRhMjVAZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsInBpbl9wb2xpY3kiOnsicmVnaW9ucyI6W3siZGVzaXJlZFJlcGxpY2F0aW9uQ291bnQiOjEsImlkIjoiRlJBMSJ9LHsiZGVzaXJlZFJlcGxpY2F0aW9uQ291bnQiOjEsImlkIjoiTllDMSJ9XSwidmVyc2lvbiI6MX0sIm1mYV9lbmFibGVkIjpmYWxzZSwic3RhdHVzIjoiQUNUSVZFIn0sImF1dGhlbnRpY2F0aW9uVHlwZSI6InNjb3BlZEtleSIsInNjb3BlZEtleUtleSI6ImJjMjJmNTJlY2E2ZTA0ZjUwMDQ1Iiwic2NvcGVkS2V5U2VjcmV0IjoiN2I2Y2ZjYzk3MzhmNTgzNWZkN2Q1NTE0YjE0NzAxOWZlMGM2ZDI2NzM3ZTA4MDA1Yjc2ZjMwYjUyYzVjOGM2YSIsImV4cCI6MTc2MzM3MjcxMn0.rDRJjpJi2emUgei2e5fkbyx8IzqFYum6GHx8M0ZlKnY"

const pinata = new PinataSDK({
  pinataJwt: pinJWT,
  pinataGateway: "crimson-hidden-puma-892.mypinata.cloud",
});


// Provider component
export const Web3Provider = ({ children }) => { 

  const [NFTmarketContract, setNFTmarketContract] = useState()
  const [currentAccount, setCurrentAccount] = useState("")
  const [signer, setSigner] = useState(null);
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [isConnected, setIsConnected] = useState(false);
  const [imageUrl,setImageUrl] = useState(null)

  const router= useRouter();

  const checkWalletConnection = async () => {
    if (typeof window !== "undefined" && typeof window.ethereum !== "undefined") {
      try {
        const provider = new ethers.BrowserProvider(window.ethereum);
        const accounts = await provider.send('eth_requestAccounts', []);
        setSigner(await provider.getSigner());
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
    setImageUrl(ipfsUrl);
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

  const createNFT=async(itemName,price,description,image,router)=>{
    const name = itemName;
    if (!name || !description || !price || !image) {
      return console.log("data is missing");
    }
    try {
      const upload = await pinata.upload.json({
        name,
        description,
        image
      });
      const url = `https://crimson-hidden-puma-892.mypinata.cloud/ipfs/${upload.IpfsHash}`;
      console.log(url)
      await createSale(url,price);
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
  
  const createSale = async (url, formInputPrice, isReselling , id) => {
    try {
      if (!NFTmarketContract) {
        console.log("NFT market contract is not initialized");
        return;
      }
      const contractWithSigner = NFTmarketContract.connect(signer);
      const price = ethers.parseUnits(formInputPrice, "ether");
      const listPrice = await getlistprice();
      const transaction = !isReselling
        ? await contractWithSigner.createToken(url, price, { value: listPrice.toString() })
        : await contractWithSigner.reSellToken(id, price, { value: listPrice.toString() });
      await transaction.wait();
      console.log("Transaction successful!");
      router.push('/searchPage')
    } catch (error) {
      console.error("Error in createSale:", error.message || error);
    }
  };

  const fetchNFTs = async () => {
    checkWalletConnection();
    try {
      if (!NFTmarketContract) {
        console.log("NFT market contract is not initialized");
        return;
      }
      const contractWithSigner =await NFTmarketContract.connect(signer);
      const items = await contractWithSigner.fetchMarketItem();
      
      const fetchedNFTs = await Promise.all(items.map(async item => {
        const tokenURI = await contractWithSigner.tokenURI(item.tokenId);
        const metadata = await fetch(tokenURI).then(res => res.json());
        try {
        var pprice=ethers.parseUnits(item.price.toString(), "ether")
        pprice=ethers.formatEther(pprice)/(10**18);
        } catch (error) {
          console.log(error)   
        }

        return {
          price:pprice,
          tokenId: Number(item.tokenId),
          seller: item.seller,
          owner: item.owner,
          image: metadata.image,
          name: metadata.name,
          description: metadata.description,
          URI:tokenURI
        };
      }));
      return fetchedNFTs;
  
    } catch (error) {
      console.log("Error fetching NFTs:", error);
    }
  };

  const fetchMyNFTsOrListedNFTs = async (type) => {
    checkWalletConnection();
    if (!NFTmarketContract) {
      console.log("NFT market contract is not initialized");
      return;
    }
    try {
      const contractWithSigner =await NFTmarketContract.connect(signer);
      const data = type === "fetchItemsListed"
        ? await contractWithSigner.fetchItemsListed()
        : await contractWithSigner.fetchMyNft();
  

      const items = await Promise.all(data.map(async item => {
        const tokenURI = await contractWithSigner.tokenURI(item.tokenId);
        const metadata = await fetch(tokenURI).then(res => res.json());
        //ethers.utils.formatUnits(item.price.toString(), "ether")
        try {
          var pprice=ethers.parseUnits(item.price.toString(), "ether")
          pprice=ethers.formatEther(pprice)/(10**18);
          } catch (error) {
            console.log(error)   
          }
        return {
          price: pprice,
          tokenId: Number(item.tokenId),
          seller: item.seller,
          owner: item.owner,
          image: metadata.image,
          name: metadata.name,
          description: metadata.description,
        };
      }));
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
      const contractWithSigner = NFTmarketContract.connect(signer);
      const price=nft.price*(10**18);
      console.log(price)
      const transaction = await contractWithSigner.createMarketSell(nft.tokenId, { value: price });
      await transaction.wait();
      console.log("NFT purchased successfully!");
      router.push("/author")
    } catch (error) {
      console.log("Error buying NFT:", error);
    }
  };
  

  useEffect(() => {
    checkWalletConnection();
    fetchNFTs();
  }, [currentAccount]);





  return (
    <Web3Context.Provider value={{currentAccount,isConnected,checkWalletConnection,disconnectWallet,uploadImageToIPFS,createNFT,fetchNFTs,buyNFT,fetchMyNFTsOrListedNFTs,createSale}}>
      <div>
        {children}
      </div>
    </Web3Context.Provider>
  );
};
