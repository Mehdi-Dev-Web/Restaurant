//? this is the reset page for the user to reset their password i'm still working on it

import { useState } from "react";
import supabase from "../data/supa"
import { useNavigate } from "react-router-dom";
function Reset() {
    // const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [passwordv, setPasswordv] = useState("");
    const [message , setMessage]=useState("")
    const navigate = useNavigate();
    const hadlereset = async(e: { preventDefault: () => void; })=>{
        e.preventDefault()
        if(password != passwordv){
             setMessage("try again you don't writ it the same")
             setPassword("")
             setPasswordv("")
             return
        }
        const { data, error } = await supabase.auth.updateUser({
            password,
          })
          if(error){
            setMessage(error.message) 
          }
          if(data){
            setMessage("seccsefuly");
            setTimeout(() => navigate("/login"), 2000); // Replace "/success" with the desired path
          }
    }
  return (
    <div className="w-full h-screen bg-lightBlack">
        <form action="" onSubmit={hadlereset}>
       <input
                type="password"
                placeholder="Password..."
                onChange={(e) => setPassword(e.target.value)}
                value={password}
                className="outline-none w-[90%] h-[40px] border-b-2 border-white text-white px-2 placeholder:text-gray-300 placeholder:text-sm"
                required
              />
       <input
                type="password"
                placeholder="Password again"
                onChange={(e) => setPasswordv(e.target.value)}
                value={passwordv}
                className="outline-none w-[90%] h-[40px] border-b-2 border-white text-white px-2 placeholder:text-gray-300 placeholder:text-sm"
                required
              />
 <button type="submit" className="text-red-900">reset</button>
        </form>
        {message && <p>{message}</p>}
    </div>
  )
}

export default Reset