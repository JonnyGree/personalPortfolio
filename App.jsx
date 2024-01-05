import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom"
import Header from "./components/Header"
import Home from "./components/Home/Home";
import AboutMe from './components/About/About'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Footer from "./components/Footer"
import Footer2 from "./components/Footer2"
import ScrollToTop from "./components/ScrollToTop";
import YouTubeBackground from './components/YouTubeBackground'
import "./App.css";


function App() {

  const YOUR_VIDEO_ID = 'zB8_HbrxUi8'

  return (
    <BrowserRouter>
      <Header />
      <YouTubeBackground videoId={YOUR_VIDEO_ID} />
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/about" element={<AboutMe />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<Navigate to="/"/>} /> 
        </Routes>
        <Footer />
        <Footer2 />
    </BrowserRouter>
  )
}

ReactDOM
  .createRoot(document.getElementById('root'))
  .render(<App />);