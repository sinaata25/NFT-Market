import React,{useEffect,useState,useRef} from 'react'
import { motion } from 'framer-motion'
import { TiArrowLeftThick,TiArrowRightThick } from 'react-icons/ti'
//internal import
import SliderCard from "./SliderCard/SliderCard"
import Style from "./Slider.module.css"

const Slider = () => {
    const sliderArray=[1,2,3,4,5,6,7]
    const [width,setWidth]=useState(0);
    const dragSlider=useRef();
    useEffect(()=>{
        setWidth(dragSlider.current.scrollWidth-dragSlider.current.offsetWidth)
    }
    );
const handleScroll=(direction)=>{
    const {current}=dragSlider;
    const scrollAmount=window.innerWidth > 1800 ? 270 :210; 
    if(direction=="left"){
        current.scrollLeft -=scrollAmount;
    }else{
        current.scrollLeft += scrollAmount;
    }
}

  return (
    <div className={Style.slider}>
        <div className={Style.slider_box}>
            <h2>Explore NFTs Video</h2>
            <div className={Style.slider_box_button}>
                <p>Click on play icon and enjoy NFTs Video</p>
                <div className={Style.slider_box_button_btn}>
                    <div className={Style.slider_box_button_btn_icon}> 
                        <TiArrowLeftThick  onClick={()=>handleScroll("left")} />
                    </div>
                    <div className={Style.slider_box_button_btn_icon}> 
                        <TiArrowRightThick onClick={()=>handleScroll("right")} />
                    </div>       
                </div>
            </div>
            <motion.div className={Style.slider_box_items} ref={dragSlider} >
                <motion.div ref={dragSlider} className={Style.slider_box_item} drag="x" dragConstraints={{right:0,left:-width}} >
                    {sliderArray.map((el,i)=>(
                        <SliderCard key={i+1} el={el} i={i}/>
                    ))}
                </motion.div>
            </motion.div>
        </div>
    </div>
  )
}

export default Slider