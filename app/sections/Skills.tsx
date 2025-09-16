"use client";

import Image from "next/image";
import reactImg from "../../public/react.png";
import jsImg from "../../public/JS.png";
import tsImg from "../../public/ts.png";
import nextImg from "../../public/Nextjs.png";
import tailwindImg from "../../public/tailwind.png";
import cssImg from "../../public/css.png";
import nodeImg from "../../public/node.png";
import expressImg from "../../public/express.png";
import gitImg from "../../public/git.png";
import supabaseImg from "../../public/supabase.png";
import mongoImg from "../../public/mongodb.png";
import nativeImg from "../../public/native.png";
import expoImg from "../../public/expo.png";
import githubImg from "../../public/github.png";
import vueImg from "../../public/vue.png";
import shadcnImg from "../../public/shacn.png";
import { useState } from "react";

export default function Skills() {

  const skillData = [
    {
      id: 1,
      src: reactImg,
      altText: "React logo",
      name: "React.js",
    },
    {
      id: 2,
      src: nextImg,
      altText: "Nextjs logo",
      name: "Next.js",
    },
    {
      id: 3,
      src: jsImg,
      altText: "JavaScript logo",
      name: "JavaScript",
    },
    {
      id: 4,
      src: tsImg,
      altText: "Typescript logo",
      name: "TypeScript",
    },
    {
      id: 5,
      src: tailwindImg,
      altText: "Tailwind logo",
      name: "TailwindCSS",
    },
    {
      id: 6,
      src: cssImg,
      altText: "Css logo",
      name: "CSS",
    },
    {
      id: 7,
      src: nodeImg,
      altText: "Node.js logo",
      name: "Node.js",
    },
    {
      id: 8,
      src: expressImg,
      altText: "Express.js logo",
      name: "Express.js",
    },
    {
      id: 9,
      src: gitImg,
      altText: "Git logo",
      name: "Git",
    },
    {
      id: 10,
      src: supabaseImg,
      altText: "Supabase logo",
      name: "Supabase",
    },
    {
      id: 11,
      src: mongoImg,
      altText: "Mongodb logo",
      name: "MongoDB",
    },
    {
      id: 12,
      src: vueImg,
      altText: "Vue logo",
      name: "Vue.js",
    },
    {
      id: 13,
      src: nativeImg,
      altText: "React Native logo",
      name: "React Native",
    },
    {
      id: 14,
      src: expoImg,
      altText: "Expo logo",
      name: "Expo",
    },
    {
      id: 15,
      src: shadcnImg,
      altText: "Shadcn ui logo",
      name: "Shadcn UI",
    },
    {
      id: 16,
      src: githubImg,
      altText: "Github logo",
      name: "Github",
    },
  ];

  const duplicatedSkills = [...skillData, ...skillData];
  
  return (
    <>
      <style jsx>{`
        @keyframes marquee {
          0% {
            transform: translateX(0%);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        .marquee {
          animation: marquee 30s linear infinite;
        }

        .marquee:hover {
          animation-play-state: paused;
        }
      `}</style>

      <div
        id="skills"
        className="fade-section py-20 px-6 lg:px-52 bg-white flex flex-col items-center"
      >
        <h4 className="text-2xl font-semibold text-center">
          My <span className="text-[#8687e7]">Skills</span>
        </h4>
        <p className="mt-4 mb-20 text-center w-full lg:w-[60%]">
          Over the past few years, I&apos;ve had the opportunity to work with a
          wide range of technologies. The tools and frameworks listed below
          offer a glimpse into the skills and experience I&apos;ve developed
          along the way.
        </p>

        <div className="w-full relative overflow-hidden">
          <div className="marquee flex gap-2 lg:gap-8 w-fit">
            {duplicatedSkills.map((item, index) => (
              <div
                key={`${item.id}-${index}`}
                className="h-24 w-24 flex items-center justify-center flex-shrink-0 hover:scale-110 transition-transform duration-300"
              >
                <Image
                  src={item.src}
                  height={50}
                  width={50}
                  alt={item.altText}
                />
              </div>
            ))}
          </div>

          <div className="pointer-events-none absolute top-0 left-0 h-full w-16 bg-gradient-to-r from-white to-transparent"></div>
          <div className="pointer-events-none absolute top-0 right-0 h-full w-16 bg-gradient-to-l from-white to-transparent"></div>
        </div>
      </div>
    </>
  );
}
