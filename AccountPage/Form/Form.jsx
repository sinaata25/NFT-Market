import React from 'react'
import Style from "./Form.module.css"
import { HiOutlineMail } from 'react-icons/hi'
import { MdOutlineHttp,MdOutlineContentCopy } from 'react-icons/md'
import { TiSocialFacebook,TiSocialInstagram,TiSocialTwitter } from 'react-icons/ti'
import Button from "../../components/Button/Button"

const Form = () => {
  return (
    <div className={Style.Form}>
      <div className={Style.Form_box}>
        <form>
          <div className={Style.Form_box_input}>
            <label htmlFor="name" >Username</label>
            <input type="text" placeholder="Sina Ataei" className={Style.Form_box_input_userName} />
          </div>
          <div className={Style.Form_box_input}>
            <label  htmlFor="email">Email</label>
            <div className={Style.Form_box_input_box}>
              <div className={Style.Form_box_input_box_icon}>
                <HiOutlineMail/>
              </div>
              <input type="text" placeholder="Email*" />
            </div>
          </div>
          <div className={Style.Form_box_input}>
            <label htmlFor="description">Description</label>
            <textarea name="" id="" cols="30" rows="6" placeholder="something about your self in few words" ></textarea>
          </div>
          <div className={Style.Form_box_input} >
            <label htmlFor="website">Website</label>
            <div className={Style.Form_box_input_box}>
              <div className={Style.Form_box_input_box_icon}>
                <MdOutlineHttp/>
              </div>
              <input type="text" placeholder="website" />
            </div>
          </div>
          <div className={Style.Form_box_input_social}>
            <div className={Style.Form_box_input}>
              <label htmlFor="facebook" >facebook</label>
              <div className={Style.Form_box_input_box}>
                <div className={Style.Form_box_input_box_icon}>
                  <TiSocialFacebook/>
                </div>
                <input type="text" placeholder='http://sina' />
              </div>
            </div>
            <div className={Style.Form_box_input}>
              <label htmlFor="twitter" >Twitter</label>
              <div className={Style.Form_box_input_box}>
                <div className={Style.Form_box_input_box_icon}>
                  <TiSocialTwitter/>
                </div>
                <input type="text" placeholder='http://sina' />
              </div>
            </div>
            <div className={Style.Form_box_input}>
              <label htmlFor="Instagram" >Instagram</label>
              <div className={Style.Form_box_input_box}>
                <div className={Style.Form_box_input_box_icon}>
                  <TiSocialInstagram/>
                </div>
                <input type="text" placeholder='http://sina' />
              </div>
            </div>
          </div>
          <div className={Style.Form_box_input}>
            <label htmlFor="wallet">Wallet Address</label>
            <div className={Style.Form_box_input_box}>
              <div className={Style.Form_box_input_box_icon}>
                <MdOutlineHttp/>
              </div>
              <input type="text" placeholder="0xFF4f9312dC499A484aD895A06beF3d69448f27CC" />
              <div className={Style.Form_box_input_box_icon}>
                <MdOutlineContentCopy/>
              </div>
            </div>
          </div>
          <div className={Style.Form_box_btn}>
            <Button classStyle={Style.button} btnName="Upload file" handleClick={()=>{}} />
          </div>
        </form>
      </div>
    </div>
  )
}

export default Form