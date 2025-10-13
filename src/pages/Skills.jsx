// import React from 'react'
import { HTML5, CSS, Bootstrap5, TailwindCSS, JavaScript, PHP, Laravel, JQuery, MySQL, React, GitHubLight, GitHubDark, Postman, Git, VisualStudioCode, CPlusPlus, Java } from "developer-icons";
import { Cpu, FileCode2, Sticker } from "lucide-react";
import { cn } from "../components/lib/utils";
import AnimatedContent from "../components/react-bits/animatedcontent";

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
  foundations: [
    { name: "C++",         logo: <CPlusPlus size={37}/> },
    { name: "Java",         logo: <Java size={37}/> },
  ],
  softSkills: [
    { name: "Communication",      logo: "" },
    { name: "Problem Solving",        logo: "" },
    { name: "Teamwork",        logo: "" },
    { name: "Adaptability",        logo: "" },
    { name: "Learning Agility",        logo: "" },

  ],
};

  return (
    <>
        <section id='skills' className="min-h-screen">
          <div className="w-full mx-auto px-5 sm:px-8 lg:px-16 xl:px-24 py-16 sm:py-24">
            <AnimatedContent
                    once={true}  
                    distance={15}
                    direction="vertical"
                    reverse={false}
                    duration={1.2}
                    ease="power3.out"
                    initialOpacity={0}
                    animateOpacity
                    scale={1.02}
                  >
                    <div className="text-center px-4">
                       <h3 className="text-3xl md:text-5xl xl:text-6xl font-bold mb-4">My Tech Stack</h3>
                    </div>
                  </AnimatedContent>
            <div className="grid justify-center items-center gap-8 space-y-1.5">
              <div className="">
                <AnimatedContent
                  once={true}  
                  distance={15}
                  direction="horizontal"
                  reverse={true}
                  duration={1.2}
                  ease="power3.out"
                  initialOpacity={0}
                  animateOpacity
                  scale={1.02}
                >
                  <h3 className="flex items-center gap-1.5 mb-2 font-semibold">
                    <FileCode2 className="w-5 h-5 shrink-0" strokeWidth={1.5} />
                    <span className="leading-tight text-xl lg:text-2xl">Frontend</span>
                  </h3>
                </AnimatedContent>
                <AnimatedContent
                    once={true} 
                    direction="vertical"
                    reverse={false}
                    duration={1.2}
                    ease="power3.out"
                    initialOpacity={0.0}
                    animateOpacity
                    scale={1.02}
                >
                    <div className="gap-2 grid grid-cols-5 md:grid-cols-4 xl:grid-cols-6">
                        {skills.front.map(({ name, logo }, i) => (
                          <div key={name + i} className={cn( 
                            "skills-badges group relative flex items-center border border-slate-200",
                            "card",
                            // interactive feel
                            "hover:shadow-lg hover:-translate-y-0.5",
                            "active:translate-y-0 active:shadow-sm"
                              )}
                              title={name}>
                                <span>{logo}</span>
                                <span className="font-medium hidden sm:flex">{name}</span>
                          </div>
                        ))}
                    </div>
                </AnimatedContent>
              </div>

              <div className="">
                <AnimatedContent
                  once={true}  
                  distance={15}
                  direction="horizontal"
                  reverse={true}
                  duration={1.2}
                  ease="power3.out"
                  initialOpacity={0}
                  animateOpacity
                  scale={1.02}
                >
                  <h3 className="flex items-center gap-1.5 mb-2 font-semibold">
                    <Cpu className="w-5 h-5 shrink-0" strokeWidth={1.5} />
                    <span className="leading-tight text-xl lg:text-2xl">Backend & System</span>
                  </h3>
                </AnimatedContent>
                
                <AnimatedContent
                    once={true} 
                    direction="vertical"
                    reverse={false}
                    duration={1.2}
                    ease="power3.out"
                    initialOpacity={0.0}
                    animateOpacity
                    scale={1.02}
                >
                    <div className="gap-2 grid grid-cols-5 md:grid-cols-4 xl:grid-cols-6">
                        {skills.back.map(({ name, logo }, i) => (
                          <div key={name + i} className={cn( 
                            "skills-badges group relative flex items-center border border-slate-200",
                            "card",
                            // interactive feel
                            "hover:shadow-lg hover:-translate-y-0.5",
                            "active:translate-y-0 active:shadow-sm"
                              )}
                              title={name}>
                                <span>{logo}</span>
                                <span className="font-medium hidden sm:flex">{name}</span>
                          </div>
                        ))}
                    </div>
                </AnimatedContent>
              </div>

              <div className="">
                <AnimatedContent
                  once={true}  
                  distance={15}
                  direction="horizontal"
                  reverse={true}
                  duration={1.2}
                  ease="power3.out"
                  initialOpacity={0}
                  animateOpacity
                  scale={1.02}
                >
                  <h3 className="flex items-center gap-1.5 mb-2 font-semibold">
                    <FileCode2 className="w-5 h-5 shrink-0" strokeWidth={1.5} />
                    <span className="leading-tight text-xl lg:text-2xl">foundations</span>
                  </h3>
                </AnimatedContent>
                
                <AnimatedContent
                    once={true} 
                    direction="vertical"
                    reverse={false}
                    duration={1.2}
                    ease="power3.out"
                    initialOpacity={0.0}
                    animateOpacity
                    scale={1.02}
                >
                    <div className="gap-2 grid grid-cols-5 md:grid-cols-4 xl:grid-cols-6">
                        {skills.foundations.map(({ name, logo }, i) => (
                          <div key={name + i} className={cn( 
                            "skills-badges group relative flex items-center border border-slate-200",
                            "card",
                            // interactive feel
                            "hover:shadow-lg hover:-translate-y-0.5",
                            "active:translate-y-0 active:shadow-sm"
                              )}
                              title={name}>
                                <span>{logo}</span>
                                <span className="font-medium hidden sm:flex">{name}</span>
                          </div>
                        ))}
                    </div>
                </AnimatedContent>
              </div>

              <div className="">
                <AnimatedContent
                  once={true}  
                  distance={15}
                  direction="horizontal"
                  reverse={true}
                  duration={1.2}
                  ease="power3.out"
                  initialOpacity={0}
                  animateOpacity
                  scale={1.02}
                >
                  <h3 className="flex items-center gap-1.5 mb-2 font-semibold">
                    <Sticker className="w-5 h-5 shrink-0" strokeWidth={1.5} />
                    <span className="leading-tight text-xl lg:text-2xl">Soft Skills</span>
                  </h3>
                </AnimatedContent>
                <AnimatedContent
                    once={true} 
                    direction="vertical"
                    reverse={false}
                    duration={1.2}
                    ease="power3.out"
                    initialOpacity={0.0}
                    animateOpacity
                    scale={1.02}
                >
                    <div className="gap-2 grid grid-cols-2 md:grid-cols-4 xl:grid-cols-6">
                        {skills.softSkills.map(({ name, logo }, i) => (
                          <div key={name + i} className={cn( 
                            "skills-badges group relative flex items-center border border-slate-200",
                            "card",
                            // interactive feel
                            "hover:shadow-lg hover:-translate-y-0.5",
                            "active:translate-y-0 active:shadow-sm"
                              )}
                              >
                                <span>{logo}</span>
                                <span className="font-medium">{name}</span>
                          </div>
                        ))}
                    </div>
                </AnimatedContent>
              </div>
            </div>
          </div>
            
          
        </section>
    </>
  )
}

export default Skills
