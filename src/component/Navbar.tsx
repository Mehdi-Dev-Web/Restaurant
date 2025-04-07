
import { lazy, useState } from "react";
import { IoMdMenu } from "react-icons/io";
import { Link } from "react-router-dom";
import logo from "../assets/logo-pfe-res-white.png";
import {motion,useScroll,useMotionValueEvent} from "framer-motion"
import { FaRegUserCircle } from "react-icons/fa";
const MemoizedNavMobile = lazy(()=>import("./NavMobile"))

function Navbar() {

  const [isappear, setIsappear] = useState(false);
  const[ isshow,setIsshowe] = useState(true)

 const {scrollY}= useScroll()
  useMotionValueEvent(scrollY,"change",(latest)=>{
  const previous = scrollY.getPrevious();

  if(previous !== undefined && latest > previous && latest > 70 ){
      setIsshowe(false)
  }else {
    setIsshowe(true)
  }

 })
 
 const handleScrooling = ()=>{  
      window.scrollTo({
        top: 1100,
        behavior:"smooth"
    
      });
    }
  
  return (

    <motion.div 
    variants={{
      visible : {y:0},
      hidden :{y:"-100%"}
    }}
    animate= {isshow ? "visible" : "hidden"}
    transition={{duration:.3,ease:"easeInOut"}}
    className="w-full h-[80px]   md:px-25 flex justify-between items-center sticky top-0 bg-lightBlack border-b-2 border-black z-20 ">

      {/* Logo */}
      <div className="h-full flex-1  w-[60px]  lg:w-[80px]  flex items-center">
        <Link to="/">
          <img src={logo} alt="logo" loading="lazy" className="object-cover cursor-pointer w-[80px]  " />
        </Link>
      </div>

      {/* Navigation Links */}
      <ul className="hidden md:flex flex-1  font-normal  justify-start gap-10 items-center text-brown  ">
       <Link to='/'>
       <li className="cursor-pointer hover:border-b-[1px] hover:border-orange font-Montserrat ">
          Home
        </li>
       </Link> 

       <Link to="/menu">
       <li className="cursor-pointer hover:border-b-[1px] hover:border-orange">
          Menu
        </li>
       </Link>

      <Link to="about">
      <li className="cursor-pointer hover:border-b-[1px] hover:border-orange">
          About us
        </li>
      </Link>

          <li className="cursor-pointer hover:border-b-[1px] hover:border-orange font-Montserrat ">
           <a href="#contact" onClick={handleScrooling}>Contact</a> 
           </li>
    
      
      </ul>


      {/* Action Buttons */}
      <ul className="hidden md:flex flex-1  font-normal   justify-end gap-4 items-center text-brown  ">
      
        <li className="cursor-pointer hover:border-b-[1px] hover:border-orange">
         <a href="https://www.whatsapp.com/" className="text-black font-medium px-5 py-1.5 text-sm bg-orange rounded-md">+212 637476467</a> 
        </li>
        <li>
        <Link to="/login">
        <FaRegUserCircle  className="text-white text-2xl cursor-pointer"/>
        </Link>
        </li>
      </ul>
        <IoMdMenu
          onClick={() => setIsappear(!isappear)}
          className="text-5xl md:hidden  text-gray-200"
        />
     

      {/* Mobile Navigation Menu */}
      <MemoizedNavMobile isappear={isappear} />
    </motion.div>
  );
}

export default Navbar;
