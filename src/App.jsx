import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route, Link } from "react-router-dom"
import './App.css'
import NavBar from './NavBar'
import YouTubeBackground from './YouTubeBackground'
import Element from "./Element"
import Footer from './Footer';

const YOUR_VIDEO_ID = 'zB8_HbrxUi8'

function App() {

  return (
    <>
    <BrowserRouter id="main">
      <YouTubeBackground videoId={YOUR_VIDEO_ID} />
      <NavBar />
        <Routes>
          <Route path="/" element={<Element />} />
          <Route path="/projects" element={<Element />} />
          <Route path="/about" element={<Element />} />
          <Route path="/contact" element={<Element />} />
          <Route path="*" element={<Element />} /> 
        </Routes>
      <Footer />
    </BrowserRouter>
    </>
  )
}

export default App
