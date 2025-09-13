import Hero from "./sections/Hero";
import AboutMe from "./sections/AboutMe";
import Skills from "./sections/Skills";

export default function Home() {
  return (
    <div className="bg-[#fff]">
      <Hero />
      <AboutMe />
      <Skills />
    </div>
  );
}
