import React from 'react'
import Style from "../styles/resSellToken.module.css"
import formStyle from "../AccountPage/Form/Form.module.css"
import { useEffect,useState,useContext } from 'react'
import { useRouter } from 'next/router'
import axios from 'axios'
import Button from "../components/Button/Button"
import {Web3Context} from "../web3/web3Context"
import Image from 'next/image'
const reSellToken = () => {
  const {createSale}=useContext(Web3Context);
  const [price, setPrice] = useState("")
  const [image, setImage] = useState("")
  const router=useRouter();
  const {id,tokenURI}=router.query;
  const [reSellPrice, setReSellPrice] = useState("");

  const fetchNFT=async()=>{
    if(!tokenURI)return;
    const {data}=await axios.get(tokenURI);
    setPrice(data.price);
    setImage(data.image)
  }

  const reSell=async()=>{
    console.log(tokenURI)
    console.log(reSellPrice)
    await createSale(tokenURI,reSellPrice,true,id) ///////fix this 
    router.push("/author")
  }

  const handleInputChange = (event) => {
    setReSellPrice(event.target.value);
  };


  useEffect(() => {
    fetchNFT()
  }, [id])
  

  return (
    <div className={Style.reSellToken}>
      <div className={Style.reSellToken_box}>
        <h1>ReSell your token,Set price</h1>
          <div className={formStyle.Form_box_input}>
            <label htmlFor="name" >Price</label>
            <input type="number" min={1} placeholder="reSell Price" value={reSellPrice} className={formStyle.Form_box_input_userName} onChange={handleInputChange} />
          </div>
          <div className={Style.reSellToken_box_image}>
            {image && (
              <Image src={image} alt="resell nft" width={400} height={400} />
            )}
          </div>
          <div className={Style.reSellToken_box_btn}>
              <Button btnName="Resell NFT" handleClick={()=>reSell()} />
          </div>
      </div>
    </div>
  )
}

export default reSellToken