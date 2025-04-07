import { IoClose } from "react-icons/io5";
import { motion  } from "framer-motion";
import React from "react";

type Tp = {
    setV: (thing : string)=> void
    setIsSearching:(thing:boolean)=>void
    v:string
}

//? this is a component that is used to search for a dish by name

function Searching({setIsSearching,setV,v}:Tp) {
    
  return (
    <motion.div initial={{width : 0}} animate={{width : "100%"}} exit={{width : 0}} transition={{duration:.4,ease:"easeInOut"}} className="w-[100px] md:w-[1100px] flex justify-between items-center border-[1px] border-white rounded-md px-4">
    <input type="text" value={v} onChange={(e)=>setV(e.target.value)} placeholder="searching" name="" id="" className="w-[100px] md:w-[1030px] outline-none placeholder:text-gray-200 text-white"/> 
     <IoClose onClick={()=>(setIsSearching(false),setV(""))} className="text-white cursor-pointer" />
     </motion.div>
  )
}

//? memoized the component to prevent re-rendering

const MemoizedSearching = React.memo(Searching);
export default MemoizedSearching;