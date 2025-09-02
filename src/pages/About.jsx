import React, { useCallback } from "react";
import AnimatedContent from "../components/react-bits/animatedcontent";
import DecryptedText from "../components/react-bits/decryptedtext";
import { useInView } from "react-intersection-observer";
import { ArrowUpRight } from "lucide-react";
import Resume from "../assets/CTE-Resume-2025.pdf";

const About = () => {
  // In‑view triggers
  const { ref: refInfo, inView: infoIn } = useInView({ triggerOnce: false, threshold: 0.2 });
  const { ref: refPhoto, inView: photoIn } = useInView({ triggerOnce: false, threshold: 0.2 });
  const { ref: refResumeBtn, inView: resumeBtnIN } = useInView({ triggerOnce: false, threshold: 0.2 });


  // Safer, memoized download handler
  const dlresume = useCallback(() => {
    const link = document.createElement("a");
    link.href = Resume;
    link.download = "Clarisse_Espalmado_Resume.pdf";
    document.body.appendChild(link);
    link.click();
    link.remove();
  }, []);

  return (
    <section id="about" className="min-h-screen flex items-center py-16 sm:py-24">
      <div className="w-full mx-auto px-5 sm:px-8 lg:px-16 xl:px-24 2xl:max-w-[1400px]">
        {/* Use a real grid instead of row/col utility mix */}
        <div className="grid grid-cols-1 xl:grid-cols-12 gap-10 xl:gap-12 items-center">
          {/* Photo / visual */}
          <div ref={refPhoto} className="xl:order-none xl:col-span-5">
            
            <AnimatedContent
              key={photoIn ? "in" : "out"}
              distance={150}
              direction="horizontal"
              reverse={true}
              duration={1.2}
              ease="power3.out"
              initialOpacity={0}
              animateOpacity
              scale={1.02}
            >
              <div className="relative mx-auto max-w-sm sm:max-w-md">
                {/* Replace src with your actual image import/path */}
                <img
                  src="/assets/me.jpg"
                  alt="Clarisse Espalmado portrait"
                  loading="lazy"
                  className="w-full aspect-square object-cover rounded-2xl shadow-xl ring-1 ring-black/10 dark:ring-white/10"
                />
                <span className="sr-only">Developer portrait</span>
              </div>
            </AnimatedContent>
            
          </div>

          {/* Text content */}
          <div className="xl:col-span-7 space-y-6">
            <div
              ref={refInfo}
              className="xl:pb-2 md:pb-4 font-semibold text-xs md:text-sm lg:text-xl animate-[text-animation_1s_ease-in-out_0s_1_normal_none_running]"
            >
              <AnimatedContent
                key={infoIn ? "in" : "out"}
                distance={150}
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
                  <p className="leading-relaxed text-[var(--text,theme(colors.slate.300))]">
                  Highly motivated Backend Developer with 2 years of hands-on experience in PHP Laravel, JavaScript (jQuery),
                  and MySQL, seeking a challenging role to contribute to the development of reliable and scalable web
                  applications. Skilled in backend development, bug resolution, and dynamic web-based reporting. Currently
                  expanding frontend capabilities through self-learning and hands-on practice with Tailwind CSS and React.js,
                  while continuously improving knowledge in modern development practices and backend optimization. Let&apos;s connect.
                  </p>
                </div>
                
              </AnimatedContent>
            </div>

            <div ref={refResumeBtn} className="xl:pt-2">
              <AnimatedContent
                  key={resumeBtnIN ? "in" : "out"}
                  distance={100}
                  direction="vertical"
                  reverse={false}
                  duration={.5}
                  ease="power3.out"
                  initialOpacity={0.01}
                  animateOpacity
                  scale={1.1}
                  threshold={0}
              >
                <button
                  type="button"
                  onClick={dlresume}
                  className="inline-flex items-center text-xs md:text-sm lg:text-xl gap-2 rounded-full font-semibold px-4 py-2 border border-[color-mix(in_oklab,var(--text)_12%,transparent)] bg-[color-mix(in_oklab,var(--panel)_90%,transparent)] text-[var(--text)] hover:[box-shadow:var(--ring)] focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[var(--ring-color,theme(colors.blue.500))]"
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
      </div>
    </section>
  );
};

export default About;
