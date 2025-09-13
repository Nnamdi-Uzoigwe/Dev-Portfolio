// "use client";
// import { useState, useEffect } from "react";

// interface ProjectImage {
//   url: string;
//   public_id?: string;
//   _id?: string;
// }

// interface Project {
//   name: string;
//   brief: string;
//   timeframe: string;
//   githubLink: string;
//   liveUrl: string;
//   tools: string;
//   overview: string;
//   images: ProjectImage[];
//   id: string;
// }

// export default function Work(){

//     const [projects, setProjects]= useState<Project[]>([]);
//     const [error, setError] = useState<string>("")

//     // useEffect(() => {
//     //     async function fetchProjects() {
//     //         try {
//     //              const res = await fetch("https://nnamdi-portfolio-site.onrender.com/api/projects");

//     //         const data = await res.json();

//     //         setProjects(data);

//     //         } catch (error) {

//     //         }

//     //     }
//     //     fetchProjects();
//     // }, [])

//     useEffect(() => {
//     const fetchProjects = async () => {
//       try {
//         const res = await fetch(
//           "https://nnamdi-portfolio-site.onrender.com/api/projects"
//         );
//         if (!res.ok) throw new Error("Failed to fetch projects");

//         const data = await res.json();
//         console.log(data);

//         setTimeout(() => {
//           setProjects(data);
//         //   setFilteredProjects(data);
//         //   setLoading(false);
//         }, 3000);

//         setProjects(data);
//         // setFilteredProjects(data);
//       } catch (err: any) {
//         setError(err.message || "Something went wrong");
//       }
//     };

//     fetchProjects();
//   }, []);

//     return (
//         <div className="py-20 px-6 lg:px-52">
//             Work

//             <div>
//                 {projects.map((item) => (
//                     <div>
//                         <p>{item.brief}</p>
//                     </div>
//                 ))}
//             </div>
//         </div>
//     )
// }

"use client";
import Image from "next/image";
import { useState, useEffect } from "react";

interface ProjectImage {
  url: string;
  public_id?: string;
  _id?: string;
}

interface Project {
  id: string;
  name: string;
  brief: string;
  timeframe: string;
  githubLink: string;
  liveUrl: string;
  tools: string[];
  overview: string;
  images: ProjectImage[];
}

export default function Work() {
  const [projects, setProjects] = useState<Project[]>([]);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const res = await fetch(
          "https://nnamdi-portfolio-site.onrender.com/api/projects"
        );
        if (!res.ok) throw new Error("Failed to fetch projects");
        const data = await res.json();
        setProjects(data);
      } catch (err: any) {
        setError(err.message || "Something went wrong");
      }
    };
    fetchProjects();
  }, []);


  function truncateWords(text: string, numWords: number) {
  if (!text) return "";
  const words = text.split(" ");
  return words.slice(0, numWords).join(" ") + (words.length > numWords ? "…" : "");
}


  return (
    <div className="py-20 px-6 lg:px-52">
      <h4 className="font-semibold text-2xl text-center mb-4">My <span className="text-[#8687e7]">Portfolio</span></h4>
      <p className="text-center mb-16">
        Below are some of the noteworthy projects I have worked on
      </p>
      {error && <p className="text-red-500">{error}</p>}
      <div className="flex flex-col gap-6">
        {projects.map((item) => (
          <div
            key={item.id}
            className=" rounded-[12px] w-full h-auto overflow-hidden bg-gray-50 shadow-sm grid grid-cols-1 lg:grid-cols-2"
          >
            <div className="relative w-full h-[400px]">
              <Image
                src={item.images[0].url}
                fill
                className="object-cover"
                alt="portfolio img"
              />
            </div>
            <div className="flex flex-col p-6 justify-center  border-b-2 lg:border-b-0 border-l-0 lg:border-l-2 border-gray-200">
              <p className="text-center font-semibold text-lg lg:text-3xl mb-2 text-[#8687e7]">{item.name}</p>
              <p className="text-center">{item.brief}</p>

              <div className="flex flex-wrap gap-2 mb-8 justify-center">
                {item.tools?.map((item, index) => (
                  <div
                    key={index}
                    className="mt-4 p-2 bg-[#d8d5d5] text-[#737373] font-semibold rounded-[20px] text-sm"
                  >
                    {item}
                  </div>
                ))}
              </div>

              <p>{truncateWords(item.overview, 20)}</p>

            <div className="flex justify-center">
              <button className="mt-4 w-fit bg-[#8687e7] text-white py-2 px-8 rounded-xl">Read More</button>
            </div>
            </div>

          </div>
        ))}
      </div>
    </div>
  );
}
