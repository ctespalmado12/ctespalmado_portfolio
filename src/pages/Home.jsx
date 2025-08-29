import React from 'react'
import CircularText from '../components/react-bits/circulattext'
import DecryptedText from '../components/react-bits/decryptedtext';
import AnimatedContent from '../components/react-bits/animatedcontent'
import { Github } from 'lucide-react';
import { Linkedin } from 'lucide-react';

const Home = () => {
  return (
    <>
        <section id='home' className='min-h-screen'>
            <div className=''>
                <div className='row pl-[20px] pr-[5px] pt-10 md:pl-[45px] md:pr-[5px] md:pt-20 lg:pl-[65px] lg:pr-[20px] lg:pt-40 xl:pl-[305px] xl:pr-[200px] xl:pt-40'>
                    <div className='flex flex-col col-span-9'>
                        <span className='lg:text-[100px] md:text-[80px] text-[35px] font-bold leading-[1.2]'>
                            <DecryptedText
                            text="Hi, I'm"
                            animateOn="view"
                            revealDirection="start"
                            sequential="true"
                            className='sm:text-[100px]'/>
                        </span>
                        <span className='decrypted-text text-[35px] lg:text-[100px] md:text-[80px] font-bold leading-[1.2]'>
                            <DecryptedText
                            text="Clarisse Espalmado."
                            animateOn="view"
                            revealDirection="start"
                            sequential="true"
                            delay={100000}
                            className='whitespace-nowrap'/>
                        </span>
                        <span className='lg:text-2xl md:text-[15px] text-[12px] font-semibold text-[rgb(144,144,144)] animate-[text-animation_1s_ease-in-out_0s_1_normal_none_running]'>
                            <DecryptedText
                            text="Nice to meet you!"
                            animateOn="view"
                            revealDirection="start"
                            sequential="true"
                            delay={10000}/>
                        </span>
                    </div>
                    <div className='col-span-3'>
                        <CircularText
                        text="scroll down*scroll down*"
                        onHover="speedUp"
                        spinDuration={10}
                        direction="counterClockwise" 
                        className='sm:flex lg:scale-[.9] md:scale-[.7] hidden items-center justify-center'
                        />
                    </div>
                    
                    
                </div>
                <div className=' flex items-end justify-center absolute bottom-10 left-0 w-full'>
                    <AnimatedContent
                        distance={100}
                        direction="vertical"
                        reverse={false}
                        duration={1.2}
                        ease="power3.out"
                        initialOpacity={0.01}
                        animateOpacity
                        scale={1.1}
                        threshold={0}
                        delay={0.3}
                    >
                        <div className="flex flex-row items-center justify-center gap-3">
                            <a
                                href="https://github.com/ctespalmado12" target="_blank" rel="noopener noreferrer"
                                className="border border-[rgb(128,128,128)] rounded-full flex items-center justify-center p-2 m-[0.6rem]"
                            >
                                <Github
                                className="w-[25px] h-[25px] md:w-[30px] md:h-[30px]"
                                strokeWidth={1.5}
                                />
                            </a>
                            <a
                                href="https://ph.linkedin.com/in/clarisse-espalmado-2aa512238" target="_blank" rel="noopener noreferrer"
                                className="border border-[rgb(128,128,128)] rounded-full flex items-center justify-center p-2 m-[0.6rem]"
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
