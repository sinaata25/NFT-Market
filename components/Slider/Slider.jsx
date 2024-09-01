import React,{useEffect,useState,useRef} from 'react'
import { motion } from 'framer-motion'
import { TiArrowLeftThick,TiArrowRightThick } from 'react-icons/ti'
//internal import
import SliderCard from "./SliderCard/SliderCard"
import Style from "./Slider.module.css"
import images from "../../img"
const Slider = () => {
    const sliderArray=[ {
        background:images.creatorbackground4,
        user:images.user9
    },
    {
        background:images.creatorbackground5,
        user:images.user2
    },
    {
        background:images.creatorbackground3,
        user:images.user3
    },
    {
        background:images.creatorbackground9,
        user:images.user4
    },
    {
        background:images.creatorbackground2,
        user:images.user5
    }
    ,        {
        background:images.creatorbackground6,
        user:images.user6
    }
    ,        {
        background:images.creatorbackground8,
        user:images.user8
    }]
    const [width,setWidth]=useState(0);
    const dragSlider=useRef();
    useEffect(() => {
        const updateWidth = () => {
            setWidth(dragSlider.current.scrollWidth - dragSlider.current.offsetWidth);
        };

        updateWidth();
        window.addEventListener('resize', updateWidth);

        return () => {
            window.removeEventListener('resize', updateWidth);
        };
    }, []);

    const handleScroll = (direction) => {
        const { current } = dragSlider;
        const scrollAmount = window.innerWidth > 1800 ? 270 : 210;

        if (direction === "left") {
            current.scrollLeft = Math.max(0, current.scrollLeft - scrollAmount);
        } else {
            current.scrollLeft = Math.min(current.scrollLeft + scrollAmount, width);
        }
        
        // Update width after each scroll
        setWidth(current.scrollWidth - current.offsetWidth);
    };


  return (
    <div className={Style.slider}>
        <div className={Style.slider_box}>
            <div className={Style.slider_box_button}>
                <div className={Style.slider_box_button_btn}>
                    <div className={Style.slider_box_button_btn_icon} onClick={()=>handleScroll("left")} > 
                        <TiArrowLeftThick  />
                    </div>
                    <div className={Style.slider_box_button_btn_icon} onClick={()=>handleScroll("right")}> 
                        <TiArrowRightThick  />
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