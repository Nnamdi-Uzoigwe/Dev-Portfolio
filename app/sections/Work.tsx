"use client";

import { useState, useEffect } from "react";
import { Spinner } from "../components/Spinner";
import { ProjectCard } from "../components/ProjectCard";
import Link from "next/link";

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
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        setLoading(true);
        const res = await fetch(
          "https://nnamdi-portfolio-site.onrender.com/api/projects"
        );
        if (!res.ok) throw new Error("Failed to fetch projects");
        const data = await res.json();
        setProjects(data);
      } catch (err: unknown) {
        const error = err as Error;
        setError(error.message || "Something went wrong");
      } finally {
        setLoading(false);
      }
    };
    fetchProjects();
  }, []);

  return (
    <div id="work" className="bg-gray-100 py-20 px-6 lg:px-52">
      <h4 className="font-semibold text-2xl text-center mb-4">
        My <span className="text-[#8687e7]">Portfolio</span>
      </h4>
      <p className="text-center mb-16">
        Below are some of the noteworthy projects I have worked on
      </p>
      
      {error && <p className="text-red-500 text-center">{error}</p>}
      
      {loading ? (
        <Spinner />
      ) : (
        <div className="flex flex-col gap-6">
          {projects.map((item) => (
            <ProjectCard 
              key={item.id}
              name={item.name}
              brief={item.brief}
              overview={item.overview}
              image={item.images[0].url}
              tools={item.tools}
              id={item.id}
            />
          ))}
        </div>
      )}

      <div className="mt-18 flex justify-center">
        <Link href="https://github.com/Nnamdi-Uzoigwe" target="_blank">
          <button className="bg-[#8687e7] hover:bg-[#6e70ca] text-white py-4 cursor-pointer px-12 rounded-[10px]">View More Projects</button>
        </Link>
      </div>
    </div>
  );
}