
// import {motion} from 'framer-motion';
// import { useState } from 'react';
// const Training = () => {
//   // const [isopen , setisopen] = useState<boolean>(false)
//     return (

     
//     );
// };
// export default Training;
{/* <div className='w-full h-screen justify-center flex items-center'>
<motion.div transition={{layout:{duration:1,type:"spring"}}} layout onClick={()=>setisopen(!isopen)} className='bg-white py-4 px-6'>
   <motion.h1 layout="position" className='text-lg font-bold'>framer motion</motion.h1>
   {isopen &&  
  <motion.div>
      <p className='pt-2'>
      Voluptas cumque porro beatae corrupti necessitatibus, ex atque totam ipsum. Nisi, officiis!
      </p>
      <p className='pt-2'>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
  </motion.div>
   }
</motion.div>
</div> */}

function Training() {
  return (
    <div className="w-full h-screen flex justify-center items-center">
        <div className="relative w-auto wrapper ">
            <input type="text" placeholder="yourname" name="" id="" 
            className="h-[40px] inp  w-[200px] bg-white relative border-[1px] border-black outline-none text-black text-sm focus:placeholder:text-sm  focus:placeholder:absolute  focus:placeholder:bottom-5  " />
        </div>
    </div>
  )
}

export default Training