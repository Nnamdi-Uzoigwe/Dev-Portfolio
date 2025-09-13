import { FaGithub, FaLinkedin, FaXTwitter } from "react-icons/fa6";
import { FloatingShapes } from "../components/FloatingShapes";
import { MdLocationPin, MdOutlineMail } from "react-icons/md";
import { PiLineVerticalBold } from "react-icons/pi";

export default function Hero() {
  return (
    <div className="fade-section grid-dots px-6 lg:px-52 pt-30 flex flex-col justify-center h-auto min-h-screen items-center">
      <h1 className="text-[30px] lg:text-[50px] font-semibold text-center">
        Hey, I am <span className="text-[#8687e7]">Nnamdi Uzoigwe</span>
      </h1>
      <p className="mt-2 mb-10 text-2xl font-semibold text-center">
        Website & Mobile App Developer
      </p>
      <p className="text-center w-full lg:w-[60%] text-gray-600">
        I am passionate about crafting digital experiences that solve real
        problems. Specializing in the MERN stack with a focus on performance and
        user-centric design.
      </p>

      <div className="mt-10  flex flex-col lg:flex-row items-center gap-5">
        <div className="flex gap-6">
          <div>
            <FaGithub size={28} />
          </div>
          <div>
            <FaXTwitter size={28} />
          </div>
          <div>
            <MdOutlineMail size={28} />
          </div>
          <div>
            <FaLinkedin size={28} />
          </div>
        </div>
        <span className="hidden lg:block">
          <PiLineVerticalBold size={28} />
        </span>
        <div
          className=" font-semibold flex gap-2"
          style={{ fontFamily: "var(--font-jetbrains)" }}
        >
          <MdLocationPin size={28} className="text-[#14b8a6]" />
          Abuja, Nigeria
        </div>
      </div>

      <FloatingShapes />
    </div>
  );
}
