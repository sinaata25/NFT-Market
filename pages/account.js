import React,{useState,useMemo,useCallback,useContext} from 'react'
import Style from "../styles/account.module.css"
import Image from 'next/image'
import { useDropzone } from 'react-dropzone'
import images from "../img"
import Form from "../AccountPage/Form/Form"

const account = () => {
  const [fileUrl,setFileUrl]=useState(null);
  return (
    <div className={Style.account}>
      <div className={Style.account_info}>
        <h1>Profile Setting</h1>
        <p>You can set preffered display name,create your profile URL and manage other personal settings.</p>
      </div>
      <div className={Style.account_box}>
        <div className={Style.account_box_img}>
          <input/>
          <Image src={images.user3} alt="account upload" className={Style.account_box_img_img} />
          <p className={Style.account_box_img_para} >Change Image</p>
        </div>
        <div className={Style.account_box_form} >
          <Form/>
        </div>
      </div>
    </div>
  )
}

export default account