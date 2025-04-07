import { FaAngleLeft } from "react-icons/fa";
import { FaAngleDown } from "react-icons/fa";
import { motion } from "framer-motion";

type Dt = {
    id : number
    question : string
    answer : string
  }

type Dprop = {
    data : Dt[]
    num: number | null
    Toggle : (id : number)=> void
}

function QS({data,num,Toggle}:Dprop) {
    const reveal = {
      initial: {
        opacity : 0,
        y:100,
      },
      animate : {
        opacity : 1,
        y:0,
      }
    }

    //? divide the data into two parts to handle drop down and up for each side alone 
    
  return (
    <div className="flex flex-col  w-[90%] md:flex-row lg:w-[80%] md:gap-10  justify-between mx-auto mt-12 ">
    {/* left side */}
    <div className=" flex-1">

    { data.slice(0,3).map((item) => (
      <div key={item.id}>
      <div className="  w-full  mt-6 cursor-pointer  " onClick={() => Toggle(item.id)}>
        <motion.div variants={reveal} initial="initial" whileInView="animate" viewport={{once:true}} transition={{duration:.6,ease:"easeInOut"}} className="flex justify-between w-ful items-center w-full p-5 bg-orange  rounded-sm "> <p>{item.question}</p> <span>{num == item.id ? <FaAngleDown /> : <FaAngleLeft />}</span> </motion.div>
       {num == item.id && <motion.div  key={item.id} initial={{y:-20 ,opacity:0.5}} animate={{y:0 ,opacity:1}} transition={{duration:.2,ease:"easeInOut"}} className="w-full  border-b-2 border-orange py-2.5 px-2 text-gray-300 text-sm  ">{ item.answer}</motion.div>} 
      </div>
     </div>
    ))}
    </div>

    {/* right side */}
    <div className=" flex-1">
    { data.slice(4,7).map((item) => (
     <div key={item.id}>
      <div className=" w-full cursor-pointer mt-6  " onClick={() => Toggle(item.id)}>
        <motion.div  variants={reveal} initial="initial" whileInView="animate" viewport={{once:true}} transition={{duration:.6,ease:"easeInOut"}} className="flex justify-between w-ful items-center  p-5 bg-orange  rounded-sm"> <p>{item.question}</p> <span>{num == item.id ? <FaAngleDown /> : <FaAngleLeft />}</span> </motion.div>
       {num == item.id &&  <motion.div key={item.id} initial={{y:-20 ,opacity:0.5}} animate={{y:0 ,opacity:1}}  transition={{duration:.2,ease:"easeInOut"}} className="w-full  border-b-2 border-orange py-2.5 px-2 text-gray-300 text-sm  ">{ item.answer}</motion.div>}
      </div>
     </div>
    ))}
    </div>

   </div>
  )
}

export default QS