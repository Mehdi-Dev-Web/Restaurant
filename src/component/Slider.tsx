import picThree from "../assets/newone.jpg";
import picTwo from "../assets/steptodown.com210542.jpg";
import picOne from "../assets/pexels-pixabay-260922.jpg";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

//? this is a component that is used to display a slider of images

const allPic = [picOne, picTwo, picThree];

function Slider() {
    const [num, setNum] = useState<number>(0);
    const [isstart, setIsstart] = useState<boolean>(false);

    useEffect(() => {
        const time = setInterval(() => {
            setNum((prev) => (prev === allPic.length - 1 ? 0 : prev + 1));
        }, 3000);
        return () => clearInterval(time);
    }, [num]);

    return (
        <div className="w-full rounded-sm bg-transparent h-full  overflow-hidden flex justify-center items-center relative">
            <AnimatePresence>
                <motion.img
                    key={num}
                    initial={ isstart && { opacity: .5 }} // Start off-screen on the right
                    animate={{ opacity: 1 }}   // Move to the center
                    exit={{ opacity: 0  }}   // Move off-screen to the left
                    transition={{ duration: .8, ease: "easeInOut" }}
                    src={allPic[num]}
                    alt="pic"
                    className="w-full h-full absolute bottom-0 object-cover"
                    loading="lazy"
                    onLoad={()=>setIsstart(true)}
                />
            </AnimatePresence>
        </div>
    );
}

export default Slider;