import React from 'react'
import Image from 'next/image'
import Style from "./NTFTabs.module.css"

const NTFTabs = ({dataTab,icon}) => {
  return (
    <div className={Style.NTFTabs}>
      {dataTab.map((el,i)=>(
        <div className={Style.NTFTabs_box} key={i+1}>
          <Image src={el} alt="profile image" className={Style.NTFTabs_box_img} />
          <div className={Style.NTFTabs_box_info}>
            <span>
              offer by $770 by <small>Sina Ataei</small> {icon}
            </span>
            
            <small>Jun14 - 4:12 PM</small>
          </div>
        </div>
      ))}
    </div>
  )
}

export default NTFTabs