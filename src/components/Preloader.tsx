import React, { useEffect, useRef } from "react";
import gsap from "gsap";

const Preloader: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const spinnerRef = useRef<SVGSVGElement>(null);

  useEffect(() => {
    const tl = gsap.timeline();

    // Spinner animation
    tl.to(spinnerRef.current, {
      duration: 2,
      rotate: 720,
      ease: "power2.inOut",
      repeat: -1,
    });

    // Container fade out
    gsap.to(containerRef.current, {
      opacity: 0,
      duration: 0.8,
      delay: 2.5,
      ease: "power2.inOut",
    });
  }, []);

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 bg-[#0f0f0f] flex items-center justify-center z-50"
    >
      <svg
        ref={spinnerRef}
        width="80"
        height="80"
        viewBox="0 0 100 100"
        className="text-[#64ffda]"
      >
        <path fill="currentColor" d="M50 0 L100 87 L0 87 Z">
          <animateTransform
            attributeName="transform"
            type="rotate"
            from="0 50 50"
            to="360 50 50"
            dur="1.5s"
            repeatCount="indefinite"
          />
        </path>
      </svg>
    </div>
  );
};

export default Preloader;
