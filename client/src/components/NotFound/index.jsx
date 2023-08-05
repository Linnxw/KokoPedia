import {PiWarningCircleLight} from "react-icons/pi"
export default function index({title,icon}){
  return (
    <div className="w-screen font-noto flex flex-col items-center justify-center gap-1 py-2">
     <div>
      <span className="text-3xl text-red-400">{icon}</span>
     </div>
     <div className="text-center">
       <p>{title}</p>
     </div>
      
    </div>
    )
}