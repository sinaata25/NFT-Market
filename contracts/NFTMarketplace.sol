// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.24;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";



contract NFTMarketplace is ERC721,Ownable,ERC721URIStorage{

mapping(uint256 => marketItem)private idMarketItem; 

address payable contractOwner;
uint256 listingPrice= 0.0025 ether;
uint256 private  tokenIds;
uint256 private _itemSold;

struct marketItem{
    uint256 tokenId;
    address payable seller;
    address payable owner;
    uint256 price;
    bool sold;
}

event marketItemCreated(uint256 indexed tokenId,address seller,address owner,uint256 price,bool sold);


constructor() ERC721("MyToken","TKN") Ownable(msg.sender){
tokenIds=0;
_itemSold=0;
contractOwner=payable (msg.sender);
}

function updateListingPrice(uint256 _listingPrice)public payable onlyOwner  {
    listingPrice=_listingPrice;
}

function getListingPrice()public view returns(uint256){
    return listingPrice;
}

function createToken(string memory _tokenURI,uint256 price)public returns (uint256) {
    tokenIds++;
    _mint(msg.sender, tokenIds);
    _setTokenURI(tokenIds, _tokenURI);
    createMarketItem(tokenIds, price);
    return tokenIds;
}


function createMarketItem(uint256 tokenId,uint256 price) private {
    require(price>0,"price should be greater than 0 value");
    require(msg.value==listingPrice,"you should pay market fee to continue");
    idMarketItem[tokenId]=marketItem(
        tokenId,
        payable(msg.sender),
        payable(address(this)),
        price,
        false
    );

    _transfer(msg.sender, address(this), tokenId);
    emit marketItemCreated(tokenId,msg.sender,address(this),price, false);
}

function reSellToken(uint256 tokenId,uint256 Price)public payable {
    require(idMarketItem[tokenId].owner==msg.sender,"only item owner can perform this operation");
    require(msg.value==listingPrice,"you should pay market fee to continue");
    idMarketItem[tokenId].sold=false;
    idMarketItem[tokenId].price=Price;
    idMarketItem[tokenId].seller=payable(msg.sender);
    idMarketItem[tokenId].owner=payable(address(this));
    _itemSold--;
    _transfer(msg.sender, address(this), tokenId);
} 


function createMarketSell(uint256 tokenId)public payable{
    uint256 price=idMarketItem[tokenId].price;
    require(msg.value==price,"please submit the asking price");
    idMarketItem[tokenId].owner=payable(msg.sender);
    idMarketItem[tokenId].sold=true;
  //  idMarketItem[tokenId].owner=payable(address(0));
    _itemSold++;
    _transfer(address(this), msg.sender, tokenId);
    payable(contractOwner).transfer(listingPrice);
    payable(idMarketItem[tokenId].seller).transfer(msg.value);
}


function fetchMarketItem()public view returns(marketItem[] memory){
uint256 numNonSoldTokens=tokenIds-_itemSold;
marketItem[] memory items=new marketItem[](numNonSoldTokens);
uint256 currentindex=0;
for(uint256 i=0;i<tokenIds;i++){
    if(idMarketItem[i+1].owner==address(this)){
        marketItem storage currentItem=idMarketItem[i+1];
        items[currentindex]=currentItem;
        currentindex++;
    }
}
return items;
}



function fetchMyNft()public view returns(marketItem[] memory){

    uint256 itemCount=0;
    uint256 currentIndex=0;
    for(uint256 i=0;i<tokenIds;i++){
        if(idMarketItem[i+1].owner==msg.sender){
            itemCount++;
        } 
    }

    marketItem[] memory items=new marketItem[](itemCount);

    for(uint256 i=0;i<tokenIds;i++){
         if(idMarketItem[i+1].owner==msg.sender){
            items[currentIndex]=idMarketItem[i+1];
            currentIndex++;
        }
    }
    return items;

}


//user item listed
function fetchItemsListed()public view returns(marketItem[] memory){
    uint256 itemCount=0;
    uint256 currentIndex=0;
    for(uint256 i=0;i<tokenIds;i++){
        if(idMarketItem[i+1].seller==msg.sender){
            itemCount++;
        }
    }

    marketItem[] memory items=new marketItem[](itemCount);

    for(uint256 i=0;i<tokenIds;i++){
         if(idMarketItem[i+1].seller==msg.sender){
            items[currentIndex]=idMarketItem[i+1];
            currentIndex++;
        }
    }
    return items;
}











    function tokenURI(uint256 tokenId)
        public
        view
        override(ERC721, ERC721URIStorage)
        returns (string memory)
    {
        return super.tokenURI(tokenId);
    }

    function supportsInterface(bytes4 interfaceId)
        public
        view
        override(ERC721, ERC721URIStorage)
        returns (bool)
    {
        return super.supportsInterface(interfaceId);
    }


}