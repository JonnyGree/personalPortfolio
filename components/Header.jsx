import React, { useState, useEffect } from 'react';
import { Link, NavLink } from "react-router-dom"
import '../index.css'; // Import your CSS file

export default function Header() {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
      setMenuOpen(!menuOpen);
    };

    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
      const handleScroll = () => {
        const isScrolled = window.scrollY > 0;
        setScrolled(isScrolled);
      };
  
      window.addEventListener('scroll', handleScroll);
      console.log('scroll event trigger')
      return () => {
        window.removeEventListener('scroll', handleScroll);
        console.log('remove scroll event')
      };
    }, []);

    const headerStyle = {
        position: 'fixed',
        top: 0,
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        padding: '0 2em',
        transition: 'all 0.6s',
        // backgroundColor: scrolled ? 'var(--neutral-80)' : 'transparent',
        background: scrolled
            ? 'linear-gradient(to bottom, rgba(51, 51, 51, 0.98), rgba(51, 51, 51, 0.7))'
            : 'transparent',
        height: scrolled ? '4em' : '6em',
        boxShadow: scrolled ? '0 0.0625rem 0.375rem 0 rgba(0,0,0,.2)' : 'none',
        zIndex: 999 /* Ensure the header stays on top of other elements */
      };
     
    


    return (
        //position fixed
        <header style={headerStyle}>
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