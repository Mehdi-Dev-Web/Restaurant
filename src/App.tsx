
import './App.css'
import { Route , Routes } from 'react-router-dom'
import { Suspense } from 'react'
import { lazy } from 'react'
import Booking from './pages/Booking.tsx'
import Login from './pages/Login.tsx'
// import AddPizzaItem from './pages/Create'

const Home = lazy(()=>import("./pages/Home"))
// const Second = lazy(()=>import("./pages/Second"))
const Menu = lazy(()=>import("./pages/Menu.tsx"))
const Dish = lazy(()=>import("./pages/Dish.tsx"))
const Footer = lazy(()=>import("./component/Footer.tsx"))
const Reset = lazy(()=>import("./pages/Reset.tsx"))
const About = lazy(()=>import("./pages/About.tsx"))
const Dashboard = lazy(()=>import("./pages/Dashboard.tsx"))
function App() {

  return (
    <>
     
       <Suspense fallback={<div className="w-full h-screen bg-lightBlack flex justify-center items-center"><p className="text-orange">Loading...</p></div>}>
         <Routes>
           <Route path="/" element={<Home />} />
           <Route path="/booking" element={<Booking />} /> 
           <Route path="/menu" element={<Menu />} /> 
           <Route path="/menu/:name/:id" element={<Dish />} /> 
           <Route path="/login" element={<Login />} /> 
           <Route path="/reset" element={<Reset />} /> 
           <Route path="/about" element={<About />} /> 
           <Route path="/dash" element={<Dashboard />} /> 
           {/* <Route path="/add" element={<AddPizzaItem />} /> */}
         </Routes>
         <Footer />
       </Suspense>
     
    </>
     
    
  )
}

export default App
