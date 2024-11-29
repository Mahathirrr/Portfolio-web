import React from "react";
import { motion } from "framer-motion";
import {
  Github,
  Instagram,
  Mail,
  Terminal,
  Database,
  Code,
} from "lucide-react";

const Hero: React.FC = () => {
  const fadeInVariant = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };

  const iconVariant = {
    animate: {
      y: [0, -10, 0],
      transition: {
        duration: 2,
        repeat: Infinity,
        repeatType: "loop",
        ease: "easeInOut",
      },
    },
  };

  return (
    <div className="relative min-h-screen flex flex-col justify-center items-center px-4 overflow-hidden bg-[#0f0f0f] text-white">
      {/* Background Icons */}
      <div className="absolute inset-0 opacity-10">
        <motion.div
          variants={iconVariant}
          animate="animate"
          className="absolute top-1/4 left-1/4"
        >
          <Terminal size={48} />
        </motion.div>
        <motion.div
          variants={iconVariant}
          animate="animate"
          className="absolute top-1/3 right-1/4"
        >
          <Database size={48} />
        </motion.div>
        <motion.div
          variants={iconVariant}
          animate="animate"
          className="absolute bottom-1/4 left-1/3"
        >
          <Code size={48} />
        </motion.div>
      </div>

      {/* Content */}
      <motion.div
        initial="hidden"
        animate="visible"
        className="relative z-10 text-center max-w-4xl space-y-6"
      >
        <motion.div
          variants={fadeInVariant}
          className="text-[#64ffda] text-xl font-medium mt-8"
        >
          Hello, I am
        </motion.div>

        {/* Names */}
        <motion.div variants={fadeInVariant}>
          <div className="text-6xl md:text-8xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-white via-[#64ffda] to-white">
            Mahathir
          </div>
        </motion.div>

        {/* Title */}
        <motion.h2
          variants={fadeInVariant}
          className="text-2xl md:text-3xl font-bold text-white/90"
        >
          Undergraduate Student at Universitas Syiah Kuala
        </motion.h2>

        {/* Description */}
        <motion.div variants={fadeInVariant} className="mb-8">
          <p className="text-xl text-gray-300 leading-relaxed">
            A passionate developer from Aceh, focusing on
            <span className="text-[#64ffda]"> Data Science</span> and
            <span className="text-[#64ffda]"> Backend Development</span>.
            <br />
            Proficient in Golang, Python, and Web Technologies.
          </p>
        </motion.div>

        {/* Socials */}
        <motion.div
          variants={fadeInVariant}
          className="flex justify-center space-x-8"
        >
          <a
            href="https://github.com/Mahathirrr"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex flex-col items-center space-y-2"
          >
            <div className="p-3 rounded-full border-2 border-current group-hover:text-[#64ffda] transition-colors duration-300">
              <Github size={24} />
            </div>
            <span className="text-sm text-gray-400 group-hover:text-[#64ffda] transition-colors duration-300">
              GitHub
            </span>
          </a>
          <a
            href="https://www.instagram.com/emhaa._"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex flex-col items-center space-y-2"
          >
            <div className="p-3 rounded-full border-2 border-current group-hover:text-[#64ffda] transition-colors duration-300">
              <Instagram size={24} />
            </div>
            <span className="text-sm text-gray-400 group-hover:text-[#64ffda] transition-colors duration-300">
              Instagram
            </span>
          </a>
          <a
            href="mailto:mhmmdmhthr@gmail.com"
            className="group flex flex-col items-center space-y-2"
          >
            <div className="p-3 rounded-full border-2 border-current group-hover:text-[#64ffda] transition-colors duration-300">
              <Mail size={24} />
            </div>
            <span className="text-sm text-gray-400 group-hover:text-[#64ffda] transition-colors duration-300">
              Email
            </span>
          </a>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Hero;

