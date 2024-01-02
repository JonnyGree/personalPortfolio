import React from "react"

export default function AboutMe() {
    return (
        <section className="about" id="about">
        <div className="row">
            <h2>About Me</h2>
            <div className="about__content">
            <div className="about__text">
                {/* Replace the below paragraph with info about yourself */}
                
                Advantage old had otherwise sincerity dependent additions. It in adapted natural hastily is justice. 
                Six draw you him full not mean evil. Prepare garrets it expense windows shewing do an. She projection advantages resolution son indulgence. 
                
                <p />
                <p>
                Part sure on no long life am at ever. In songs above he as drawn to. Gay was outlived peculiar rendered led six.
                </p>
                {/* Provide a link to your resume */}
                <a href="#" className="btn">
                My Resume
                </a>
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