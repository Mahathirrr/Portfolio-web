import React from "react";
import { Mail, Github, Instagram } from "lucide-react";

const Contact: React.FC = () => {
  return (
    <section className="min-h-screen flex items-center justify-center py-20 px-4 md:px-20">
      <div className="text-center max-w-3xl">
        <h2 className="text-4xl md:text-6xl font-bold text-[#64ffda] mb-8">
          Get In Touch
        </h2>
        <p className="text-xl text-gray-300 mb-12">
          I'm currently looking for new opportunities and my inbox is always
          open. Whether you have a question or just want to say hi, I'll try my
          best to get back to you!
        </p>

        <div className="flex flex-col md:flex-row items-center justify-center space-y-6 md:space-y-0 md:space-x-12">
          <a
            href="mailto:mhmmdmhthr@gmail.com"
            className="flex items-center space-x-3 hover:text-[#64ffda] transition-colors"
          >
            <Mail size={24} />
            <span>mhmmdmhthr@gmail.com</span>
          </a>

          <a
            href="https://github.com/Mahathirrr"
            className="flex items-center space-x-3 hover:text-[#64ffda] transition-colors"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Github size={24} />
            <span>Mahathirrr</span>
          </a>

          <a
            href="https://www.instagram.com/emhaa_/"
            className="flex items-center space-x-3 hover:text-[#64ffda] transition-colors"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Instagram size={24} />
            <span>emhaa_</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;

