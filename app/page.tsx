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

  // useEffect(() => {
  //   if (!container.current) return;

  //   // GSAP context automatically scopes selectors and lets you clean up
  //   const ctx = gsap.context(() => {
  //     // TypeScript sees this as (Element|string)[], so cast to HTMLElement[]
  //     (gsap.utils.toArray(".fade-section") as HTMLElement[]).forEach((el) => {
  //       gsap.from(el, {
  //         scrollTrigger: {
  //           trigger: el,
  //           start: "top 80%",
  //           toggleActions: "play reset play reset",
  //         },
  //         opacity: 0,
  //         y: 200,
  //         scale: 0.9,
  //         duration: 0.8,
  //         ease: "back.out(2)",
  //       });
  //     });
  //   }, container);

  //   // cleanup on unmount / hot reload
  //   return () => ctx.revert();
  // }, []);

    useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const sections = gsap.utils.toArray<HTMLElement>(".fade-section");

    sections.forEach((el) => {
      gsap.fromTo(
        el,
        { opacity: 0, y: 200 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          ease: "back.out(2)",
          scrollTrigger: {
            trigger: el,
            start: "top 80%",
            toggleActions: "play reverse play reverse", // down = play, up = reverse
          },
        }
      );

    });
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
