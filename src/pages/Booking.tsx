import { useState } from "react";
import pic from "../assets/pexels-pixabay-260922.jpg";
import { IoIosArrowDown } from "react-icons/io";
import DatePicker from "../component/DatePicker";
import Members from "../component/Members";
import supabase from "../data/supa";

const people = [
  "1 person",
  "2 person",
  "3 person",
  "4 person",
  "5 person",
  "6 person",
];
function Booking() {

  const [selectedPeople, setSelectedPeople] = useState(people[0]);
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [date, setDate] = useState<string | null>("")
  const [name ,setName]=useState("")
  const [message ,setMessage]=useState("")



console.log(selectedPeople)
console.log(date)
 

  const handleSelect = (item: string) => {
    if (selectedPeople !== item) {
      setSelectedPeople(item);
    }
    setIsOpen(false); 
  };

   const insertdate = async()=>{
    if(name === "" && date == null ){
      return  setMessage("please fill the feildes")
    }
    const { data, error } = await supabase
    .from('reservation')
    .insert([
      {
        name,
        members: selectedPeople ,
        date 

       },
    ])
    .select()
    if(error){
      return setMessage(error?.message)
    }
    if(data){
      return setMessage("thank you")
    }

  }

  return (
    <div className="w-full min-h-screen bg-lightBlack pb-10">
      {/* Hero Section */}
      <div className="w-full h-[80vh] relative">
        <img src={pic} alt="Background" className="w-full h-full object-cover" />
        <div className="w-full h-[40px] gradient-bg z-10 absolute bottom-0"></div>
        {message && <p className="text-red-500">{message}</p>}
        <div className="text-orange text-6xl translate-[-50%] font-Lobster z-10 absolute top-1/2 left-1/2">
          Booking
        </div>
      </div>

      {/* Booking Form */}
      <div className="w-full h-[50vh] flex flex-col justify-center items-center">
        <h1 className="text-orange font-Lobster text-7xl">Reserve a Table</h1>
        <p className="text-gray-200 text-sm mt-2 text-center">
          Reserve your table in advance and enjoy a <br /> great dining
          experience!
        </p>
        <div className="flex w-[60%]  m-auto flex-col md:flex-row justify-center items-start  mt-10">
          {/* Name Input */}
          <input
            type="text"
            placeholder="Name..."
            value={name}
            onChange={(e)=>setName(e.target.value)}
            className="outline-none border-2 border-orange placeholder:text-white placeholder:text-sm py-4 w-[227px] pl-2.5 cursor-pointer text-white"
          />

          {/* People Selection */}
          <div className="relative w-[240px]">
            {isOpen && (
              <div className="absolute left-0 w-full h-[150px] overflow-y-scroll bg-white bottom-[60px]">
                {people.map((item, index) => (
                 <Members
                   key={index}
                   handleSelect={handleSelect}
                   item={item}
                   selectedPeople={selectedPeople}
                 />
                ))}
              </div>
            )}
            <div className="flex justify-between items-center w-[227px] relative"
                onClick={() => setIsOpen(!isOpen)}>
            <input
              type="text"
              className="outline-none border-2 border-orange placeholder:text-white placeholder:text-sm py-4 w-[227px] pl-2.5 cursor-pointer text-white"
              placeholder={selectedPeople || "Select"}
              readOnly
             
            />
            <IoIosArrowDown className="text-orange text-xl z-10 absolute right-2" />
            </div>
          </div>

          {/* DatePicker */}
          <DatePicker setDate={setDate} />
          <button 
            onClick={insertdate} 
            className="bg-orange text-black px-12 py-4.5 cursor-pointer font-bold">
            send
          </button>
        </div>

      </div>

      {/* Google Maps */}
      <div className="max-w-[80%] h-[60vh] mx-auto">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d841.6590926326633!2d-8.014701468505143!3d31.63579678670283!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xdafef4ea795c379%3A0xee25278f61a43e31!2sBeldi%20Fusion%20Kitchen%20Gu%C3%A9liz!5e0!3m2!1sen!2sma!4v1742445640195!5m2!1sen!2sma"
          width="100%"
          height="100%"
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  );
}

export default Booking;
 // const insertdate = async()=>{
  //   if()
  //   const { data, error } = await supabase
  //   .from('reservation')
  //   .insert([
  //     {
  //       name: 'otherValue',
  //       members : "wjdd",
  //       date : "wejwe"

  //      },
  //   ])
  //   .select()
  // }

// // import Date from "../component/Date"
// import { useState } from "react"
// import pic from "../assets/pexels-pixabay-260922.jpg"
// // import { IoIosArrowDown } from "react-icons/io";

// import DatePicker from "../component/DatePicker"

// function Booking() {
//    const [select,setSelect]=useState<string>("")
//    // const [members,setMembers]=useState<string>("")
//    const [isopen,setIsopen]=useState<boolean>(false)
//    const people = [
//       "1 person",
//       "2 person",
//       "3 person",
//       "4 person",
//       "5 person",
//       "6 person",
//    ]
//    // console.log(members)
//    console.log("render")
//    console.log(select)
//    const handleSelect = (item: string) => {
//       setSelect(item);
      
//       setIsopen(false); // Close the dropdown
//     };

 
    
//   return (
//         <div className="w-full min-h-screen bg-lightBlack pb-10">
//              <div className="w-full h-[80vh] relative ">
//                 <img src={pic} alt="" className="w-full h-full object-cover" />
//                 <div className="w-full h-[40px]  gradient-bg  z-10 absolute bottom-0"></div>
//                 <div className="text-orange  text-6xl translate-[-50%] font-Lobster z-10 absolute top-1/2 left-1/2">Booking</div>
//              </div>
           
//              <div className="w-full h-[50vh] flex-col flex justify-center items-center">
//                 <h1 className="text-orange font-Lobster text-7xl  gap-2  "> Book a table </h1>
//                 <p className="text-gray-200 text-sm mt-2 text-center">Reserve your table in advance and enjoy a <br /> great dining experience!</p>
//                 <div className="flex justify-center items-center gap-6 mt-10">
//                   {/* name */}
//                     <input type="text" name="" id="" placeholder="name..." 
//                     className="outline-none border-b-2 border-orange placeholder:text-white placeholder:text-sm py-2.5 w-[200px] pl-1.5 text-white" />
//                   {/* selection */}
//                     <div className=" relative w-[200px] ">
//                      {isopen &&  
//                       <div className="absolute w-full h-[150px] overflow-y-scroll bg-white bottom-[40px] ">
//                         {people.map((item,index)=>(
//                            <div
//                             onClick={()=>handleSelect(item)}
//                             className={`pl-2 py-1 hover:bg-gray-300 cursor-pointer  border-t-[1px] border-lightBlack ${item === select ? "bg-orange":"bg-white"}`} 
//                             key={index}
//                            >
//                               {item}
//                            </div>
//                         ))}
//                      </div>}
//                     <input type="text" className="outline-none border-b-2 border-orange placeholder:text-white placeholder:text-sm py-2.5 w-[200px] pl-1.5 text-white " placeholder={select ? select : "select"}  readOnly name="" id="" onClick={()=>setIsopen(!isopen)}/>
//                   {/* <div  onClick={(e)=>(setIsopen(!isopen),setMembers((e.target as HTMLDivElement).textContent || ""))}  className="outline-none border-b-2 border-orange text-white text-sm py-2.5 w-[200px] pl-1.5 flex justify-between items-center">
//                      {select ? select : "select"} 
//                      <span><IoIosArrowDown className="text-white"/></span>
//                      </div> */}
//                     </div>
//                     {/* time */}
//                      <DatePicker />
                     
//                 </div>
//              </div>
//              <div className="max-w-[80%] h-[60vh] mx-auto">
//             <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d841.6590926326633!2d-8.014701468505143!3d31.63579678670283!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xdafef4ea795c379%3A0xee25278f61a43e31!2sBeldi%20Fusion%20Kitchen%20Gu%C3%A9liz!5e0!3m2!1sen!2sma!4v1742445640195!5m2!1sen!2sma" width="100%" height="100%" style={{}} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
//             </div>
//         </div>
//   )
// }

// export default Booking
 {/* <select className="overflow-hidden outline-none border-b-2 border-orange placeholder:text-white placeholder:text-sm py-2.5 w-[200px] pl-1.5 text-white " name="" id="">
                        <option value=""  className="bg-lightBlack text-white cursor-pointer">1 person</option>
                        <option value=""  className="bg-lightBlack text-white cursor-pointer">4 people</option>
                        <option value=""  className="bg-lightBlack text-white cursor-pointer">3 people</option>
                        <option value=""  className="bg-lightBlack text-white cursor-pointer">2 people</option>
                        <option value=""  className="bg-lightBlack text-white cursor-pointer">5 people</option>
                        <option value=""  className="bg-lightBlack text-white cursor-pointer">5 people</option>
                     </select> */}