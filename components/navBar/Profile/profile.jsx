import React from 'react'
import Image from 'next/image'
import { FaUserAlt,FaRegImage,FaUserEdit } from 'react-icons/fa'
import { MdHelpCenter } from 'react-icons/md'
import { TbDownloadOff,TbDownload } from 'react-icons/tb'

//Internal Import
import Style from "./profile.module.css"
import images from "../../../img"
import Link from 'next/link'


const profile = () => {
  return (
    <div className={Style.profile}>
      <div className={Style.profile_account}>
        <Image src={images.user1} alt="user profile" width={50} height={50} className={Style.profile_account_img} />
        <div className={Style.profile_account_info}>
          <p className={Style.profile_text} >Kasra</p>
          <small className={Style.profile_text} >0X3241541454252354345...</small>
        </div>
      </div>
      <div className={Style.profile_menu}>
        <div className={Style.profile_menu_one}>
          <div className={Style.profile_menu_one_item} >
            <FaUserAlt className={Style.profile_text} />
            <p >
              <Link href={{pathname:'/myprofile'}} className={Style.profile_text}  >My Profile</Link>
            </p>
          </div>
          <div className={Style.profile_menu_one_item} >
            <FaRegImage className={Style.profile_text} />
            <p>
              <Link href={{pathname:'/my-items'}} className={Style.profile_text}  >My Items</Link>
            </p>
          </div>
          <div className={Style.profile_menu_one_item} >
            <FaUserEdit className={Style.profile_text}  />
            <p>
              <Link href={{pathname:'/edit-profile'}} className={Style.profile_text}  >Edit Profile</Link>
            </p>
          </div>

        </div>

        <dev className={Style.profile_menu_one}>
          <dev className={Style.profile_menu_one_item}>
            <MdHelpCenter className={Style.profile_text}  />
            <p>
              <Link href={{pathname:'/help'}} className={Style.profile_text}>Help</Link>
            </p>
          </dev>
          <dev className={Style.profile_menu_one_item}>
            <TbDownload className={Style.profile_text} />
            <p>
              <Link href={{pathname:'/disconnect'}} className={Style.profile_text} >Disconnect</Link>
            </p>
          </dev>
        </dev>

      </div>
    </div>
  )
}

export default profile