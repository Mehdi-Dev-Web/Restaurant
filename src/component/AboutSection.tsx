
import pictwo from "../assets/steptodown.com210542.jpg"
import bg from "../assets/white-marble-stone-background-texture-pattern-free-photo.webp"


function AboutSection() {
  return (
    <div className="w-full min-h-[65vh] gap-4 lg:gap-0  md:px-7  flex flex-col md:flex-row justify-center relative">
   <span className=" opacity-1 absolute w-full h-full left-0 top-0"> 
            <img src={bg} className="w-full h-full object-cover" alt="" />
          </span>
        <div className="flex-1  md:flex items-center justify-center">
            <img src={pictwo} className="w-full  md:w-[450px] object-contain" alt="" />
        </div>
        <div className="flex-1    flex flex-col  justify-start items-center md:justify-center  md:items-start  mm:mt-0">
            <p className="text-sm text-orange ">About Us</p>
            <h1 className="text-4xl text-center md:text-left font-bold text-white font-Poppins mt-1">Discover Our Story</h1>
            <p className="text-white px-3 md:px-0 font-light text-sm mt-4 max-w-[500px] text-center md:text-left">
            Welcome to night glow, where we specialize in crafting unforgettable dinner experiences. Whether you're craving a cozy evening or a special celebration, our delicious dishes and warm ambiance will make every meal memorable.
</p>
<button className="py-2 px-4 text-sm mt-8 text-white border-[1px] border-orange rounded-md cursor-pointer"> see our story </button>
        </div>
        
    </div>
  )
}

export default AboutSection