import React from 'react'
import Style from "../styles/aboutus.module.css"
import Image from 'next/image'
import Brand from "../components/Brand/Brand"
import images from "../img"

const aboutus = () => {
    const founderArray=[
        {name:"Sina Ataei",position:"Full-Stack Web3 Developer",image:images.sina}
    ]
    const factArray=[
        {
            title:"10 milion",
            info:"Articles have been public around the world"
        },
        {
            title:"100,000",
            info:"Registered users account"
        },
        {
            title:"+220",
            info:"Countries and Regions have our presence"
        }
    ]
  return (
    <div className={Style.aboutus}>
        <div className={Style.aboutus_box}>
            <div className={Style.aboutus_box_hero}>
                <div className={Style.aboutus_box_hero_left}>
                    <h1>👋About Us</h1>
                    <p>
                    We are a team of specialists in developing Web3 applications, 
                    leveraging up-to-date knowledge and deep experience in blockchain development
                     to create innovative solutions. Our goal is to deliver services that enable users 
                     to interact securely, transparently, and efficiently with decentralized applications. 
                     By focusing on modern technologies and cutting-edge tools, we strive to create unique
                      solutions that bring positive change to the digital space.
                    </p>
                </div>
                <div className={Style.aboutus_box_hero_right}>
                    <Image src={images.hero} className={Style.aboutus_box_hero_right_img} />
                </div>
            </div>
            <div className={Style.aboutus_box_title}>
            <h2>Founder</h2>
            <p>were impartial and independent , and every day we create distinctive,world-class programs and content</p>
            </div>
            <div className={Style.aboutus_box_founder}>
                <div className={Style.aboutus_box_founder_box}>
                    {
                        founderArray.map((el,i)=>(
                            <div className={Style.aboutus_box_founder_box_img}>
                                <Image src={el.image} alt={el.name} className={Style.aboutus_box_founder_box_img_img}  />
                                <h3>{el.name}</h3>
                                <p>{el.position}</p>
                            </div>
                        ))
                    }
                </div>
            </div>
            <div className={Style.aboutus_box_title}>
            <h2>🚀Fast Facts</h2>
            <p>were impartial and independent , and every day we create distinctive,world-class programs and content</p>
            </div>
            <div className={Style.aboutus_box_facts}>
                <div className={Style.aboutus_box_facts_box}>
                    {
                        factArray.map((el,i)=>(
                            <div className={Style.aboutus_box_facts_box_info}>
                                <h3>{el.title}</h3>
                                <p>{el.info}</p>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
        <Brand/>
    </div>
  )
}

export default aboutus