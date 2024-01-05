import './App.css'
import NavBar from './NavBar'
import YouTubeBackground from './YouTubeBackground'

const YOUR_VIDEO_ID = 'zB8_HbrxUi8'

function App() {

  return (
    <>
    <div id="main">
      <YouTubeBackground videoId={YOUR_VIDEO_ID}/>
      <NavBar />
    </div>
    </>
  )
}

export default App
