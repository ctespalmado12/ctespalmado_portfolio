import React from 'react'
import CircularText from '../components/react-bits/circulattext'
import DecryptedText from '../components/react-bits/decryptedtext';
import { Github } from 'lucide-react';
import { Linkedin } from 'lucide-react';

const Home = () => {
  return (
    <>
        <section id='home' className='grid grid-rows-[1fr_auto] min-h-screen'>
            <div className='row pl-[20px] pr-[5px] pt-10 md:pl-[45px] md:pr-[5px] md:pt-20 lg:pl-[65px] lg:pr-[205px] lg:pt-40'>
                <div className='flex flex-col col-9'>
                    <span className='lg:text-[100px] md:text-[80px] text-[35px] font-bold leading-[1.2]'>
                        <DecryptedText
                        text="Hi, I'm"
                        animateOn="view"
                        revealDirection="start"
                        sequential="true"
                        className='sm:text-[100px]'/>
                    </span>
                    <span className='decrypted-text lg:text-[100px] md:text-[80px] text-[35px] font-bold leading-[1.2]'>
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
                <div className='col-3 '>
                    <CircularText
                    text="scroll down*scroll down*"
                    onHover="speedUp"
                    spinDuration={10}
                    direction="counterClockwise" 
                    className='sm:flex lg:scale-[.9] md:scale-[.7] hidden items-center justify-center'
                    />
                </div>

                <div className='col-12 flex items-center justify-center'>
                    <a href="" className="border border-[rgb(128,128,128)] rounded-full flex items-center justify-center leading-[50px] p-2 m-[0.6rem]">
                        <Github size={30} strokeWidth={1.5} />
                    </a>
                    <a href="" className="border border-[rgb(128,128,128)] rounded-full flex items-center justify-center leading-[50px] p-2 m-[0.6rem]">
                        <Linkedin size={33} strokeWidth={1.5}  />
                    </a>
                </div>
            </div>
                      
        </section>
    </>
  )
}

export default Home
