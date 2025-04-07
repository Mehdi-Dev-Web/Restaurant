import { useRef } from "react"
// import pictwo from "../assets/steptodown.com210542.jpg"
import { useScroll, motion, useTransform } from "framer-motion"
import { Link } from "react-router-dom"

function AboutSection() {
 
  const ref = useRef(null)

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "1.33 1"]
  })

  // Enhanced animation 
  const scaly = useTransform(scrollYProgress, [0, 1], [0.8, 1])
  const opacityy = useTransform(scrollYProgress, [0, 1], [0.4, 1])

  return (
    <motion.div 
      style={{
        scale: scaly,
        opacity: opacityy
      }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      ref={ref} 
      className="w-full h-fit md:min-h-[80vh] bg-transparent py-20 px-4 md:px-8"
    >
      {/* Enhanced decorative header section */}
      <div className="w-full flex justify-center items-center gap-4 mb-8">
        <span className="w-[60px] h-[2px] bg-orange/70"></span>
        <p className="text-orange text-sm uppercase tracking-[0.2em] font-medium">about us</p>
        <span className="w-[60px] h-[2px] bg-orange/70"></span>
      </div>

      {/* Enhanced main content section */}
      <div className="max-w-4xl mx-auto text-center">
        <motion.h1 
          initial={{ y: 20 }}
          whileInView={{ y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-white text-4xl md:text-6xl mt-1 font-Lobster leading-tight"
        >
          Discover Our Story
        </motion.h1>
        <motion.p 
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-2xl mx-auto text-gray-300 text-base md:text-lg text-center mt-6 leading-relaxed"
        >
          Welcome to night glow, where we specialize in crafting unforgettable dinner experiences. 
          Whether you're craving a cozy evening or a special celebration, our delicious dishes 
          and warm ambiance will make every meal memorable.
        </motion.p>

        {/* Enhanced call-to-action button */}
        <Link to="/about">
          <motion.button 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="py-3 px-8 text-base font-medium mt-10 text-black bg-orange border-2 border-orange 
                     rounded-full cursor-pointer transition-all duration-200 hover:bg-transparent 
                     hover:text-orange "
                    //  hover:shadow-[0_0_20px_rgba(251,146,60,0.3)]
          >
            Explore Our Journey
          </motion.button> 
        </Link>
      </div>
    </motion.div>
  )
}

export default AboutSection
