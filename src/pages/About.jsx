import React from 'react'
import AnimatedContent from '../components/react-bits/animatedcontent'
import DecryptedText from '../components/react-bits/decryptedtext'
import { useInView } from "react-intersection-observer";
import { ArrowUpRight } from 'lucide-react';
const About = () => {

  const {ref, inView} = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  return (
    <>
        <section ref={ref} id='about' className='h-screen'>
          <div className='row pl-[20px] pr-[5px] pt-10 md:pl-[45px] md:pr-[5px] md:pt-20 lg:pl-[65px] lg:pr-[20px] lg:pt-40 xl:pl-[305px] xl:pr-[200px] xl:pt-40'>
            <div className='col-span-12 xl:col-span-6'>
              <AnimatedContent
                distance={150}
                direction="horizontal"
                reverse={true}
                duration={1.2}
                ease="power3.out"
                initialOpacity={0.0}
                animateOpacity
                scale={1.1}
                threshold={0.0}
              >
                <div>
                  <img src="" alt="myphoto" />
                </div>
              </AnimatedContent>
            </div>
            <div className="col-span-12 xl:col-span-6">
               <span className='lg:text-2xl md:text-[15px] text-[12px] font-semibold text-[rgb(144,144,144)] animate-[text-animation_1s_ease-in-out_0s_1_normal_none_running]'>
                  {inView &&(
                    <DecryptedText
                    text="About me."
                    animateOn="view"
                    revealDirection="start"
                    sequential="true"
                    />
                  )}
                  
              </span>
              <br />
              <span className='lg:text-2xl md:text-[15px] text-[12px] font-semibold animate-[text-animation_1s_ease-in-out_0s_1_normal_none_running]'>
                  {inView &&(
                    <DecryptedText
                    text="I have been working in the tech industry for over a year. Let's connect."
                    animateOn="view"
                    revealDirection="start"
                    sequential="true"
                    speed={5}
                    />
                  )}
                  
              </span>
              <div className=''>
                <button class="flex lg:text-2xl md:text-[15px] text-[12px] font-semibold animate-[text-animation_1s_ease-in-out_0s_1_normal_none_running] items-center gap-2 rounded-[20px] px-5 py-2 cursor-pointer transition duration-300 overflow-hidden">My Resume<ArrowUpRight className="w-4 h-4" /></button>
              </div>
            </div>
          </div>
        </section>
    </>
  )
}

export default About
