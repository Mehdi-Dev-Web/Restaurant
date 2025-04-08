

import { lazy } from "react"
import pic from "../assets/cea1f33939d394de0e531d29bc976ec7.jpg"
// import { IoArrowBackCircleOutline } from "react-icons/io5";
import { motion } from "framer-motion"

const Dishes = lazy(()=>import("../component/Dishes"))

function Menu() {
   
  return (
    <div className="bg-lightBlack w-full  min-h-screen ">
      <div className="w-full h-[80vh] relative overflow-hidden">
        <motion.img
          src={pic} 
          loading="lazy" 
          alt="" 
          className="w-full h-full object-cover "
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1 }} />
        <motion.div 
        initial={{ scale: 1.1 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1 }}
        className="w-full h-[30px]  gradient-bg  z-10 absolute bottom-0"></motion.div>
          {/* <IoArrowBackCircleOutline className="text-white text-4xl cursor-pointer z-10 absolute top-5 left-8 " /> */}
        <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.8 }}
        className="text-orange  text-6xl translate-[-50%] font-Lobster z-10 absolute top-1/2 left-1/2"> Menu</motion.div>

      </div>
       <div className="w-full px-3 md:px-24 mt-3">
        <Dishes />
       </div>
    </div>
  )
}

export default Menu