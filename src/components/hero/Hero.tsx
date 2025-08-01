import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { motion } from "framer-motion";
import Star from "../navbar/Star";

const GlitchEffect = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.to(".glitch-text", {
        duration: 0.1,
        repeat: -1,
        yoyo: true,
        ease: "power2.inOut",
        onRepeat: () => {
          gsap.set(".glitch-text", {
            textShadow: `${random(-5, 5)}px ${random(
              -5,
              5
            )}px 0 #ff0000, ${random(-5, 5)}px ${random(-5, 5)}px 0 #00ffff`,
          });
        },
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  const random = (min: number, max: number) =>
    Math.random() * (max - min) + min;

  return (
    <section
    id="home"
      ref={containerRef}
      className="min-h-[80vh] bg-white dark:bg-black flex flex-col items-center justify-center text-center text-white"
    >
      <div>
        <h2
          className="glitch-text text-4xl font-serif md:text-6xl dark:text-white font-bold text-black"
          style={{
            textShadow: "2px 2px 0 #ff0000, -2px -2px 0 #00ffff",
            // fontSize:'80px'
          }}
        >
          SANCHIT SAXENA
        </h2>
        <div className="flex items-center justify-center text-teal-600">
          <motion.div
            className="star"
            animate={{ rotate: 360 }}
            transition={{ repeat: Infinity, ease: "linear", duration: 3 }}
          >
            <Star w="50px" h="50px" />
          </motion.div>
        </div> 
      </div>
      <p className="dark:text-gray-400  mt-6 font-thin text-black">
        Code with purpose. Design with empathy. Deliver with precision
      </p>
    </section>
  );
};

export default GlitchEffect;
