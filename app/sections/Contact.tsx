// import Image from "next/image";
// import { IoIosSend } from "react-icons/io";
// import contactImg from "../../public/contactimg.png"

// export default function Contact() {
//     return (
//         <div id="contact" className="fade-section bg-gray-100 border-t-2 border-gray-300 py-20 px-6 lg:px-52 flex flex-col items-center gap-2">
//             <h4 className="text-2xl font-semibold text-center">
//                 Contact <span className="text-[#8687e7]">Me</span>
//             </h4>

//             <p className="mt-4 mb-10 w-full lg:w-[40%] text-center">
//                 Do you want to reach out for collaborations or make enquiries? <b>Drop a message</b> for me below.
//             </p>

//             <div className="grid grid-cols-1 lg:grid-cols-2 w-full">
//                 <div className="">
//                     <Image
//                         src={contactImg}
//                         width={400}
//                         height={400}
//                         alt="code img"
//                     />
//                 </div>
//                 <form className="bg-white px-4 py-10 shadow-md rounded-[14px] w-full flex flex-col gap-6">
//                     <div>
//                         <p className="font-semibold">Your Name</p>
//                         <input type="text" placeholder="Johnson" className="border-1 w-full p-2 rounded-[8px]"/>
//                     </div>
//                     <div>
//                         <p className="font-semibold">Your Email</p>
//                         <input type="email" placeholder="Johnson" className="border-1 w-full p-2 rounded-[8px]"/>
//                     </div>
//                     <div>
//                         <p>Your Message</p>
//                         <textarea className="border-1 w-full rounded-[8px] p-2" placeholder="Write something..."></textarea>
//                     </div>
//                      <button className="mt-4 w-full bg-[#8687e7] flex justify-center items-center hover:bg-[#6e70ca] cursor-pointer gap-2 text-white py-3 px-8 rounded-xl">
//                         Send Message
//                         <IoIosSend />
//                     </button>
//                 </form>
//             </div>
//         </div>
//     )
// }


import { IoIosSend } from "react-icons/io";
import { HiMail, HiPhone, HiLocationMarker, HiClock } from "react-icons/hi";
import { FaLinkedin, FaGithub, FaTwitter } from "react-icons/fa";

export default function Contact() {
    return (
        <div id="contact" className="fade-section bg-gradient-to-br from-gray-50 to-gray-100 py-24 px-6 lg:px-52">
            {/* Header */}
            <div className="text-center mb-16">
                <h4 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-6">
                    Let&apos;s <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#8687e7] to-[#6e70ca]">Connect!</span>
                </h4>
                <p className="text-md text-gray-600 max-w-2xl mx-auto leading-relaxed">
                    Ready to collaborate or have a question? I&apos;d love to hear from you. 
                    <span className="font-medium text-gray-800"> Drop me a message</span> and let&apos;s create something amazing together.
                </p>
            </div>

            {/* Grid Container */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
                
                {/* Left Side - Contact Information */}
                <div className="space-y-8">
                    <div className="bg-white/80 backdrop-blur-sm border border-white/20 shadow-sm rounded-3xl p-8 lg:p-10">
                        <h5 className="text-2xl font-bold text-gray-900 mb-8">Get In Touch</h5>
                        
                        <div className="space-y-6">
                            {/* Email */}
                            <div className="flex items-center gap-4 group">
                                <div className="w-12 h-12 bg-gradient-to-r from-[#8687e7] to-[#6e70ca] rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                                    <HiMail className="text-white text-xl" />
                                </div>
                                <div>
                                    <p className="text-sm font-medium text-gray-500 uppercase tracking-wider">Email</p>
                                    <a href="mailto:your.email@example.com" className="text-gray-900 font-semibold hover:text-[#8687e7] transition-colors duration-300">
                                        uzonnamdi31@gmail.com
                                    </a>
                                </div>
                            </div>

                            {/* Phone */}
                            <div className="flex items-center gap-4 group">
                                <div className="w-12 h-12 bg-gradient-to-r from-[#8687e7] to-[#6e70ca] rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                                    <HiPhone className="text-white text-xl" />
                                </div>
                                <div>
                                    <p className="text-sm font-medium text-gray-500 uppercase tracking-wider">Phone</p>
                                    <a href="tel:+2348160192784" className="text-gray-900 font-semibold hover:text-[#8687e7] transition-colors duration-300">
                                        +234 816 019 2784
                                    </a>
                                </div>
                            </div>

                            {/* Location */}
                            <div className="flex items-center gap-4 group">
                                <div className="w-12 h-12 bg-gradient-to-r from-[#8687e7] to-[#6e70ca] rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                                    <HiLocationMarker className="text-white text-xl" />
                                </div>
                                <div>
                                    <p className="text-sm font-medium text-gray-500 uppercase tracking-wider">Location</p>
                                    <p className="text-gray-900 font-semibold">Abuja, Nigeria</p>
                                </div>
                            </div>

                            {/* Response Time */}
                            <div className="flex items-center gap-4 group">
                                <div className="w-12 h-12 bg-gradient-to-r from-[#8687e7] to-[#6e70ca] rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                                    <HiClock className="text-white text-xl" />
                                </div>
                                <div>
                                    <p className="text-sm font-medium text-gray-500 uppercase tracking-wider">Response Time</p>
                                    <p className="text-gray-900 font-semibold">Within 24 hours</p>
                                </div>
                            </div>
                        </div>

                        {/* Social Links */}
                        <div className="mt-10 pt-8 border-t border-gray-200">
                            <p className="text-sm font-medium text-gray-500 uppercase tracking-wider mb-4">Follow Me</p>
                            <div className="flex gap-4">
                                <a href="#" className="w-10 h-10 bg-gray-100 hover:bg-[#8687e7] rounded-xl flex items-center justify-center transition-all duration-300 group">
                                    <FaLinkedin className="text-gray-600 group-hover:text-white text-lg" />
                                </a>
                                <a href="#" className="w-10 h-10 bg-gray-100 hover:bg-[#8687e7] rounded-xl flex items-center justify-center transition-all duration-300 group">
                                    <FaGithub className="text-gray-600 group-hover:text-white text-lg" />
                                </a>
                                <a href="#" className="w-10 h-10 bg-gray-100 hover:bg-[#8687e7] rounded-xl flex items-center justify-center transition-all duration-300 group">
                                    <FaTwitter className="text-gray-600 group-hover:text-white text-lg" />
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* Additional Info Card */}
                    <div className="bg-gradient-to-r from-[#8687e7] to-[#6e70ca] rounded-3xl p-8 text-white">
                        <h6 className="text-xl font-bold mb-4">Let&apos;s Build Something Great</h6>
                        <p className="text-white/90 leading-relaxed">
                            I&apos;m always excited to work on new projects and collaborate with talented individuals. 
                            Whether it&apos;s a web application, mobile app, or innovative idea - let&apos;s make it happen!
                        </p>
                    </div>
                </div>

                {/* Right Side - Contact Form */}
                <div>
                    <form className="bg-white/80 backdrop-blur-sm border border-white/20 shadow-sm rounded-3xl p-8 lg:p-12 space-y-8 h-fit">
                        
                        {/* Name Field */}
                        <div className="group">
                            <label className="text-sm font-semibold text-gray-700 mb-3">
                                Your Name
                            </label>
                            <input 
                                type="text" 
                                placeholder="Enter your full name"
                                className="w-full p-4 border-2 border-gray-200 rounded-xl outline-0 focus:border-[#8687e7] focus:ring-4 focus:ring-[#8687e7]/10 transition-all duration-300 text-gray-800 placeholder-gray-400 group-hover:border-gray-300"
                            />
                        </div>

                        {/* Email Field */}
                        <div className="group">
                            <label className="text-sm font-semibold text-gray-700 mb-3">
                                Your Email
                            </label>
                            <input 
                                type="email" 
                                placeholder="your.email@example.com"
                                className="w-full p-4 border-2 border-gray-200 rounded-xl outline-0 focus:border-[#8687e7] focus:ring-4 focus:ring-[#8687e7]/10 transition-all duration-300 text-gray-800 placeholder-gray-400 group-hover:border-gray-300"
                            />
                        </div>

                        {/* Message Field */}
                        <div className="group">
                            <label className="text-sm font-semibold text-gray-700 mb-3">
                                Your Message
                            </label>
                            <textarea 
                                rows={6}
                                placeholder="Tell me about your project, ideas, or just say hello..."
                                className="w-full p-4 border-2 outline-0 border-gray-200 rounded-xl focus:border-[#8687e7] focus:ring-4 focus:ring-[#8687e7]/10 transition-all duration-300 text-gray-800 placeholder-gray-400 resize-none group-hover:border-gray-300"
                            ></textarea>
                        </div>

                        {/* Submit Button */}
                        <button className="w-full bg-gradient-to-r from-[#8687e7] to-[#6e70ca] hover:from-[#6e70ca] hover:to-[#5a5cb8] text-white font-semibold py-4 px-8 rounded-xl transition-all duration-300 transform hover:scale-[1.02]  flex items-center justify-center gap-3 group">
                            <span className="text-lg">Send Message</span>
                            <IoIosSend className="text-xl group-hover:translate-x-1 transition-transform duration-300" />
                        </button>
                    </form>
                </div>
            </div>

            {/* Decorative Elements */}
            <div className="absolute top-10 left-10 w-32 h-32 bg-gradient-to-r from-[#8687e7]/10 to-transparent rounded-full blur-3xl"></div>
            <div className="absolute bottom-10 right-10 w-40 h-40 bg-gradient-to-l from-[#6e70ca]/10 to-transparent rounded-full blur-3xl"></div>
        </div>
    )
}