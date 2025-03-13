
import { useState } from "react";
import { IoMdMenu } from "react-icons/io";
import { Link } from "react-router-dom";
import logo from "../assets/logo-pfe-res-white.png";
import NavMobile from "./NavMobile";
import {motion,useScroll,useMotionValueEvent} from "framer-motion"


function Navbar() {
  const [isappear, setIsappear] = useState(false);
  const[ isshow,setIsshowe] = useState(true)
 const {scrollY}= useScroll()
 useMotionValueEvent(scrollY,"change",(latest)=>{
  const previous = scrollY.getPrevious();
  if(previous !== undefined && latest > previous && latest > 70 ){
    setIsshowe(false)
  }else     setIsshowe(true)
 })
  return (

    <motion.div 
    variants={{
      visible : {y:0},
      hidden :{y:"-100%"}
    }}
    animate= {isshow ? "visible" : "hidden"}
    transition={{duration:.3,ease:"easeInOut"}}
    className="w-full h-[80px] flex  md:px-25 justify-between items-center sticky top-0 bg-lightBlack border-b-2 border-black z-20 ">


      {/* Navigation Links */}
      <ul className="hidden md:flex flex-1/2  font-normal  justify-start gap-10 items-center text-brown  ">
        <li className="cursor-pointer hover:border-b-[1px] hover:border-orange font-Montserrat ">
          Home
        </li>
        <li className="cursor-pointer hover:border-b-[1px] hover:border-orange">
          About us
        </li>
        <li className="cursor-pointer hover:border-b-[1px] hover:border-orange">
          Menu
        </li>
     
       
      </ul>
      {/* Logo */}
      <div className="h-full  w-[80px]  lg:w-[100px]  flex items-center">
        <Link to="/">
          <img src={logo} alt="logo" className="object-cover cursor-pointer  " />
        </Link>
      </div>

      {/* Action Buttons */}
      <ul className="hidden md:flex flex-1/2  font-normal  justify-end gap-10 items-center text-brown  ">
        <li className="cursor-pointer hover:border-b-[1px] hover:border-orange font-Montserrat ">
          Contact
        </li>
      
        <li className="cursor-pointer hover:border-b-[1px] hover:border-orange">
          Review
        </li>
        <li className="cursor-pointer hover:border-b-[1px] hover:border-orange">
          +212 637476467
        </li>
      </ul>
        <IoMdMenu
          onClick={() => setIsappear(!isappear)}
          className="text-5xl md:hidden text-gray-300"
        />
     

      {/* Mobile Navigation Menu */}
      <NavMobile isappear={isappear} />
    </motion.div>
  );
}

export default Navbar;
