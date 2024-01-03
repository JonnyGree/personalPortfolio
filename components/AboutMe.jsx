import React from "react"

export default function AboutMe() {
    return (
        <section className="aboutMe" id="about">
        <div className="row">
            <h2>About Me</h2>
            <div className="about__content">
            <div className="about__text">
                {/* Replace the below paragraph with info about yourself */}
                    Hello! I'm a Control & Automation Engineer with a focus on software development for manufacturing. 
                    Specializing in Beckhoff PLC programming, I also bring frontend development skills to craft user-friendly Human-Machine Interfaces. 
                    My expertise extends to SCADA, database management, and RESTful APIs, ensuring efficient and interconnected automation solutions.               
                <p />
                <p>
                Let's collaborate to enhance your manufacturing processes with my technical and creative capabilities.
                </p>
                {/* Provide a link to your resume */}
                <a href="#" className="btn">My Resume</a>
            </div>
            <div className="about__photo-container">
                {/* Add a nice photo of yourself */}
                <img className="about__photo" src="./images/jane.jpg" alt="" />
            </div>
            </div>
        </div>
        </section>
    )
}