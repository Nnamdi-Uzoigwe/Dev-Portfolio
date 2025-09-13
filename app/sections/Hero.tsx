import { FaGithub, FaInstagram, FaLinkedin, FaXTwitter } from "react-icons/fa6";
import { FloatingShapes } from "../components/FloatingShapes";
import { MdOutlineMail } from "react-icons/md";

export default function Hero() {
  return (
    <div className="grid-dots px-6 lg:px-40 pt-30 flex flex-col justify-center h-auto min-h-screen items-center">
     
        <h1 className="text-[30px] lg:text-[50px] font-semibold text-center">Hey, I am <span className="text-[#8687e7]">Nnamdi Uzoigwe</span></h1>
        <p className="mt-2 mb-10 text-2xl font-semibold text-center">Website & Mobile App Developer</p>
        <p className="text-center w-full lg:w-[60%] text-gray-600">
          I am passionate about crafting digital experiences that solve real
          problems. Specializing in the MERN stack with a focus on performance
          and user-centric design.
        </p>

        <div className="mt-10 flex gap-6">
            <div>
                <FaGithub />
            </div>
            <div>
                <FaXTwitter />
            </div>
            <div>
                <MdOutlineMail />
            </div>
            <div>
                <FaLinkedin />
            </div>
        </div>
      
      <FloatingShapes />
    </div>
  );
}
