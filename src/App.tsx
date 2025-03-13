
import './App.css'
import { BrowserRouter , Route , Routes } from 'react-router-dom'
import { Suspense } from 'react'
import { lazy } from 'react'
import AddPizzaItem from './pages/Create'

const Home = lazy(()=>import("./pages/Home"))
const Second = lazy(()=>import("./pages/Second"))
const Menu = lazy(()=>import("./pages/Menu"))
const Dish = lazy(()=>import("./pages/Dish"))
function App() {

  return (
    <>
     <BrowserRouter>
       <Suspense fallback={<div className='w-full h-screen flex  justify-center items-center text-2xl'>Loading...</div>}>
         <Routes>
           <Route path="/" element={<Home />} />
           <Route path="/second" element={<Second />} /> 
           <Route path="/menu" element={<Menu />} /> 
           <Route path="/menu/:name/:id" element={<Dish />} /> 
           <Route path="/add" element={<AddPizzaItem />} />
         </Routes>
       </Suspense>
     </BrowserRouter>
    </>
     
    
  )
}

export default App
