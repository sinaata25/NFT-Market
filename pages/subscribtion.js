import React from 'react'
import Style from "../styles/subscribtion.module.css"

import Subscribtion from "../Subscribtion/Subscribtion"

const subscribtion = () => {

    const subscibtionArray=[
        {
            plan:"Starter",
            Price:"$5/month",
            popular:"",
            service:["Automated Reporting","Faster Processing","customization","Basic Support"],
            info:"something about paln"
        },
        {
            plan:"Basic",
            Price:"$15/month",
            popular:"Popular",
            service:["Everything in starter","100 builds","Progress reports","Premium Support"],
            info:"something about paln"
        },
        {
            plan:"Plus",
            Price:"$25/month",
            popular:"",
            service:["Everything in Basic","unlimited builds","Advanced Analytics","Company Evaluations"],
            info:"something about paln"
        }
    ]

  return (
    <div className={Style.subscribtion}>
        <div className={Style.subscribtion_box}>
            <div className={Style.subscribtion_box_info}>
                <h1>Subscription</h1>
                <p>Pricing to fit the needs of any company size</p>
            </div>
            <div className={Style.subscribtion_box_box}>
                {
                    subscibtionArray.map((el,i)=>(
                        <Subscribtion key={i+1} i={1} el={el} />
                    ))
                }
            </div>
        </div>
    </div>
    
  )
}

export default subscribtion