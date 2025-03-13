// import { Link } from 'react-router-dom'

import AboutSection from "../component/AboutSection"
import Ascrolling from "../component/Ascrolling"
import Faq from "../component/FAQ"
import Herotitle from "../component/Herotitle"
import Navbar from "../component/Navbar"
// import Numbers from "../component/Numbers"
import Slider from "../component/Slider"
// import Training from "../component/training"
import bg from "../assets/white-marble-stone-background-texture-pattern-free-photo.webp"
import Contact from "../component/Contact"

function Home() {
  return (
    <div className="w-full min-h-screen  bg-lightBlack">
        <Navbar />
        <div className="w-full flex justify-center relative items-center h-[calc(100vh-82px)] bg-orange flex-col md:flex-row-reverse  ">
          <span className=" opacity-5 absolute w-full h-full left-0 top-0"> 
            <img src={bg} className="w-full h-full object-cover" alt="" />
          </span>
          <div className="flex-1 h-full w-full  ">
          <Slider />
          </div>
          <div className="flex-1 h-full w-full flex justify-center items-center   ">
        <Herotitle />
          </div>
        </div>
        <AboutSection />
        {/* <Numbers /> */}
        <Contact />
        <Faq />
        <Ascrolling />
        {/* <Training /> */}
    </div>
  )
}

export default Home