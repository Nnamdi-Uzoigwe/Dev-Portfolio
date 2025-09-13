import Hero from "./sections/Hero";
import AboutMe from "./sections/AboutMe";
import Skills from "./sections/Skills";
import Work from "./sections/Work";

export default function Home() {
  return (
    <div className="bg-[#fff]">
      <Hero />
      <AboutMe />
      <Skills />
      <Work />
    </div>
  );
}
