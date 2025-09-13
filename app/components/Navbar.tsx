import { HiMenuAlt3 } from "react-icons/hi";

export default function Navbar() {
    return (
        // <div className="fixed top-5 bg-[#1a1a1a]/80 w-[80%] rounded-[12px] z-30 border-1 py-[16px] px-[32px] h-[80px] border-[#fff]/10">
        //     Navbar
        //     hello o
        // </div>
    // Navbar component
<nav className="fixed top-4 left-0 right-0 z-50 px-4 sm:px-6 lg:px-8">
  <div className="max-w-6xl mx-auto bg-[#1a1a1aD9] backdrop-blur-md border rounded-[14px] shadow-md border-[#ffffff1A]  px-6 py-4">
    <div className="flex justify-between items-center">
      {/* Logo */}
      <div className=" text-[#8687e7] font-semibold" style={{ fontFamily: "var(--font-jetbrains)" }}>
        {'<Nnamdi.dev />'}
      </div>
      
      {/* Nav Links */}
      <div className="hidden md:flex space-x-8">
        <a href="#about" className="text-white hover:text-[#78716c]">About Me</a>
        <a href="#skills" className="text-white hover:text-[#78716c]">My Skills</a>
        <a href="#work" className="text-white hover:text-[#78716c]">Work</a>
        <a href="#contact" className="text-white hover:text-[#78716c]">Contact</a>
      </div>
      
      {/* CTA */}
      <button className="hidden lg:flex bg-[#8687e7] text-white px-12 py-2 hover:bg-[#ff6347] rounded-[10px]">
        Download CV
      </button>

      <div className="flex lg:hidden bg-[#8687e7] cursor-pointer text-white p-2 rounded-[10px]">
        <HiMenuAlt3 size={28} />
      </div>
    </div>
  </div>
</nav>
    )
}