# 🚀 Cicryp — Production-Grade NFT Marketplace (Web3 Full Stack)

<p align="center">
  <img src="https://img.shields.io/badge/Solidity-^0.8.x-363636?style=for-the-badge&logo=solidity" />
  <img src="https://img.shields.io/badge/Ethereum-Blockchain-blue?style=for-the-badge&logo=ethereum" />
  <img src="https://img.shields.io/badge/Hardhat-Development-yellow?style=for-the-badge" />
  <img src="https://img.shields.io/badge/Ethers.js-Web3-7A98FB?style=for-the-badge" />
  <img src="https://img.shields.io/badge/React-Frontend-61DBFB?style=for-the-badge&logo=react" />
</p>

<p align="center">
  <b>A full-stack decentralized NFT marketplace built with production-level smart contract architecture.</b>
</p>

---

# 🧠 Project Vision

Cicryp is not just a UI-based NFT demo.

It is a **complete smart contract-driven marketplace** that demonstrates:

- Auction mechanics
- Escrow-based ETH handling
- Ownership tracking
- Marketplace fee logic
- Wallet authentication
- Secure bid execution

This project reflects how a real NFT protocol operates under Ethereum constraints.

---

# 🏗 System Architecture


Frontend (React)
↓
Ethers.js Web3 Layer
↓
Marketplace Smart Contract
↓
ERC721 NFT Contract
↓
Ethereum Network


## Design Principles

- Separation of concerns (Token vs Marketplace logic)
- Minimal trust assumptions
- On-chain state authority
- Deterministic auction resolution
- Explicit ownership verification

---

# 🔥 Core Smart Contract Features

### ERC721 Minting

- Unique NFT creation
- Metadata binding
- Ownership assignment

### Marketplace Listing

- NFT transfer to escrow
- Price locking
- Listing state tracking

### Auction Mechanism

- Time-based bidding
- Highest bid validation
- Automatic winner determination
- Secure ETH handling

### Sale Execution

- Ownership transfer
- Seller payment
- Marketplace fee deduction

---

# 🔐 Security Considerations

- Strict require validations
- Bid amount comparison checks
- Owner verification
- Safe ETH transfers
- Escrow logic separation
- Reentrancy-safe transaction flow

---

# 📦 Core Functions

```solidity
function createToken(string memory tokenURI) public returns (uint);
function listNFT(uint tokenId, uint price) public;
function placeBid(uint tokenId) public payable;
function executeSale(uint tokenId) public;
function fetchMarketItems() public view returns (...);
function fetchMyNFTs() public view returns (...);
🌐 Web3 Integration
Wallet Support

MetaMask

Coinbase Wallet

Bitget

Features

Wallet authentication

Real-time balance interaction

On-chain transaction signing

Auction participation

🖥 Application Features

NFT Minting

NFT Auction Listing

Real-Time Countdown

Bid History Tracking

Creator Profiles

Follow / Like System

Ownership Provenance

Category-based Filtering (Audio / Video / Collectibles)

Fully Responsive UI

🛠 Tech Stack
Blockchain

Solidity ^0.8.x

Hardhat

Ethereum

Ethers.js

Frontend

React.js

Web3Modal

CSS Modules / Tailwind

Development

Node.js

Hardhat Local Network

Sepolia Testnet Ready

⚙️ Installation
git clone https://github.com/sinaata25/NFT-Market.git
cd NFT-Market
npm install
npm run dev
🚀 Smart Contract Deployment
npx hardhat compile
npx hardhat run scripts/deploy.js --network localhost

Testnet deployment:

npx hardhat run scripts/deploy.js --network sepolia
📊 What This Project Demonstrates

✔ Deep understanding of Solidity
✔ Auction-based marketplace logic
✔ Escrow contract flow
✔ Web3 frontend integration
✔ Smart contract architecture design
✔ Ethereum transaction lifecycle handling
✔ Production-style UI implementation

📈 Future Enhancements

ERC2981 Royalty support

IPFS metadata storage

Gas optimization

Event indexing for subgraph integration

Multi-chain deployment

Upgradeable contract pattern (UUPS)

👨‍💻 Developer

Sina Ataei
Blockchain Engineer | Solidity Developer

GitHub: https://github.com/sinaata25

LinkedIn: https://linkedin.com/in/sinaataei25

Email: sina.ata25@gmail.com

💬 Why This Matters

This project demonstrates practical Web3 engineering skills beyond tutorials:

Contract design thinking

Security awareness

Auction mechanics implementation

Real blockchain interaction

Clean full-stack integration

<p align="center"> Built with precision on Ethereum ⚡ </p> ```
