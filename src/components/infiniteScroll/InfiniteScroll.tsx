import { motion } from "framer-motion";

const InfiniteScroll = () => {
  const words = [
    "Creative",
    "Detail-oriented",
    "Problem-solver",
    "Adaptable",
    "Collaborative",
    "Innovative",
    "Proactive",
  ];
  const repeatedWords = [...words, ...words, ...words, ...words];

  return (
    <div className="p-2 bg-gray-100 flex items-center justify-center overflow-hidden w-full">
      <motion.div
        className="flex gap-6 uppercase whitespace-nowrap"
        animate={{
          x: [0, -(words.length * 120)],
        }}
        transition={{
          x: {
            repeat: Infinity,
            repeatType: "loop",
            duration: 10,
            ease: "linear",
          },
        }}
        style={{ display: "inline-flex" }}
      >
        {repeatedWords.map((word, index) => (
          <span key={index} className="text-3xl  font-medium text-gray-800 mx-3">
            {word}
          </span>
        ))}
      </motion.div>
    </div>
  );
};

export default InfiniteScroll;
