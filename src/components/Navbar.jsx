import React from 'react'
import { Link } from 'react-router-dom'
import "../component-styles/Navbar.css"

export default function Navbar() {
    return (
        <>
            <div className="navbar">
                <div className="logo">
                    <img src="/React_First-App/vite.svg" alt="" />
                </div>
                <div className="navlinks">
                    <Link to="/">Home</Link>
                    <Link to="/about">About</Link>
                    <Link to="/contact">Contact</Link>
                    <Link to="/profile">ProfileCard</Link>
                    <Link to="/movie">MovieCard</Link>
                </div>
                <div className="social">
                <i class="fi fi-brands-linkedin"></i>
                <i class="fi fi-brands-github"></i>
                <i class="fi fi-brands-dev"></i>
                </div>
            </div>
        </>
    )
}
