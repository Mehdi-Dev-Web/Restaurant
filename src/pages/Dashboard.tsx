
import {  useState } from "react";
import supabase from "../data/supa";
import { useEffect } from "react";
function Dashboard() {
  type acc = {
   id:number
    category:string,
    name:string,
    price:number,
    pic:File
  }
  const [data , setData] = useState<acc[]>([])
  const [cate , setCate]= useState("")
  const [value, setValue]= useState("")
  const [searching ]= useState("type")
  const [iid, setIid] = useState<number | undefined>()
  const [category,setCategory] = useState("")
  const [name,setName] = useState("")
  const [pic,setPic] = useState<File | null>(null)
  const [price, setPrice] = useState<number | string>()
  
  useEffect(() => {
    tryy();
  }, []);

 const tryy = async()=>{
   const { data: Dishes, error } = await supabase
   .from('Dishes')
   .select('*')
    
   if(error){
    return console.log(error.message)
   }
   if(Dishes){
    setData(Dishes)
   }

 }

  const sortt = data.reduce((acc: Record<string, acc[]>, item: acc) => {
    if (!acc[item.category]) {
      acc[item.category] = [];
    }
    acc[item.category].push(item);
    return acc;
  }, {});
 
  const hundle = (cat : string)=>{
  setCate(cat == "all" ? "" : cat) 
  

  }
  const typeFilter = searching === "type"? 
                    cate === "" || cate === "all" 
                    ? Object.entries(sortt) 
                    :Object.entries(sortt).filter(([category]) => category == cate)
                    :Object.entries(sortt).map(([category, items]) => [
                      category,
                      items.filter((item) =>
                        item.name.toLowerCase().includes(value.toLowerCase())
                      ),
                    ])
                    .filter(([_, items]) => items.length > 0);

  //                 const handlechange = async(e: { preventDefault: () => void; })=>{
  //                   e.preventDefault();
  //                   if(name == "" && category == "" && price == ""){
  //                     return console.log("please fill the inp")
  //                   }
  //                   const { data:update, error } = await supabase
  // .from('Dishes')
  // .upsert({ id: iid, category , name , price : Number(price) })
  // .select()

  // if(error){

  //   return console.log(error.message)
  // }
  // if(update){
  //   console.log("good")
  //   tryy(); // Refresh data
  //   setIid(undefined);
  //   setCategory("");
  //   setName("");
  //   setPrice("");
  // }

  //                 }
                  
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setPic(e.target.files[0]);
    }
  };
  const uploadImage = async (file: File) => {
    const filePath = `dishes/${Date.now()}-${file.name}`;
    const { data, error } = await supabase.storage
      .from("Dishes")
      .upload(filePath, file);

    if (error) {
      console.error("Upload failed:", error.message);
      return null;
    }
    if (data) {
      console.log("the image is uploaded");
     
    }

    // Get public URL
    const { data: publicUrlData } = await supabase.storage
      .from("Dishes")
      .getPublicUrl(filePath);

    return publicUrlData.publicUrl;
  };


                  const deleteitem = async(id:number)=>{
                    const response = await supabase
                    .from('Dishes')
                    .delete()
                    .eq('id', id)
                    if(response){
                      console.log(response)
                      tryy()
                    }
                  }
                  const handleadd = async(e: { preventDefault: () => void; })=>{
                    e.preventDefault()
                    
    if (!pic) {
      console.error("No file selected for upload.");
      return;
    }
    const imageUrl = await uploadImage(pic);
    if (!imageUrl) return;

                    const { error } = await supabase
  .from('Dishes')
  .insert({  category,name ,price:Number(price),pic:imageUrl })
  if(error){
    console.log(error.message)
    tryy()
    setCategory("");
    setName("");
    setPrice("");
    setPic(null);
  }
                  }

                
                   
  return (
    <div className="w-full h-screen bg-lightBlack text-white p-4">
      <button onClick={()=>hundle("all")}>all</button>
      <button onClick={()=>hundle("pizza")}>pizza</button>
      <button onClick={()=>hundle("tacos")}>tacos</button>
      <input type="text" name="" id="" value={value} onChange={(e)=>setValue(e.target.value)}  />
     {typeFilter.map(([category, items], index) => (
          <div key={index}>
               
                 <h3>{category as string}</h3>
                 {(items as acc[]).map((subItem: acc, subIndex: number) => (
                   <div key={subIndex} className="mt-3"> {" "} {subItem.name}  {" "} {subItem.price} <span onClick={()=>setIid(subItem.id)} className="bg-orange text-black p-1"> update </span> <span onClick={()=>deleteitem(subItem.id)} className="bg-red-500 text-black p-1"> delet </span></div>
                   
                 ))}
                 </div>
     ))}
     <form action="" onSubmit={handleadd}>
     <input type="text" name="" id="" placeholder="caty" value={category} onChange={(e)=>setCategory(e.target.value)} />
     <input type="text" name="" id="" placeholder="name" value={name} onChange={(e)=>setName(e.target.value)}/>
     <input type="number" name="" id="" placeholder="price" value={price} onChange={(e)=>setPrice(e.target.value)}/>
     <input type="file" name="" id="" placeholder="price"  onChange={handleFileChange}/>
     <button type="submit" className="bg-orange text-black p-1">change</button>
     </form>
    </div>
   
  )
}

export default Dashboard
//!
// import { useState, useEffect } from "react";
// import supabase from "../data/supa";

// function Dashboard() {
//   type acc = {
//     id: number;
//     category: string;
//     name: string;
//     price: number;
//     pic: string; // Store the image URL
//   };

//   const [data, setData] = useState<acc[]>([]);
//   const [category, setCategory] = useState("");
//   const [name, setName] = useState("");
//   const [pic, setPic] = useState<File | null>(null);
//   const [price, setPrice] = useState<number | string>("");

//   useEffect(() => {
//     fetchDishes();
//   }, []);

//   // Fetch data from Supabase
//   const fetchDishes = async () => {
//     const { data: Dishes, error } = await supabase.from("Dishes").select("*");
//     if (error) {
//       console.error("Error fetching dishes:", error.message);
//       return;
//     }
//     setData(Dishes);
//   };

//   // Handle file selection
//   const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     if (e.target.files && e.target.files[0]) {
//       setPic(e.target.files[0]);
//     }
//   };

//   // Upload image to Supabase Storage
//   const uploadImage = async (file: File) => {
//     const filePath = `dishes/${Date.now()}-${file.name}`;
//     const { data, error } = await supabase.storage.from("images").upload(filePath, file);

//     if (error) {
//       console.error("Image upload failed:", error.message);
//       return null;
//     }
//     if (data) {
//       console.error("correct");
    
//     }

//     // Get the public URL
//     const { publicUrl } = supabase.storage.from("images").getPublicUrl(filePath);
//     return publicUrl;
//   };

//   // Insert dish into database
//   const handleAdd = async (e: React.FormEvent) => {
//     e.preventDefault();

//     if (!pic) {
//       console.error("No file selected for upload.");
//       return;
//     }

//     const imageUrl = await uploadImage(pic);
//     if (!imageUrl) return;

//     const { error } = await supabase.from("Dishes").insert({
//       category,
//       name,
//       price: Number(price),
//       pic: imageUrl, // Save image URL in database
//     });

//     if (error) {
//       console.error("Insert error:", error.message);
//       return;
//     }

//     // Refresh the list
//     fetchDishes();
//     setCategory("");
//     setName("");
//     setPrice("");
//     setPic(null);
//   };

//   return (
//     <div className="w-full h-screen bg-lightBlack text-white p-4">
//       <form onSubmit={handleAdd} className="space-y-4">
//         <input
//           type="text"
//           placeholder="Category (e.g., Pizza)"
//           value={category}
//           onChange={(e) => setCategory(e.target.value)}
//           required
//         />
//         <input
//           type="text"
//           placeholder="Dish Name (e.g., Margherita)"
//           value={name}
//           onChange={(e) => setName(e.target.value)}
//           required
//         />
//         <input
//           type="number"
//           placeholder="Price (e.g., 10.99)"
//           value={price}
//           onChange={(e) => setPrice(e.target.value)}
//           required
//         />
//         <input type="file" accept="image/*" onChange={handleFileChange} required />
//         <button type="submit" className="bg-orange text-black p-2 rounded">
//           Add Dish
//         </button>
//       </form>

//       <div className="mt-6">
//         {data.map((dish) => (
//           <div key={dish.id} className="border p-4 my-2">
//             <h3>{dish.category}</h3>
//             <p>{dish.name} - ${dish.price}</p>
//             {dish.pic && <img src={dish.pic} alt={dish.name} width={100} />}
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

// export default Dashboard;
