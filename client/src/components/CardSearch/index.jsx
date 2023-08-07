import {CiSearch} from "react-icons/ci"
import {GoArrowUpLeft} from "react-icons/go"
import {useNavigate} from "react-router-dom"
export default function index({title,select,id}){
  const navigate=useNavigate()
  const handleNavigate=()=>{
    navigate(`/search/${title.replace(" ","-")}`)
  }
  return (
    <div className="w-screen flex items-center py-1 px-4 gap-2" onClick={handleNavigate}>
     <div className="flex items-center justify-center w-[5%]">
       <span className="flex items-center justify-center text-xl text-slate-400"><CiSearch/></span>
     </div>
     <div className="w-[90%] text-[.9rem] font-noto tracking-wide text-blackTxt flex items-center justify-start">
       <p>{title}</p>
     </div>
     <div className="flex items-center justify-center w-[5%]" onClick={(e)=>{
       e.stopPropagation();
       select(id)
     }
     }>
       <span className="flex items-center justify-center text-xl text-slate-400"><GoArrowUpLeft/></span>
     </div>
    </div>
    )
}