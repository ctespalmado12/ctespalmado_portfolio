// import { useState } from 'react''
import './App.css'
import Navbar from './pages/navbar'
import Projects from './pages/Projects'
import Home from './pages/Home'
import Skills from './pages/Skills'
import About from './pages/About'
import Contact from './pages/Contact'
function App() {

  return (
    <>
      <div className="bgtrans">
          <Navbar/>
          <Home/>
          <Projects/>
          <Skills/>
          <About/>
          <Contact/>
      </div>

    </>
  )
}

export default App
