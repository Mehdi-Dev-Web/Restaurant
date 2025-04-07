import { useState } from "react";
import pic from "../assets/pexels-pixabay-260922.jpg";
import { IoIosArrowDown } from "react-icons/io";
import { FaUser } from "react-icons/fa";
import DatePicker from "../component/DatePicker";
import Members from "../component/Members";
import supabase from "../data/supa";

//? this is a component that is used to book a table

const people = [
  "1 person",
  "2 person",
  "3 person",
  "4 person",
  "5 person",
  "6 person",
];


function Booking() {
  const [selectedPeople, setSelectedPeople] = useState(people[0]);
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [date, setDate] = useState<string | null>("");
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");

  const handleSelect = (item: string) => {
    if (selectedPeople !== item) {
      setSelectedPeople(item);
    }
    setIsOpen(false);
  };

  const insertdate = async () => {
    if (name === "" || date == null) {
      return setMessage("Please fill all required fields");
    }
    
    const { data, error } = await supabase
      .from('reservation')
      .insert([{ name, members: selectedPeople, date }])
      .select();

    if (error) {
      return setMessage(error?.message);
    }
    if (data) {
      return setMessage("Reservation confirmed! Thank you for booking.");
    }
  };

  return (
    <div className="w-full min-h-screen bg-gradient-to-b from-lightBlack to-[#1a1a1a]">
      {/* Hero Section */}
      <div className="relative h-[60vh] overflow-hidden">
        <img 
          src={pic} 
          alt="Restaurant" 
          className="w-full h-full object-cover brightness-50"
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
          <h1 className="text-orange font-Lobster text-7xl mb-4">Reserve Your Table</h1>
          <p className="text-white text-xl max-w-2xl">
            Experience exceptional dining in an elegant atmosphere
          </p>
        </div>
      </div>

      {/* Booking Form Section */}
      <div className="max-w-4xl mx-auto -mt-20 px-4 relative z-10">
        <div className="bg-[#2a2a2a] rounded-xl shadow-2xl p-8">
          {message && (
            <div className={`mb-6 p-4 rounded-lg text-center ${
              message.includes("error") ? "bg-red-500/10 text-red-500" : "bg-green-500/10 text-green-500"
            }`}>
              {message}
            </div>
          )}

          <div className="grid md:grid-cols-2 gap-6">
            {/* Name Input */}
            <div className="relative">
              <label className="text-orange mb-2 block">Your Name</label>
              <div className="relative">
                <FaUser className="absolute left-3 top-1/2 -translate-y-1/2 text-orange/60" />
                <input
                  type="text"
                  placeholder="Enter your name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full bg-[#1F1F1F] border-2 border-orange/20 rounded-lg px-10 py-3 text-white placeholder:text-gray-400 focus:border-orange outline-none transition-all"
                />
              </div>
            </div>

            {/* People Selection */}
            <div className="relative">
              <label className="text-orange mb-2 block">Number of Guests</label>
              <div className="relative">
                <div 
                  className="relative cursor-pointer"
                  onClick={() => setIsOpen(!isOpen)}
                >
                  <input
                    type="text"
                    className="w-full bg-[#1F1F1F] border-2 border-orange/20 rounded-lg px-10 py-3 text-white cursor-pointer"
                    placeholder="Select guests"
                    value={selectedPeople}
                    readOnly
                  />
                  <IoIosArrowDown className="absolute right-4 top-1/2 -translate-y-1/2 text-orange" />
                </div>
                {isOpen && (
                  <div className="absolute left-0 right-0 mt-2 bg-[#1F1F1F] border-2 border-orange/20 rounded-lg overflow-hidden z-20">
                    {people.map((item, index) => (
                      <Members
                        key={index}
                        handleSelect={handleSelect}
                        item={item}
                        selectedPeople={selectedPeople}
                      />
                    ))}
                  </div>
                )}
              </div>
            </div>

            {/* Date Selection */}
            <div className="relative md:col-span-2">
              <label className="text-orange mb-2 block">Select Date</label>
              <div className="relative">
                {/* <FaCalendarAlt className="absolute left-3 top-1/2 -translate-y-1/2 text-orange/60 z-10" /> */}
                <DatePicker setDate={setDate} />
              </div>
            </div>
          </div>

          {/* Submit Button */}
          <button
            onClick={insertdate}
            className="w-full mt-6 bg-orange hover:bg-orange/90 text-black font-bold py-4 rounded-lg transition-all transform hover:scale-[1.02]"
          >
            Confirm Reservation
          </button>
        </div>
      </div>

      {/* Location Section */}
      <div className="max-w-6xl mx-auto mt-20 px-4 pb-20">
        <div className="text-center mb-10">
          <h2 className="text-orange font-Lobster text-4xl mb-4">Find Us Here</h2>
          <p className="text-gray-300">Visit us at our convenient location</p>
        </div>
        <div className="rounded-xl overflow-hidden shadow-2xl">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d841.6590926326633!2d-8.014701468505143!3d31.63579678670283!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xdafef4ea795c379%3A0xee25278f61a43e31!2sBeldi%20Fusion%20Kitchen%20Gu%C3%A9liz!5e0!3m2!1sen!2sma!4v1742445640195!5m2!1sen!2sma"
            width="100%"
            height="450"
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="w-full"
          ></iframe>
        </div>
      </div>
    </div>
  );
}

export default Booking;