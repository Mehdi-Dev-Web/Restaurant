 import { motion } from "framer-motion";
 import pic1 from "../assets/steptodown.com282041.jpg"
 import pic2 from "../assets/steptodown.com680054.jpg"
 import pic3 from "../assets/pexels-pixabay-260922.jpg"
import { useState,useEffect, useRef } from "react";
import { Link } from "react-router-dom";

function Category() {
    const[width,setWidth]=useState(0)
    const ref = useRef<HTMLDivElement>(null)

    useEffect(()=>{
        if (ref.current) {
            setWidth(ref.current.scrollWidth - ref.current.offsetWidth + 15);
        }
    },[])

    const allPic = [pic2,pic1,pic3]

  return (
 <div className="mx-24 mt-8">
   <motion.div ref={ref} className=" cursor-grab bg-orange overflow-scroll" style={{scrollbarWidth:"none"}}>
    <motion.div drag="x" dragConstraints={{right: 0, left: -width}} className="flex gap-4 p-2 bg-orange">
        {allPic.map((pic,index)=>(
            <motion.div key={index} className="min-w-[60%] gap-4 h-[30rem] p-4 bg-lightBlack rounded-xl flex justify-center items-center flex-col">
                <img src={pic} className="w-full h-[70%] object-cover pointer-events-none" alt="" loading="lazy" />
                <div className="w-full h-[25%]">
                    <h1 className="text-white text-xl font-Lobster  ">Explore our mouth-watering main courses, crafted to perfection. Click to view the full menu!</h1>
                    <Link to="/menu">
                    <button className="px-6 py-2 mt-4 bg-orange rounded-md text-black hover:border-[1px] border-orange hover:bg-transparent hover:text-orange cursor-pointer ">View Menu</button>
                    </Link>

                </div>


            </motion.div>
        ))}
    </motion.div>
   </motion.div>
 </div>
  )
}

export default Category