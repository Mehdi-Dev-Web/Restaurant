import { easeInOut } from "framer-motion"
import { motion, AnimatePresence } from "framer-motion"

type Tp = {
    isappear: boolean
}

function NavMobile({isappear}: Tp) {
  return (
    <>
      <AnimatePresence>
        {isappear && (
          <motion.div
            key="menu"
            initial={{ x: 20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: 20, opacity: 0 }}
            transition={{ duration: 0.6, ease: easeInOut }}
            className="absolute w-full h-[420px] flex flex-col justify-center items-center  text-2xl bg-lightBlack text-light bottom-[-420px] z-10"
          > 
            <ul className="flex flex-col justify-center items-center gap-10 font-semibold text-2xl text-white">
              <li className="cursor-pointer hover:border-b-2 hover-border-brown">Home</li>
              <li className="cursor-pointer hover:border-b-2 hover-border-brown">About</li>
              <li className="cursor-pointer hover:border-b-2 hover-border-brown">Menu</li>
              <li className="cursor-pointer hover:border-b-2 hover-border-brown">Contact</li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

export default NavMobile