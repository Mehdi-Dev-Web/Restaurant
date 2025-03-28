import React from "react"
type Proptype = {
    item: string,
    selectedPeople:string
    handleSelect : (item:string) => void
}
function Members({item,selectedPeople,handleSelect}:Proptype) {
  return (
    <div onClick={()=>handleSelect(item)}
              
                    className={`pl-2 py-1 hover:bg-gray-300 cursor-pointer border-t-[1px] border-lightBlack ${
                      item === selectedPeople ? "bg-orange" : "bg-white"
                    }`}
                  >
                    {item}
                  </div>
  )
}

export default React.memo(Members)