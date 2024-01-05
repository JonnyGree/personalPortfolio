import React, { useState, useEffect } from 'react';
import { Link, NavLink } from "react-router-dom"
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20 ? true : false);
    };

    window.addEventListener('scroll', handleScroll);   
    return () => {
      window.removeEventListener('scroll', handleScroll);
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
  <Navbar
    expanded={menuOpen}
    fixed="top"
    expand="md"
    className={"navbar"}
  >
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
            <NavLink to="/projects">Projects</NavLink>
            <NavLink to="/about">About Me</NavLink>
            <NavLink to="/contact">Contact</NavLink>
        </nav>
        
        </header>
  </Navbar>
  )
}