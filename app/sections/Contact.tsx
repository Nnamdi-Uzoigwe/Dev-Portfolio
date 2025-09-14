import { IoIosSend } from "react-icons/io";

export default function Contact() {
    return (
        <div className="fade-section bg-gray-100 py-20 px-6 lg:px-52 flex flex-col items-center gap-2">
            <h4 className="text-2xl font-semibold text-center">
                Contact <span className="text-[#8687e7]">Me</span>
            </h4>

            <p className="mt-4 mb-10 w-full lg:w-[40%] text-center">
                Do you want to reach out for collaborations or make enquiries? <b>Drop a message</b> for me below.
            </p>

            <div className="grid grid-cols-1 lg:grid-cols-2 w-full">
                <p>Hi</p>
                <form className="bg-white p-4 w-full flex flex-col gap-6">
                    <div>
                        <p className="font-semibold">Your Name</p>
                        <input type="text" placeholder="Johnson" className="border-1 w-full p-2 rounded-[8px]"/>
                    </div>
                    <div>
                        <p className="font-semibold">Your Email</p>
                        <input type="email" placeholder="Johnson" className="border-1 w-full p-2 rounded-[8px]"/>
                    </div>
                    <div>
                        <p>Your Message</p>
                        <textarea className="border-1 w-full rounded-[8px] p-2" placeholder="Write something..."></textarea>
                    </div>
                     <button className="mt-4 w-full bg-[#8687e7] flex justify-center items-center hover:bg-[#6e70ca] cursor-pointer gap-2 text-white py-3 px-8 rounded-xl">
                        Send Message
                        <IoIosSend />
                    </button>
                </form>
            </div>
        </div>
    )
}