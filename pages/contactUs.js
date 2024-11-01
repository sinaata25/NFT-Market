import React from 'react'
import { TiSocialFacebook,TiSocialLinkedin,TiSocialYoutube,TiSocialInstagram,TiArrowSortedDown,TiSocialTwitter,TiArrowSortedUp} from 'react-icons/ti'
import { HiOutlineMail } from 'react-icons/hi'
import Style from "../styles/contactUs.module.css"
import formStyle from "../AccountPage/Form/Form.module.css"
import Button from '../components/Button/Button'
const contactUs = () => {
  return (
    <div className={Style.contactUs}>
        <div className={Style.contactUs_box}>
            <h1>Contact</h1>
            <div className={Style.contactUs_box_box}>
                <div className={Style.contactUs_box_box_left}>
                    <div className={Style.contactUs_box_box_left_item}>
                        <h3>📌ADDRESS</h3>
                        <p>
                            Iran,Shiraz,Moallem sq
                        </p>
                    </div>
                    <div className={Style.contactUs_box_box_left_item} >
                        <h3>✉️EMAIL</h3>
                        <p>
                            Sina.ata25@gmail.com
                        </p>
                    </div>
                    <div className={Style.contactUs_box_box_left_item} >
                        <h3>📞PHONE</h3>
                        <p>
                            +989390668122
                        </p>
                    </div>
                    <div className={Style.contactUs_box_box_left_item} >
                        <h3>🌐Socials</h3>
                        <a href="#">
                            <TiSocialFacebook/>
                        </a>
                        <a href="#">
                            <TiSocialLinkedin/>
                        </a>
                        <a href="#">
                            <TiSocialYoutube/>
                        </a>
                        <a href="#">
                            <TiSocialTwitter/>
                        </a>
                        <a href="#">
                            <TiSocialInstagram/>
                        </a>
                    </div>
                </div>
                <div className={Style.contactUs_box_box_right}>
                    <form>
                        <div className={formStyle.Form_box_input}>
                            <label htmlFor="name" >Username</label>
                            <input type="text" placeholder="Sina Ataei" className={formStyle.Form_box_input_userName} />
                        </div>
                        <div className={formStyle.Form_box_input}>
                            <label  htmlFor="email">Email</label>
                                <div className={formStyle.Form_box_input_box}>
                                    <div className={formStyle.Form_box_input_box_icon}>
                                        <HiOutlineMail/>
                                    </div>
                                    <input type="text" placeholder="Email*" />
                                </div>
                        </div>
                        <div className={formStyle.Form_box_input}>
                            <label htmlFor="description">Description</label>
                             <textarea name="" id="" cols="30" rows="6" placeholder="something about your self in few words" ></textarea>
                            </div>
                            <Button btnName="Send Message" handleClick={()=>{}} classStyle={Style.button} />
                    </form>
                </div>
            </div>
        </div>
    </div>
  )
}

export default contactUs