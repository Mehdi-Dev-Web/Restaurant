import { useState } from "react"
import { FaAngleLeft } from "react-icons/fa";
import { FaAngleDown } from "react-icons/fa";
import data from "../data/data";
import { motion } from "framer-motion";


function Faq() {
  const [num , setNum] = useState<number | null>(null)
  const Toggle = (id : number) => {
    setNum((prev)=>(prev === id ? null : id))
  }
  
  return (
    <div className='w-full h-screen mt-10 '>
           <div className="w-full h-[80px] flex justify-center items-center gap-2">
            <div className="w-[50px] h-0.5 bg-white"></div>
            <p className="text-orange">FAQs</p>
            <div className="w-[50px] h-0.5 bg-white"></div>
           </div>
           <div className="flex flex-col justify-center items-center gap-4 mt-1 text-center ">
            <h1 className="font-Lobster text-3xl lg:text-5xl text-white  ">Frequently Asked Question </h1>
            <p className="text-gray-300 px-2 max-w-[800px] text-center text-sm lg-text-normal">"We’ve gathered some of the most common questions to help make your experience with us seamless and enjoyable. If you don’t find what you’re looking for, feel free to contact us—we’re always happy to assist!"</p>
           </div>
           {/* // Question and Answer */}
           <div className="flex flex-col  w-[90%] md:flex-row lg:w-[80%] md:gap-10  justify-between mx-auto mt-12 ">
            {/* left side */}
            <div className=" flex-1">

            { data.slice(0,3).map((item) => (
              <div key={item.id}>
              <div className="  w-full  mt-6 cursor-pointer  " onClick={() => Toggle(item.id)}>
                <div className="flex justify-between w-ful items-center w-full p-5 bg-orange  rounded-sm "> <p>{item.question}</p> <span>{num == item.id ? <FaAngleDown /> : <FaAngleLeft />}</span> </div>
               {num == item.id && <motion.div key={item.id} initial={{y:-20 ,opacity:0.5}} animate={{y:0 ,opacity:1}} transition={{duration:.2,ease:"easeInOut"}} className="w-full  border-b-2 border-orange py-2.5 px-2 text-gray-300 text-sm  ">{ item.answer}</motion.div>} 
              </div>
             </div>
            ))}
            </div>
            {/* right side */}
            <div className=" flex-1">
            { data.slice(4,7).map((item) => (
             <div key={item.id}>
              <div className=" w-full cursor-pointer mt-6  " onClick={() => Toggle(item.id)}>
                <div className="flex justify-between w-ful items-center  p-5 bg-orange  rounded-sm"> <p>{item.question}</p> <span>{num == item.id ? <FaAngleDown /> : <FaAngleLeft />}</span> </div>
               {num == item.id &&  <motion.div key={item.id} initial={{y:-20 ,opacity:0.5}} animate={{y:0 ,opacity:1}}  transition={{duration:.2,ease:"easeInOut"}} className="w-full  border-b-2 border-orange py-2.5 px-2 text-gray-300 text-sm  ">{ item.answer}</motion.div>}
              </div>
             </div>
            ))}
            </div>

           </div>
    </div>
  )
}

export default Faq