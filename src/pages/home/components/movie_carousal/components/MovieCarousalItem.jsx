import React from 'react'
import "./movieCarousalItem.scss"
import { Add, ArrowLeft, ArrowRight, ThumbDown, ThumbUp, PlayArrow } from "@mui/icons-material"
import { useState } from 'react';


export default function MovieCarousalItem({ index }) {

    const [isHovered, setIsHovered] = useState(false);


    const left = (index * 320) - 50

    const trailer =
        "https://player.vimeo.com/external/371433846.sd.mp4?s=236da2f3c0fd273d2c6d9a064f3ae35579b2bbdf&profile_id=139&oauth2_token_id=57447761";


    return (
        <div className="carousal-item"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <img src="https://www.themoviedb.org/t/p/w600_and_h900_bestv2/f89U3ADr1oiB1s9GkdPOEpXUk5H.jpg" alt="" className="carousal-item-image" />
            <div className="highlighted-carousal-item" style={{ left: left }}>
                {isHovered && (
                    <>
                    <video className="heighlighted-item-image" src={trailer} autoPlay={true} loop />
                    </>
                )}
                <div className="heighlighted-item-action-buttons">
                    <PlayArrow className="heighlighted-item-action-button"></PlayArrow>
                    <Add className="heighlighted-item-action-button"></Add>
                    <ThumbUp className="heighlighted-item-action-button"></ThumbUp>
                    <ThumbDown className="heighlighted-item-action-button"></ThumbDown>
                </div>
                <p className="highlighted-item-description">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem dolore alias adipisci tempore amet officia labore neque, accusamus nihil provident sapiente corporis. Consequuntur temporibus repellendus, quasi suscipit quo fuga molestiae?
                </p>
            </div>
        </div>
    )
}
