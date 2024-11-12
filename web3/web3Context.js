import React, { createContext, useState, useEffect } from 'react';
import { ethers } from 'ethers';

import NFTMArketInstance from "../contracts/NFTMarketInstance"


export const Web3Context = createContext({});




// Provider component
export const Web3Provider = ({ children }) => { 

  const [NFTmarketContract, setNFTmarketContract] = useState()
  const [currentAccount, setCurrentAccount] = useState("asd")
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




  useEffect(() => {
   // checkWalletConnection();
  }, [currentAccount]);





  return (
    <Web3Context.Provider value={{currentAccount,isConnected,checkWalletConnection,disconnectWallet}}>
      <div>
        {children}
      </div>
    </Web3Context.Provider>
  );
};
