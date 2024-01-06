import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { CgCPlusPlus } from "react-icons/cg";
import {
  DiJavascript1,
  DiReact,
  DiMongodb,
  DiPython,
  DiGit,
} from "react-icons/di";
import { SiFirebase, SiSiemens, SiSchneiderelectric, SiEpson    } from "react-icons/si";
import { RiSupabaseFill } from "react-icons/ri";
import { FaHtml5, FaCss3, FaBootstrap } from "react-icons/fa";
import { TbBrandCSharp } from "react-icons/tb";

import twincatLogo from "../../asset/twincatLogo.png"
import AbbLogo from "../../asset/AbbLogo.svg"
import Keyence from "../../asset/Keyence.png"
import Cognex from "../../asset/Cognex.png"
import inductiveAutomation from "../../asset/inductiveAutomation.png"
import influxdb from "../../asset/influxdb.svg"
import grafana from "../../asset/grafana.png"
import unity from "../../asset/unity.png"
import step7 from "../../asset/step7.png"
import tia from "../../asset/tia.png"

function Techstack() {
  return (
    <Container>
    <h2 className="text-center mt-5 pt-5">Frontend development</h2>
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <FaHtml5 />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <FaCss3 />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiJavascript1 />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiReact />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <FaBootstrap />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiFirebase />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <RiSupabaseFill />
      </Col>
    </Row>
    <h2 className="text-center">Desktop development</h2>
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <TbBrandCSharp />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <CgCPlusPlus />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiPython />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiGit />
      </Col>
    </Row>
    <h2 className="text-center">Brand</h2>
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <SiSiemens  />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiSchneiderelectric  />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiEpson />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
          <img src={AbbLogo} alt="Logo" width={100} style={{filter: 'grayscale(1)'}}/>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
          <img src={inductiveAutomation} alt="Logo" width={100} style={{filter: 'grayscale(1)'}}/>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
          <img src={influxdb} alt="Logo" width={100} style={{filter: 'grayscale(1)'}}/>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
          <img src={grafana} alt="Logo" width={100} style={{filter: 'grayscale(1)'}}/>
      </Col>
    </Row>
    <h2 className="text-center">Plc Programming</h2>
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
          <img src={twincatLogo} alt="Logo" width={100} style={{filter: 'grayscale(1)'}}/>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
      <img src={tia} alt="Logo" width={80} style={{filter: 'grayscale(1)'}}/>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
      <img src={step7} alt="Logo" width={60} style={{filter: 'grayscale(1)'}}/>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
      <img src={unity} alt="Logo" width={60} style={{filter: 'grayscale(1)'}}/>
      </Col>
    </Row>

    </Container>
  );
}

export default Techstack;
