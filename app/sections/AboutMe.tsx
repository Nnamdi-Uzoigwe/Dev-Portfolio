import Image from "next/image";
import myImg from "../../public/myimg.jpeg";

export default function AboutMe() {
  return (
    <div className="px-6 lg:px-52 py-10">
      <h1 className="font-semibold text-2xl text-center">
        About <span className="text-[#8687e7]">Me</span>
      </h1>

      <div className="mt-10 grid grid-cols-1 lg:grid-cols-2 gap-20">
        <div>
          <p className="text-left lg:text-justify">
            Hi, I am Nnamdi, a passionate Frontend Developer with full-stack
            capabilities. While I&apos;m comfortable across the entire MERN stack, my
            heart truly lies in crafting beautiful, interactive user
            experiences. There&apos;s something magical about transforming designs
            into pixel-perfect, responsive interfaces that users love to
            interact with. <br />
            <br />
            I specialize in React and have expanded my expertise to Vue.js and
            React Native, allowing me to build seamless experiences across web
            and mobile platforms. As a freelancer, I work with clients to bring
            their visions to life, focusing on creating applications that are
            not just functional, but genuinely enjoyable to use. <br />
            <br />
            My approach combines technical precision with creative
            problem-solving. I believe great frontend development is where art
            meets science - balancing performance optimization with stunning
            visual design, ensuring accessibility while pushing the boundaries
            of what&apos;s possible in the browser. <br />
            <br />
            When I am not coding, you will find me watching football matches or
            diving deep into old-school music playlists. There&apos;s something about
            classic tracks that inspires my coding sessions - maybe it&apos;s the
            timeless quality that I try to bring to my development work.
          </p>

          <div className="cards mt-8 flex gap-3 items-center w-full">
            <div className="border-1 w-full font-semibold border-gray-300 hover:bg-[#8687e7] hover:text-white hover:border-0 transform transition-transform hover:scale-[1.1] duration-200  shadow-sm  p-4 lg:p-6 rounded-[10px] flex flex-col items-center">
              20+
              <span className="font-light text-sm lg:text-md">Projects </span>
            </div>
            <div className="border-1 border-gray-300 hover:bg-[#8687e7] hover:text-white hover:border-0 transform transition-transform hover:scale-[1.1] duration-200 shadow-sm font-semibold w-full p-4 lg:p-6 rounded-[10px] flex flex-col items-center">
              3+
              <span className="font-light text-sm lg:text-md">Years Experience</span>
            </div>
          </div>
        </div>
       
        <div>
          <div className="photo-container">
            <div className="frame-outer">
              <div className="frame-inner">
                <div className="photo-placeholder double-frame">
                  <Image src={myImg} height={500} width={500} alt="my image" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
