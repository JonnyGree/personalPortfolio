import { useState } from 'react'
import YouTubeBackground from './YouTubeBackground'

function Main() {
  const [count, setCount] = useState(0)
  const YOUR_VIDEO_ID = 'zB8_HbrxUi8'
  return (
    <>
      <div >
          <YouTubeBackground videoId={YOUR_VIDEO_ID}/>
      </div> 
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default Main
