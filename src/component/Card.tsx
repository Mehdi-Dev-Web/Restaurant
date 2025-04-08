import { useTransform, motion, MotionValue } from "framer-motion"
// import pic from "../assets/lifestyle-people-emotions-casual-concept-confident-nice-smiling-asian-woman-cross-arms-chest-confident-ready-help-listening-coworkers-taking-part-conversation.jpg"
import Rating from '@mui/material/Rating';
import Stack from '@mui/material/Stack';

function Card({title,date,content,image,i,typo,range,scrollYProgress}: {title: string, date: string, content: string,image:string,i:number,typo:number,range:number[],scrollYProgress: MotionValue<number>}) {
  
  const scale = useTransform(scrollYProgress,range,[1,typo])
  // only for testing
  return (
    // ... existing code ...
    <div className="w-full h-screen justify-center flex items-center sticky top-0">
        <motion.div className="w-[350px] sm:w-[500px] md:w-[760px] max-h-[430px] md:h-[350px] 
            border-orange border-[1px] rounded-xl relative flex flex-col md:flex-row 
            bg-lightBlack text-white hover:shadow-2xl hover:shadow-orange/20 
            transition-all duration-300" 
            style={{scale, top: `calc(-10% + ${i * 25}px)`}}>
         
         {/* Image Container */}
         <div className="flex-1/3 h-full p-4 overflow-hidden flex justify-center items-center">
            <div className="w-[150px] h-[150px] relative group 
                md:w-[200px] md:h-[250px] 
                transition-transform duration-300 hover:scale-105">
                <img src={image} 
                    loading="lazy" 
                    alt="Customer" 
                    className="object-cover w-full h-full rounded-[50%] md:rounded-xl
                    shadow-lg transition-all duration-300
                    hover:shadow-xl hover:shadow-orange/20" />
            </div>
         </div>

         {/* Content Container */}
         <div className="flex-1/2 h-full overflow-hidden py-4 
            flex flex-col justify-center gap-4 md:gap-6 px-8">
            
            {/* Header Section */}
            <div className="space-y-2">
                <div className="flex flex-col">
                    <span className="text-orange text-4xl font-bold font-Poppins 
                        capitalize ">
                       {title}
                    </span>
                    <span className="text-gray-400 text-sm font-medium">
                     {date}
                    </span>
                </div>
                
                {/* Mobile Rating */}
                <div className="md:hidden">
                    <Stack spacing={1}>
                        <Rating
                            name="half-rating-read"
                            defaultValue={5}
                            precision={0.5}
                            readOnly
                            size="small"
                            sx={{ 
                                stroke: "white", 
                                strokeWidth: 1, 
                                color: "#FFA500",
                                '& .MuiRating-iconFilled': {
                                    filter: 'drop-shadow(0 0 2px rgba(255, 165, 0, 0.3))'
                                }
                            }}
                        />
                    </Stack>
                </div>
            </div>

            {/* Review Text */}
            <div className="text-sm leading-relaxed text-gray-300 
                hover:text-white transition-colors duration-300">
              {content}
            </div>

            {/* Desktop Rating */}
            <div className="hidden md:block">
                <Stack spacing={1}>
                    <Rating
                        name="half-rating-read"
                        defaultValue={5}
                        precision={0.5}
                        size="small"
                        readOnly
                        sx={{ 
                            stroke: "white", 
                            strokeWidth: 1, 
                            color: "#FFA500",
                            '& .MuiRating-iconFilled': {
                                filter: 'drop-shadow(0 0 2px rgba(255, 165, 0, 0.3))'
                            }
                        }}
                    />
                </Stack>
            </div>
         </div>
        </motion.div>
    </div>
// ... existing code ...
   
  )
}

export default Card