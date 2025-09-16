"use client";

import { useState, useEffect } from "react";
import { useParams, useRouter } from "next/navigation";
import Link from "next/link";
import {
  ExternalLink,
  ChevronsRight,
  BriefcaseBusiness,
  Clock,
} from "lucide-react";
import { FaGithub } from "react-icons/fa6";
import { ProjectCard } from "@/app/components/ProjectCard";

import ImageModal from "@/app/components/ImageModal";
import { Spinner } from "@/app/components/Spinner";
import Image from "next/image";

export interface ProjectImage {
  url: string;
  _id?: string;
}

export interface Project {
  id: string;
  name: string;
  brief: string;
  overview: string;
  timeframe: string;
  tools: string[];
  images: ProjectImage[];
  liveUrl?: string;
  githubLink?: string;
  dateAdded: string;
  createdAt: string;
  updatedAt: string;
}

export default function ProjectDetailPage() {
  const { id } = useParams();
  const router = useRouter();

  const [project, setProject] = useState<Project | null>(null);
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [modalImage, setModalImage] = useState<{
    src: string;
    alt: string;
  } | null>(null);

  // fetch single project
  useEffect(() => {
    if (!id) return;
    const fetchProject = async () => {
      try {
        const res = await fetch(
          `https://nnamdi-portfolio-site.onrender.com/api/projects/${id}`
        );
        if (!res.ok) {
          throw new Error(
            res.status === 404 ? "Project not found" : "Failed to fetch project"
          );
        }
        const data = (await res.json()) as Project;
        setTimeout(() => {
          setProject(data);
          setLoading(false);
        }, 1000);
      } catch (err: unknown) {
        setError(err instanceof Error ? err.message : "Something went wrong");
        setLoading(false);
      }
    };
    fetchProject();
  }, [id]);

  // fetch all projects
  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const res = await fetch(
          "https://nnamdi-portfolio-site.onrender.com/api/projects"
        );
        if (!res.ok) throw new Error("Failed to fetch projects");
        const data = await res.json();
        setProjects(data);
      } catch (err: unknown) {
        const error = err as Error;
        console.error(error.message || "Something went wrong");
      }
    };
    fetchProjects();
  }, [id]);

  if (loading) return  (
    <div className="flex justify-center items-center min-h-screen">
  <Spinner />
    </div>
  );

  if (error) {
    return (
      <div className="min-h-screen bg-[#1a1a1b] text-white flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-4 text-red-400">Error</h2>
          <p className="text-gray-300 mb-6">{error}</p>
          <Link
            href="/works"
            className="bg-[#faa300] text-black px-6 py-3 rounded-lg hover:bg-[#e8930a] transition-colors"
          >
            Back to Portfolio
          </Link>
        </div>
      </div>
    );
  }

  if (!project) {
    router.replace("/works");
    return null;
  }

  return (
    <div className="min-h-screen px-6 lg:px-52">
      <div className="mt-30 max-w-6xl mx-auto">
        {/* Back Button */}
        <div className="flex gap-2 items-center mb-8">
          <Link
            href="/"
            className="inline-flex text-lg items-center gap-2 font-semibold"
          >
            WORKS
          </Link>
          <ChevronsRight />
          <p className="text-lg font-semibold">{project.name}</p>
        </div>

        {/* Project Header */}
        <header className="grid-dots mb-12 mt-14 flex flex-col items-center">
          <h1 className="text-2xl lg:text-4xl font-semibold mb-6">
            {project.name}
          </h1>
          <p className="text-lg leading-relaxed mb-8 text-center">{project.brief}</p>

          <div className="flex flex-wrap gap-6 mb-8 justify-center">
            {project.tools?.map((item, index) => (
              <div
                key={index}
                className="p-2 bg-[#dfdedf] text-[#737373] font-semibold rounded-[20px] text-sm"
              >
                {item}
              </div>
            ))}
          </div>

          <div className="flex justify-center gap-10 items-center">
            <div className="flex gap-2">
              <BriefcaseBusiness />
              <p>Website Design</p>
            </div>
            <div className="flex items-center gap-2">
              <Clock />
              <span>{project.timeframe}</span>
            </div>
          </div>

          <div className="flex mt-8 flex-wrap gap-4">
            {project.githubLink && (
              <a
                href={project.githubLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 font-medium"
              >
                Github <FaGithub size={24} />
              </a>
            )}
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-[30px] font-medium border-2 border-gray-300 transition-colors"
              >
                Live Demo <ExternalLink size={18} />
              </a>
            )}
          </div>
        </header>

        {/* Project Images */}
        {project.images && project.images.length > 0 && (
          <section className="mb-12">
            <div className="grid grid-cols-1 gap-6">
              {project.images.slice(0, 1).map((image, index) => (
                <div
                  key={index}
                  className="relative overflow-hidden border-1 border-gray-300 rounded-lg bg-gray-800 cursor-pointer"
                  onClick={() =>
                    setModalImage({
                      src: image.url,
                      alt: `${project.name} screenshot ${index + 1}`,
                    })
                  }
                >
                  <div className="w-full relative h-[500px]">
                    <Image
                      src={image.url}
                      fill
                      alt={`${project.name} screenshot ${index + 1}`}
                      className="object-cover hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Project Overview */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Overview</h2>
          <div>
            <p className="text-md lg:text-lg leading-relaxed whitespace-pre-line text-left lg:text-justify">
              {project.overview}
            </p>
          </div>
        </section>

        {project.images && project.images.length > 0 && (
          <section className="mb-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {project.images.slice(1, 3).map((image, index) => (
                <div
                  key={index}
                  className="relative overflow-hidden border-1 border-gray-300 rounded-lg bg-gray-800 cursor-pointer"
                  onClick={() =>
                    setModalImage({
                      src: image.url,
                      alt: `${project.name} screenshot ${index + 2}`,
                    })
                  }
                >
                  <div className="w-full h-[400px] relative">
                    <Image
                      src={image.url}
                      fill
                      alt={`${project.name} screenshot ${index + 2}`}
                      className="w-full h-64 lg:h-80 object-cover hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Related Projects */}
        <div className="pt-12 border-t-2 border-gray-200 pb-8">
          <h3 className="text-2xl font-semibold  mb-8">
            View Next Project
          </h3>
          <div className="grid grid-cols-1 gap-3 lg:gap-6">
            {projects
              .filter((p) => p.id !== project.id)
              .slice(0, 3)
              .map((relatedProject) => (
                <ProjectCard
                  key={relatedProject.id}
                  name={relatedProject.name}
                  brief={relatedProject.brief}
                  image={relatedProject?.images[0].url}
                  id={relatedProject.id}
                  tools={relatedProject.tools}
                  overview={relatedProject.overview}
                />
              ))}
          </div>
        </div>
      </div>

      {/* Image Modal */}
      <ImageModal
        isOpen={!!modalImage}
        onClose={() => setModalImage(null)}
        imageSrc={modalImage?.src || ""}
        imageAlt={modalImage?.alt || ""}
      />
    </div>
  );
}
