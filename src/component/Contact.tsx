import { FaUser } from "react-icons/fa";
import { BsChatSquareTextFill } from "react-icons/bs";
import { motion } from "framer-motion"
import { MdEmail } from "react-icons/md";

function Contact() {
  return (
    <div className='w-full h-[75vh] bg-orange flex justify-center items-center'>
      <div className="flex-1/3 h-full px-30 flex-col justify-center flex  ">

        <div className=" text-5xl font-bold font-Poppins ">Get in Touch</div>
        <div className="text-sm text-gray-900 mt-4">Have a Question or Want to Reserve a Table? <br />
          We're Here to Help!</div>
        <div className="mt-12 text-lg font-medium ">opening</div>
        <div className="flex gap-2 items-center mt-2">
          <div className="text-sm text-gray-900 relative"><span>everyday</span>
            <svg width="90" height="91" viewBox="0 0 297 91" fill="none" xmlns="http://www.w3.org/2000/svg" className="absolute bottom-[-36px] left-[-15px]">
              <motion.path initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }} transition={{ duration: 1, ease: "easeInOut" }} d="M179.5 1C129.833 2.5 24.9 16.7 2.5 61.5C-25.5 117.5 291 80 295.5 40.5C299.1 8.9 143.667 1 65.5 1" stroke="black" strokeWidth={3} />
            </svg>
          </div>
          <span className="w-[100px] h-[1px] bg-black"></span>
          <span className="text-sm text-gray-900">4pm-3am</span> </div>

      </div>



      <div className="flex-1/2 h-full flex justify-center items-center">
        <div className="w-[70%] h-[75%] bg-lightBlack  ">
          <form action="" className=" w-full flex flex-col  h-full justify-center gap-6 ml-10 ">
            <div className="flex items-center gap-5">
              <FaUser className="text-white text-xl" />
              <input type="text" name="" id="" placeholder="username ..." className="placeholder:text-gray-300 w-[70%] py-1 px-3 border-2 border-white rounded-md" />
            </div>
            <div className="flex items-center gap-5">
              <MdEmail className="text-white text-xl" />
              <input type="text" name="" id="" placeholder="email ..." className="placeholder:text-gray-300 w-[70%] py-1 px-3 border-2 border-white rounded-md" />
            </div>
            <div className="flex  gap-5">
              <BsChatSquareTextFill className="text-white text-xl mt-1.5" />
              <textarea name="" id="" placeholder="write your message ..." className="w-[70%] h-[100px] border-2 border-white rounded-md placeholder:text-gray-300 resize-none px-3"></textarea>
            </div>
            <button className="bg-orange w-[390px] ml-10  py-2 rounded-md font-medium ">send</button>
          </form>

        </div>
      </div>

    </div>
  )
}

export default Contact

