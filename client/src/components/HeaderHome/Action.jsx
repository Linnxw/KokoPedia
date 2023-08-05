import {CiSearch} from "react-icons/ci"
import {CiMail} from "react-icons/ci"
import {CiShoppingCart} from "react-icons/ci" 
import {useRef,useEffect,useState} from "react"
import {useNavigate} from "react-router-dom"
export default function Action(){
const [active,setActive]=useState(false)
const ref=useRef()
const navigate=useNavigate()
useEffect(()=>{
  const handleScroll=()=>{
    if(window.scrollY > 10){
      setActive(true)
    }else{
      setActive(false)
    }
  }
  window.addEventListener("scroll",handleScroll)
  return ()=>{
    window.removeEventListener("scroll",handleScroll)
  }
   },[])
  
  const handleChange=()=>{
    navigate("/search")
  }
  return (
  <div className={`w-screen flex items-center justify-start font-noto tracking-wide text-sm p-2 z-40 top-0 ${active ? "bg-whitePrimary text-blackTxt fixed" : "text-whitePrimary sticky"}`} ref={ref}>
  
    <div className="flex items-center text-grayTxt w-3/5 relative flex items-center justify-start" onClick={handleChange}>
      <input type="teks" className="outline-none rounded-lg p-2 w-full bg-whitePrimary ring-1 ring-grayTxt box-border peer"/>
      <div className="absolute left-1 flex items-center peer-focus:hidden">
        <span className="text-xl grid place-items-center"><CiSearch/></span>
        <p className="select-none">Cari di KokoPedia</p>
      </div>
    </div>
    
    <div className="text-xl flex items-center justify-evenly w-2/5">
    <span className="grid place-items-center"><CiMail/></span>
    <span className="grid place-items-center"><CiShoppingCart/></span>
    <div className="flex items-center gap-1 w-4 h-6 flex-col justify-center">
      <span className={`${active ? "bg-blackTxt" : "bg-whitePrimary"} inline-block w-full h-[1px] rounded`}></span>
      <span className={`${active ? "bg-blackTxt" : "bg-whitePrimary"} inline-block w-full h-[1px] rounded`}></span>
      <span className={`${active ? "bg-blackTxt" : "bg-whitePrimary"} inline-block w-full h-[1px] rounded`}></span>
    </div>
    </div>
  </div>
  )
}