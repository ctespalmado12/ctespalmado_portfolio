import { useEffect, useState } from "react";
import React from 'react'

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
              <span>CE</span>
            </a>

            <nav aria-label="Primary">
              <ul className="hidden sm:flex gap-[1.2rem] list-none m-0 p-0">
                <li><a href="#projects" className="text-[var(--text)] opacity-[.85] font-semibold hover:opacity-100 transition-opacity">Projects</a></li>
                <li><a href="#skills"   className="text-[var(--text)] opacity-[.85] font-semibold hover:opacity-100 transition-opacity">Skills</a></li>
                <li><a href="#about"    className="text-[var(--text)] opacity-[.85] font-semibold hover:opacity-100 transition-opacity">About</a></li>
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
                <svg id="sun" className="w-[18px] h-[18px]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M6.76 4.84l-1.8-1.79-1.41 1.41 1.79 1.8 1.42-1.42zm10.48 0l1.79-1.8 1.41 1.41-1.8 1.79-1.4-1.4zM12 4V1h-0v3h0zm0 19v-3h0v3h0zM4 12H1v0h3v0zm19 0h-3v0h3v0zM6.76 19.16l-1.42 1.42-1.79-1.8 1.41-1.41 1.8 1.79zm12.69-1.79l1.41 1.41-1.79 1.8-1.42-1.42 1.8-1.79z"/>
                  <circle cx="12" cy="12" r="5"/>
                </svg>
                <svg  id="moon" className="w-[18px] h-[18px] lucide lucide-moon-icon lucide-moon" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" aria-hidden="true" style={{ display: 'none' }}
                  strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M20.985 12.486a9 9 0 1 1-9.473-9.472c.405-.022.617.46.402.803a6 6 0 0 0 8.268 8.268c.344-.215.825-.004.803.401"/>
                </svg>
                <span id="themeLabel">Dark</span>
                {/* <svg id="moon" className="w-[18px] h-[18px]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" style="display:none">
                  <path d="M21 12.79A9 9 0 1 1 11.21 3a7 7 0 0 0 9.79 9.79z"/>
                </svg>
                <span id="themeLabel">Dark</span> */}
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
