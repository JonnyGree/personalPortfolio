import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route, Link } from "react-router-dom"
import './App.css'
import NavBar from './NavBar'
import YouTubeBackground from './YouTubeBackground'
import Element from "./Element"
import Home from "./Home/Home"
import Footer from './Footer';
import About from "./About/About"
import Project from './Project/Project';

const YOUR_VIDEO_ID = 'zB8_HbrxUi8'

function App() {

  return (
    <>
    <BrowserRouter id="main">
      <NavBar />
      <YouTubeBackground videoId={YOUR_VIDEO_ID} />
        <Routes>
          <Route path="/" element={<div><Home /><Footer /></div>} />
          <Route path="/project" element={<div><Project /><Footer /></div>} />
          <Route path="/about" element={<div><About /><Footer /></div>} />
          <Route path="/contact" element={<Element />} />
          <Route path="*" element={<Element />} /> 
        </Routes>
      
    </BrowserRouter>
    </>
  )
}

export default App
