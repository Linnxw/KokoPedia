import {BsArrowLeft} from "react-icons/bs"
export default function index({title,event}){
  return (
    <div className="w-screen flex justify-start">
     <div className="flex absolute left-1 items-center justify-center" onClick={event}>
      <span className="text-2xl text-blackTxt flex items-center justify-center"><BsArrowLeft/></span>
     </div>
     <div className="flex w-screen items-center justify-center font-inter font-bold tracking-wide">
     <p>{title}</p>
     </div>
    </div>
    )
}