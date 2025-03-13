// import { useEffect, useState } from "react";
// import { createClient } from '@supabase/supabase-js';

// const supabaseUrl = 'https://uvqxzodnhkqbzavvzcix.supabase.co';
// const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InV2cXh6b2RuaGtxYnphdnZ6Y2l4Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDEwOTU5MjMsImV4cCI6MjA1NjY3MTkyM30.Cv3KTpWw2jKdhkWJw1nggA35OwlK6TfcQo5cFLbI5VI';
// const supabase = createClient(supabaseUrl, supabaseKey);

// function Dishes() {
//     const [menuItems, setMenuItems] = useState([]);
//     const [caty, setCaty] = useState("all");
//     const [v, setV] = useState("");

//     useEffect(() => {
//         async function fetchMenuItems() {
//             const { data, error } = await supabase.from("menu").select("*"); // Corrected table name to "menu"
//             if (error) {
//                 console.error("Error fetching menu items:", error);
//             } else {
//                 setMenuItems(data);
//                 console.log(data);
//             }
//         }

//         fetchMenuItems();
//     }, []);

//     const categories = ["all", "Appetizers", "Pizza"];
//     const filterData = menuItems.filter((d) => 
//         (caty === "all" || d.category_name === caty) && 
//         (d.category.some((c) => c.name.toLowerCase().includes(v.toLowerCase())))
//     );

//     return (
//         <div className="w-full flex flex-col gap-9">
//             <div className="w-full flex gap-2.5">
//                 {categories.map((item) => (
//                     <button 
//                         key={item}
//                         className={`px-4 py-2 text-white cursor-pointer border-orange ${caty === item ? "border-b-2" : "hover:border-b-2 hover:border-b-white"}`}
//                         onClick={() => setCaty(item)}
//                     >
//                         {item}
//                     </button>
//                 ))}
//             </div>
//             <input type="text" value={v} onChange={(e) => setV(e.target.value)} placeholder="searching" />
//             {filterData.map((item, index) => (
//                 <div key={index}>
//                     <h1 className="text-orange text-4xl mb-4 font-Poppins">{item.category_name}</h1>
//                     <div className="flex w-full justify-between">
//                         {item.category.map((dish, dishIndex) => (
//                             <div key={dishIndex} className="max-w-[600px] h-[150px] border-2 border-white flex mt-2">
//                                 <div className="flex-2 flex flex-col justify-between p-5 text-white">
//                                     <h1 className="text-lg">{dish.name}</h1>
//                                     <p className="text-sm text-gray-300">{dish.smallDescription}</p>
//                                     <p>${dish.price.toFixed(2)}</p>
//                                 </div>
//                                 <div className="flex-1">
//                                     {/* <img src={dish.img} className="object-cover h-full" alt="" /> */}
//                                     <p>whdjhwedj</p>
//                                 </div>
//                             </div>
//                         ))}
//                     </div>
//                 </div>
//             ))}
//         </div>
//     );
// }

// export default Dishes;
// import pic from "../assets/steptodown.com271455.jpg"
// import pictwo from "../assets/steptodown.com210542.jpg"
import {  useEffect, useState } from "react";
import { IoSearch } from "react-icons/io5";
import { IoClose } from "react-icons/io5";
import { motion , AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import  supabase  from "../data/supa";
function Dishes() {
    interface Dish {
      id: number;
      name: string;
      price: number;
      smallDescription: string;
      img: string
    
     
    }
    
    interface Category {
      category_name: string;
      category: Dish[];
    }
    
    const [Data, setData] = useState<Category[]>([]);
    const [caty, setCaty] = useState("all")
    const [v, setV] = useState("")
    const [isSearching, setIsSearching] = useState(false);
    useEffect(() => {
        const fetchMenu = async () => {
          const { data , error } = await supabase.from("menu").select("*");
          if (error) console.error("Error fetching menu:", error);
          else setData(data);
        };
    
        fetchMenu();
      }, []);
    
    
    const categories = ["all", "Appetizers", "Pizza"];
    // const filterData = Data.filter((d)=> (caty === "all" || d.category_name === caty) && ( d.category.filter((c)=>(c.name.toLowerCase().includes(v.toLowerCase())))))
    
    const filterData = Data.map((d) => ({
        ...d,
        category: d.category.filter((c) =>
          c.name.toLowerCase().includes(v.toLowerCase())
        ),
      })).filter((d) => (caty === "all" || d.category_name === caty) && d.category.length > 0);
  return (
    <div className="w-full flex flex-col gap-8">
        <div className="w-full flex gap-2.5 mt-4">
      
        <div onClick={()=>(setIsSearching(true),setCaty("all"))} className="flex justify-center items-center w-[50px] h-[50px] rounded-md border-[1px] border-white cursor-pointer "><IoSearch className="text-white"/></div>
        <AnimatePresence>
     {isSearching ?
      <motion.div initial={{width : 0}} animate={{width : "100%"}} exit={{width : 0}} transition={{duration:.4,ease:"easeInOut"}} className="w-[100px] md:w-[1100px] flex justify-between items-center border-[1px] border-white rounded-md px-4">
       <input type="text" value={v} onChange={(e)=>setV(e.target.value)} placeholder="searching" name="" id="" className="w-[100px] md:w-[1030px] outline-none placeholder:text-gray-200 text-white"/> 
        <IoClose onClick={()=>(setIsSearching(false),setV(""))} className="text-white cursor-pointer" />
        </motion.div>
         : 
         <div className="flex ml-2.5 gap-2.5">
            {categories.map((item)=>(
              <button key={item}
                className={`px-4 py-2 text-white cursor-pointer border-orange ${caty === item ? "border-b-2" : "hover:border-b-2 hover:border-b-white"}` }
                onClick={()=>setCaty(item)}
                >
                    {item}
                    </button>
            ))}
              </div>
        
      } 
      </AnimatePresence>  
        </div> 
      
        {filterData.map((items,index)=>(
            <div key={index}>
            <h1 className="text-white text-4xl mb-2 mt-2 font-Poppins">{items.category_name}</h1>
            <div className="grid grid-cols-1 md:grid-cols-2  gap-2" >
            {items.category.map((item,index)=>(
                <Link to={`/menu/${items.category_name}/${item.id}`} key={index}>
                <div  className="max-w-[560px]  h-[135px] bg-transparent border-orange border-[1px] flex  mt-2  rounded-md  ">
                    <div className="flex-1 flex justify-center items-center ">
                     <img src={item.img} className="object-cover w-[155px] h-[105px] rounded-sm" alt="" />
                  
                    </div>
                    <div className="flex-2 flex flex-col justify-between p-3 text-white">
                        <h1 className="text-xl font-medium">{item.name}</h1>
                        <p className="text-sm text-gray-300">{item.smallDescription}</p>
                        <p className="text-orange">${" "}{item.price.toFixed(2)}</p>

                    </div>

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
// const Data = [ 
    //     {
        
    //        categoryName : "Appetizers",
    //          cat : [{
    //        id:0,
    //            name: "Mozzarella Sticks",
    //            price : 6.99,
    //            smallDescription : "Crispy, golden-fried mozzarella sticks served with marinara sauce.",
    //            largeDescription : 
    //            "Melt-in-your-mouth mozzarella cheese coated in a crispy golden breadcrumb crust, deep-fried to perfection. Served with a side of house-made marinara sauce for dipping.",
    //          
    //   Ingredients : ["Mozzarella Cheese", "Breadcrumbs", "Marinara Sauce", "Vegetable Oil"],
    //            Size: "6 pieces",
    //            img: pic
    //         },
    //         {
    //         id:1,
    //        name: " Mozzarella Sticks",
    //        price : 5,
    //        smallDescription : "Crispy, golden-fried mozzarella sticks served with marinara sauce.",
    //        largeDescription : 
    //        "Melt-in-your-mouth mozzarella cheese coated in a crispy golden breadcrumb crust, deep-fried to perfection. Served with a side of house-made marinara sauce for dipping.",
    //        Ingredients : ["Mozzarella Cheese", "Breadcrumbs", "Marinara Sauce", "Vegetable Oil"],
    //        Size: "6 pieces",
    //        img: pictwo
    //         }
    //         ]
    //    },
    //    {
    //        categoryName  : "Pizza",
    //        cat : [
    //            {
    //      id:2,
    //        name: "Sticks Mozzarella",
    //        price : 7.99,
    //        smallDescription : "Crispy, golden-fried mozzarella sticks served with marinara sauce.",
    //        largeDescription : 
    //        "Melt-in-your-mouth mozzarella cheese coated in a crispy golden breadcrumb crust, deep-fried to perfection. Served with a side of house-made marinara sauce for dipping.",
    //        Ingredients : ["Mozzarella Cheese", "Breadcrumbs", "Marinara Sauce", "Vegetable Oil"],
    //        Size: "6 pieces",
    //        img: pictwo
    //        }
    //        ]
    //    }
   
   
   
     
    //    ]

