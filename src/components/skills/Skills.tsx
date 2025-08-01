import  { useState } from 'react';
import { motion, AnimatePresence,type Variants } from 'framer-motion';
import { 
  Code2, 
  Palette, 
  Zap, 
  FileCode2, 
  Atom, 
  ArrowRight, 
  Wind, 
  Layers, 
  GitBranch, 
  Github, 
  Server, 
  Database, 
  Network, 
  Binary, 
  HardDrive, 
  FileText,
  RotateCcw,
  Package
} from 'lucide-react';

const skills = [
  { name: 'HTML', icon: Code2, category: 'Frontend' },
  { name: 'CSS', icon: Palette, category: 'Frontend' },
  { name: 'JavaScript', icon: Zap, category: 'Frontend' },
  { name: 'TypeScript', icon: FileCode2, category: 'Frontend' },
  { name: 'React', icon: Atom, category: 'Frontend' },
  { name: 'Next.js', icon: ArrowRight, category: 'Frontend' },
  { name: 'Tailwind', icon: Wind, category: 'Frontend' },
  { name: 'MUI', icon: Layers, category: 'Frontend' },
  { name: 'Git', icon: GitBranch, category: 'Tools' },
  { name: 'GitHub', icon: Github, category: 'Tools' },
  { name: 'Node.js', icon: Server, category: 'Backend' },
  { name: 'Express', icon: Server, category: 'Backend' },
  { name: 'MongoDB', icon: Database, category: 'Backend' },
  { name: 'Networking', icon: Network, category: 'CS' },
  { name: 'DSA', icon: Binary, category: 'CS' },
  { name: 'OS', icon: HardDrive, category: 'CS' },
  { name: 'DBMS', icon: FileText, category: 'CS' },
  { name: 'Redux', icon: RotateCcw, category: 'State' },
  { name: 'Zustand', icon: Package, category: 'State' },
  { name: 'Context-Api', icon: Package, category: 'State' }
  
];

const categories = ['Frontend', 'Backend', 'Tools', 'CS', 'State'];

const containerVariants:Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.05,
      delayChildren: 0.1
    }
  }
};

const itemVariants :Variants = {
  hidden: { 
    opacity: 0, 
    scale: 0.5,
    y: 20
  },
  visible: { 
    opacity: 1, 
    scale: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 200,
      damping: 15
    }
  },
  exit: {
    opacity: 0,
    scale: 0.5,
    transition: { duration: 0.2 }
  }
};

const skillHoverVariants:Variants = {
  hover: {
    scale: 1.1,
    transition: {
      type: "spring",
      stiffness: 400,
      damping: 10
    }
  }
};

export default function Skills() {
  const [selectedCategory, setSelectedCategory] = useState('Frontend');

  const filteredSkills = skills.filter(skill => skill.category === selectedCategory);

  return (
    <div id="skills" className="min-h-screen bg-white dark:bg-black transition-colors duration-300 p-8">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div 
          className="mb-16   font-family-roboto"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <motion.h1 
            className="text-4xl font-medium text-black dark:text-white mb-4"
          >
            Skills
          </motion.h1>
          <motion.p 
            className="text-lg text-gray-600 font-thin font-playWrite dark:text-gray-400"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            Click a category to explore
          </motion.p>
        </motion.div>

        {/* Category Buttons */}
        <motion.div 
          className="flex flex-wrap justify-start gap-4 mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          {categories.map((category) => (
            <motion.button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-1 rounded-lg font-medium transition-all duration-200 border-2 ${
                selectedCategory === category
                  ? 'bg-black dark:bg-white text-white dark:text-black border-black dark:border-white'
                  : 'bg-transparent text-black dark:text-white border-gray-300 dark:border-gray-700 hover:border-black dark:hover:border-white'
              }`}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              {category}
            </motion.button>
          ))}
        </motion.div>

        {/* Skills Row */}
        <motion.div 
          className="flex flex-wrap justify-start gap-6"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          key={selectedCategory}
        >
          <AnimatePresence mode="sync">
            {filteredSkills.map((skill) => {
              const IconComponent = skill.icon;
              return (
                <motion.div
                  key={skill.name}
                  variants={itemVariants}
                  whileHover="hover"
                  className="flex flex-col items-center gap-3 cursor-pointer group"
                  layout
                >
                  {/* Icon Square */}
                  <motion.div
                    className="size-20 bg-black dark:bg-white rounded-sm flex items-center justify-center"
                    variants={skillHoverVariants}
                  >
                    <IconComponent 
                      size={40} 
                      className="text-white dark:text-black" 
                    />
                  </motion.div>

                  {/* Skill Name */}
                  <motion.span 
                    className="text-sm font-medium text-black dark:text-white text-center"
                    variants={skillHoverVariants}
                  >
                    {skill.name}
                  </motion.span>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </motion.div>

        {/* Footer */}
        <motion.div 
          className="text-start mt-5"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.6 }}
        >
          <div className="text-gray-500 dark:text-gray-500 text-sm">
            {filteredSkills.length} skills in {selectedCategory}
          </div>
        </motion.div>
      </div>
    </div>
  );
}