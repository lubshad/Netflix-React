import { ArrowBack } from '@mui/icons-material';
import React from 'react'
import "./watch.scss"

export default function Watch() {

    const trailer =
        "https://player.vimeo.com/external/371433846.sd.mp4?s=236da2f3c0fd273d2c6d9a064f3ae35579b2bbdf&profile_id=139&oauth2_token_id=57447761";

    return (
        <div className="watch">
            <div className="home-button">
                <ArrowBack className="back-icon"></ArrowBack>
                <h4 className="home-text">Home</h4>
            </div>
            <video controls src={trailer} className="trailer"></video>
        </div>
    )
}
