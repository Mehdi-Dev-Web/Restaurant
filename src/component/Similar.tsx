import React from "react";
import { Link } from "react-router-dom";

//? this is a component that is used to display similar dishes

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
  
interface SimilarProps {
  similar: Dish[];
}

const Similar: React.FC<SimilarProps> = ({ similar }) => {
    const handlescrolling = ()=>{
        window.scrollTo({ top: 0, behavior: "smooth" });
      }

  return (
      <div className="w-full max-w-6xl flex flex-col gap-6 px-4 md:px-0 ">
        <h1 className="text-4xl font-Poppins text-white font-medium">Similar Dishes</h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {similar.map((sim,index) => (
            <Link onClick={handlescrolling} key={index} to={`/menu/${sim.type}/${sim.id}`}>
              <div className="bg-orange rounded-lg overflow-hidden shadow-md">
                <img src={sim.img} alt="" loading="lazy" className="w-full object-cover" />
                <div className="flex justify-between items-center px-4 pb-4 pt-2">
                  <h1 className="text-lg text-black font-semibold">{sim.name}</h1>
                  <p className="text-black font-bold">$ {sim.price}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div> 
  )
}

//? memoized the component to prevent re-rendering
const MemoizedSimilar = React.memo(Similar);
export default MemoizedSimilar;