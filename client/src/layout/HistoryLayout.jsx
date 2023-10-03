import MenuBack from "../components/MenuBack"
import InputSearch from "../components/InputSearch"
import tunggutransaksi from "/tunggutransaksi.png"
import {useNavigate} from "react-router-dom"
import {MdArrowForwardIos} from "react-icons/md"
import {useState} from "react"
export default function HistoryLayout({children}){
  const [input,setInput]=useState("")
  const navigate=useNavigate()
  const handleSearch=(e)=>{

  }
  
  const handleChange=({target})=>{
     setInput(target.value)
  }
  return (
    <div className="sticky w-screen top-0 py-1">
     <MenuBack event={()=>navigate(-1)} title="Daftar Transaksi" center={false}/>
     <InputSearch 
     input={input} 
     handleSearch={handleSearch}
     handleChange={handleChange}
     reset={()=>setInput("")}
     />
     <div className="w-[90%] mx-auto py-1 flex items-center">
       <div className="flex items-center gap-1 font-noto text-sm text-slate-600">
        <img src={tunggutransaksi} className="h-6"/>
        <p>Menunggu Pembayaran</p>
        <span className="text-md flex items-center justify-center text-slate-500 translate-y-[1.5px]"><MdArrowForwardIos/></span>
       </div>
     </div>
     {children}
    </div>
    )
}