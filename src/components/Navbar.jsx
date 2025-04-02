import React from 'react'
import { Link } from 'react-router-dom'

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
            </div>
        </>
    )
}
