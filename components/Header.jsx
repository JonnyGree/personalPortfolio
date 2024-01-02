import React, { useState } from 'react';
import { Link, NavLink } from "react-router-dom"

export default function Header() {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
      setMenuOpen(!menuOpen);
    };

    return (
        //position fixed
        <header>
            <Link className="site-logo" to="/">Home</Link>

        {/* Hamburger menu button */}
        <div className="hamburger-menu" onClick={toggleMenu}>
            <div className={`bar ${menuOpen ? 'open' : ''}`} />
            <div className={`bar ${menuOpen ? 'open' : ''}`} />
            <div className={`bar ${menuOpen ? 'open' : ''}`} />
        </div>

        {/* Navigation */}
        <nav className={`nav-links ${menuOpen ? 'open' : ''}`}>
            <NavLink to="/work">Work</NavLink>
            <NavLink to="/about">About Me</NavLink>
            <NavLink to="/contact">Contact</NavLink>
        </nav>
        
        </header>
        //dummy component
    )
}