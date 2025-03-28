
import {  lazy, useState } from "react";
import pic from "../assets/steptodown.com271455.jpg"
import { Link } from "react-router-dom";
import { useMenu } from "../data/Fetching";
const Filtring = lazy(()=>import("./Filtring"))
// interface Dish {
//   id: number;
//   name: string;
//   price: number;
//   smallDescription: string;
//   img: string 
// }

// interface Category {
//   category_name: string;
//   category: Dish[];
// }

function Dishes() {
    
    // const [Data, setData] = useState<Category[]>([]);

    const [caty, setCaty] = useState("all")
    const [v, setV] = useState("")
    const [isSearching, setIsSearching] = useState(false);
  
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
                <div  className="w-full md:max-w-[560px]  max-h-[135px] bg-transparent border-orange border-[1px] flex  mt-2  rounded-md  ">
                    <div className="flex-1  flex justify-center items-center pl-2 md:pl-0 ">
                     <img src={item.img || pic} className="object-cover w-[140px] h-[100px] rounded-sm" alt=""  loading="lazy"/>
                  
                    </div>
                    <div className="flex-2 w-full h-full gap-2 flex flex-col justify-between p-3 text-white">
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

