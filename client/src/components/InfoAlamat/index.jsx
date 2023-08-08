import {PiMapPinLight} from "react-icons/pi"
export default function index({size="text-[.7rem] "}){
  return (
   <div className={`flex items-center ${size} justify-start px-2 py-1`}>
     <span className="text-sm">
       <PiMapPinLight/>
     </span>
     <p>Dikirim ke <a className="hover:underline font-bold">Kudus</a></p>
   </div>
    )
}