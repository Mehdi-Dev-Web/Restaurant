import { lazy, useRef, useState } from "react"
import data from "../data/data";
const QS =lazy(()=>import("./QS"))
import {useScroll,motion, useTransform} from "framer-motion"


function Faq() {
  const [num , setNum] = useState<number | null>(null)
  const Toggle = (id : number) => {
    setNum((prev)=>(prev === id ? null : id))
  }
  const ref =useRef(null)
  const {scrollYProgress}= useScroll({
    target : ref,
    offset : ["0 1","1.33 1"]
  
  }
  )
  const scaly = useTransform(scrollYProgress,[0,1],[0.7,1])
  const opacityy = useTransform(scrollYProgress,[0,1],[0.3,1])
    
  return (
    <div className='w-full min-h-[95vh] md:h-screen mt-10 mb-1 '>
      <motion.div ref={ref} style={{
        scale:scaly,
        opacity:opacityy
      }}>
           <div className="w-full h-[80px] flex justify-center items-center gap-2">
            <div className="w-[50px] h-0.5 bg-white"></div>
            <p className="text-orange">FAQs</p>
            <div className="w-[50px] h-0.5 bg-white"></div>
           </div>
           <div className="flex flex-col justify-center items-center gap-4 mt-1 text-center ">
            <h1 className="font-Lobster text-3xl lg:text-5xl text-white  ">Frequently Asked Question </h1>
            <p className="text-gray-300 px-2 max-w-[800px] text-center text-sm lg-text-normal">"We’ve gathered some of the most common questions to help make your experience with us seamless and enjoyable. If you don’t find what you’re looking for, feel free to contact us—we’re always happy to assist!"</p>
           </div>
      </motion.div>

           {/* // Question and Answer */}
           <div className="w-full bg-lightBlack">
           
           <QS data={data} num={num} Toggle={Toggle} />
           </div>
        
    </div>
  )
}

export default Faq