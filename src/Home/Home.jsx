import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import homeLogo from "../../asset/profilePic.jpg";
import Type from "./Type";
import Tilt from "react-parallax-tilt";

function Home() {
  return (
    <section>
      <Container style={{marginTop: '10em'}} id="home">
          <Row>
            <Col md={7} className="home-header">
              <h1 style={{ paddingBottom: 15 }} className="heading">
                Hi There!{" "}
                <span className="wave" role="img" aria-labelledby="wave">
                  👋🏻
                </span>
              </h1>
              <h1>
                I'M
                <strong className="color-1"> ALBERTO SOMMACAL</strong>
              </h1>

              <div style={{ padding: 20, textAlign: "left" }}>
                <Type />
              </div>
            </Col>

            <Col md={5} style={{ paddingBottom: 20 }}>
              <Tilt >
                <img src={homeLogo} className="img-fluid" alt="avatar" />
              </Tilt>
            </Col>  
          </Row>
          <Row style={{marginTop: '10%'}}>
            <Col md={8}  className="home-about-description">
              <h1 style={{ fontSize: "2.6em" }}>
                LET ME <span className="color-1"> INTRODUCE </span> MYSELF
              </h1>
              <p className="home-about-body">
                I fell in love with programming and I have at least learnt
                something, I think… 🤷‍♂️
                <br />
                <br />
                My field of Interest's are Automtion & Control &nbsp;
                <i>
                  <b className="color-1">I am experience in PLC, HMI and SCADA development  </b> and
                  also in areas related to{" "}
                  <b className="color-1">
                    data acquisition, processing and reporting
                  </b>
                </i>
                <br />
                <br />I am fluent in desktop and web development environment
                <i>
                  <b className="color-1"> C#, C++, Javascript, React JS </b>
                </i>
                <br />
              </p>
            </Col>
    
        </Row>
      </Container>
    </section>
  );
}

export default Home;
