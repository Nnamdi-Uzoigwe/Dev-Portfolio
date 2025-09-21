"use client";

import { useEffect, useState, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { HiMenuAlt3 } from "react-icons/hi";
// import a from "next/a";

export default function Navbar() {
  const progressRef = useRef<HTMLDivElement | null>(null);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    if (!progressRef.current) return;

    // Only run on desktop screens (768px and above)
    const isDesktop = window.innerWidth >= 768;
    if (!isDesktop) return;

    // start the bar at scaleX(0)
    gsap.set(progressRef.current, {
      scaleX: 0,
      transformOrigin: "left center",
    });

    // Use a more dynamic approach that recalculates on every update
    const st = ScrollTrigger.create({
      trigger: "body",
      start: "top top",
      end: "bottom bottom",
      scrub: true,
      onUpdate: (self) => {
        gsap.to(progressRef.current, {
          scaleX: self.progress,
          ease: "none",
          overwrite: true,
        });
      },
    });

    // Multiple refresh triggers to handle dynamic content
    const refreshScrollTrigger = () => {
      setTimeout(() => {
        ScrollTrigger.refresh();
      }, 100);
    };

    // Refresh when images load
    window.addEventListener("load", refreshScrollTrigger);
    
    // Refresh when resize happens
    window.addEventListener("resize", refreshScrollTrigger);

    // Refresh after a delay to catch any late-loading content
    const timeoutId = setTimeout(refreshScrollTrigger, 2000);

    // Also refresh when DOM changes (for dynamic content)
    const observer = new MutationObserver(() => {
      refreshScrollTrigger();
    });

    observer.observe(document.body, {
      childList: true,
      subtree: true,
      attributes: false
    });

    return () => {
      st.kill();
      clearTimeout(timeoutId);
      observer.disconnect();
      window.removeEventListener("load", refreshScrollTrigger);
      window.removeEventListener("resize", refreshScrollTrigger);
    };
  }, []);

  const menuRef = useRef<HTMLDivElement|null>(null);

useEffect(() => {
  if (!menuRef.current) return;
  if (isOpen) {
    gsap.fromTo(menuRef.current,
      { height: 0, opacity: 0 },
      { height: "auto", opacity: 1, duration: 0.4, ease: "power2.out" }
    );
  } else {
    gsap.to(menuRef.current,
      { height: 0, opacity: 0, duration: 0.3, ease: "power2.in" }
    );
  }
}, [isOpen]);

 const handleDownloadCV = () => {
  // Create a temporary link element
  const link = document.createElement('a');
  link.href = '/UZOIGWE-NNAMDI-CV.pdf'; // Path to your CV in public folder
  link.download = 'UZOIGWE-NNAMDI-CV.pdf'; // Name for downloaded file
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  setIsOpen(false);
};


  return (
    <nav className="fixed top-4 left-0 right-0 z-50 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto bg-[#1a1a1aD9] backdrop-blur-md border rounded-[14px] shadow-md border-[#ffffff1A] px-6 py-4">
        <div className="flex justify-between items-center">
          <div
            className="text-[#8687e7] font-semibold"
            style={{ fontFamily: "var(--font-jetbrains)" }}
          >
            {"<Nnamdi.dev />"}
          </div>
          <div className="hidden md:flex space-x-8">
            <a href="#about" className="text-white hover:text-[#8687e7]">
              About Me
            </a>
            <a href="#skills" className="text-white hover:text-[#8687e7]">
              My Skills
            </a>
            <a href="#work" className="text-white hover:text-[#8687e7]">
              Work
            </a>
            <a href="#contact" className="text-white hover:text-[#8687e7]">
              Contact
            </a>
          </div>
          <button onClick={handleDownloadCV} className="hidden lg:flex bg-[#8687e7] text-white px-12 py-2 cursor-pointer transition-transform duration-150 active:opacity-80 hover:bg-[#6e70ca] rounded-[10px]">
            Download CV
          </button>
          <div onClick={() => setIsOpen(!isOpen)} className="flex lg:hidden bg-[#8687e7] cursor-pointer text-white p-2 rounded-[10px]">
            <HiMenuAlt3 size={28} />
          </div>
        </div>
      </div>

       {/* Mobile menu (collapsible) */}
        <div
          ref={menuRef}
          className={`rounded-b-[14px] mt-[-9px] mx-auto md:hidden overflow-hidden transition-none  ${isOpen ? "h-auto opacity-100" : "h-0 opacity-0"}`}
        >
          <div className="flex bg-[#1a1a1aD9] p-4 backdrop-blur-md flex-col gap-3">
            <a href="#about" onClick={() => setIsOpen(false)} className="text-white hover:text-[#8687e7]">
              About Me
            </a>
            <a href="#skills" onClick={() => setIsOpen(false)} className="text-white hover:text-[#8687e7]">
              My Skills
            </a>
            <a href="#work" onClick={() => setIsOpen(false)} className="text-white hover:text-[#8687e7]">
              Work
            </a>
            <a href="#contact" onClick={() => setIsOpen(false)} className="text-white hover:text-[#8687e7]">
              Contact
            </a>
            <button onClick={handleDownloadCV} className="bg-[#8687e7] w-full text-white px-12 py-2 cursor-pointer transition-transform duration-150 active:opacity-80 hover:bg-[#6e70ca] rounded-[10px]">
              Download CV
            </button>
          </div>
        </div>

  
      {/* progress bar */}
      <div className="fixed top-0 left-0 h-1 w-full bg-gray-200 hidden md:block">
        <div
          ref={progressRef}
          className="h-full bg-[#14b8a6]"
          style={{ transform: "scaleX(0)", transformOrigin: "left center" }}
        />
      </div>
    </nav>
  );
}