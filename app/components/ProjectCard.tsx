import Image from "next/image";
import { TbArrowBigRight } from "react-icons/tb";

interface projectCardProps {
    name: string;
    overview: string,
    brief: string,
    tools: string[],
    image: string
}

export const ProjectCard = ({ name, overview, brief, tools, image }:projectCardProps) => {

    function truncateWords(text: string, numWords: number) {
    if (!text) return "";
    const words = text.split(" ");
    return words.slice(0, numWords).join(" ") + (words.length > numWords ? "…" : "");
  }


    return (
        <div
              className="rounded-[12px] w-full h-auto overflow-hidden transform transition duration-300 hover:-skew-y-1 bg-gray-50 shadow-sm grid grid-cols-1 lg:grid-cols-2"
            >
              <div className="relative w-full h-[300px] lg:h-auto">
                <Image
                  src={image}
                  fill
                  className="object-cover"
                  alt="portfolio img"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
              <div className="flex flex-col p-6 justify-center border-b-2 lg:border-b-0 border-l-0 lg:border-l-2 border-gray-200">
                <p className="text-center font-semibold text-lg lg:text-3xl mb-2 text-[#8687e7]">
                  {name}
                </p>
                <p className="text-center">{brief}</p>

                <div className="flex flex-wrap gap-2 mb-8 justify-center">
                  {tools?.map((tool, index) => (
                    <div
                      key={index}
                      className="mt-4 p-2 bg-[#dfdedf] text-[#737373] font-semibold rounded-[20px] text-xs lg:text-sm"
                      style={
                        {fontFamily: "var(--font-jetbrains)"}
                      }
                    >
                      {tool}
                    </div>
                  ))}
                </div>

                <p>{truncateWords(overview, 20)}</p>

                <div className="flex justify-center">
                  <button className="mt-4 w-fit bg-[#8687e7] flex items-center hover:bg-[#6e70ca] cursor-pointer gap-2 text-white py-2 px-8 rounded-xl">
                    Read More
                    <TbArrowBigRight />
                  </button>
                </div>
              </div>
            </div>
    )
}