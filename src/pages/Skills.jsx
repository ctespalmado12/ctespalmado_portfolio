// import React from 'react'
import { HTML5, CSS, Bootstrap5, TailwindCSS, JavaScript, PHP, Laravel, JQuery, MySQL, React, GitHubLight, GitHubDark, Postman, Git, VisualStudioCode } from "developer-icons";
import { Cpu, FileCode2 } from "lucide-react";
const Skills = () => {
  
  // skills.js(x)
const skills = {
  front: [
    { name: "HTML5",      logo: <HTML5  size={37}/> },
    { name: "CSS",        logo: <CSS size={37}/> },
    { name: "Bootstrap5", logo: <Bootstrap5 size={37}/> },
    { name: "TailwindCSS",logo: <TailwindCSS size={37}/> },
    { name: "React",      logo: <React size={37}/> },
    { name: "JavaScript", logo: <JavaScript size={37}/> },
    { name: "JQuery",     logo: <JQuery size={37}/> },
  ],
  back: [
    { name: "PHP",         logo: <PHP size={37}/> },
    { name: "Laravel",     logo: <Laravel size={37}/> },
    { name: "MySQL",       logo: <MySQL size={37}/> },
    { name: "GitHub", 
      logo: (
        <>
          <GitHubLight size={37} id="lightGithub" />
          <GitHubDark  size={37} id="darkGithub" />
        </>
      )
    },
    { name: "Postman",     logo: <Postman size={37}/> },
    { name: "Git",     logo: <Git size={37}/> },
    { name: "VSCode",     logo: <VisualStudioCode size={37}/> },
  ],
};

  return (
    <>
        <section id='skills' className="min-h-screen py-16 sm:py-24">
          <div className="grid justify-center items-center gap-1.5 space-y-1.5">
            <div className="">
              <h3 className="flex mb-2 font-semibold gap-1.5"><FileCode2 strokeWidth={1.5} />Frontend</h3>
              <div className="gap-2 grid grid-cols-5 md:grid-cols-4 xl:grid-cols-6">
                {skills.front.map(({ name, logo }, i) => (
                  <div key={name + i} className="skills-badges flex flex-row gap-5 rounded-full border text-xl m-2">
                    <span>{logo}</span>
                    <span className="hidden sm:flex">{name}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="">
              <h3 className="flex mb-2 font-semibold gap-1.5"><Cpu strokeWidth={1.5} />Backend & System</h3>
              <div className="gap-2 grid grid-cols-5 md:grid-cols-4 xl:grid-cols-6">
                {skills.back.map(({ name, logo }, i) => (
                  <div key={name + i} className="skills-badges flex flex-row gap-5 rounded-full border text-xl m-2">
                    <span>{logo}</span>
                    <span className="hidden sm:flex">{name}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
            
          
        </section>
    </>
  )
}

export default Skills
