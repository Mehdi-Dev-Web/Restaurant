// function Herotitle() {
//   return (
//     <div className="w-full flex justify-center items-center mt-9 h-[160px]">
//       <div className="w-[55%]">
//         <h1 className="text-brown text-medium mb-1.5">Midnight Bates</h1>
//         <h1 className="text-6xl font-bold text-orange font-Lobster hh">
//           Taste the difference, <br /> love the experience.
//         </h1>
//       </div>

import { Link } from "react-router-dom"

//       <div className="w-[45%] flex flex-col items-end gap-6 justify-between h-full">
//         <div className="h-[60%] w-[350px] flex justify-between items-end">
//           {/* Statistics Section */}
//           <div className="flex items-center flex-col">
//             <p className="text-5xl font-semibold flex items-center text-white">
//               <span className="text-[1.5rem]">+</span>1K
//             </p>
//             <p className="text-[.75rem] text-brown">Followers</p>
//           </div>

//           <div className="flex items-center flex-col">
//             <p className="text-5xl font-semibold flex items-center text-white">
//               <span className="text-[1.5rem]">+</span>50
//             </p>
//             <p className="text-[.75rem] text-brown">Plates</p>
//           </div>

//           <div className="flex items-center flex-col">
//             <p className="text-5xl font-semibold flex items-center text-white">
//               <span className="text-[1.5rem]">+</span>67
//             </p>
//             <p className="text-[.75rem] text-brown">Places</p>
//           </div>
//         </div>

//         <p className="h-[40%] text-brown">
//           Savor our delicious, handcrafted meals made with love <br /> and the freshest ingredients.
//         </p>
//       </div>
//     </div>
//   );
// }

// export default Herotitle
import {motion } from "framer-motion"
function Herotitle() {
  return (
<div className=" text-center md:text-left">
<h1 className=" text-4xl md:text-6xl text-black font-Poppins font-semibold  ">Perfection in taste <br />
art in every bite <br />
a <span className="relative">masterpiece <motion.svg   className="absolute bottom-[-11px] left-0.5 w-[200px] md:w-[300px] lg:w-[340px]  " height="30" viewBox="0 0 785 30" fill="none" xmlns="http://www.w3.org/2000/svg">
<motion.path initial={{pathLength:0}} animate={{pathLength : 1}} transition={{duration:1.2,ease : "easeInOut"}} d="M19.5 1L784.5 15H49.5L784.5 1L1 29" stroke="black" strokeWidth="3px"/>
</motion.svg></span> </h1>
<p className="text-gray-800 px-1 md:px-0 md:text-[.9rem] text-[.7rem] max-w-[400px]  mt-5">Taste the love in every bite. Our handcrafted meals, made with the freshest ingredients, are an invitation to pure culinary joy.</p>
<Link to="/menu"><button className="px-6 text-sm py-2 rounded-md bg-lightBlack text-orange mt-10">Reservation</button></Link>
</div>
  )
}



export default Herotitle