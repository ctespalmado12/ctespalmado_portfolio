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
              <span className='lg:text-xl md:text-[15px] text-[12px] font-semibold animate-[text-animation_1s_ease-in-out_0s_1_normal_none_running]'>
                  {inView &&(
                    <DecryptedText
                    text="Highly motivated Backend Developer with 2 years of hands-on experience in PHP Laravel, JavaScript (jQuery), and MySQL, seeking a challenging role to contribute to the development of reliable and scalable web applications. Skilled in backend development, bug resolution, and dynamic web-based reporting. Currently expanding frontend capabilities through self-learning and hands-on practice with Tailwind CSS and React.js, while continuously improving knowledge in modern development practices and backend optimization. Let's connect."
                    animateOn="view"
                    revealDirection="start"
                    sequential="true"
                    speed={10}
                    />
                  )}
                  
              </span>
              <div className=''>
                <button class="flex items-center whitespace-nowrap  gap-[.45rem] px-[.9rem] py-[.6rem] rounded-full font-semibold
                        border [border-color:color-mix(in_oklab,_var(--text)_12%,_transparent)]
                        bg-[color-mix(in_oklab,_var(--panel)_90%,_transparent)]
                        text-[var(--text)] hover:[box-shadow:var(--ring)]">My Resume<ArrowUpRight className="w-4 h-4" /></button>
              </div>
            </div>
          </div>
        </section>
    </>
  )
}

export default About
