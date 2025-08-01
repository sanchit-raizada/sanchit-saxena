
import { motion, useScroll } from "framer-motion";

const StickyScroll = () => {
  const { scrollYProgress } = useScroll({

  });
  return (
    <motion.div
      style={{
        scaleX: scrollYProgress,
        position: "sticky",
        top: 70,
        left: 0,
        right: 0,
        height: 6,
        originX: 0,
        backgroundColor: "teal",
      }}
    ></motion.div>
  );
};

export default StickyScroll;
