// import React from 'react'
import { HTML5, CSS, Bootstrap5, TailwindCSS, JavaScript, PHP, Laravel, JQuery, MySQL, React, GitHubLight, GitHubDark, Postman } from "developer-icons";
const Skills = () => {
  
  return (
    <>
        <section id='skills' className='className="min-h-screen flex items-center py-16 sm:py-24"'>
          <div className='grid grid-cols-4 w-full mx-auto px-5 sm:px-8 lg:px-16 xl:px-24 2xl:max-w-[1400px]'>
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
            <div id="darkGithub" className=''>
              < GitHubLight />
            </div>
            <div id="lightGithub" className=''>
              <GitHubDark />
            </div>
            <div className=''>
              <Postman />
            </div>
            
          </div>
        </section>
    </>
  )
}

export default Skills
