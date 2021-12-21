import React from 'react'
import NetflixIcon from '../../components/netflix_icon/netflix_icon'
import "./register.scss"

export default function Register() {
    return (
        <div className='register'>
            <div className="top-section">
                <NetflixIcon></NetflixIcon>
                <button className="sign-in">
                    Sign In
                </button>
            </div>
            <div className="middle-section">
                <h1 className="main-title">Unlimited movies, TV shows, and more.</h1>
                <h3 className="middle-caption">Watch anywhere , Cancel anytime</h3>
                <caption className="bottom-caption">Ready to watch? Enter your email to create or restart your membership.</caption>
                <div className="input-section">
                    <input type="email" name="Email" id="" className='email-input' placeholder='Email Address'/>
                    <button className="get-started-button">
                        Get Started
                    </button>
                </div>
            </div>
        </div>
    )
}
