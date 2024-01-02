import { useState } from 'react'
import YouTubeBackground from './YouTubeBackground'
import AboutMe from './AboutMe'
import Contact from './Contact'

function Main() {
  const [count, setCount] = useState(0)
  const YOUR_VIDEO_ID = 'zB8_HbrxUi8'
  return (
    <>
      <div >
          <YouTubeBackground videoId={YOUR_VIDEO_ID}/>
          <AboutMe />
          <Contact />
      </div> 
    </>
  )
}

export default Main
