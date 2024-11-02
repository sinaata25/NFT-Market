import React from 'react'
import Style from "./Subscribtion.module.css"
import { TiTick } from 'react-icons/ti'
import Button from "../components/Button/Button"
const Subscribtion = ({el,i}) => {
  return (
    <div className={Style.SubscribtionBox}>
        <div className={Style.SubscribtionBox_box} >
          <span className={Style.SubscribtionBox_box_span}>{el.plan}</span>
          <small className={Style.SubscribtionBox_box_small}>{el.popular || ""}</small>
          <p className={Style.SubscribtionBox_box_small_para}>{el.price}</p>
          <div className={Style.SubscribtionBox_box_info}>
            {el.service.map((el,i)=>(
               <p className={Style.SubscribtionBox_box_info_para} key={i+1}>
                   <span>
                      <TiTick/>
                   </span> 
                   {el}
               </p>
            ))}
          </div>
          <Button btnName="Submit" handleClick={()=>{}} classStyle={Style.button} />
        </div>
    </div>
  )
}

export default Subscribtion