import React from "react"
import { Link, NavLink } from "react-router-dom"

export default function Header() {

    return (
        //position fixed
        <header>
            <Link className="site-logo" to="/">Home</Link>
            <nav>
                <NavLink
                    to="/work"
                >
                    Work
                </NavLink>
                <NavLink
                    to="/about"
                >
                    About Me
                </NavLink>
                <NavLink
                    to="/contact"
                >
                    Contact
                </NavLink>
            </nav>
        </header>
        //dummy component
    )
}