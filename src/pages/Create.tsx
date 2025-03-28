
// import { useState } from "react";
// import  supabase  from "../data/supa";

// const AddPizzaItem = () => {
//   const [name, setName] = useState("");
//   const [price, setPrice] = useState("");
//   const [img, setImg] = useState("");
//   const [description, setDescription] = useState("");

//   const addNewPizzaItem = async () => {
//     // Fetch existing "Pizza" category
//     const { data, error } = await supabase
//       .from("menu")
//       .select("category")
//       .eq("category_name", "Pizza")
//       .single();

//     if (error) {
//       console.error("Error fetching Pizza category:", error);
//       return;
//     }

//     const existingCategory = data.category || [];

//     // Create new item
//     const newPizzaItem = {
//       id: Date.now(), // Unique ID
//       img,
//       name,
//       type: "Pizza",
//       price: parseFloat(price),
//       smallDescription: description,
//     };

//     // Add new item to array
//     const updatedCategory = [...existingCategory, newPizzaItem];

//     // Update Supabase with new category data
//     const { error: updateError } = await supabase
//       .from("menu")
//       .update({ category: updatedCategory })
//       .eq("category_name", "Pizza");

//     if (updateError) {
//       console.error("Error updating category:", updateError);
//     } else {
//       alert("New pizza item added successfully!");
//       setName("");
//       setPrice("");
//       setImg("");
//       setDescription("");
//     }
//   };

//   return (
//     <div>
//       <h2>Add New Pizza Item</h2>
//       <input type="text" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} />
//       <input type="text" placeholder="Price" value={price} onChange={(e) => setPrice(e.target.value)} />
//       <input type="text" placeholder="Image URL" value={img} onChange={(e) => setImg(e.target.value)} />
//       <input type="text" placeholder="Description" value={description} onChange={(e) => setDescription(e.target.value)} />
//       <button onClick={addNewPizzaItem}>Add Pizza</button>
//     </div>
//   );
// };

// export default AddPizzaItem;
