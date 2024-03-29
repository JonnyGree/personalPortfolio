import React from "react";
import { Container } from "react-bootstrap";
import { Linkedin, Instagram, Github, EnvelopeFill} from 'react-bootstrap-icons';
const date = new Date();
const year = date.getFullYear();

function Footer() {
    return (
      <Container fluid className="footer" style={{marginTop: '8em'}}>
          <div className="row justify-content-center py-4">
                <div class="col-auto py-2 px-4 ">       
                    <a
                    href="https://www.linkedin.com/in/alberto-sommacal-129846151/"
                    target="_blank" 
                    >
                        <Linkedin width={30} height={30} fill="white" className="site-icon"/>
                    </a>
                </div>
                <div class="col-auto py-2 px-4">                
                    <a 
                    href="https://github.com/JonnyGree"
                    target="_blank" 
                    >
                        <Github width={30} height={30} fill="white" className="site-icon"/>
                    </a>
                </div>
                <div class="col-auto py-2 px-4"> 
                    <a
                    href="mailto:sommacalalberto@gmail.com"
                    target="_blank" 
                    >
                        <EnvelopeFill width={30} height={30} fill="white" className="site-icon"/>
                    </a>
                </div>
                <div class="col-auto py-2 px-4"> 
                    <a
                    href="https://www.instagram.com/alberto.sommacal/?hl=en"
                    target="_blank" 
                    >
                        <Instagram width={30} height={30} fill="white" className="site-icon"/>
                    </a>
                </div>
          </div>
          <div className="row pb-3 px-2">
            {/* <div  className="col-auto">
                Developed by Sommacal Alberto
            </div> */}
            <div className="col-auto mx-auto">
                Copyright © {year} SMCA
            </div>
        </div>
      </Container>
    );
  }
  
  export default Footer;