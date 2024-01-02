import React from "react"
import LinkedinPic from "./assets/github.svg"
import GithubPic from "./assets/linkedin.svg"

export default function Footer() {
    return (
        <footer>
            <img src={GithubPic} alt="Github" className="footer-icon"/>
            <img src={LinkedinPic} title="Link to Linkedin Profile" alt="Linkedin" className="footer-icon"/>
        </footer>
    )
}