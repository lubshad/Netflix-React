import { Info, PlayArrow } from '@mui/icons-material'
import React from 'react'
import "./featured.scss"

export default function Featured() {
    return (
        <div className='featured'>
            <img className='cover-image' src="https://images.unsplash.com/photo-1563991655280-cb95c90ca2fb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" />
            <div className="movie-details">
                <h1 className="movie-title">The Matrix</h1>
                <p className="movie-description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde vel incidunt accusamus veritatis repellendus praesentium maxime non in ut eius! Praesentium modi nobis vel eos distinctio in cupiditate eum? Facere.</p>
                <div className="action-buttons">
                    <button className="action-button">
                        <PlayArrow></PlayArrow>
                        <span className="action-text">Play</span>
                    </button>
                    <button className="action-button">
                        <Info></Info>
                        <span className="action-text">Info</span>
                    </button>
                </div>
            </div>
        </div>
    )
}
