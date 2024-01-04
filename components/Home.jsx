import React from "react"
import AboutMe from './AboutMe'
import Contact from './Contact'
import Footer from "./Footer"

function Home() {

  return (
    <>
      <div className="app">         
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

export default Home
