
import { useRef } from "react"
import pictwo from "../assets/steptodown.com210542.jpg"
import {useScroll,motion, useTransform} from "framer-motion"
import { Link } from "react-router-dom"


function AboutSection() {
  const ref =useRef(null)
  const {scrollYProgress}= useScroll({
  target : ref,
  offset : ["0 1","1.33 1"]

}
)

const scaly = useTransform(scrollYProgress,[0,1],[0.7,1])
const opacityy = useTransform(scrollYProgress,[0,1],[0.3,1])

  return (
    <motion.div 
     style={{
      scale: scaly,
      opacity:opacityy
    }}
     transition={{ease:"easeInOut"}}
     ref={ref} 
     className="w-full min-h-[65vh] gap-4 lg:gap-0  md:px-7  flex flex-col md:flex-row justify-center relative">
       <div className="flex-1 relative  md:flex items-center justify-center">
        <img src={pictwo} className="w-full  md:w-[450px] object-contain z-10" alt="" loading="lazy" />
      </div>
      <div className="flex-1    flex flex-col  justify-start items-center md:justify-center  md:items-start  mm:mt-0">
        <p className="text-sm  text-orange ">About Us</p>
        <h1 className=" text-center text-3xl lg:text-5xl  md:text-left  text-white font-Lobster  mt-1">Discover Our Story</h1>
        <p className="text-white px-3 md:px-0 font-light text-sm mt-4 max-w-[500px] text-center md:text-left">
           Welcome to night glow, where we specialize in crafting unforgettable dinner experiences. Whether you're craving a cozy evening or a special celebration, our delicious dishes and warm ambiance will make every meal memorable.
        </p>
        <Link to="/about">
        <button className="py-2 px-4 text-sm font-medium mt-8 text-black  bg-orange border-2 rounded-md cursor-pointer hover:border-[1px] hover:bg-transparent hover:text-orange"> see our story </button> 
        </Link>
        </div>
        
    </motion.div>
  )
}

export default AboutSection
// font-Lobster text-3xl lg:text-5xl text-white