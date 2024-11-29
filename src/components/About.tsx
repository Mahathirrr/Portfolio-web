const About: React.FC = () => {
  return (
    <section className="min-h-screen flex flex-col justify-center py-20 px-4 md:px-20 bg-[#1a1a1a] mt-20">
      <div className="mb-12">
        <h2 className="text-4xl md:text-6xl font-bold text-[#64ffda]">
          About Me
        </h2>
      </div>
      <div className="grid md:grid-cols-2 gap-12">
        <div className="space-y-6 text-gray-300">
          <p className="text-lg">
            I'm an undergraduate student at Universitas Syiah Kuala, passionate
            about exploring the intersections of data science and backend
            development. My journey in technology has led me to develop
            expertise in various programming languages and frameworks.
          </p>
          <p className="text-lg">Currently focusing on:</p>
          <ul className="list-disc list-inside space-y-2 ml-4">
            <li>Backend Development with Golang</li>
            <li>Data Science with Python</li>
            <li>Web Development (HTML, Tailwind CSS, JavaScript)</li>
            <li>Machine Learning and Data Analysis</li>
          </ul>
        </div>
        <div className="space-y-6">
          <h3 className="text-2xl font-bold text-[#64ffda]">
            Technical Skills
          </h3>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <h4 className="text-xl font-semibold mb-2">Languages</h4>
              <ul className="space-y-2 text-gray-300">
                <li>Golang</li>
                <li>Python</li>
                <li>JavaScript</li>
                <li>HTML/CSS</li>
              </ul>
            </div>
            <div>
              <h4 className="text-xl font-semibold mb-2">Technologies</h4>
              <ul className="space-y-2 text-gray-300">
                <li>Tailwind CSS</li>
                <li>Git</li>
                <li>SQL</li>
                <li>Data Analysis Tools</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

