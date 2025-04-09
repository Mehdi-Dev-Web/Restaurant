import { useState,useEffect } from "react"
import DishTable from "../dashboardcomponent/Table"
import { BiFoodMenu } from "react-icons/bi";
import { IoMdAddCircleOutline } from "react-icons/io";
import { FaRegUser } from "react-icons/fa";
import { HiOutlineUsers } from "react-icons/hi";
import { IoMdNotificationsOutline } from "react-icons/io";
import { MdOutlineContactPhone } from "react-icons/md";
import Contact from "../dashboardcomponent/Contact";
import supabase from "../data/supa";
import Reservation from "../dashboardcomponent/Reservation";
import Add from "../dashboardcomponent/Add";
import Users from "../dashboardcomponent/Users";

//? this is the dashboard page for the admin to manage the website and i'm still working on it

type Tcontact = {
  id:number;
  name : string;
  email : string;
  message : string;
}
type Treservation = {
  id:number;
  name : string;
  members : number;
  date : string;
}

function Dashboard() {
  // contact
     const [type, setType] = useState("dishes")
     const [message , setMessage] = useState<Tcontact[]>([])
     const Fetchcontact  = async()=>{
        const { data: contact, error } = await supabase
        .from('contact')
        .select('*')
        if(error){
          return console.log(error.message)
        }
        if(contact){
          setMessage(contact)
        }
     }
   
    //  reservation
    const [reservation , setReservation] = useState<Treservation[]>([])
    const Fetchreservation  = async()=>{
      const { data: reservation, error } = await supabase
      .from('reservation')
      .select('*')
      if(error){
        return console.log(error.message)
      }
      if(reservation){
        setReservation(reservation)
      }
    }
    
    useEffect(() => {
      Fetchcontact()
      Fetchreservation()
     },[])
  return (

    <div className="w-full h-screen bg-lightBlack flex justify-center items-center">
      {/* left side  navbar for the dashboard */}
   
      <div className="bg-orange flex-1 w-full flex flex-col h-full">
      <div className="w-full h-[60px] flex justify-center items-center text-2xl font-semibold text-black"> Dashboard </div>
      <hr className="text-black bg-black"/>
        <button onClick={()=>setType("dishes")} className="text-black hover:border-black hover:border-r-3 text-lg ml-8 mt-8 flex items-center gap-2.5 cursor-pointer">
          <BiFoodMenu className="text-2xl" />
          <p>Dishes</p>
          </button>
        <button onClick={()=>setType("add")} className="text-black hover:border-black hover:border-r-3 text-lg ml-8 mt-4 flex items-center gap-2.5 cursor-pointer">
          <IoMdAddCircleOutline className="text-2xl" />
          <p>New Dish</p>
          </button>
        <button onClick={()=>setType("user")} className="text-black hover:border-black hover:border-r-3 text-lg ml-8 mt-4 flex items-center gap-2.5 cursor-pointer">
          <FaRegUser className="text-2xl" />
          <p>Users</p>
          </button>
        <button onClick={()=>setType("employee")} className="text-black  hover:border-black hover:border-r-3   text-lg ml-8 mt-4 flex items-center gap-2.5 cursor-pointer">
          <HiOutlineUsers className="text-2xl " />
          <p>Employee</p>
          </button>
        <button onClick={()=>setType("Reservation")} className="text-black hover:border-black hover:border-r-3 text-lg ml-8 mt-4 flex items-center gap-2.5 cursor-pointer">
          <IoMdNotificationsOutline className="text-2xl" />
          <p>Resevation</p>
          </button>
        <button onClick={()=>setType("contact")} className="text-black hover:border-black hover:border-r-3 text-lg ml-8 mt-4 flex items-center gap-2.5 cursor-pointer">
          <MdOutlineContactPhone className="text-2xl" />
          <p>Contact</p>
          </button>
      </div>

      {/* right side */}
      <div className="bg-lightBlack flex-5 h-full px-4   w-full overflow-y-scroll " style={{scrollbarWidth: "none"}}>
         {type === "dishes" &&  <DishTable/>}
         {type === "contact" &&
             <div className="w-full h-full overflow-y-scroll" style={{scrollbarWidth: "none"}}>
              <div className="w-full grid grid-cols-12 gap-2 px-4 rounded-lg py-4">
              <div className='col-span-1 flex items-center text-white'>
                Id
              </div>
              <div className='col-span-3 flex items-center text-white'>
                Name
              </div>
              <div className='col-span-3 flex items-center text-white'>
                Email
              </div>
              <div className='col-span-5 flex items-center text-white'>
                Message
              </div>
              </div>
              {message.map((item, index) => (
               <Contact key={index} id={item.id} name={item.name} email={item.email} message={item.message} />
             ))}
             </div>
        }
        {type === "Reservation" &&
        <div className="w-full h-full flex flex-col gap-3 overflow-y-scroll" style={{scrollbarWidth: "none"}}>
           <div className="w-full grid grid-cols-9 gap-2 px-4 rounded-lg py-4">
              <div className='col-span-1 flex items-center text-white'>
                Id
              </div>
              <div className='col-span-2 flex items-center text-white'>
                Name
              </div>
              <div className='col-span-2 flex items-center text-white'>
                Members
              </div>
              <div className='col-span-3 flex items-center text-white'>
                Date
              </div>
              </div>
          {reservation.map((item,index)=>(
             <Reservation key={index} index={index} reservations={[item]}/>
          ))}
        </div>
         }
         {type === "add" && <Add />}
         {type === "user" && <Users />}
      </div>
    </div>
  )
}

export default Dashboard
