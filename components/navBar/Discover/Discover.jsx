import React from 'react'
import Link from 'next/link'

//Internal Import
import Style from "./Discover.module.css"

const Discover = () => {

  const discover = [
    {
      name:"Collection",
      link:"collection"
    },
    {
      name:"Search",
      link:"searchPage"
    },
    {
      name:"Author Profile",
      link:"author"
    },
    {
      name:"NFT Details",
      link:"nftDetails"
    },
    {
      name:"Account Setting",
      link:"account"
    },
    {
      name:"Upload NFT",
      link:"uploadnft"
    },
    {
      name:"Connect Wallet",
      link:"connectWallet"
    },
    {
      name:"Blog",
      link:"blog"
    }

  ]

  return (
    <div>
      {discover.map((el,i)=>(
        <div key={i+1} className={Style.discover}  >
          <Link href={{pathname: `${el.link}` }} className={Style.textstyle} >{el.name}</Link>
        </div>
      ))}
    </div>
  )
}

export default Discover