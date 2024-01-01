
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import React from 'react'
import useState from 'react'
import Text from 'react-native'
import View from 'react-native'
// import { WebView } from 'react-native-webview'

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
      {/* <WebView
        javaScriptEnabled={true}
        domStorageEnabled={true}
        mediaPlaybackRequiresUserAction={true}
        style={{ height:180, width:300,alignSelf:"center",alignContent:"center"}}
        source={{uri: 'https://www.youtube.com/embed/zB8_HbrxUi8?si=goOOXt9yJOCuXFNn' }}
        /> */}

      {/* <View style={{flex: 1}}>
          <WebView
              style={ {  marginTop: (Platform.OS == 'ios') ? 20 : 0,} }
              javaScriptEnabled={true}
              domStorageEnabled={true}
              source={{uri: 'https://www.youtube.com/embed/zB8_HbrxUi8'}}
          />
      </View> */}
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>

        <div className="iframe-parent">
          <div className="transparent-block"></div>
          <iframe className="iframe-block" src='https://www.youtube-nocookie.com/embed/zB8_HbrxUi8?si=LLY_OMTlDVyoxS7c&amp;autoplay=1&controls=0&disablekb=1&loop=1&end=30&modestbranding=1&mute=1' title="YouTube video player" 
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
