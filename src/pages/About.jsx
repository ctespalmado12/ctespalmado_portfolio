import React, { useCallback } from "react";
import AnimatedContent from "../components/react-bits/animatedcontent";
import DecryptedText from "../components/react-bits/decryptedtext";
import { ArrowUpRight } from "lucide-react";
import Resume from "../assets/CTE-Resume-2025.pdf";
import { ScrollTimeline } from "../components/lightswind/scroll-timeline";
import profileImg from "../assets/portfolio_dp.jpg";

const About = () => {

    // Safer, memoized download handler
  const dlresume = useCallback(() => {
    const link = document.createElement("a");
    link.href = Resume;
    link.download = "Clarisse_Espalmado_Resume.pdf";
    document.body.appendChild(link);
    link.click();
    link.remove();
  }, []);


  const events = [
    {
        year: '2019',
        title: 'Building My Programming Foundations',
        subtitle: '',
        bullets: [
          "Explored programming languages (C++ and Java) through self-study and online tutorials",
          "Built small projects to practice data structures and algorithms",
          "Developed a strong foundation in problem-solving and continuous learning"
        ]
    },
    {
        year: '2020',
        title: 'Content Creation & Collaboration',
        subtitle: '',
        bullets: [
          "Started a side hustle reviewing skincare products and collaborating with international brands",
          "Gained experience in product photography, editing, and writing detailed insights",
          "Strengthened communication, time management, branding, and digital presentation skills by learning how to understand audiences and present information clearly"
        ]
    },
    {
        year: '2021',
        title: 'Stepping Into Web Development',
        subtitle: '',
        bullets: [
          "Began learning HTML, CSS, and JavaScript through online courses",
          "Built and cloned simple websites to understand structure, styling, and interactivity",
          "Gained a deeper understanding of how front-end technologies work together to create functional web pages"
        ]
    },
    {
        year: 'May 2022 – July 2022',
        title: 'Internship at Zengages',
        subtitle: 'Website Testing and Improvement',
        bullets: [
          "Conducted cross-device and cross-browser testing to identify front-end issues",
          "Collaborated with developers to reproduce, document, and report UI/UX bugs",
          "Participated in daily stand-ups and contributed to functionality discussions",
          "Utilized debugging tools and browser logs to isolate issues"
        ]
    },
    {
        year: '2022',
        title: 'Graduated in Information Technology',
        subtitle: 'Polytechnic University of the Philippines',
        bullets: [
          "President's Lister, 2nd Sem 2019-2020",
          "Dean’s Lister, 1st Sem 2020-2021",
          "Dean’s Lister, 1st & 2nd Sem 2021-2022",
        ]
    },
    {
        year: '2023 - Present',
        title: 'Junior Web Developer',
        subtitle: 'One Document Corporation',
        bullets: [
          "Built and maintained web applications using PHP Laravel, jQuery, and MySQL",
          "Resolved bugs and improved system functionality based on issue logs",
          "Designed and implemented customizable file viewing and printing features",
          "Wrote and optimized stored procedures to support backend processes",
          "Created and deployed scalable RESTful APIs",
          "Collaborated with a small backend team, following GitHub version control workflows"
        ]
    },
    
  
    
]

  return (
    <section id="about" className="min-h-auto">
      <div className="w-full mx-auto px-5 sm:px-8 lg:px-16 xl:px-24 py-16 sm:py-24">
        <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 gap-10 xl:gap-12 items-center px-5 sm:px-8 lg:px-16 xl:px-24 2xl:px-0 2xl:max-w-[1400px] 2xl:mx-auto">
          {/* Photo / visual */}
          <div className="flex flex-col items-center">

            <div className="xl:order-none">
              
              <AnimatedContent
                once={false}  
                distance={15}
                direction="horizontal"
                reverse={true}
                duration={1.2}
                ease="power3.out"
                initialOpacity={0}
                animateOpacity
                scale={1.02}
              >
                <div className="relative mx-auto max-w-sm sm:max-w-md">
                  <img
                    src={profileImg}
                    alt="Clarisse Espalmado portrait"
                    loading="lazy"
                    className="w-full aspect-square object-cover rounded-2xl shadow-xl ring-1 ring-black/10 dark:ring-white/10"
                  />
                  <span className="sr-only">Developer portrait</span>
                </div>
              </AnimatedContent>
              
            </div>

          </div>
           {/* Text content */}
            <div className="flex flex-col xl:space-y-6">
              <div className="xl:pb-2 md:pb-4 font-semibold text-xs md:text-sm lg:text-xl animate-[text-animation_1s_ease-in-out_0s_1_normal_none_running]">
                <AnimatedContent
                  once={false}  
                  distance={15}
                  direction="horizontal"
                  reverse={false}
                  duration={1.2}
                  ease="power3.out"
                  initialOpacity={0.0}
                  animateOpacity
                  scale={1.02}
                >
                  <div>
                    <span className="text-[rgb(144,144,144)] font-semibold text-sm md:text-base lg:text-2xl animate-[text-animation_1s_ease-in-out_0s_1_normal_none_running]">About me.</span>
                    <p className="leading-relaxed text-[15px] md:text-xl lg:text-2xl text-[var(--text,theme(colors.slate.300))]">
                    Highly motivated Backend Developer with 2 years of hands-on experience in PHP Laravel, JavaScript (jQuery),
                    and MySQL, seeking a challenging role to contribute to the development of reliable and scalable web
                    applications. Skilled in backend development, bug resolution, and dynamic web-based reporting. Currently
                    expanding frontend capabilities through self-learning and hands-on practice with Tailwind CSS and React.js,
                    while continuously improving knowledge in modern development practices and backend optimization. Let&apos;s connect.
                    </p>
                  </div>
                  
                </AnimatedContent>
              </div>

              <div className="xl:pt-2">
                <AnimatedContent
                    once={false}  
                    distance={20}
                    direction="vertical"
                    reverse={false}
                    duration={.5}
                    ease="power3.out"
                    initialOpacity={0.01}
                    animateOpacity
                    scale={1.1}
                    // threshold={0}
                >
                  <button
                    type="button"
                    onClick={dlresume}
                    className="inline-flex items-center text-xs md:text-xl lg:text-xl gap-2 rounded-full font-semibold px-4 py-2 border border-[color-mix(in_oklab,var(--text)_12%,transparent)] bg-[color-mix(in_oklab,var(--panel)_90%,transparent)] text-[var(--text)] hover:[box-shadow:var(--ring)] focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[var(--ring-color,theme(colors.blue.500))]"
                  >
                    My Resume
                    <ArrowUpRight className="w-4 h-4" aria-hidden="true" />
                  </button>
                  {/* Accessible fallback link for SEO and non‑JS */}
                  <noscript>
                    <a href={Resume} download className="underline">Download resume</a>
                  </noscript>
                </AnimatedContent>
                
              </div>
            </div>
         
         
        </div>

        <div className="relative">
            <ScrollTimeline 
              events={events}
              title="My Journey"
              subtitle=""
              progressIndicator={true}
              cardAlignment="alternating"
              revealAnimation="fade"
              connectorStyle = "dashed"
              // className="relative z-10"
            />
        </div>
        
      
      </div>

    </section>
  );
};

export default About;
