// import { useState } from 'react''
import './App.css'
import Navbar from './pages/navbar'
import Projects from './pages/Projects'
import Home from './pages/Home'
import Skills from './pages/Skills'
import About from './pages/About'
import Contact from './pages/Contact'
import Timeline from './pages/drafts/Timeline'
import { useEffect, useState } from "react";

// Theme toggle with prefers-color-scheme + localStorage
function getInitialTheme() {
  const saved = localStorage.getItem("theme");
  if (saved) return saved === "light";
  return window.matchMedia?.("(prefers-color-scheme: light)")?.matches ?? false;
}

function App() {
  
  const [isLight, setIsLight] = useState(getInitialTheme);

  useEffect(() => {
    const root = document.documentElement;
    root.classList.toggle("light", isLight);
    root.classList.toggle("dark", !isLight);
    localStorage.setItem("theme", isLight ? "light" : "dark");
    document.getElementById('themeLabel').textContent = isLight ? 'Light' : 'Dark';
    document.getElementById('sun').style.display = isLight ? '' : 'none';
    document.getElementById('moon').style.display = isLight ? 'none' : '';
    document.getElementById('lightGithub').style.display = isLight ? '' : 'none';
    document.getElementById('darkGithub').style.display = isLight ? 'none' : '';
  }, [isLight]);

  return (
    <>
      <div className="bgtrans">
          <Navbar isLight={isLight} setIsLight={setIsLight}/>
          <div>
            <Home/>
            <About isLight={isLight}/>
            {/* <Projects/> */}
            <Skills/>
            {/* <Contact/> */}
          </div>
          
      </div>

    </>
  )
}

export default App
