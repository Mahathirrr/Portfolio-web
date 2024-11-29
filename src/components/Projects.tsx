import React from "react";
import { ExternalLink, Github } from "lucide-react";

const Projects: React.FC = () => {
  return (
    <section className="min-h-screen py-20 px-4 md:px-20">
      <h2 className="text-4xl md:text-6xl font-bold text-[#64ffda] mb-12">
        Projects
      </h2>

      <div className="grid md:grid-cols-2 gap-8">
        <div className="bg-[#1a1a1a] p-6 rounded-lg transform hover:scale-105 transition-transform duration-300">
          <h3 className="text-2xl font-bold mb-4">Data Analysis Project</h3>
          <p className="text-gray-300 mb-4">
            A comprehensive data analysis project using Python and popular data
            science libraries.
          </p>
          <div className="flex space-x-4 text-[#64ffda]">
            <a
              href="https://github.com/Mahathirrr"
              className="hover-link flex items-center"
            >
              <Github className="mr-2" size={20} />
              Code
            </a>
            <a href="#" className="hover-link flex items-center">
              <ExternalLink className="mr-2" size={20} />
              Demo
            </a>
          </div>
        </div>

        <div className="bg-[#1a1a1a] p-6 rounded-lg transform hover:scale-105 transition-transform duration-300">
          <h3 className="text-2xl font-bold mb-4">Backend API Service</h3>
          <p className="text-gray-300 mb-4">
            RESTful API service built with Golang, featuring authentication and
            database integration.
          </p>
          <div className="flex space-x-4 text-[#64ffda]">
            <a
              href="https://github.com/Mahathirrr"
              className="hover-link flex items-center"
            >
              <Github className="mr-2" size={20} />
              Code
            </a>
          </div>
        </div>

        <div className="bg-[#1a1a1a] p-6 rounded-lg transform hover:scale-105 transition-transform duration-300">
          <h3 className="text-2xl font-bold mb-4">Machine Learning Model</h3>
          <p className="text-gray-300 mb-4">
            Predictive model using Python and scikit-learn for data
            classification.
          </p>
          <div className="flex space-x-4 text-[#64ffda]">
            <a
              href="https://github.com/Mahathirrr"
              className="hover-link flex items-center"
            >
              <Github className="mr-2" size={20} />
              Code
            </a>
          </div>
        </div>

        <div className="bg-[#1a1a1a] p-6 rounded-lg transform hover:scale-105 transition-transform duration-300">
          <h3 className="text-2xl font-bold mb-4">Web Application</h3>
          <p className="text-gray-300 mb-4">
            Modern web application built with React and Tailwind CSS.
          </p>
          <div className="flex space-x-4 text-[#64ffda]">
            <a
              href="https://github.com/Mahathirrr"
              className="hover-link flex items-center"
            >
              <Github className="mr-2" size={20} />
              Code
            </a>
            <a href="#" className="hover-link flex items-center">
              <ExternalLink className="mr-2" size={20} />
              Demo
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;

