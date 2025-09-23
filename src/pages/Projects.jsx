import { useRef } from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import { cn } from "../components/lib/utils";
import ReadMoreInline from "../components/readmore";
import { ArrowUpRight } from "lucide-react";
import AnimatedContent from "../components/react-bits/animatedcontent";
export default function Projects() {
const mainRefs = useRef([]);
const thumbsRefs = useRef([]);

  const projects = [
    {
      title: "Jeepney Fare Collection System",
      desc: "Lorem ipsum dolor sit amet consectetur adipiscing elit. Ex sapien vitae pellentesque sem placerat in id. Pretium tellus duis convallis tempus leo eu aenean. Urna tempor pulvinar vivamus fringilla lacus nec metus. Iaculis massa nisl malesuada lacinia integer nunc posuere. Semper vel class aptent taciti sociosqu ad litora. Conubia nostra inceptos himenaeos orci varius natoque penatibus. Dis parturient montes nascetur ridiculus mus donec rhoncus. Nulla molestie mattis scelerisque maximus eget fermentum odio. Purus est efficitur laoreet mauris pharetra vestibulum fusce.",
      link: "https://github.com/ctespalmado12/jeepney-fare-collection-system",
      imgs: [
        "/projects-ss/jeep_fare/jeep_fare_1.png",
        "/projects-ss/jeep_fare/jeep_fare_2.png",
        "/projects-ss/jeep_fare/jeep_fare_3.png",
        "/projects-ss/jeep_fare/jeep_fare_4.png",
        "/projects-ss/jeep_fare/jeep_fare_5.png",
        "/projects-ss/jeep_fare/jeep_fare_6.png",
        "/projects-ss/jeep_fare/jeep_fare_7.png",
        "/projects-ss/jeep_fare/jeep_fare_8.png",
      ],
      used: [
        "C++"
      ]
    },
    {
      title: "Water Inventory System",
      desc: "Lorem ipsum dolor sit amet consectetur adipiscing elit. Ex sapien vitae pellentesque sem placerat in id. Pretium tellus duis convallis tempus leo eu aenean. Urna tempor pulvinar vivamus fringilla lacus nec metus. Iaculis massa nisl malesuada lacinia integer nunc posuere. Semper vel class aptent taciti sociosqu ad litora. Conubia nostra inceptos himenaeos orci varius natoque penatibus. Dis parturient montes nascetur ridiculus mus donec rhoncus. Nulla molestie mattis scelerisque maximus eget fermentum odio. Purus est efficitur laoreet mauris pharetra vestibulum fusce.",
      link: "",
      imgs: [
        "/projects-ss/water_inventory/water_inventory1.png",
        "/projects-ss/water_inventory/water_inventory2.png",
        "/projects-ss/water_inventory/water_inventory3.png",
        "/projects-ss/water_inventory/water_inventory4.png",
        "/projects-ss/water_inventory/water_inventory5.png",
        "/projects-ss/water_inventory/water_inventory6.png",
        "/projects-ss/water_inventory/water_inventory7.png",
        "/projects-ss/water_inventory/water_inventory8.png",
        "/projects-ss/water_inventory/water_inventory9.png",
        "/projects-ss/water_inventory/water_inventory10.png",
        "/projects-ss/water_inventory/water_inventory11.png",
        "/projects-ss/water_inventory/water_inventory12.png",
        "/projects-ss/water_inventory/water_inventory13.png",
      ],
      used: [
        "Java"
      ]
    },
    {
      title: "Project 3",
      desc: "Lorem ipsum dolor sit amet consectetur adipiscing elit. Ex sapien vitae pellentesque sem placerat in id. Pretium tellus duis convallis tempus leo eu aenean. Urna tempor pulvinar vivamus fringilla lacus nec metus. Iaculis massa nisl malesuada lacinia integer nunc posuere. Semper vel class aptent taciti sociosqu ad litora. Conubia nostra inceptos himenaeos orci varius natoque penatibus. Dis parturient montes nascetur ridiculus mus donec rhoncus. Nulla molestie mattis scelerisque maximus eget fermentum odio. Purus est efficitur laoreet mauris pharetra vestibulum fusce.",
      link: "",
      imgs: [
        "/projects-ss/placeholder1.png",
        "/projects-ss/placeholder2.png",
        "/projects-ss/placeholder3.png",
        "/projects-ss/placeholder4.png",
        "/projects-ss/placeholder5.png",
        "/projects-ss/placeholder6.png",
      ],
      used: [
        "PHP",
        "Laravel",
        "HTML5",
        "JQuery"
      ]
    },
  ]

const BRAND = {
  HTML5:      "bg-[#E34F26]",
  CSS:        "bg-[#1572B6]",
  Bootstrap5: "bg-[#7952B3]",
  TailwindCSS:"bg-[#38BDF8]",
  React:      "bg-[#61DAFB]",
  JavaScript: "bg-[#F7DF1E]",
  JQuery:     "bg-[#0769AD]",
  PHP:        "bg-[#777BB4]",
  Laravel:    "bg-[#FF2D20]",
  MySQL:      "bg-[#4479A1]",
  GitHub:     "bg-[#181717]",
  Postman:    "bg-[#FF6C37]",
  Git:        "bg-[#F05032]",
  VSCode:     "bg-[#007ACC]",
  "C++": "bg-[#00599C]",
  Java: "bg-[#F89820]",
};

  return (
    <section id="projects" className="min-h-screen">
      <div className="max-w-auto mx-auto px-5 sm:px-8 lg:px-16 xl:px-24 py-16 sm:py-24">

      <AnimatedContent
        once={false}  
        distance={15}
        direction="vertical"
        reverse={false}
        duration={1.2}
        ease="power3.out"
        initialOpacity={0}
        animateOpacity
        scale={1.02}
      >
        <div className="text-center py-16 px-4">
           <h3 className="text-3xl md:text-5xl xl:text-6xl font-bold mb-4">My Projects</h3>
        </div>
      </AnimatedContent>
        
       
        <div className="grid grid-cols-1 lg:grid-cols-2">
          {projects.map((p, pIdx) => (
            <div key={`proj-${pIdx}`} className={cn(
              "self-start",
              "card",
              "card-bg m-3 border border-slate-200",
              // interactive feel
              "active:translate-y-0 active:shadow-sm",
              // thin ring on hover
              "hover:ring-2 hover:ring-sky-400/40 dark:hover:ring-sky-300/30",
              )}>
                <div className="proj relative">
                  <Splide
                    ref={(el) => (mainRefs.current[pIdx] = el)}
                    options={{ type:"fade", heightRatio:0.5, pagination:false, arrows:false, cover:true }}
                    onMounted={(main) => {
                      const thumbs = thumbsRefs.current[pIdx]?.splide;
                      if (thumbs) main.sync(thumbs);
                    }}
                    className="!mb-4"
                    aria-label={`Project ${pIdx + 1} images`}
                  >
                    {p.imgs.map((src, i) => (
                      <SplideSlide className="relative" key={`p${pIdx}-main-${i}`}>
                        <img className="proj-img" src={src} alt={`${p.title || `Project ${pIdx + 1}`} – ${i + 1}`} loading="lazy" />
                        <div className="view-proj  group-active:opacity-100 group-active:pointer-events-auto ">
                          <a href={p.link} target="_blank" className="proj-link">View<ArrowUpRight className="lg:mb-1 lg:mt-2" aria-hidden="true" /></a>
                        </div>
                      </SplideSlide>
                    ))}
                  </Splide>
                </div>
              

              <Splide
                ref={(el) => (thumbsRefs.current[pIdx] = el)}
                options={{ isNavigation:true, rewind:true, fixedWidth:104, fixedHeight:58, gap:10, focus:"center", pagination:false, cover:true, dragMinThreshold:{ mouse:4, touch:10 }, breakpoints:{ 640:{ fixedWidth:66, fixedHeight:38 } } }}
                onMounted={(thumbs) => {
                  const main = mainRefs.current[pIdx]?.splide;
                  if (main) main.sync(thumbs);
                }}
                aria-label={`Project ${pIdx + 1} thumbnails`}
              >
                {p.imgs.map((src, i) => (
                  <SplideSlide key={`p${pIdx}-thumb-${i}`}>
                    <img src={src} alt={`${p.title || `Project ${pIdx + 1}`} – ${i + 1}`} loading="lazy" />
                  </SplideSlide>
                ))}
              </Splide>
              <div>
                <div className="flex">
                  <h1 className="text-xl md:text-2xl xl:text-3xl font-bold mb-1 mt-2">{p.title}</h1>
                  {/* <a href=""><ArrowUpRight className="mb-1 mt-2" aria-hidden="true" /></a> */}
                </div>
                
                {/* <p className="text-[15px] md:text-[17px] lg:text-xl">{p.desc}</p> */}
                <ReadMoreInline
                  text={p.desc}
                  maxChars={80}
                />
                <div className="flex flex-wrap gap-2 mt-3">
                  {p.used.map((u, i) => (
                    <span
                      key={u + i}
                      className={cn("inline-flex items-center px-2.5 py-1 rounded-full font-bold border",
                        "text-[10px] md:text-xs lg:text-[15px]",
                        "!text-[#e2e8f0]",
                        BRAND[u] ?? BRAND.default
                      )}
                      title={u}
                    >
                      {u}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
          <div>
            
          </div>
        </div>
        
      </div>
    </section>
  );
}
