import {useNavigate} from "react-router-dom"
export default function index (props){
const {title,icon}=props
const navigate=useNavigate()

const handleNavigate=()=>{
 if(title === "Dashboard"){
   navigate("/")
 }else{
 navigate(`/${title.toLowerCase()}`)
 }
}
  return (
  <div className="flex h-full w-14 p-1 justify-end flex-col items-center font-noto text-blackTxt" onClick={handleNavigate}>
    <span className="flex items-center justify-center text-2xl text-blackTxtSecond">
      {icon}
    </span>
    <p className="text-[.8rem]">{title}</p>
  </div> 
  )
}