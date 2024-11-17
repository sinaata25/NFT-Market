import React from 'react'
import Link from 'next/link'

//Internal import
import Style from "./HelpCenter.module.css"

const HelpCenter = () => {

  const helpCenter=[
    {
      name:"About",
      link:"aboutus"
    },
    {
      name:"Contact Us",
      link:"contactUs"
    },
    {
      name:"Sign Up",
      link:"sign-up"
    },
    {
      name:"Sign in",
      link:"sign-in"
    },
    {
      name:"Subscription",
      link:"subscribtion"
    },
  ]


  return (
    <div className={Style.box}>
      {helpCenter.map((el,i)=>(
        <div  className={Style.helpCenter} key={i+1} >
          <Link href={{pathname: `${el.link}` }} className={Style.textstyle} >{el.name}</Link>
        </div>
      ))}
    </div>
  )
}

export default HelpCenter