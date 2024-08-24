import React from 'react';
//internal import
import Style from "./AudioLive.module.css"
import images from "../../img"
import AudioCard from "./AudioCard/AudioCard";
import AudioCardSmall from "./AudioCardSmall/AudioCardSmall";
function AudioLive(props) {
    return (
        <div className={Style.audioLive}>
            <div className={Style.audioLive_box}>
                <div className={Style.audioLive_box_left}>
                    <AudioCard/>
                    <AudioCard/>
                </div>
                <div className={Style.audioLive_box_Right}>
                    <AudioCardSmall/>
                    <AudioCardSmall/>
                    <AudioCardSmall/>
                </div>
            </div>
        </div>
    );
}

export default AudioLive;