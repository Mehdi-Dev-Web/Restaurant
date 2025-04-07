
type Pro = {
    setShow: React.Dispatch<React.SetStateAction<boolean>>
    name: string
    category: string
    price: number
    setName: React.Dispatch<React.SetStateAction<string>>
    setCategory: React.Dispatch<React.SetStateAction<string>>
    setPrice: React.Dispatch<React.SetStateAction<number>>
    handleUpdate: () => void
  
}

//? this is a component that is used to update a  dish to the database

function Inp({setShow,name,category,price,setName,setCategory,setPrice,handleUpdate}:Pro) {
  return (
    <div className="w-full h-full bg-white absolute top-0 left-0  flex flex-col justify-center items-center">
      <h1 className="text-black text-2xl font-bold">Add a new dish</h1>
        <input type="text" placeholder='Name of dish' className='w-[80%] py-2 px-3 rounded-md mt-4 text-black border-2 border-black placeholder:text-lightBlack' value={name} onChange={(e)=>setName(e.target.value)} />
        <input type="text" placeholder='Category' className='w-[80%] py-2 px-3 rounded-md mt-4 text-black border-2 border-black placeholder:text-lightBlack' value={category} onChange={(e)=>setCategory(e.target.value)} />
        <input type="number" placeholder='Price' className='w-[80%] py-2 px-3 rounded-md mt-4 text-black border-2 border-black placeholder:text-lightBlack' value={price} onChange={(e)=>setPrice(Number(e.target.value))} />
        <div className="w-[80%] flex justify-between items-center mt-4">
        <button className="text-black cursor-pointer rounded-md py-2 w-[49%] px-3 border-2 border-black" onClick={()=>setShow(false)}>close</button>
        <button className="text-white cursor-pointer rounded-md bg-lightBlack py-2 w-[49%] px-3 border-2 border-black" onClick={()=>{setShow(false); handleUpdate()}}>setShow</button>
        </div>
    </div>
  )
}

export default Inp