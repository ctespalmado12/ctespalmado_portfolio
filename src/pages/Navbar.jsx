import { useEffect, useState } from "react";
import React from 'react'
import { Moon } from "lucide-react";
import { Sun } from "lucide-react";
// Theme toggle with prefers-color-scheme + localStorage
function getInitialTheme() {
  const saved = localStorage.getItem("theme");
  if (saved) return saved === "light";
  return window.matchMedia?.("(prefers-color-scheme: light)").matches ?? false;
}

const Navbar = () => {

  const [isLight, setIsLight] = useState(getInitialTheme);

  useEffect(() => {
    const root = document.documentElement;
    root.classList.toggle("light", isLight);
    document.getElementById('themeLabel').textContent = isLight ? 'Light' : 'Dark';
    document.getElementById('sun').style.display = isLight ? '' : 'none';
    document.getElementById('moon').style.display = isLight ? 'none' : '';
    // document.getElementById('lightGithub').style.display = isLight ? '' : 'none';
    // document.getElementById('darkGithub').style.display = isLight ? 'none' : '';
  }, [isLight]);  
 // Active nav link highlight
  useEffect(() => {
    const ids = ['home', 'projects', 'skills', 'about', 'contact'];
    const options = { rootMargin: '-40% 0px -55% 0px', threshold: 0 };

    const io = new IntersectionObserver((entries) => {
      for (const entry of entries) {
        const id = entry.target.id;
        const link = document.querySelector(`header.nav a[href="#${id}"]`);
        if (!link) continue;
        if (entry.isIntersecting) {
          document.querySelectorAll('header.nav a').forEach(a => a.classList.remove('active'));
          link.classList.add('active');
        }
      }
    }, options);

    ids.forEach(id => {
      const el = document.getElementById(id);
      if (el) io.observe(el);
    });

    return () => io.disconnect();
  }, []);

// Current year
// document.getElementById('year').textContent = new Date().getFullYear();

  return (
    <>
      <header
        className="nav sticky top-0 z-50 border-b
              bg-[color-mix(in_oklab,_var(--bg)_90%,_transparent)]
              [border-bottom-color:color-mix(in_oklab,_var(--text)_12%,_transparent)]
              backdrop-blur-[10px] backdrop-saturate-[1.8]
              supports-[-webkit-backdrop-filter:blur(0)]:[-webkit-backdrop-filter:blur(10px)]"
      >
        <div className="text-xl max-w-[1100px] mx-auto px-[1.2rem]">
          <div className="flex items-center justify-between py-[.85rem]">
            <a href="#home" className="active flex text-3xl items-center gap-[.6rem] font-extrabold tracking-[.4px] text-[var(--text)]" aria-label="Go to home">
              <span>&lt;CE/&gt;</span>
            </a>

            <nav aria-label="Primary">
              <ul className="hidden sm:flex gap-[1.2rem] list-none m-0 p-0">
                <li><a href="#about"    className="text-[var(--text)] opacity-[.85] font-semibold hover:opacity-100 transition-opacity">About</a></li>
                <li><a href="#projects" className="text-[var(--text)] opacity-[.85] font-semibold hover:opacity-100 transition-opacity">Projects</a></li>
                <li><a href="#skills"   className="text-[var(--text)] opacity-[.85] font-semibold hover:opacity-100 transition-opacity">Skills</a></li>
                <li><a href="#contact"  className="text-[var(--text)] opacity-[.85] font-semibold hover:opacity-100 transition-opacity">Contact</a></li>
              </ul>
            </nav>

            <div className="flex items-center gap-[.5rem]">
              <button id="themeToggle" onClick={() => setIsLight(v => !v)}
                      className="inline-flex items-center gap-[.45rem] px-[.9rem] py-[.6rem] rounded-full font-semibold
                            border [border-color:color-mix(in_oklab,_var(--text)_12%,_transparent)]
                            bg-[color-mix(in_oklab,_var(--panel)_90%,_transparent)]
                            text-[var(--text)] hover:[box-shadow:var(--ring)]"
                      aria-pressed={isLight}
                      aria-label={isLight ? 'Switch to dark mode' : 'Switch to light mode'}
                      title={isLight ? 'Switch to dark mode' : 'Switch to light mode'}>
                <Sun  id="sun" className="w-[18px] h-[18px]" size={16} strokeWidth={1.5}  fill="currentColor" />
                <Moon  id="moon" className="w-[18px] h-[18px] lucide lucide-moon-icon lucide-moon" size={16} strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
                <span id="themeLabel">Dark</span>
              </button>

              <a className="inline-flex items-center gap-[.45rem] px-[.9rem] py-[.6rem] rounded-full font-semibold
                        border [border-color:color-mix(in_oklab,_var(--text)_12%,_transparent)]
                        bg-[color-mix(in_oklab,_var(--panel)_90%,_transparent)]
                        text-[var(--text)] hover:[box-shadow:var(--ring)]"
                href="#contact">Say hello</a>
            </div>
          </div>
        </div>
      </header>
    </>
  )
}

export default Navbar
