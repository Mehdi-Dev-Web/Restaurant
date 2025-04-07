

import { lazy } from "react"
import pic from "../assets/cea1f33939d394de0e531d29bc976ec7.jpg"
import { IoArrowBackCircleOutline } from "react-icons/io5";

const Dishes = lazy(()=>import("../component/Dishes"))

function Menu() {
   
  return (
    <div className="bg-lightBlack w-full  min-h-screen ">
      <div className="w-full h-[80vh] relative ">
        <img src={pic} loading="lazy" alt="" className="w-full h-full object-cover " />
        <div className="w-full h-[30px]  gradient-bg  z-10 absolute bottom-0"></div>
          <IoArrowBackCircleOutline className="text-white text-4xl cursor-pointer z-10 absolute top-5 left-8 " />
        <div className="text-orange  text-6xl translate-[-50%] font-Lobster z-10 absolute top-1/2 left-1/2"> Menu</div>

      </div>
       <div className="w-full px-3 md:px-24 mt-3">
        <Dishes />
       </div>
    </div>
  )
}

export default Menu