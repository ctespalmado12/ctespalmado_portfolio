import { useEffect } from "react";
import { motion, useAnimation } from "motion/react";

const getRotationTransition = (duration, from, sign = 1, loop = true) => ({
  from,
  to: from + sign * 360,
  ease: "linear",
  duration,
  type: "tween",
  repeat: loop ? Infinity : 0,
});

const getTransition = (duration, from, sign = 1) => ({
  rotate: getRotationTransition(duration, from, sign),
  scale: { type: "spring", damping: 20, stiffness: 300 },
});

const CircularText = ({
  text,
  spinDuration = 20,
  onHover = "speedUp",
  className = "",
  direction = "clockwise",
}) => {
  const letters = Array.from(text);
  const controls = useAnimation();
  const sign = direction === "counterClockwise" ? -1 : 1;

  useEffect(() => {
    const start = 0; // no MotionValue; animate numerically
    controls.start({
      rotate: start + sign * 360,
      scale: 1,
      transition: getTransition(spinDuration, start, sign),
    });
  }, [controls, sign, spinDuration, text, onHover]);

  const handleHoverStart = () => {
    const start = 0;
    if (!onHover) return;

    let transitionConfig = getTransition(spinDuration, start, sign);
    let scaleVal = 1;

    switch (onHover) {
      case "slowDown":
        transitionConfig = getTransition(spinDuration * 2, start, sign);
        break;
      case "speedUp":
        transitionConfig = getTransition(spinDuration / 4, start, sign);
        break;
      case "pause":
        transitionConfig = {
          rotate: { type: "spring", damping: 20, stiffness: 300 },
          scale: { type: "spring", damping: 20, stiffness: 300 },
        };
        break;
      case "goBonkers":
        transitionConfig = getTransition(spinDuration / 20, start, sign);
        scaleVal = 0.8;
        break;
      default:
        transitionConfig = getTransition(spinDuration, start, sign);
    }

    controls.start({
      rotate: start + sign * 360,
      scale: scaleVal,
      transition: transitionConfig,
    });
  };

  const handleHoverEnd = () => {
    const start = 0;
    controls.start({
      rotate: start + sign * 360,
      scale: 1,
      transition: getTransition(spinDuration, start, sign),
    });
  };

  return (
    <motion.div
      className={`m-0 mx-auto rounded-full w-[200px] h-[200px] relative font-black text-center cursor-pointer origin-center ${className}`}
      initial={{ rotate: 0 }}
      animate={controls}
      onMouseEnter={handleHoverStart}
      onMouseLeave={handleHoverEnd}
    >
      {letters.map((letter, i) => {
        const rotationDeg = (360 / letters.length) * i;
        const factor = Math.PI / letters.length;
        const x = factor * i;
        const y = factor * i;
        const transform = `rotateZ(${rotationDeg}deg) translate3d(${x}px, ${y}px, 0)`;
        return (
          <span
            key={i}
            className="absolute inline-block inset-0 text-3xl transition-all duration-500 ease-[cubic-bezier(0,0,0,1)]"
            style={{ transform, WebkitTransform: transform }}
          >
            {letter}
          </span>
        );
      })}
    </motion.div>
  );
};

export default CircularText;
