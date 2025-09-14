// "use client";

// import { useEffect, useRef } from "react";
// import gsap from "gsap";

// import { ScrollTrigger } from "gsap/ScrollTrigger";


// import { HiMenuAlt3 } from "react-icons/hi";

// export default function Navbar() {
//   useEffect(() => {
//     gsap.registerPlugin(ScrollTrigger);

//     gsap.to(".scroll-progress", {
//       width: "100%", // from 0 to 100%
//       ease: "none",
//       scrollTrigger: {
//         trigger: document.documentElement, // full page scroll
//         start: "top top",
//         end: "bottom bottom",
//         scrub: true, // follow scroll progress
//       },
//     });
//   }, []);

//   return (
//     <nav className="fixed top-4 left-0 right-0 z-50 px-4 sm:px-6 lg:px-8">
//       <div className="max-w-6xl mx-auto bg-[#1a1a1aD9] backdrop-blur-md border rounded-[14px] shadow-md border-[#ffffff1A]  px-6 py-4">
//         <div className="flex justify-between items-center">
//           {/* Logo */}
//           <div
//             className=" text-[#8687e7] font-semibold"
//             style={{ fontFamily: "var(--font-jetbrains)" }}
//           >
//             {"<Nnamdi.dev />"}
//           </div>

//           {/* Nav Links */}
//           <div className="hidden md:flex space-x-8">
//             <a href="#about" className="text-white hover:text-[#78716c]">
//               About Me
//             </a>
//             <a href="#skills" className="text-white hover:text-[#78716c]">
//               My Skills
//             </a>
//             <a href="#work" className="text-white hover:text-[#78716c]">
//               Work
//             </a>
//             <a href="#contact" className="text-white hover:text-[#78716c]">
//               Contact
//             </a>
//           </div>

//           {/* CTA */}
//           <button className="hidden lg:flex bg-[#8687e7] text-white px-12 py-2 hover:bg-[#ff6347] rounded-[10px]">
//             Download CV
//           </button>

//           <div className="flex lg:hidden bg-[#8687e7] cursor-pointer text-white p-2 rounded-[10px]">
//             <HiMenuAlt3 size={28} />
//           </div>
//         </div>
//       </div>

//         <div
//         className="fixed top-0 left-0 h-1 bg-blue-500 scroll-progress"
//         style={{ width: 0 }}
//       ></div>
      
//     </nav>
//   );
// }


"use client";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { HiMenuAlt3 } from "react-icons/hi";

export default function Navbar() {
  const progressRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    if (!progressRef.current) return;

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
            <a href="#about" className="text-white hover:text-[#78716c]">
              About Me
            </a>
            <a href="#skills" className="text-white hover:text-[#78716c]">
              My Skills
            </a>
            <a href="#work" className="text-white hover:text-[#78716c]">
              Work
            </a>
            <a href="#contact" className="text-white hover:text-[#78716c]">
              Contact
            </a>
          </div>
          <button className="hidden lg:flex bg-[#8687e7] text-white px-12 py-2 hover:bg-[#ff6347] rounded-[10px]">
            Download CV
          </button>
          <div className="flex lg:hidden bg-[#8687e7] cursor-pointer text-white p-2 rounded-[10px]">
            <HiMenuAlt3 size={28} />
          </div>
        </div>
      </div>
      {/* progress bar */}
      <div className="fixed top-0 left-0 h-1 w-full bg-gray-200">
        <div
          ref={progressRef}
          className="h-full bg-[#14b8a6]"
          style={{ transform: "scaleX(0)", transformOrigin: "left center" }}
        />
      </div>
    </nav>
  );
}