import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

function Main() {
  const [count, setCount] = useState(0)

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
        <iframe src="https://www.youtube-nocookie.com/embed/zB8_HbrxUi8?si=LLY_OMTlDVyoxS7c&amp;autoplay=1&controls=0&disablekb=1&loop=1&end=30&modestbranding=1&mute=1" title="YouTube video player" 
        frameborder="0" width="560" height="315" style={{pointerEvents: 'none'}}> 
        </iframe>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default Main
