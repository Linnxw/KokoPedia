import {motion} from "framer-motion"
import {CiSearch} from "react-icons/ci"
import {AiOutlineArrowLeft} from "react-icons/ai"
import {useNavigate} from "react-router-dom"
import {MdCancel} from "react-icons/md"
import {useEffect,useRef,useState} from "react"
import CardSearch from "../components/CardSearch"
import CardPopuler from "../components/CardPopuler"
import {useProduk} from "../hooks/useProduk"
import PopulerLayout from "../layout/PopulerLayout"
export default function Search(){
  const navigate=useNavigate()
  const inputRef=useRef("")
  const [input,setInput]=useState("")
  const [data,msg]=useProduk(`/produk/search?search=${input}`)
  
  const handleNavigate=()=>{
    navigate("/home")
  }
  
  const handleSearch=(e)=>{
    if(e.key === "Enter"){
      navigate(`/search/${input.replace(" ","-")}`)
    }
  }
  
  const handleChange=({target})=>{
     setInput(target.value)
  }
  
  const handleSelect=(id)=>{
    const newData=data.filter((m)=>m.id === id)
    setInput(newData[0].nama_produk)
  }
  return (
  <motion.div
  className="w-screen static z-50"
  initial={{y:'100vh'}}
  animate={{y:0}}
  transition={{duration:0.5}}
  >
   <div className="flex items-center justify-start p-2 gap-3">
     <div className="flex items-center justify-center text-slate-500" onClick={handleNavigate}>
       <span className="text-3xl flex items-center justify-center"><AiOutlineArrowLeft/></span>
     </div>
    <div className="flex items-center text-blackTxt w-4/5 relative flex items-center justify-start text-[.9rem]">
      <input type="teks" className="outline-none rounded-lg static z-10 bg-transparent p-2 w-full ring-1 ring-slate-200 box-border peer font-noto" ref={inputRef} onKeyPress={handleSearch} onChange={handleChange} value={input}/>
      <div className={`absolute left-1 flex items-center z-0 text-slate-400 peer-focus:hidden ${input.length > 0 && "hidden"}`}>
        <span className="text-xl grid place-items-center"><CiSearch/></span>
        <p>Cari di KokoPedia</p>
      </div>
       {
         input.length > 0 && <span className="absolute text-lg text-slate-400 right-1" onClick={()=>setInput("")}><MdCancel/></span>
       }
    </div>
    </div>
    <div>
    {
      data && (data?.map((m,i)=>{
        return <CardSearch title={m.nama_produk} select={handleSelect} id={m.id} key={m.id}/>
      })) 
    }
    </div>
    {
      input.length < 1 && (
     <PopulerLayout>
       <CardPopuler/>
     </PopulerLayout>
        )

    }
  </motion.div>
  )
}