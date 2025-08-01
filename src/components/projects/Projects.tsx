import { useState } from "react";
import { motion, type Variants } from "framer-motion";
import {
  Music,
  Calculator,
  Gamepad2,
  GraduationCap,
  ExternalLink,
  Github,
  ShoppingCart,
  Brain
} from "lucide-react";


type ProjectType = {
  id:number,
  name:string,
  description:string,
  icon:React.ElementType,
  tech:string[],
  href:string,
  git:string
}

const projects:ProjectType[] = [
  {
    id: 1,
    name: "Miniture Website",
    description: "E-Commerce Website",
    icon: ShoppingCart,
    tech: ["React", "Redux-ToolKit", "CSS", "Tailwind","Typescript"],
    href: "https://kaleidoscopic-crepe-f1b99b.netlify.app/",
    git:"https://github.com/sanchit-raizada/ReduxToolkitsecond.git"
  },
  {
    id: 2,
    name: "WoodCom Website",
    description: "E-Commerce Website",
    icon: ShoppingCart,
    tech: ["React", "Redux-ToolKit", "CSS", "Tailwind","Typescript"],
    href: "https://stupendous-kelpie-399b08.netlify.app/",
    git :"https://github.com/sanchit-raizada/reduxPractice.git"
  },
  {
    id: 3,
    name: "Spotify Clone",
    description: "Music streaming app built with React and Context API",
    icon: Music,
    tech: ["React", "Redux-ToolKit", "CSS", "Tailwind","Typescript"],
    href: "https://melodic-creponne-036d58.netlify.app/",
    git:"https://github.com/sanchit-raizada/spotify"
  },
  {
    id: 4,
    name: "Calculator App",
    description: "Interactive calculator with modern UI",
    icon: Calculator,
    tech: ["React", "TypeScript", "Tailwind"],
    href: "https://amazing-fairy-8531b2.netlify.app/",
    git:"https://github.com/sanchit-raizada/calculatorReact"
  },
  {
    id: 5,
    name: "Word Puzzle Game",
    description: "Engaging word puzzle game with React",
    icon: Gamepad2,
    tech: ["React", "TypeScript", "Tailwind"],
    href: "https://dulcet-bublanina-d60160.netlify.app/",
    git:"https://github.com/sanchit-raizada/wordPuzzel.git"
    
  },
  {
    id: 6,
    name: "Edusify Website",
    description: "Educational platform website",
    icon: GraduationCap,
    tech: ["React", "TypeScript", "Custom-CSS"],
    href: "https://gregarious-daffodil-bb133a.netlify.app/",
    git:"https://github.com/sanchit-raizada/Edusify.git"
  },
  {
    id: 7,
    name: "Gemini Clone",
    description: "Educational platform website",
    icon:Brain,
    tech: ["React", "TypeScript", "Tailwind"],
    href: "https://lucky-melba-e608f5.netlify.app/",
    git:"https://github.com/sanchit-raizada/Gemini.git"
  },
  {
    id: 8,
    name: "StorageApp (MERN)",
    description: "File Manager",
    icon:Brain,
    tech: ["React", "Javascript", "Tailwind","Express","MongoDB"],
    href: "",
    git:"https://github.com/sanchit-raizada/MernStackApp.git"
  },
];

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

const itemVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 30,
    scale: 0.9,
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 12,
    },
  },
};

const cardHoverVariants: Variants = {
  hover: {
    y: -5,
    transition: {
      type: "spring",
      stiffness: 400,
      damping: 10,
    },
  },
};

export default function Projects() {
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);

  return (
    <div id="projects" className="min-h-screen bg-white dark:bg-black transition-colors duration-300 p-8">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          className="text-start mb-16"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <motion.h1 className="text-4xl font-family-roboto font-medium text-black dark:text-white mb-4">
            My Projects
          </motion.h1>
          <motion.p
            className="text-lg text-gray-600 font-playWrite dark:text-gray-400"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            A collection of my recent work
          </motion.p>
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {projects.map((project) => {
            const IconComponent = project.icon;
            return (
              <motion.div
                key={project.id}
                variants={itemVariants}
                whileHover="hover"
                onHoverStart={() => setHoveredProject(project.id)}
                onHoverEnd={() => setHoveredProject(null)}
                className="group cursor-pointer"
              >
                <motion.div
                  className="border-2 border-gray-200 dark:border-gray-800 rounded-lg p-6 h-full flex flex-col items-center text-center transition-colors duration-200 hover:border-black dark:hover:border-white"
                  variants={cardHoverVariants}
                >
                  {/* Icon */}
                  <motion.div
                    className="w-16 h-16 bg-black dark:bg-white rounded-lg flex items-center justify-center mb-4"
                    animate={
                      hoveredProject === project.id
                        ? { scale: 1.1 }
                        : { scale: 1 }
                    }
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  >
                    <IconComponent
                      size={32}
                      className="text-white dark:text-black"
                    />
                  </motion.div>

                  {/* Project Name */}
                  <motion.h3
                    className="text-xl font-bold text-black dark:text-white mb-2"
                    animate={
                      hoveredProject === project.id
                        ? { scale: 1.05 }
                        : { scale: 1 }
                    }
                  >
                    {project.name}
                  </motion.h3>

                  {/* Description */}
                  <p className="text-gray-600 dark:text-gray-400 text-sm mb-4 flex-grow">
                    {project.description}
                  </p>

                  {/* Tech Stack */}
                  <div className="flex flex-wrap justify-center gap-2 mb-4">
                    {project.tech.map((tech, index) => (
                      <span
                        key={index}
                        className="text-xs px-2 py-1 bg-gray-100 dark:bg-gray-900 text-gray-700 dark:text-gray-300 rounded"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Action Buttons */}
                  <motion.div
                    className="flex gap-3 mt-auto"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: hoveredProject === project.id ? 1 : 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <motion.button
                      className="flex items-center gap-1 px-3 py-1 bg-black dark:bg-white text-white dark:text-black rounded text-sm font-medium"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <a
                        href={project.href}
                        className="w-[50px] flex items-center justify-around"
                      >
                        <ExternalLink size={14} />
                        Live
                      </a>
                    </motion.button>
                    <motion.button
                      className="flex items-center gap-1 px-3 py-1 border border-black dark:border-white text-black dark:text-white rounded text-sm font-medium"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Github size={14} />
                      <a href={project.git}>Code</a>
                    </motion.button>
                  </motion.div>
                </motion.div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Footer Stats */}
        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.6 }}
        >
          <div className="inline-flex items-center space-x-6 border border-gray-200 dark:border-gray-800 px-6 py-3 rounded-lg">
            <div className="text-center">
              <div className="text-2xl font-bold text-black dark:text-white">
                {projects.length}
              </div>
              <div className="text-gray-500 text-sm">Projects</div>
            </div>
            <div className="w-px h-8 bg-gray-300 dark:bg-gray-700"></div>
            <div className="text-center">
              <div className="text-2xl font-bold text-black dark:text-white">
                100%
              </div>
              <div className="text-gray-500 text-sm">React</div>
            </div>
            <div className="w-px h-8 bg-gray-300 dark:bg-gray-700"></div>
            <div className="text-center">
              <div className="text-2xl font-bold text-black dark:text-white">
                ∞
              </div>
              <div className="text-gray-500 text-sm">Ideas</div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
