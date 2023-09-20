import {RxCross2} from "react-icons/rx"
export default function index({title,event,center=true}){
  return (
    <div className="w-screen bg-white py-1 flex justify-start">
     <div className="flex absolute left-1 items-center justify-center" onClick={event}>
      <span className="text-2xl text-blackTxt flex items-center justify-center"><RxCross2/></span>
     </div>
     <div className={`flex w-screen ${center ? "justify-center" : "justify-start px-10"} items-center font-inter font-bold tracking-wide`}>
     <p>{title}</p>
     </div>
    </div>
    )
}