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
      title: "Personal Portfolio",
      desc: "A fully responsive portfolio website featuring dedicated sections for Home, About, Projects, Skills, and Contact, designed to highlight my technical expertise and development experience.",
      link: "https://ctespalmado-portfolio.netlify.app/",
      imgs: [
        "/portfolio_ss/portfolio1.png",
        "/portfolio_ss/portfolio2.png",
      ],
      used: [
        "React",
        "Tailwind",
        "JavaScript"
      ]
    },
    {
      title: "Human Resource Information System",
      desc: "An enterprise-grade HRIS developed at One Document Corporation, providing end-to-end functionality from admin setup and employee management to timekeeping, payroll, and dynamic reporting.",
      link: "",
      imgs: [
        "/hris_ss/hris1.png",
        "/hris_ss/hris2.png",
        "/hris_ss/hris3.png",
        "/hris_ss/hris4.png",
        "/hris_ss/hris5.png",
        "/hris_ss/hris6.png",
        "/hris_ss/hris7.png",
      ],
      used: [
        "PHP",
        "Laravel",
        "HTML5",
        "JQuery",
        "MySQL",
      ]
    },
    {
      title: "Barangay Appointment System",
      desc: "A capstone project developed in collaboration with my groupmates at the Polytechnic University of the Philippines. The system streamlines barangay services by providing separate portals for administrators, barangay officials, and residents. Users can view available services and officials’ schedules, then book appointments based on time and purpose. Barangay officials can manage and update the statuses of appointments assigned only to their accounts, while administrators oversee all appointments, update statuses (declined, in-process, completed), and generate reports through the system dashboard.",
      link: "https://github.com/ctespalmado12/brgy-appointment",
      imgs: [
        "/brgy_ss/brgy_ss1.png",
        "/brgy_ss/brgy_ss2.png",
        "/brgy_ss/brgy_ss3.png",
        "/brgy_ss/brgy_ss4.png",
        "/brgy_ss/brgy_ss5.png",
        "/brgy_ss/brgy_ss6.png",
        "/brgy_ss/brgy_ss7.png",
        "/brgy_ss/brgy_ss8.png",
        "/brgy_ss/brgy_ss9.png",
      ],
      used: [
        "PHP",
        "HTML5",
        "JQuery",
        "MySQL"
      ]
    },
    {
      title: "Jeepney Fare Collection System",
      desc: "A simple command-line application for managing fare calculations, transactions, and revenue reporting.",
      link: "https://github.com/ctespalmado12/jeepney-fare-collection-system",
      imgs: [
        "/jeep_fare_ss/jeep_fare_1.png",
        "/jeep_fare_ss/jeep_fare_2.png",
        "/jeep_fare_ss/jeep_fare_3.png",
        "/jeep_fare_ss/jeep_fare_4.png",
        "/jeep_fare_ss/jeep_fare_5.png",
        "/jeep_fare_ss/jeep_fare_6.png",
        "/jeep_fare_ss/jeep_fare_7.png",
        "/jeep_fare_ss/jeep_fare_8.png",
      ],
      used: [
        "C++"
      ]
    },
    {
      title: "Water Inventory System",
      desc: "A desktop inventory and POS application built with Java (WindowBuilder) and MySQL for a small water retail store. Supports CRUD for brands and categories, a POS module that records sales, and automatic stock updates to keep inventory accurate in real time.",
      link: "https://github.com/ctespalmado12/water-inventory-system",
      imgs: [
        "/water_inventory_ss/water_inventory1.png",
        "/water_inventory_ss/water_inventory2.png",
        "/water_inventory_ss/water_inventory3.png",
        "/water_inventory_ss/water_inventory4.png",
        "/water_inventory_ss/water_inventory5.png",
        "/water_inventory_ss/water_inventory6.png",
        "/water_inventory_ss/water_inventory7.png",
        "/water_inventory_ss/water_inventory8.png",
        "/water_inventory_ss/water_inventory9.png",
        "/water_inventory_ss/water_inventory10.png",
        "/water_inventory_ss/water_inventory11.png",
        "/water_inventory_ss/water_inventory12.png",
        "/water_inventory_ss/water_inventory13.png",
      ],
      used: [
        "Java",
        "MySQL"
      ]
    },
    {
      title: "Coffee Shop POS System",
      desc: "A Java desktop application built with WindowBuilder to manage point-of-sale operations in a coffee shop. Features include menu selection with images, size-based pricing, automatic tax and subtotal calculation, payment method handling, and receipt printing for efficient transaction processing.",
      link: "",
      imgs: [
        "/coffee_shop_ss/coffee_shop_ss1.png",
      ],
      used: [
        "Java",
      ]
    },
    // {
    //   title: "Project 3",
    //   desc: "Lorem ipsum dolor sit amet consectetur adipiscing elit. Ex sapien vitae pellentesque sem placerat in id. Pretium tellus duis convallis tempus leo eu aenean. Urna tempor pulvinar vivamus fringilla lacus nec metus. Iaculis massa nisl malesuada lacinia integer nunc posuere. Semper vel class aptent taciti sociosqu ad litora. Conubia nostra inceptos himenaeos orci varius natoque penatibus. Dis parturient montes nascetur ridiculus mus donec rhoncus. Nulla molestie mattis scelerisque maximus eget fermentum odio. Purus est efficitur laoreet mauris pharetra vestibulum fusce.",
    //   link: "",
    //   imgs: [
    //     "/projects-ss/placeholder1.png",
    //     "/projects-ss/placeholder2.png",
    //     "/projects-ss/placeholder3.png",
    //     "/projects-ss/placeholder4.png",
    //     "/projects-ss/placeholder5.png",
    //     "/projects-ss/placeholder6.png",
    //   ],
    //   used: [
    //     "PHP",
    //     "Laravel",
    //     "HTML5",
    //     "JQuery"
    //   ]
    // },
  ]

const BRAND = {
  HTML5:      "bg-[#E34F26] text-white",
  CSS:        "bg-[#1572B6] text-white",
  Bootstrap5: "bg-[#7952B3] text-white",
  Tailwind:   "bg-[#38BDF8] text-black",  
  React:      "bg-[#61DAFB] text-black",  
  JavaScript: "bg-[#F7DF1E] text-black",  
  JQuery:     "bg-[#0769AD] text-white",
  PHP:        "bg-[#777BB4] text-white",
  Laravel:    "bg-[#FF2D20] text-white",
  MySQL:      "bg-[#4479A1] text-white",
  GitHub:     "bg-[#181717] text-white",
  Postman:    "bg-[#FF6C37] text-white",
  Git:        "bg-[#F05032] text-white",
  VSCode:     "bg-[#007ACC] text-white",
  "C++":      "bg-[#00599C] text-white",
  Java:       "bg-[#F89820] text-black", 
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
        <div className="text-center py-4 px-4">
           <h3 className="text-3xl md:text-5xl xl:text-6xl font-bold mb-4">My Projects</h3>
        </div>
      </AnimatedContent>
        
       
        <div className="grid grid-cols-1 lg:grid-cols-2">
          {projects.map((p, pIdx) => (
            <div key={`proj-${pIdx}`} className={cn(
              "self-start",
              "card",
              "m-3 border border-slate-200",
              // interactive feel
              "active:translate-y-0 active:shadow-sm"
              )}>
                <div className={cn( "proj relative group",
                  !p.link && "pointer-events-none")}>
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
                        <img className="proj-img" src={src} alt={`${p.title || `Project ${pIdx + 1}`} – ${i + 1}`} loading="lazy"
                        />
                        <div
                          className={cn(
                            "view-proj z-10 transition group-active:opacity-100 group-active:pointer-events-auto",
                            
                          )}
                        >
                          <a
                            href={p.link ?? undefined}
                            target="_blank"
                            aria-disabled={!p.link}
                            onClick={(e) => {
                              if (!p.link) e.preventDefault();
                            }}
                            className="proj-link"
                          >
                            {p.title === "Personal Portfolio" ? "You're already here!" : "View"}
                            <ArrowUpRight className="lg:mb-1 lg:mt-2" aria-hidden="true" />
                          </a>
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
                        // "!text-[#e2e8f0]",
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
