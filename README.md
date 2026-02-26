# 🚀 Cicryp — Production-Grade NFT Marketplace

<p align="center">
  <img src="https://img.shields.io/badge/Solidity-^0.8.x-363636?style=for-the-badge&logo=solidity" />
  <img src="https://img.shields.io/badge/Ethereum-Blockchain-blue?style=for-the-badge&logo=ethereum" />
  <img src="https://img.shields.io/badge/Hardhat-Development-yellow?style=for-the-badge" />
  <img src="https://img.shields.io/badge/Ethers.js-Web3-7A98FB?style=for-the-badge" />
  <img src="https://img.shields.io/badge/React-Frontend-61DBFB?style=for-the-badge&logo=react" />
</p>

<p align="center">
  <b>A full-stack decentralized NFT marketplace with real auction mechanics and secure smart contract architecture.</b>
</p>

---

# 🧠 Project Overview

Cicryp is a complete Web3 NFT marketplace demonstrating:

- Auction-based NFT trading
- Escrow smart contract logic
- Ownership verification
- Wallet-based authentication
- Real Ethereum interaction

This project reflects real-world decentralized marketplace mechanics and production-level Solidity engineering.

---

# 🏗 Architecture

```
React Frontend
      ↓
Ethers.js
      ↓
Marketplace Smart Contract
      ↓
ERC721 Token Contract
      ↓
Ethereum Network
```

Design principles:

- Modular contract separation (Token vs Marketplace)
- Escrow-based transaction handling
- Deterministic auction resolution
- Explicit ownership validation
- Minimal trust assumptions

---

# 🖼 Application Preview

> Make sure you create an `/assets` folder and upload the screenshots there.

## 🏠 Home Page

<p align="center">
  <img src="./assets/home.png" width="90%" />
</p>

---

## 🎵 Audio Collection

<p align="center">
  <img src="./assets/audio.png" width="90%" />
</p>

---

## 🎬 NFT Videos

<p align="center">
  <img src="./assets/video.png" width="90%" />
</p>

---

## 👤 Author Profile

<p align="center">
  <img src="./assets/author.png" width="90%" />
</p>

---

## 🖼 NFT Details Page

<p align="center">
  <img src="./assets/details.png" width="90%" />
</p>

---

## 🔐 Wallet Connection

<p align="center">
  <img src="./assets/wallet.png" width="90%" />
</p>

---

# 🔥 Smart Contract Capabilities

```solidity
function createToken(string memory tokenURI) public returns (uint);
function listNFT(uint tokenId, uint price) public;
function placeBid(uint tokenId) public payable;
function executeSale(uint tokenId) public;
function fetchMarketItems() public view returns (...);
function fetchMyNFTs() public view returns (...);
```

---

# 🔐 Security Design

- Bid amount validation
- Owner verification
- Safe ETH transfers
- Escrow separation logic
- Access control enforcement
- Reentrancy-safe flow
- State consistency guarantees

---

# 🌐 Web3 Integration

Wallets Supported:

- MetaMask
- Coinbase Wallet
- Bitget Wallet

Capabilities:

- On-chain transaction signing
- Real-time auction participation
- Wallet-based identity
- Balance interaction
- Secure transaction confirmation flow

---

# 🛠 Tech Stack

## Blockchain
- Solidity ^0.8.x
- Hardhat
- Ethereum
- Ethers.js

## Frontend
- React.js
- Web3Modal
- Tailwind CSS / CSS Modules

## Development
- Node.js
- Hardhat Local Network
- Sepolia Testnet Ready

---

# ⚙️ Installation

```bash
git clone https://github.com/sinaata25/NFT-Market.git
cd NFT-Market
npm install
npm run dev
```

---

# 🚀 Deploy Smart Contracts

```bash
npx hardhat compile
npx hardhat run scripts/deploy.js --network localhost
```

Testnet deployment:

```bash
npx hardhat run scripts/deploy.js --network sepolia
```

---

# 📊 Engineering Highlights

✔ Auction-based marketplace logic  
✔ Escrow smart contract implementation  
✔ Real Web3 wallet integration  
✔ Modular contract architecture  
✔ Secure ETH handling  
✔ Deterministic sale execution  
✔ Production-level UI  

---

# 📈 Future Improvements

- ERC2981 Royalty Support
- IPFS Metadata Storage
- Gas Optimization
- Subgraph Indexing
- Upgradeable Contracts (UUPS Pattern)
- Advanced Analytics Dashboard

---

# 👨‍💻 Developer

**Sina Ataei**  
Blockchain Engineer | Solidity Developer  

GitHub: https://github.com/sinaata25  
LinkedIn: https://linkedin.com/in/sinaataei25  
Email: sina.ata25@gmail.com  

---

<p align="center">
Built with precision on Ethereum ⚡
</p>
