// import { FaUser } from "react-icons/fa";
// import { BsChatSquareTextFill } from "react-icons/bs";
// import { motion } from "framer-motion"
// import { MdEmail } from "react-icons/md";
import {useScroll,motion, useTransform} from "framer-motion"
import { useRef, useState } from "react"
import supabase from "../data/supa"

function Contact() {
  const [name , setName]= useState("")
  const [email , setEmail]= useState("")
  const [message , setMessage]= useState("")

  const ref =useRef(null)
  const {scrollYProgress}= useScroll({
    target : ref,
    offset : ["0 1","1.33 1"]
  
  }
  )

  const scaly = useTransform(scrollYProgress,[0,1],[0.7,1])
  const opacityy = useTransform(scrollYProgress,[0,1],[0.3,1])
    
  const insertData = async(e: React.FormEvent<HTMLFormElement>)=>{
    e.preventDefault()
    if(name == "" && email == "" && message == "")return
    const { data, error } = await supabase
    .from('contact')
    .insert([
      { name, email,message },
    ])
    .select()
    if(error){
      return console.log(error.message)
    }
    if(data){
      console.log("thank you")
      setEmail("")
      setMessage("")
      setName("")
    }
  

  }

  return (

     <div className="h-fit flex flex-col gap-14 px-1.5 w-full bg-orange py-14">
      <motion.div
        style={{
          scale: scaly,
          opacity:opacityy
        }}
        transition={{ease:"easeInOut"}}
        ref={ref}
        className="w-full text-center ">
        <h1 className="text-black font-Lobster text-3xl md:text-5xl">We’d Love to Hear from You</h1>
        <p className="text-gray-900 text-sm mt-2">Have a Question or Want to Reserve a Table?<br />
         We're Here to Help!
        </p>
      </motion.div>
      <motion.div
      initial={{
        opacity:0,
        y:50
      }}
      whileInView={{
        opacity:1,
        y:0,
      
      }}
      className="lg:w-[50%] w-[80%] mx-auto flex flex-col gap-8">

          <form action=" " onSubmit={insertData}>

        <div className="w-full flex flex-col lg:flex-row justify-between gap-4 items-center ">
          <input
          value={name}
          onChange={(e)=>setName(e.target.value)}
          type="text" name="" id="" placeholder="name ..." 
          className="outline-none lg:w-[400px] w-full  h-[40px] bg-lightBlack text-white rounded-sm px-2.5 placeholder:text-gray-200 placeholder:text-sm" />
          <input 
          value={email}
          onChange={(e)=>setEmail(e.target.value)}
          type="text" name="" id="" placeholder="email..."
          className="outline-none lg:w-[400px] w-full  h-[40px] bg-lightBlack text-white rounded-sm px-2.5 placeholder:text-gray-200 placeholder:text-sm" />
        </div>
        <textarea 
        value={message}
        onChange={(e)=>setMessage(e.target.value)}
        name="" placeholder="message" id="" 
        className="outline-none w-full  h-[100px] mt-6  bg-lightBlack text-white rounded-sm p-2.5 resize-none placeholder:text-gray-200 placeholder:text-sm"></textarea>
        <button type="submit" className="outline-none w-full h-[50px] bg-white text-black rounded-md text-center cursor-pointer border-[2px] mt-8 border-black ">Send a Message</button>
        </form>
      </motion.div>
     </div>
  )
}

export default Contact

    // <div className='w-full h-[75vh] bg-orange flex justify-center items-center'>
    //   <div className="flex-1/3 h-full px-30 flex-col justify-center flex  ">

    //     <div className=" text-5xl font-bold font-Poppins ">Get in Touch</div>
    //     <div className="text-sm text-gray-900 mt-4">Have a Question or Want to Reserve a Table? <br />
    //       We're Here to Help!</div>
    //     <div className="mt-12 text-lg font-medium ">opening</div>
    //     <div className="flex gap-2 items-center mt-2">
    //       <div className="text-sm text-gray-900 relative"><span>everyday</span>
    //         <svg width="90" height="91" viewBox="0 0 297 91" fill="none" xmlns="http://www.w3.org/2000/svg" className="absolute bottom-[-36px] left-[-15px]">
    //           <motion.path initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }} transition={{ duration: 1, ease: "easeInOut" }} d="M179.5 1C129.833 2.5 24.9 16.7 2.5 61.5C-25.5 117.5 291 80 295.5 40.5C299.1 8.9 143.667 1 65.5 1" stroke="black" strokeWidth={3} />
    //         </svg>
    //       </div>
    //       <span className="w-[100px] h-[1px] bg-black"></span>
    //       <span className="text-sm text-gray-900">4pm-3am</span> </div>

    //   </div>



    //   <div className="flex-1/2 h-full flex justify-center items-center">
    //     <div className="w-[70%] h-[75%] bg-lightBlack  ">
    //       <form action="" className=" w-full flex flex-col  h-full justify-center gap-6 ml-10 ">
    //         <div className="flex items-center gap-5">
    //           <FaUser className="text-white text-xl" />
    //           <input type="text" name="" id="" placeholder="username ..." className="placeholder:text-gray-300 w-[70%] py-1 px-3 border-2 border-white rounded-md" />
    //         </div>
    //         <div className="flex items-center gap-5">
    //           <MdEmail className="text-white text-xl" />
    //           <input type="text" name="" id="" placeholder="email ..." className="placeholder:text-gray-300 w-[70%] py-1 px-3 border-2 border-white rounded-md" />
    //         </div>
    //         <div className="flex  gap-5">
    //           <BsChatSquareTextFill className="text-white text-xl mt-1.5" />
    //           <textarea name="" id="" placeholder="write your message ..." className="w-[70%] h-[100px] border-2 border-white rounded-md placeholder:text-gray-300 resize-none px-3"></textarea>
    //         </div>
    //         <button className="bg-orange w-[390px] ml-10  py-2 rounded-md font-medium ">send</button>
    //       </form>

    //     </div>
    //   </div>

    // </div>