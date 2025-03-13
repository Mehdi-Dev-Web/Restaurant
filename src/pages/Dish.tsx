import { useEffect, useState } from "react";
import {  useParams } from "react-router-dom";
import Rating from '@mui/material/Rating';
import Stack from '@mui/material/Stack';
import supabase from "../data/supa";
import Similar from "../component/Similar";


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
      <div className="w-full min-h-screen bg-lightBlack flex flex-col items-center px-4 md:px-0">
      <div className="w-full max-w-6xl min-h-screen flex flex-col md:flex-row md:items-center gap-6">
        <img
          src={dish.img}
          alt=""
          className="w-full h-[500px] md:w-1/2 object-cover flex-1"
        />
        {/* details about dish */}
        <div className="flex-1 bg-lightBlack flex gap-6 flex-col px-4 md:px-6">
          <h1 className="text-4xl font-Poppins md:text-5xl text-orange font-medium">{dish.name}</h1>
         
          <p className="text-white text-sm">{dish.largeDescription}</p>
          <p className="text-white">
            <span className="text-lg font-semibold">Ingredients:</span>{" "}
            {dish.Ingredients?.map((item, index) => (
              <span key={index} className="text-gray-300">
                {item}
               
              </span>
            ))}
          </p>
          <p className="text-white">
            <span className="text-lg font-semibold">Cooking Time:</span> 20 Min
          </p>
          <p className="text-white">
            <span className="text-lg font-semibold">Price:</span> ${dish.price}
          </p>
          <div className="flex items-center gap-2">
            <p className="text-white text-lg">Rating:</p>
            <Stack spacing={1}>
              <Rating
                name="half-rating-read"
                defaultValue={4}
                precision={0.5}
                readOnly
                sx={{ stroke: "white", strokeWidth: 1 }}
              />
            </Stack>
          </div>
          <div className="w-full flex gap-3 items-center">
            <button className="w-[140px] text-center bg-orange text-white py-3 rounded-md text-lg font-semibold">
              Reservation
            </button>
            <button className="w-[140px] text-center bg-transparent border-2 border-orange text-white py-3 rounded-md text-lg font-semibold">
              Menu
            </button>
          </div>
        </div>
      </div>

      {/* Similar Dishes */}
    <Similar similar={similar}/>
    </div>
    );
}

export default Dish;
{/* <div className="w-full min-h-screen bg-lightBlack">
<div className="bg-lightBlack w-full  min-h-screen flex justify-center gap-6 flex-col md:flex-row md:items-center   ">
  <img src={dish.img} alt="" className="w-full object-cover flex-1" />
  <div className=" flex-1 md:flex-2  bg-lightBlack flex flex-col md:px-0  px-6"> 
    <h1 className="text-4xl font-Poppins text-orange font-medium">{dish.name}</h1>
    <div className="w-full h-6"></div>
    <p className="text-white text-sm ">{dish.largeDescription}</p>
    <div className="w-full h-6"></div>
    <p className="text-white"> <span className="text-lg">Ingredients :</span> {dish.Ingredients?.map((item,index)=>(
        <span key={index} className="text-gray-300">{item}, </span>
    ))}</p>
    <div className="w-full h-6"></div>

    <p className="text-white"><span className="text-lg">Cooking Time :</span> 20Min </p>

    <div className="w-full h-6"></div>
    <p className="text-white"><span className="text-lg">Price :</span> $ {dish.price} </p>
    <div className="w-full h-6"></div>
    <div className="flex items-center gap-2 ">
      <p className="text-white text-lg">Rating :</p>
    <Stack spacing={1}>
     <Rating name="half-rating-read" defaultValue={4} precision={.5} readOnly     sx={{
stroke: 'white', strokeWidth: 1
}}/>
   </Stack>
   </div>
    <div className="w-full h-10"></div>
      <div className="w-full flex  gap-3 items-center ">

    <button className="w-[140px] text-center bg-orange text-white py-3 rounded-md text-lg font-semibold">Reservation</button>
    <button className="w-[140px] text-center bg-transparent border-2 border-orange text-white py-3 rounded-md text-lg font-semibold">Menu</button>
      </div>
  </div>
  {/* // similer dishes */}

// </div>
//         <div className=" w-full flex flex-col gap-6 px-6">
//         <h1 className="text-2xl font-Poppins text-orange font-medium">Similer Dishes</h1>
//     {similer.map((sim,index)=>(
//      <Link onClick={handlescrolling} to={`/menu/${sim.type}/${sim.id}`}>
//        <div key={index} className="w-full flex flex-col gap-5 mt-2.5 bg-white">
//          <img src={sim.img} alt="" className="w-full object-cover" />
//          <div className="flex justify-between items-center px-4 pb-4">
//          <h1 className="text-lg font-semibold">{sim.name}</h1>
//          <p>{sim.price}</p>
//          </div>
//        </div>
//        </Link>
//     ))}

//         </div>
//         </div> */}