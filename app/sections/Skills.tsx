import Image from "next/image";
import reactImg from "../../public/react.png"
import jsImg from "../../public/JS.png"
import tsImg from "../../public/ts.png"
import nextImg from "../../public/Nextjs.png"
import tailwindImg from "../../public/tailwind.png"
import cssImg from "../../public/css.png"
import nodeImg from "../../public/node.png"
import expressImg from "../../public/express.png"
import gitImg from "../../public/git.png"
import supabaseImg from "../../public/supabase.png"
import mongoImg from "../../public/mongodb.png"
import nativeImg from "../../public/native.png"
import expoImg from "../../public/expo.png"
import githubImg from "../../public/github.png"
import vueImg from "../../public/vue.png"
import shadcnImg from "../../public/shacn.png"
export default function Skills() {
    

    const skillData = [
        {
            id: 1,
            src: reactImg,
            altText: "React logo",
            name: "React.js"
        },
        {
            id: 2,
            src: nextImg,
            altText: "Nextjs logo",
            name: "Next.js"
        },
        {
            id: 3,
            src: jsImg,
            altText: "JavaScript logo",
            name: "JavaScript"
        },
        {
            id: 4,
            src: tsImg,
            altText: "Typescript logo",
            name: "TypeScript"
        },
        {
            id: 5,
            src: tailwindImg,
            altText: "Tailwind logo",
            name: "TailwindCSS"
        },
        {
            id: 6,
            src: cssImg,
            altText: "Css logo",
            name: "CSS"
        },
        {
            id: 7,
            src: nodeImg,
            altText: "Node.js logo",
            name: "Node.js"
        },
        {
            id: 8,
            src: expressImg,
            altText: "Express.js logo",
            name: "Express.js"
        },
        {
            id: 9,
            src: gitImg,
            altText: "Git logo",
            name: "Git"
        },
        {
            id: 10,
            src: supabaseImg,
            altText: "Supabase logo",
            name: "Supabase"
        },
        {
            id: 11,
            src: mongoImg,
            altText: "Mongodb logo",
            name: "MongoDB"
        },
        {
            id: 12,
            src: vueImg,
            altText: "Vue logo",
            name: "Vue.js"
        },
        {
            id: 13,
            src: nativeImg,
            altText: "React Native logo",
            name: "React Native"
        },
        {
            id: 14,
            src: expoImg,
            altText: "Expo logo",
            name: "Expo"
        },
        {
            id: 15,
            src: shadcnImg,
            altText: "Shadcn ui logo",
            name: "Shadcn UI"
        },
        {
            id: 16,
            src: githubImg,
            altText: "Github logo",
            name: "Github"
        },
    ]
  return (
    <div className="fade-section py-20 px-6 lg:px-52 bg-gray-100 flex flex-col items-center">
      <h4 className="text-2xl font-semibold text-center">
        My <span className="text-[#8687e7]">Skills</span>
      </h4>
      <p className="mt-4 mb-20 text-center w-full lg:w-[60%]">
        Over the past few years, I&apos;ve had the opportunity to work with a
        wide range of technologies. The tools and frameworks listed below offer
        a glimpse into the skills and experience I&apos;ve developed along the
        way.
      </p>

    <div className="flex gap-6 flex-wrap justify-center">
    {skillData.map((item) => (
        <div key={item.id} className="h-24 w-24 rounded-[10px] shadow-sm bg-white flex items-center justify-center">
          
        <Image 
            src={item.src}
            height={50}
            width={50}
            alt={item.altText}
            />
       </div>
    ))}
    </div>
    </div>
  );
}
