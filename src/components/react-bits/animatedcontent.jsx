import { useRef, useLayoutEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (!gsap.core.globals().ScrollTrigger) gsap.registerPlugin(ScrollTrigger);

const AnimatedContent = ({
  children,
  distance = 100,
  direction = "vertical",
  reverse = false,
  duration = 0.8,
  ease = "power3.out",
  initialOpacity = 0,
  animateOpacity = true,
  scale = 1,
  threshold = 0.03,
  delay = 0,
  once = true,
  scroller,
  onComplete,
  id,             // <- optional for debugging
  className,
  style,
}) => {
  const ref = useRef(null);

  useLayoutEffect(() => {
    const el = ref.current;
    if (!el) return;

    const axis = direction === "horizontal" ? "x" : "y";
    const offset = reverse ? -distance : distance;
    const startPct = (1 - threshold) * 100;

    const ctx = gsap.context(() => {
      gsap.set(el, {
        [axis]: offset,
        scale,
        opacity: animateOpacity ? initialOpacity : 1,
        willChange: "transform, opacity",
      });

      gsap.to(el, {
        [axis]: 0,
        scale: 1,
        opacity: 1,
        duration,
        ease,
        delay,
        onComplete,
        scrollTrigger: {
          id, // shows up in dev tools if markers on
          trigger: el,
          start: `top ${startPct}%`,
          toggleActions: once ? "play none none none" : "play reverse play reverse",
          once,
          scroller,
          invalidateOnRefresh: true,
          // markers: true,
        },
      });
    }, ref);

    return () => ctx.revert();
  }, [
    distance, direction, reverse, duration, ease,
    initialOpacity, animateOpacity, scale, threshold,
    delay, once, scroller, onComplete, id,
  ]);

  return <div ref={ref} className={className} style={style}>{children}</div>;
};

export default AnimatedContent;
