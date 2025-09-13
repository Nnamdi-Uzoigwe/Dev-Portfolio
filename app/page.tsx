"use client"

import Hero from "./sections/Hero";
import AboutMe from "./sections/AboutMe";
import Skills from "./sections/Skills";
import Work from "./sections/Work";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);


export default function Home() {
  const container = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!container.current) return;

    // GSAP context automatically scopes selectors and lets you clean up
    const ctx = gsap.context(() => {
      // TypeScript sees this as (Element|string)[], so cast to HTMLElement[]
      (gsap.utils.toArray(".fade-section") as HTMLElement[]).forEach((el) => {
        gsap.from(el, {
          scrollTrigger: {
            trigger: el,
            start: "top 80%",
          },
          opacity: 0,
          y: 200,
          scale: 0.9,
          duration: 0.8,
          ease: "back.out(2)",
        });
      });
    }, container);

    // cleanup on unmount / hot reload
    return () => ctx.revert();
  }, []);


  return (
    <div ref={container} className="bg-[#fff]">
      <Hero />
      <AboutMe />
      <Skills />
      <Work />
    </div>
  );
}
