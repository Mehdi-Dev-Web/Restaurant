
// import { useState } from "react"

import Dishes from "../component/Dishes"

// import picthree from "../assets/steptodown.com459191.jpg"
function Menu() {
    // const [caty , setCaty] = useState("all")
   
  return (
    <div className="bg-lightBlack w-full  min-h-screen px-3 md:px-24 ">
        {/* <div className="flex gap-2 text-white"> <p onClick={()=>setCaty("all")}>all</p> <p onClick={()=>setCaty("app")}>app</p> <p onClick={()=>setCaty("pizza")}>pizza</p></div> */}
     {/* {Data.map((item,index)=>(
        <div key={index}>
        <h1 className="text-white">{item.nameof}</h1>
        <div className="flex gap-3">
            {item.cat.map((item,index)=>(
                <div key={index} className="flex flex-col bg-white">
                    <h1>{item.name}</h1>
                    <div>{item.price}</div>
                   <img src={item.img} alt="" />
                    
                </div>
            ))}
        </div>
        </div>
     ))}
       */}
       <Dishes />

    </div>
  )
}

export default Menu