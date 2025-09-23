"use client";

import React, { useEffect, useState } from "react";
import gsap from "gsap";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import { FiArrowDown, FiArrowUp } from "react-icons/fi";

gsap.registerPlugin(ScrollToPlugin);

const ScrollButton: React.FC = () => {
  const [atBottom, setAtBottom] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      const scrolledToBottom =
        window.innerHeight + window.scrollY >=
        document.body.offsetHeight - 50;
      setAtBottom(scrolledToBottom);
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleClick = () => {
    gsap.to(window, {
      duration: 1, // smooth speed
      scrollTo: atBottom ? 0 : document.body.scrollHeight,
      ease: "power2.inOut",
    });
  };

  return (
    <button
      onClick={handleClick}
      className="fixed right-6 bottom-6 z-50 flex items-center justify-center rounded-full bg-[#14b8a6] p-3 shadow-lg transition-transform hover:scale-110"
    >
      {atBottom ? (
        <FiArrowUp className="text-white text-xl" />
      ) : (
        <FiArrowDown className="text-white text-xl" />
      )}
    </button>
  );
};

export default ScrollButton;
