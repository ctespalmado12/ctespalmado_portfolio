// import React from 'react'
import { useEffect, useState } from "react";
import { HTML5, CSS, Bootstrap5, TailwindCSS, JavaScript, PHP, Laravel, JQuery, MySQL, React, Git, GitHubLight } from "developer-icons";
const Skills = () => {
  
 const [isLight, setIsLight] = useState(getInitialTheme);

  useEffect(() => {
    const root = document.documentElement;
    root.classList.toggle("light", isLight);
    document.getElementById('gitl').style.display = isLight ? '' : 'none';
    document.getElementById('gitd').style.display = isLight ? 'none' : '';
  }, [isLight]);

  return (
    <>
        <section id='skills' className='className="min-h-screen flex items-center py-16 sm:py-24"'>
          <div className='grid grid-cols-6 w-full mx-auto px-5 sm:px-8 lg:px-16 xl:px-24 2xl:max-w-[1400px]'>
            <div className=''>
              <HTML5 />
            </div>
            <div className=''>
              <CSS />
            </div>
            <div className=''>
              <Bootstrap5 />
            </div>
            <div className=''>
              <TailwindCSS />
            </div>
            <div className=''>
              <React />
            </div>
            <div className=''>
              <JavaScript />
            </div>
            <div className=''>
              <JQuery />
            </div>
            <div className=''>
              <PHP />
            </div>
            <div className=''>
              <Laravel />
            </div>
            <div className=''>
              <MySQL />
            </div>
            <div className=''>
              <Git />
            </div>
            <div className=''>
              <  GitHubLight />
              <GitHubDark />
            </div>
            <div className=''>
              <PHP />
            </div>
            <div className=''>
              <PHP />
            </div>
            
          </div>
        </section>
    </>
  )
}

export default Skills
