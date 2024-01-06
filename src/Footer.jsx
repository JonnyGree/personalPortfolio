import React from "react";
import { Container } from "react-bootstrap";
import { Linkedin, Instagram, Github, EnvelopeFill} from 'react-bootstrap-icons';
import { Link } from "react-router-dom";
const date = new Date();
const year = date.getFullYear();

function Footer() {
    return (
      <Container fluid className="footer position-fixed bottom-0">
          <div className="row justify-content-center py-4">
                <div class="col-auto py-2 px-4">       
                    <a
                    href="https://www.linkedin.com/in/soumyajit4419/"
                    target="_blank" 
                    >
                        <Linkedin width={30} height={30}/>
                    </a>
                </div>
                <div class="col-auto py-2 px-4">                
                    <a 
                    href="https://github.com/soumyajit4419"
                    target="_blank" 
                    >
                        <Github width={30} height={30}/>
                    </a>
                </div>
                <div class="col-auto py-2 px-4"> 
                    <a
                    href="https://twitter.com/Soumyajit4419"
                    target="_blank" 
                    >
                        <EnvelopeFill width={30} height={30}/>
                    </a>
                </div>
                <div class="col-auto py-2 px-4"> 
                    <a
                    href="https://www.instagram.com/soumyajit4419"
                    target="_blank" 
                    >
                        <Instagram width={30} height={30}/>
                    </a>
                </div>
          </div>
          <div>
          <div  className="">
            Designed and Developed by Sommacal Alberto
          </div>
          <div className="">
            Copyright © {year} SMCA
          </div>
        </div>
      </Container>
    );
  }
  
  export default Footer;