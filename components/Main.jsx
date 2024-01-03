import React from "react"
import YouTubeBackground from './YouTubeBackground'
import AboutMe from './AboutMe'
import Contact from './Contact'
import Footer from "./Footer"

function Main() {

  const YOUR_VIDEO_ID = 'zB8_HbrxUi8'
  const youtubeBackgroundStyle = {
    position: 'fixed',
    top: 0,
    width: '100%',
  };
  
  return (
    <>
      <div className="app">         
          <YouTubeBackground videoId={YOUR_VIDEO_ID} style={youtubeBackgroundStyle}/>
          <div className="content">
            <AboutMe />
            <Contact />
            <AboutMe />
            <Contact />
            <Footer />
          </div>
      </div> 
    </>
  )
}

export default Main
