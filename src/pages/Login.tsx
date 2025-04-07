
 
// export default Login
import { JSX, useState } from "react";
import  supabase  from "../data/supa"; // Make sure the path is correct
import pic from "../assets/pexels-pixabay-260922.jpg";
import { useNavigate } from "react-router-dom"; // Ensure the image path is correct

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState<string | null>(null);
  const [passwordError, setPasswordError] = useState<string | null>(null);
  const [message, setMessage] = useState<string | JSX.Element>("");
  const [swatch, setSwatch] = useState<"sign in" | "log in">("sign in");
  const [isResettingPassword, setIsResettingPassword] = useState(false); // Toggle for password reset mode
 const Navigate = useNavigate()
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

      const user = data.user;
      if (user) {
        // Insert the user into the 'users' table
        const { error: insertError } = await supabase.from("users").insert([
          { // Link to auth.users.id
            email: user.email,
            isAdmin: false, // Default value
          },
        ]);
    
        if (insertError) {
          console.error("Error inserting user:", insertError.message);
        } else {
          console.log("User successfully registered!");
        }
      }
    } else {
      const { data, error } = await supabase.auth.signInWithPassword({ email, password });

      if (error) {
        handleAuthError(error.message);

        return;
      }

      if (data) {
        setMessage(<span className="text-green-500">Logged in successfully!</span>);
        setTimeout(() => {
          Navigate("/") 
        }, 1000); 
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
          {!isResettingPassword &&  (
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
          {!isResettingPassword && swatch == "log in" && (
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
