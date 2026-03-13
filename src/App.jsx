import React from 'react'
import Home from './pages/Home/Home'
import About from './pages/About/About'
import Contact from './pages/contact/contact'
import Resume from './pages/Resume'
import Project from './pages/project/Project'
import Skills from './pages/skills'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
// import { Link } from 'react-router-dom'
import './App.css'

function App() {
  

  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path='/contact' element={<Contact />} />
        <Route path="/project" element={<Project />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/Resume" element={<Resume />} />
        {/* <Route path="/project" element={<Project />} /> */}
        </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
