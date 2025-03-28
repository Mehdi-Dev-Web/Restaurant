// import { useState } from "react"
// import supabase from "../data/supa"
// import pic from "../assets/pexels-pixabay-260922.jpg"
// function Login() {
//     const [email,setEmail]= useState("")
//     const [password,setPassword]= useState("")
//     const [message,setMessage]= useState<string | JSX.Element>("")
//     const [emailError, setEmailError] = useState<string | null>(null);
//     const [passwordError, setPasswordError] = useState<string | null>(null);
//     const [swatch,setSwatch]= useState<string>("sign in")
//     const [isResettingPassword, setIsResettingPassword] = useState(false);

// const handlesignin = async (e:React.FormEvent<HTMLFormElement>)=>{
//     e.preventDefault()
//     setMessage("")
//     if (isResettingPassword) {
//         handlePasswordReset();
//         return;
//       }
//     if(swatch === "sign in"){
//         const {data,error} = await supabase.auth.signUp({
//             email,
//             password
//         })
//         if(error){
//             handleAuthError(error.message);
//         return;
//         }
//         if(data){
//             setMessage(<span className="text-green-500">you created !!</span>)
//         }
//     }else{
//         const { data , error } = await supabase.auth.signInWithPassword({
//             email,
//             password
//           })
//           if(error){
//             handleAuthError(error.message);
//         return;
//         }
//         if(data){
//             setMessage(<span className="text-green-500">correct </span>)
//         }
//     }
  
// setPassword("")
// setEmail("")
// }

// const handleAuthError = (errorMessage : string)=> {
//     if (errorMessage.toLowerCase().includes("email")) {
//         setEmailError(errorMessage);
//       } else if (errorMessage.toLowerCase().includes("password")) {
//         setPasswordError(errorMessage);
//       } else {
//         setMessage(<span className="text-red-500">{errorMessage}</span>);
//       }
// }
// const handlePasswordReset = async () => {
//     setMessage("");
//     setEmailError(null);

//     if (!email) {
//       setEmailError("Please enter your email to reset the password.");
//       return;
//     }

//     const { error } = await supabase.auth.resetPasswordForEmail(email);

//     if (error) {
//       setEmailError(error.message);
//     } else {
//       setMessage(<span className="text-green-500">Password reset link sent! Check your email.</span>);
//     }
//   return ( 
//     <div className="w-full h-screen relative flex md:pl-20 justify-center md:justify-start items-center">
//         <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-[-10]">
//             <img src={pic} alt="" className="object-cover w-full h-full"/>
//         </div>
// <div className="bg-black/25 backdrop-blur-lg backdrop-brightness-110 shadow-lg border border-black/20 w-[400px] h-[450px] pl-8 rounded-md  py-14">
//        <h1 className="text-white text-4xl  w-full  font-Poppins">Create an acount</h1>
//        <p className="text-sm text-gray-300 mt-3">{swatch === "sign in"? "already have an acount" : "don't have an acount" } 
//         <a onClick={()=>setSwatch((prev)=>prev === "sign in" ? "log in" : "sign in")} className="font-bold text-orange cursor-pointer ml-1.5">{swatch === "sign in" ? "log in": "sign in"}</a> 
//         </p>
      
      
//         <form action="" onSubmit={handlesignin} className="flex flex-col gap-8 mt-10">
//             <input type="email" name="" id="" required placeholder="email..."onChange={(e)=>setEmail(e.target.value)} value={email}
//              className={`outline-none w-[90%] border-b-2 border-white h-[40px]  text-white  px-2 placeholder:text-gray-300 placeholder:text-sm ${emailError && "border-b-red-500"}`} />
//            <div>
//            {!isResettingPassword && 
//             <input type="password" name="" id="" required placeholder="password..."onChange={(e)=>setPassword(e.target.value)} value={password} 
//             className={`outline-none w-[90%]  h-[40px] border-b-2 border-white  text-white  px-2 placeholder:text-gray-300 placeholder:text-sm ${passwordError && "border-b-red-500"}`}/> 
//            }
//           {!isResettingPassword && (
//             <p
//               className="text-sm text-gray-300 mt-2 cursor-pointer"
//               onClick={() => setIsResettingPassword(true)}
//             >
//               Forgot password?
//             </p>
//           )}
//            </div>
//             <button type="submit" className="outline-none w-[90%]  h-[40px]  bg-orange text-black rounded-sm ">{swatch === "sign in" ? "sign in": "log in"}</button>
//             {isResettingPassword && (
//             <p
//               className="text-sm text-gray-300 mt-3 cursor-pointer"
//               onClick={() => setIsResettingPassword(false)}
//             >
//               Back to Login
//             </p>
//           )}
         
//         </form>
         
// </div>

//     </div>
//   )
// }}

// export default Login
import { JSX, useState } from "react";
import  supabase  from "../data/supa"; // Make sure the path is correct
import pic from "../assets/pexels-pixabay-260922.jpg"; // Ensure the image path is correct

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState<string | null>(null);
  const [passwordError, setPasswordError] = useState<string | null>(null);
  const [message, setMessage] = useState<string | JSX.Element>("");
  const [swatch, setSwatch] = useState<"sign in" | "log in">("sign in");
  const [isResettingPassword, setIsResettingPassword] = useState(false); // Toggle for password reset mode

  // Handle sign-in and sign-up
  const handleSignIn = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setMessage("");
    setEmailError(null);
    setPasswordError(null);

    if (isResettingPassword) {
      handlePasswordReset();
      return;
    }

    if (swatch === "sign in") {
      const { data, error } = await supabase.auth.signUp({ email, password });

      if (error) {
        handleAuthError(error.message);
        return;
      }

      if (data) {
        setMessage(<span className="text-green-500">You created an account!</span>);
      }
    } else {
      const { data, error } = await supabase.auth.signInWithPassword({ email, password });

      if (error) {
        handleAuthError(error.message);
        return;
      }

      if (data) {
        setMessage(<span className="text-green-500">Logged in successfully!</span>);
      }
    }

    setPassword("");
    setEmail("");
  };

  // Handle password reset
  const handlePasswordReset = async () => {
    setMessage("");
    setEmailError(null);

    if (!email.trim()) {
      setEmailError("Please enter your email to reset the password.");
      return;
    }

    const { error } = await supabase.auth.resetPasswordForEmail(email);

    if (error) {
      setEmailError(error.message);
    } else {
      setMessage(<span className="text-green-500">Password reset link sent! Check your email.</span>);
      setIsResettingPassword(false); // Switch back to login mode after sending email
    }
  };

  // Handle authentication errors
  const handleAuthError = (errorMessage: string) => {
    if (errorMessage.toLowerCase().includes("email")) {
      setEmailError(errorMessage);
    } else if (errorMessage.toLowerCase().includes("password")) {
      setPasswordError(errorMessage);
    } else {
      setMessage(<span className="text-red-500">{errorMessage}</span>);
    }
  };

  return (
    <div className="w-full h-screen relative flex md:pl-20 justify-center md:justify-start items-center">
      {/* Background Image */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-[-10]">
        <img src={pic} alt="Background" className="object-cover w-full h-full" />
      </div>

      {/* Login Box */}
      <div className="bg-black/25 backdrop-blur-lg backdrop-brightness-110 shadow-lg border border-black/20 w-[400px] h-[500px] pl-8 rounded-md py-14">
        <h1 className="text-white text-4xl w-full font-Poppins">
          {isResettingPassword ? "Reset Password" : swatch === "sign in" ? "Create an account" : "Login"}
        </h1>

        {!isResettingPassword && (
          <p className="text-sm text-gray-300 mt-3">
            {swatch === "sign in" ? "Already have an account?" : "Don't have an account?"}
            <a
              onClick={() => {
                setSwatch(swatch === "sign in" ? "log in" : "sign in");
                setMessage("");
                setEmailError(null);
                setPasswordError(null);
              }}
              className="font-bold text-orange cursor-pointer ml-1.5"
            >
              {swatch === "sign in" ? "Log in" : "Sign in"}
            </a>
          </p>
        )}

        {/* Form */}
        <form onSubmit={handleSignIn} className="flex flex-col gap-6 mt-10">
          {/* Email Input */}
          <div>
            <input
              type="email"
              placeholder="Email..."
              onChange={(e) => setEmail(e.target.value)}
              value={email}
              className="outline-none w-[90%] border-b-2 border-white h-[40px] text-white px-2 placeholder:text-gray-300 placeholder:text-sm"
              required
            />
            {emailError && <p className="text-red-500 text-sm mt-1">{emailError}</p>}
          </div>

          {/* Password Input (Hidden in Reset Mode) */}
          {!isResettingPassword && (
            <div>
              <input
                type="password"
                placeholder="Password..."
                onChange={(e) => setPassword(e.target.value)}
                value={password}
                className="outline-none w-[90%] h-[40px] border-b-2 border-white text-white px-2 placeholder:text-gray-300 placeholder:text-sm"
                required
              />
              {passwordError && <p className="text-red-500 text-sm mt-1">{passwordError}</p>}
            </div>
          )}

          {/* Forgot Password Link */}
          {!isResettingPassword && (
            <p
              className="text-sm text-gray-300 mt-2 cursor-pointer"
              onClick={() => {
                setIsResettingPassword(true);
                setMessage("");
                setEmailError(null);
                setPasswordError(null);
              }}
            >
              Forgot password?
            </p>
          )}

          {/* Submit Button */}
          <button type="submit" className="outline-none cursor-pointer w-[90%] h-[40px] bg-orange text-black rounded-sm">
            {isResettingPassword ? "Send Reset Link" : swatch === "sign in" ? "Sign in" : "Log in"}
          </button>

          {/* Back to Login Button (Visible in Reset Mode) */}
          {isResettingPassword && (
            <p
              className="text-sm text-gray-300 mt-3 cursor-pointer"
              onClick={() => {
                setIsResettingPassword(false);
                setMessage("");
                setEmailError(null);
                setPasswordError(null);
              }}
            >
              Back to Login
            </p>
          )}

          {/* General Message */}
          {message && <p className="mt-2">{message}</p>}
        </form>
      </div>
    </div>
  );
}

export default Login;
