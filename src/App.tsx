import React, { useEffect, useState } from "react";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Cursor from "./components/Cursor";
import Preloader from "./components/Preloader";

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 2500);
  }, []);

  if (isLoading) {
    return <Preloader />;
  }

  return (
    <div className="bg-[#0f0f0f] text-white">
      <Cursor />
      <Hero />
      <About />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;

