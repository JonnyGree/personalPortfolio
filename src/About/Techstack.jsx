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
const stackFilter = 'grayscale(1) drop-shadow(3px 3px 3px #dfe228) invert(5%)'
function Techstack() {
  return (
    <Container className="my-5 py-5">
    <h1 className="project-heading text-center display-2">
          Professional <strong className="color-1">Skillset </strong>
        </h1>  
    <h2 className="text-center my-5 pt-5">Frontend development</h2>
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <FaHtml5 style={{filter: stackFilter}}/>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <FaCss3 style={{filter: stackFilter}}/>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiJavascript1 style={{filter: stackFilter}}/>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiReact style={{filter: stackFilter}}/>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <FaBootstrap style={{filter: stackFilter}}/>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiFirebase style={{filter: stackFilter}}/>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <RiSupabaseFill style={{filter: stackFilter}}/>
      </Col>
    </Row>
    <h2 className="text-center my-5">Desktop development</h2>
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <TbBrandCSharp style={{filter: stackFilter}}/>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <CgCPlusPlus style={{filter: stackFilter}}/>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiPython style={{filter: stackFilter}}/>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiGit style={{filter: stackFilter}}/>
      </Col>
    </Row>
    <h2 className="text-center my-5">Tools <strong className="color-1">I used </strong></h2>
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <SiSiemens  style={{filter: stackFilter, scale: '1.4'}}/>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiSchneiderelectric  style={{filter: stackFilter}}/>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiEpson style={{filter: stackFilter, scale: '1.4'}}/>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
          <img src={AbbLogo} alt="Logo" width={100} style={{filter: stackFilter}}/>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
          <img src={inductiveAutomation} alt="Logo" width={100} style={{filter: stackFilter, translate: '5px -5px'}}/>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
          <img src={influxdb} alt="Logo" width={100} style={{filter: stackFilter}}/>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
          <img src={grafana} alt="Logo" width={100} style={{filter: stackFilter}}/>
      </Col>
    </Row>
    <h2 className="text-center my-5">PLC Programming</h2>
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
          <img src={twincatLogo} alt="Logo" width={100} style={{filter: stackFilter}}/>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <img src={tia} alt="Logo" width={100} style={{filter: stackFilter }}/>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <img src={step7} alt="Logo" width={80} style={{filter: stackFilter}}/>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <img src={unity} alt="Logo" width={60} style={{filter: stackFilter, borderRadius: '10%'}}/>
      </Col>
    </Row>

    </Container>
  );
}

export default Techstack;
