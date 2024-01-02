import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

function Main() {
  const [count, setCount] = useState(0)
  const YOUR_VIDEO_ID = 'zB8_HbrxUi8'
  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      
        <div className="iframe-parent">
          <div className="transparent-block"></div>
          <iframe className="iframe-block" src = {`https://www.youtube.com/embed/${YOUR_VIDEO_ID}?autoplay=1&mute=1&controls=0&loop=1&playlist=${YOUR_VIDEO_ID}&speed=0.25&controls=0`}
          // allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          title="YouTube video player" 
          > 
          </iframe>
        </div> 

        
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default Main
