import React from 'react'
import CircularText from '../components/react-bits/circulattext'
import DecryptedText from '../components/react-bits/decryptedtext';
import AnimatedContent from '../components/react-bits/animatedcontent'
import { Github } from 'lucide-react';
// import { useInView } from "react-intersection-observer";
import { Linkedin } from 'lucide-react';

const Home = () => {

  return (
    <>
        <section id='home' className='min-h-screen overflow-x-hidden'>
            <div className='w-full mx-auto px-5 sm:px-8 lg:px-16 xl:px-24 py-16 sm:py-24'>
                 <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-2 px-5 sm:px-8 lg:px-16 xl:px-24 2xl:px-0 2xl:max-w-[1400px] 2xl:mx-auto'>
                    <div className='flex flex-col'>
                        <span className='text-[40px] lg:text-[100px] md:text-[80px] font-bold leading-[1.2]'>
                            <DecryptedText
                            text="Hi, I'm"
                            animateOn="view"
                            revealDirection="start"
                            sequential="true"
                            className=''/>
                        </span>
                        <span className='inline text-[40px] lg:text-[100px] md:text-[80px] font-bold leading-[1.2]'>
                            <DecryptedText
                            text="Clarisse Espalmado."
                            animateOn="view"
                            revealDirection="start"
                            sequential="true"
                            delay={100000}
                            className='whitespace-normal 2xl:whitespace-nowrap'/>
                        </span>
                        <span className='lg:text-[35px]  md:text-[25px] text-[19px] font-semibold text-[rgb(144,144,144)] animate-[text-animation_1s_ease-in-out_0s_1_normal_none_running]'>
                            <DecryptedText
                            text="Nice to meet you!"
                            animateOn="view"
                            revealDirection="start"
                            sequential="true"
                            delay={10000}/>
                        </span>
                    </div>
                    <div className='flex flex-col items-center justify-center overflow-hidden'>
                         <div className="max-w-full w-full flex items-center justify-center">
                            <CircularText
                            text="scroll down*scroll down*"
                            onHover="speedUp"
                            spinDuration={10}
                            direction="counterClockwise" 
                            className='max-w-full hidden sm:flex sm:scale-[.6] md:scale-[.7] lg:scale-[.9]'
                            />
                         </div>
                        
                    </div>
                    
                    
                </div>
                <div className=' flex items-end justify-center absolute bottom-10 left-0 w-full'>
                    <AnimatedContent
                        once={true}  
                        distance={20}
                        direction="vertical"
                        reverse={false}
                        duration={1.2}
                        ease="power3.out"
                        initialOpacity={0.01}
                        animateOpacity
                        scale={1.1}
                        // threshold={0}
                        delay={0.3}
                    >
                        <div className="flex flex-row items-center justify-center gap-3">
                            <a
                                href="https://github.com/ctespalmado12" target="_blank" rel="noopener noreferrer"
                                className="border border-[rgb(128,128,128)] rounded-full flex items-center justify-center p-2 m-[0.6rem]  hover:[box-shadow:var(--ring)]"
                            >
                                <Github
                                className="w-[25px] h-[25px] md:w-[30px] md:h-[30px]"
                                strokeWidth={1.5}
                                />
                            </a>
                            <a
                                href="https://ph.linkedin.com/in/clarisse-espalmado-2aa512238" target="_blank" rel="noopener noreferrer"
                                className="border border-[rgb(128,128,128)] rounded-full flex items-center justify-center p-2 m-[0.6rem]  hover:[box-shadow:var(--ring)]"
                            >
                                <Linkedin
                                className="w-[28px] h-[28px] md:w-[33px] md:h-[33px]"
                                strokeWidth={1.5}
                                />
                            </a>
                        </div>
                        
                    </AnimatedContent>
                </div>
            </div>
            
                      
        </section>
    </>
  )
}

export default Home
