import React from 'react'
import Navbar from '../components/navbar/Navbar'
import Featured from './components/featured/Featured'
import MovieCarousal from './components/movie_carousal/MovieCarousal'
import "./home.scss"

export default function Home() {
    return (
        <div className='home'>
            <Navbar></Navbar>
            <Featured></Featured>
            <MovieCarousal></MovieCarousal>
        </div>
    )
}
