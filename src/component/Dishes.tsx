
import {  lazy, useState } from "react";
import pic from "../assets/steptodown.com271455.jpg"
import { Link } from "react-router-dom";
import { useMenu } from "../data/Fetching";
const Filtring = lazy(()=>import("./Filtring"))


function Dishes() {
    
    // const [Data, setData] = useState<Category[]>([]);

    const [caty, setCaty] = useState("all")
    const [v, setV] = useState("")
    const [isSearching, setIsSearching] = useState(false);
  // i already change the database structure to make it easier for crud operations but didn't update the code yet so this is the old code
    const { data, isLoading, error } = useMenu();

    if (isLoading) return <div className="w-full h-screen bg-lightBlack flex justify-center items-center"><p className="text-orange">Loading...</p></div>;
    if (error) return <p>Error: {error.message}</p>;
  

    
    
    const categories = ["all", "Appetizers", "Pizza"];
    // const filterData = Data.filter((d)=> (caty === "all" || d.category_name === caty) && ( d.category.filter((c)=>(c.name.toLowerCase().includes(v.toLowerCase())))))
    
    interface Dish {
      id: number;
      name: string;
      price: number;
      smallDescription: string;
      img: string;
    }

    interface Category {
      category_name: string;
      category: Dish[];
    }

    const filterData: Category[] = (data || []).map((d: Category) => ({
            ...d,
            category: d.category.filter((c: Dish) =>
              c.name.toLowerCase().includes(v.toLowerCase())
            ),
          })).filter((d: Category) => (caty === "all" || d.category_name === caty) && d.category.length > 0);

 return (

    <div className="w-full min-h-screen flex flex-col gap-8 ">
      
    
        <Filtring categories={categories} setCaty={setCaty} caty={caty} isSearching={isSearching} setV={setV} setIsSearching={setIsSearching} v={v}/>

        {filterData.map((items,index)=>(
            <div key={index}>
            <h1 className="text-white text-4xl mb-2 mt-2 font-Lobster">{items.category_name}</h1>
            <div className="grid grid-cols-1 md:grid-cols-2  gap-2" >

            {items.category.map((item,index)=>(
      
         <Link to={`/menu/${items.category_name}/${item.id}`} key={index}>
         <div className="w-full md:max-w-[560px] max-h-[135px] bg-[#1F1F1F] hover:bg-[#2a2a2a] transition-all duration-300 border-orange border-[1px] flex mt-2 rounded-md overflow-hidden hover:shadow-md hover:shadow-orange/20 group">
             <div className="w-[140px] h-[135px] overflow-hidden">
                 <img 
                     src={item.img || pic} 
                     className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110" 
                     alt={item.name}  
                     loading="lazy"
                 />
             </div>
             <div className="flex-1 flex flex-col gap-1.5 justify-between p-4 text-white">
                 <div>
                     <h1 className="text-xl font-medium mb-1 group-hover:text-orange transition-colors">{item.name}</h1>
                     <p className="text-sm text-gray-400 line-clamp-2 mt-2">{item.smallDescription}</p>
                 </div>
                 <p className="text-orange font-semibold text-md">${item.price.toFixed(2)}</p>
             </div>\
         </div>
         </Link>

            ))}
            </div>

          
            </div>

        ))}


    </div>
   
  )
}

export default Dishes


