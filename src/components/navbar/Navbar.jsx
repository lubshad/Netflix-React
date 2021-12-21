import React from 'react'
import { useState } from 'react'
import "./navbar.scss"

import { ArrowDropDown, Notifications, Search } from "@mui/icons-material"
import NetflixIcon from '../netflix_icon/netflix_icon'

export default function Navbar() {

    const [scrolled, setScrolled] = useState(false)

    var handleScroll = () => {
        const offset = window.scrollY
        setScrolled(offset > 100)
    }
    window.onscroll = handleScroll

    // console.log(scrolled)


    return (
        <div className= {scrolled ?  "navbar scrolled" : "navbar"}>
            <NetflixIcon></NetflixIcon>
            <ul className="navbar-menu">
                <li className="navbar-menu-item">
                    Homepage
                </li>
                <li className="navbar-menu-item">
                    Series
                </li>
                <li className="navbar-menu-item">
                    Movies
                </li>
                <li className="navbar-menu-item">
                    New and Popular
                </li>
                <li className="navbar-menu-item">
                    My List
                </li>
            </ul>
            <div className="navbar-right-section">
                <Search className='icon-button'></Search>
                <Notifications className="icon-button"></Notifications>
                <img src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80" alt="" className="profile-image" />
                <h4 className="profile-name">Jhon Doe</h4>
                <ArrowDropDown></ArrowDropDown>
            </div>
        </div>
    )
}
