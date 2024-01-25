import React from 'react';
import Container from 'react-bootstrap/Container';

function Project() {
  return (
    <Container fluid >
      <div>
        <h1>HMI DEVELOPMENT</h1>
        <h3>Ignuctive Automation</h3>
      </div>
        <video playsinline="" autoplay="" muted="" loop="true" id="openingVideo" className=''>
            <source src="https://inductiveautomation.com/static/video/8-page-product-video-2.mp4" type="video/mp4"></source>
        </video>
    </Container>
  );
}

export default Project;