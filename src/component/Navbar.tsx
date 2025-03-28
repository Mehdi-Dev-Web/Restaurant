
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
  }else setIsshowe(true)
 })
  const handle = (e)=>{
    e.preventDefault()
    if(e == "rev"){
      window.scrollTo({
        top: 2200,
        behavior:"smooth"
    
      });
    } else if(e == "con") {
      window.scrollTo({
        top: 1500,
        behavior:"smooth"
    
      });
    }
  }
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
       <Link to='/'>
       <li className="cursor-pointer hover:border-b-[1px] hover:border-orange font-Montserrat ">
          Home
        </li>
       </Link> 

      <Link to="about">
      <li className="cursor-pointer hover:border-b-[1px] hover:border-orange">
          About us
        </li>
      </Link>

       <Link to="/menu">
       <li className="cursor-pointer hover:border-b-[1px] hover:border-orange">
          Menu
        </li>
       </Link>

      
          <li className="cursor-pointer hover:border-b-[1px] hover:border-orange font-Montserrat ">
           <a href="#contact" onClick={()=>handle("con")}>Contact</a> 
           </li>
    
      
      </ul>
      {/* Logo */}
      <div className="h-full  w-[80px]  lg:w-[100px]  flex items-center">
        <Link to="/">
          <img src={logo} alt="logo" loading="lazy" className="object-cover cursor-pointer  " />
        </Link>
      </div>

      {/* Action Buttons */}
      <ul className="hidden md:flex flex-1/2  font-normal  justify-end gap-10 items-center text-brown  ">
       
      
        <li className="cursor-pointer hover:border-b-[1px] hover:border-orange">
          galory
        </li>
        <li className="cursor-pointer hover:border-b-[1px] hover:border-orange">
         <a href="#review" onClick={()=>handle("rev")}>review</a> 
        </li>
        <li className="cursor-pointer hover:border-b-[1px] hover:border-orange">
         <a href="https://www.whatsapp.com/">+212 637476467</a> 
        </li>
        <li>
        <Link to="/login">
        <FaRegUserCircle  className="text-white text-2xl cursor-pointer"/>
        </Link>
        </li>
      </ul>
        <IoMdMenu
          onClick={() => setIsappear(!isappear)}
          className="text-5xl md:hidden text-gray-200"
        />
     

      {/* Mobile Navigation Menu */}
      <MemoizedNavMobile isappear={isappear} />
    </motion.div>
  );
}

export default Navbar;
