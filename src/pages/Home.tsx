// import { Link } from 'react-router-dom'

import  { lazy, Suspense } from "react";
// import Training from "../component/Training";
import pic from  '../assets/white-marble-stone-background-texture-pattern-free-photo.webp'
import Category from "../component/Category";
// Dynamic imports using React.lazy
const AboutSection = lazy(() => import("../component/AboutSection"));
const Ascrolling = lazy(() => import("../component/Ascrolling"));
const Faq = lazy(() => import("../component/FAQ"));
const Herotitle = lazy(() => import("../component/Herotitle"));
const Navbar = lazy(() => import("../component/Navbar"));
const Slider = lazy(() => import("../component/Slider"));
const Contact = lazy(() => import("../component/Contact"));
// import bg from "../assets/white-marble-stone-background-texture-pattern-free-photo.webp"

function Home() {
  return (
    <Suspense fallback={<div className="w-full h-screen bg-lightBlack flex justify-center items-center"><p className="text-orange">Loading...</p></div>}>
    <div className="w-full min-h-screen  bg-lightBlack">
        <Navbar />
        <div className="div w-full flex justify-center relative items-center h-[calc(100vh-82px)] bg-orange flex-col md:flex-row-reverse  ">
        <div 
             className="absolute inset-0 bg-cover bg-center opacity-6 z-0" 
             style={{ backgroundImage: `url(${pic})` }}
        ></div>
         
          <div className="flex-1 h-full w-full  ">
          <Slider />
          </div>
          <div className="flex-1 h-full w-full flex justify-center items-center z-10   ">
        <Herotitle />
          </div>
        </div>
        <AboutSection />
        <Category />
        <Faq />
        <div id="contact">
         <Contact />
       </div>
       <div id="review">

        <Ascrolling />
       </div>
       
        
    </div>
    </Suspense>
  )
}

export default Home