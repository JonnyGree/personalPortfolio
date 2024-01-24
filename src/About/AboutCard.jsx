import React from "react";
import {  Container } from "react-bootstrap";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Container style={{marginTop: '10em'}}>
        <blockquote className="blockquote px-3">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="color-1">Alberto Sommacal  </span>
            from <span className="color-1"> Italy.</span>
            <br />
            I am currently employed as a Control & Automation Engineer, R&D.
            <br />
            I am entusiast abouth new tecnology that bring innoviation to the automation wordl
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Writing Tech Blogs
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>

        </blockquote>
    </Container>
  );
}

export default AboutCard;
