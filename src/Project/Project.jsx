import React from 'react';

function Project() {
  return (
    <div style={{position: 'fixed', height: '100vh', width: '100vh', zIndex: 2000, background: 'red'}}>
        <video autoplay="" muted="" loop="" id="bgvid" >
            <source src="https://inductiveautomation.com/static/video/8-page-product-video-2.mp4" type="video/mp4"></source>
        </video>
    </div>
  );
}

export default Project;