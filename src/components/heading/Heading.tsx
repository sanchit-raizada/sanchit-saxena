import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const sentence =
  "As a self-taught coder, I harness curiosity and persistence to master programming through self-guided learning and experimentation. My resourcefulness drives me to create innovative, efficient solutions, adapting swiftly to new technologies and challenges.";

const IntroText = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  return (
    <div
      ref={containerRef}
      id="about"
      className="flex items-center dark:bg-black justify-center min-h-[120vh]  bg-white px-4 sm:px-6 lg:px-8"
    >
      <div className="max-w-4xl text-center">
        <h1 className="text-[20px] capitalise sm:text-3xl md:text-4xl  font-normal font-playWrite dark:text-white  text-gray-800 leading-relaxed flex flex-wrap justify-center gap-2">
          {sentence.split(" ").map((word, i) => {
            const start = i * 0.015; 
            const end = start + 0.15; 
            const y = useTransform(scrollYProgress, [start, end], [10, 0]);
            const opacity = useTransform(scrollYProgress, [start, end], [0, 1]);

            return (
              <motion.span
                key={i}
                style={{ y, opacity }}
                className="inline-block"
              >
                {word}
              </motion.span>
            );
          })}
        </h1>
      </div>
    </div>
  );
};

export default IntroText;
