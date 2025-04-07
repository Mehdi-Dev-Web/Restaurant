import { useState } from "react"

type PType = {
  id: number
  name: string,
  email: string,
  message: string
}

//? this is a component that is used to display a contact message

function Contact({ name, email, message, id }: PType) {
  const [show, setShow] = useState(false)
  const shirtcut = message.length > 55 ? `${message.slice(0, 55)}...` : message

  return (
    <div className='w-full h-fit'>
      <div className={`w-full transition-all duration-300 ease-in-out 
        ${show ? "h-auto py-4" : "h-[60px]"} 
        bg-white rounded-lg shadow-sm hover:shadow-md mb-2 overflow-hidden`}
      >
        <div className="w-full h-full grid grid-cols-12 gap-2 px-4">
          {/* ID Column */}
          <div className='col-span-1 flex items-center'>
            <span className='text-gray-600 font-medium'>{id}</span>
          </div>

          {/* Name Column */}
          <div className='col-span-3 flex items-center'>
            <span className='text-gray-800'>{name}</span>
          </div>

          {/* Email Column */}
          <div className='col-span-3 flex items-center'>
            <span className='text-gray-800 truncate'>{email}</span>
          </div>

          {/* Message Column */}
          <div className='col-span-5 flex items-center'>
            <p className='text-gray-700 pr-2'>{!show ? shirtcut : message}</p>
            {message.length > 55 && (
              <button 
                onClick={() => setShow(!show)}
                className="text-blue-600 hover:text-blue-700 text-sm font-medium focus:outline-none cursor-pointer"
              >
                {!show ? "Read more" : "Show less"}
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact