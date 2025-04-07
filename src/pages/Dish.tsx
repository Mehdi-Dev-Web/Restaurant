import { lazy, useEffect, useState } from "react";
import {  Link, useParams } from "react-router-dom";
import Rating from '@mui/material/Rating';
import Stack from '@mui/material/Stack';
import supabase from "../data/supa";
const MemoizedSimilar = lazy(()=>import("../component/Similar"))

//? this is the dish page that is used to display a specific dish and details

function Dish() {

    interface Dish {
        id: number;
        name: string;
        price: number;
        smallDescription: string;
        largeDescription?: string;
        Ingredients?:string[]
        img: string,
        type?: string;
      
       
      }
      
      interface Category {
        category_name: string;
        category: Dish[];
      }

    const [data, setData] = useState<Category[]>([])
    //  get id and name of type from dynamic 
    const { id, name  } = useParams<{ id: string, name:string | undefined }>(); 
    const dishId = id ? parseInt(id, 10) : null; 

    // fetshing data 
   useEffect(()=>{
    const fetching = async()=>{
        const {data, error} = await supabase.from("menu").select("*")
        if(error) console.error("Error fetching menu:", error);
        else setData(data);

    }
    fetching()
   },[])
    // get dish by id
   const dish = data
   .flatMap((item) => item.category) 
   .find((dish) => dish.id === dishId); 

if (!dish) {
   return <h2 className="text-center w-full h-screen flex justify-center items-center text-white bg-lightBlack">loeding ...</h2>;
}     
//  filter dishes based on type to show similr dish
const similar = data
  .filter((d) => d.category_name == name)
  .flatMap((d) => d.category)
  .filter((dish) => dish.id !== dishId).slice(0, 3);

    return (
      <div className="w-full min-h-screen bg-gradient-to-b from-lightBlack to-black flex flex-col items-center px-4 pb-12 md:px-0">
        <div className="w-full max-w-6xl min-h-screen flex flex-col md:flex-row md:items-start gap-8 pt-6">
          {/* Image Container with Shadow and Border */}
          <div className="md:w-1/2 flex-1">
            <img
              src={dish.img}
              loading="lazy"
              alt={dish.name}
              className="w-full h-[550px] object-cover rounded-2xl shadow-2xl transition-transform duration-300 hover:scale-[1.02]"
            />
            {/* <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent rounded-2xl"/> */}
          </div>

          {/* Details Container */}
          <div className="flex-1 bg-black/20 backdrop-blur-sm rounded-2xl p-6 flex gap-8 flex-col">
            <div className="space-y-4">
              <h1 className="text-4xl font-Poppins md:text-5xl text-orange font-medium 
                           bg-gradient-to-r from-orange to-yellow-400 bg-clip-text text-transparent">
                {dish.name}
              </h1>
              
              <p className="text-white/90 text-base leading-relaxed">
                {dish.largeDescription}
              </p>
            </div>

            {/* Ingredients Section */}
            <div className="bg-white/5 rounded-xl p-6 space-y-2">
              <h2 className="text-lg font-semibold text-orange mb-3">Ingredients</h2>
              <div className="flex flex-wrap gap-2">
                {dish.Ingredients?.map((item, index) => (
                  <span key={index} 
                        className="px-3 py-1 bg-white/10 rounded-full text-gray-200 text-sm">
                    {item}
                  </span>
                ))}
              </div>
            </div>

            {/* Info Grid */}
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white/5 rounded-xl p-4">
                <p className="text-gray-400 text-sm">Cooking Time</p>
                <p className="text-white text-lg font-medium">20 Min</p>
              </div>
              <div className="bg-white/5 rounded-xl p-4">
                <p className="text-gray-400 text-sm">Price</p>
                <p className="text-white text-lg font-medium">${dish.price}</p>
              </div>
            </div>

            {/* Rating Section */}
            <div className="bg-white/5 rounded-xl p-4 flex items-center gap-4">
              <p className="text-gray-400">Rating:</p>
              <Stack spacing={1}>
                <Rating
                  name="half-rating-read"
                  defaultValue={4}
                  precision={0.5}
                  readOnly
                  sx={{ 
                    '& .MuiRating-iconFilled': {
                      color: '#f97316',
                    },
                    '& .MuiRating-iconEmpty': {
                      color: 'rgba(255, 255, 255, 0.3)',
                    }
                  }}
                />
              </Stack>
            </div>

            {/* Action Buttons */}
            <div className="flex gap-4 mt-4">
              <Link to="/booking"
                    className="flex-1 text-center bg-gradient-to-r from-orange to-yellow-500 text-black py-4 
                    rounded-xl text-lg font-semibold transition-transform hover:scale-105 
                    hover:shadow-lg cursor-pointer hover:shadow-orange/20">
              <button >
                Make Reservation
              </button>
              </Link>

              <Link to="menu"
                     className="flex-1 text-center bg-white/10 border border-white/20 text-white py-4 
                     rounded-xl text-lg font-semibold transition-all hover:bg-white/20 cursor-pointer" >
              <button>
                View Menu
              </button>
              </Link>
            </div>
          </div>
        </div>

        {/* Similar Dishes */}
        <MemoizedSimilar similar={similar}/>
      </div>
    );
}

export default Dish;
