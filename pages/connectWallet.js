import React,{useState,useEffect} from 'react'
import Image from 'next/image'
import Style from "../styles/connectWallet.module.css"
import images from "../img"
const connectWallet = () => {
    const [activeBtn,setActiveBtn] = useState(1);
    const providerArray=[
        {
            provider:images.metamask,
            name:"Metamask"
        },
        {
            provider:images.coinbase,
            name:"Coinbase"
        },
        {
            provider:images.bitget,
            name:"Bitget"
        }
    ]
  return (
    <div className={Style.connectWallet}>
        <div className={Style.connectWallet_box}>
            <h1>Connect your wallet</h1>
            <p className={Style.connectWallet_box_para}>
                Connect with one of our available wallet providers or create a new one
            </p>
            <div className={Style.connectWallet_box_provider}>
                {providerArray.map((el,i)=>(
                    <div  className={`${Style.connectWallet_box_provider_item} ${activeBtn == i+1 ? Style.active : ""}`} key={i+1} onClick={()=>setActiveBtn(i+1)} >
                        <Image src={el.provider} alt={el.provider} width={50} height={50} className={Style.connectWallet_box_provider_item_img} />
                        <p>{el.name}</p>
                    </div>
                ))}
            </div>
        </div>
    </div>
  )
}

export default connectWallet