import { IoSearch } from "react-icons/io5";
import MemoizedSearching from "./Searching";
type Ptype ={
    categories:string[]
    setCaty:(id:string)=> void
    caty: string
    isSearching:boolean
    setV: (thing : string)=> void
    setIsSearching:(thing:boolean)=>void
    v:string
}
function Filtring({categories,setCaty,caty,isSearching,setV,setIsSearching,v}:Ptype) {

  
    
  return (
    <div className="w-full flex gap-2.5 mt-4">
      
    <div onClick={()=>(setIsSearching(true),setCaty("all"))} className="flex justify-center items-center w-[50px] h-[50px] rounded-md border-[1px] border-white cursor-pointer "><IoSearch className="text-white"/></div>
  
 {isSearching ?
        <MemoizedSearching setV={setV} v={v} setIsSearching={setIsSearching} />
     : 
     <div className="flex ml-2.5 gap-2.5">
     {categories.map((item)=>(
       <button key={item}
         className={`px-4 py-2 font-Lobster text-white cursor-pointer border-orange ${caty === item ? "border-b-2" : "hover:border-b-2 hover:border-b-white"}` }
         onClick={()=>setCaty(item)}
         >
             {item}
             </button>
     ))}
       </div>
  } 
 
    </div> 
   
  )
}

export default Filtring