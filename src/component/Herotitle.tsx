
import { MdArrowOutward } from "react-icons/md";

import { Link } from "react-router-dom"
//   
import {motion } from "framer-motion"
function Herotitle() {
  return (
      <div className=" text-center md:text-left">
        <h1 className=" text-4xl md:text-6xl font-medium text-black font-Lobster ">
          Perfection in taste 
          <br />
          art in every bite 
          <br />
          a <span className="relative">
            masterpiece 
            <motion.svg  className="absolute bottom-[-11px] left-0.5 w-[200px] md:w-[300px] lg:w-[340px]  " height="30" viewBox="0 0 785 30" fill="none" xmlns="http://www.w3.org/2000/svg">
            <motion.path initial={{pathLength:0}} animate={{pathLength : 1}} transition={{duration:1.2,ease : "easeInOut"}} d="M19.5 1L784.5 15H49.5L784.5 1L1 29" stroke="black" strokeWidth="3px"/>
            </motion.svg>
            </span> 
        </h1>

        <p className="text-gray-900  px-1 md:px-0 md:text-[.9rem] text-[.7rem] max-w-[400px]  mt-7">
          Taste the love in every bite. Our handcrafted meals, made with the freshest ingredients, are an invitation to pure culinary joy.
          </p>

          <Link to="/booking" >
          <button className="px-8 text-sm py-2.5 rounded-md bg-lightBlack text-orange mt-11 flex justify-center gap-2 items-center cursor-pointer hover:border-2 hover:border-lightBlack hover:bg-transparent hover:text-lightBlack ">
            <span>Booking</span><MdArrowOutward/>
            </button>
          </Link>
</div>
  )
}



export default Herotitle