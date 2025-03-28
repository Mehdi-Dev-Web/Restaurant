import { useTransform, motion, MotionValue } from "framer-motion"
import pic from "../assets/634961cf8f900561629af98d_Tobi-new.jpg"
import Rating from '@mui/material/Rating';
import Stack from '@mui/material/Stack';
function Card({i,typo,range,scrollYProgress}: {title: string, content: string, color: string,i:number,typo:number,range:number[],scrollYProgress: MotionValue<number>}) {
  const scale = useTransform(scrollYProgress,range,[1,typo])
    return (
    <div className="w-full h-screen justify-center flex items-center sticky top-0 ">
        <motion.div className="w-[350px] sm:w-[500px] md:w-[760px] max-h-[430px] md:h-[350px] border-orange border-[1px] rounded-xl relative flex flex-col md:flex-row  bg-lightBlack text-white " style={{scale,top: `calc(-10% + ${i * 25}px)`}}>
         <div className="flex-1/3 h-full overflow-hidden flex justify-center items-center">
         <div className="w-[150px] mt-4 h-[150px]  rounded-[50%] md:rounded-md md:w-[200px] md:h-[250px] ">
            <img src={pic} loading="lazy" alt="" className="object-cover w-full h-full rounded-[50%] md:rounded-md" />
         </div>
         </div>
         <div className="flex-1/2 h-full overflow-hidden py-2   flex flex-col justify-center gap-2 md:gap-7 px-6">
         <div className="">
            <div>
            <span className="text-white text-4xl font-bold font-Poppins">mehdi aouinati</span> <br />
            <span className="text-gray-200 text-medium text-sm ">20/12/2014</span>
            </div>
            <div className="md:hidden">
            <Stack spacing={1}>
              <Rating
                name="half-rating-read"
                defaultValue={4}
                precision={0.5}
                readOnly
                size="small"
                sx={{ stroke: "white", strokeWidth: 1 , color: "yellow",}}
              />
            </Stack>
            </div>


         </div>
         <div className=" max-w-[350px] text-sm  text-gray-400">
         The ambiance was absolutely stunning, and the food was even better! The grilled salmon was cooked to perfection, and the staff was incredibly welcoming. Will definitely come back!</div>
      <div className="hidden md:block">
         <Stack spacing={1}>
              <Rating
                name="half-rating-read"
                defaultValue={4}
                precision={0.5}
                size="small"
                readOnly
                sx={{ stroke: "white", strokeWidth: 1 , color: "yellow"}}
              />
            </Stack>
      </div>
         </div>
        </motion.div>
    </div>
  )
}

export default Card