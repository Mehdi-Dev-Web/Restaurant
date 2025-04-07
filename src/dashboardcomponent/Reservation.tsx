
type Treservation = {
  id:number;
  name : string;
  members : number;
  date : string;
}

//? this is a component that is used to display a reservation table in the dashboard

interface ReservationProps {
  reservations: Treservation[];
  index: number;
}

function Reservation({reservations, index}: ReservationProps) {
  return (
    <div className=" h-[60px] bg-white grid grid-cols-9 px-4 rounded-lg">
      <div className="col-span-1 flex items-center text-black">{reservations[index].id}</div>
      <div className="col-span-2 flex items-center text-black">{reservations[index].name}</div>
      <div className="col-span-2 flex items-center text-black">{reservations[index].members}</div>
      <div className="col-span-3 flex items-center text-black">{reservations[index].date}</div>
      <button className="col-span-1 flex items-center justify-end text-blue-500 cursor-pointer">take</button>
    </div>
  )
}

export default Reservation