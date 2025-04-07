import {useScroll, motion, useTransform} from "framer-motion"
import { useRef, useState } from "react"
import supabase from "../data/supa"

function Contact() {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [message, setMessage] = useState("")

  const ref = useRef(null)
  const {scrollYProgress} = useScroll({
    target: ref,
    offset: ["0 1","1.33 1"]
  })
// imrpoved animation
  const scaly = useTransform(scrollYProgress, [0,1], [0.7,1])
  const opacityy = useTransform(scrollYProgress, [0,1], [0.3,1])
    
  const insertData = async(e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if(name == "" && email == "" && message == "") return
    const { data, error } = await supabase
      .from('contact')
      .insert([{ name, email, message }])
      .select()
    
    if(error) {
      return console.log(error.message)
    }

    if(data) {
      console.log("thank you")
      setEmail("")
      setMessage("")
      setName("")
    }
  }

  return (
    <div className="min-h-[90vh] flex flex-col gap-14 px-4 md:px-8 w-full bg-orange py-20">
      <motion.div
        style={{
          scale: scaly,
          opacity: opacityy
        }}
        transition={{ease: "easeInOut"}}
        ref={ref}
        className="w-full text-center"
      >
        <h1 className="text-gray-900 font-Lobster text-4xl md:text-6xl mb-6 ">
          We'd Love to Hear from You
        </h1>
        <p className="text-gray-800 text-lg md:text-xl font-medium">
          Have a Question or Want to Reserve a Table?
          <br className="md:hidden" />
          <span className="md:ml-2">We're Here to Help!</span>
        </p>
      </motion.div>

      <motion.div
        initial={{
          opacity: 0,
          y: 50
        }}
        whileInView={{
          opacity: 1,
          y: 0
        }}
        transition={{
          duration: 0.6,
          ease: "easeOut"
        }}
        className="w-full max-w-4xl mx-auto"
      >
        <form onSubmit={insertData} className="bg-white/20 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-white/20">
          <div className="w-full flex flex-col lg:flex-row justify-between gap-6">
            <div className="flex-1">
              <label htmlFor="name" className="block text-gray-900 font-semibold mb-2">Name</label>
              <input
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                type="text"
                placeholder="Your name"
                className="w-full h-12 px-4 bg-black/80 text-white rounded-lg 
                         outline-none transition-all duration-200 
                         border-2 border-transparent focus:border-white/50
                         placeholder:text-gray-300"
              />
            </div>
            <div className="flex-1">
              <label htmlFor="email" className="block text-gray-900 font-semibold mb-2">Email</label>
              <input
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                type="email"
                placeholder="Your email"
                className="w-full h-12 px-4 bg-black/80 text-white rounded-lg 
                         outline-none transition-all duration-200 
                         border-2 border-transparent focus:border-white/50
                         placeholder:text-gray-300"
              />
            </div>
          </div>
          
          <div className="mt-6">
            <label htmlFor="message" className="block text-gray-900 font-semibold mb-2">Message</label>
            <textarea
              id="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Your message"
              className="w-full h-32 p-4 bg-black/80 text-white rounded-lg 
                       outline-none transition-all duration-200 
                       border-2 border-transparent focus:border-white/50
                       placeholder:text-gray-300 resize-none"
            ></textarea>
          </div>

          <motion.button
            type="submit"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="w-full h-14 mt-8 bg-gray-900 text-white rounded-lg
                     font-semibold text-lg transition-all duration-200
                     hover:bg-black focus:outline-none focus:ring-2
                     focus:ring-black focus:ring-offset-2 focus:ring-offset-orange
                     shadow-md"
          >
            Send Message
          </motion.button>
        </form>
      </motion.div>
    </div>
  )
}

export default Contact
