import React from 'react'
//Internal Import
import Style from "./Title.module.css"


const title = ({heading,paragraph}) => {
  return (
    <div className={Style.title}>
        <div className={Style.title_box} >
            <h2>{heading}</h2>
            <p>{paragraph}</p>
        </div>
    </div>
  )
}

export default title