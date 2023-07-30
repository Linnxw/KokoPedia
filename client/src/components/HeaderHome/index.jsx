import Action from "./Action"
import {PiMapPinLight} from "react-icons/pi"
import InfoAcount from "./InfoAcount"
export default function index(){
  return (
  <div className="bg-greenPrimary w-screen py-2 font-noto text-whitePrimary">
   <Action/>
   <div className="flex text-[.7rem] items-center justify-start px-2 py-1">
     <span className="text-sm">
       <PiMapPinLight/>
     </span>
     <p>Dikirim ke <a className="hover:underline font-bold">Kudus</a></p>
   </div>
   <InfoAcount/>
  </div>
  )
}