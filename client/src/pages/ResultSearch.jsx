import {useParams,useNavigate} from "react-router-dom"
import {useProduk} from "../hooks/useProduk"
import {CiShoppingCart} from "react-icons/ci" 
import {AiOutlineArrowLeft} from "react-icons/ai"
import {CiSearch} from "react-icons/ci"
import {useEffect,useRef,useState} from "react"
import CategoryList from "../components/CategoryList"
export default function ResultSearch(){
  const {search}=useParams()
  const url=`http://localhost:5000/produk/search?search=${search}`
  const [data,msg]=useProduk(url)
  const [active,setActive]=useState(false)
  const ref=useRef()
  const navigate=useNavigate()
  const [kategory,setKategory]=useState("Cashback")
  const [input,setInput]=useState("")
 useEffect(()=>{
   setInput(search.replace("-"," "))
   console.log(search.replace("-"," "))
 },[])
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
  
  const listCategory=["Filter","Oficial store","Cahsback","Free ongkir"]
  return (
  <div className="w-screen">
  <div className={`w-screen flex items-center justify-start font-noto tracking-wide text-blackTxt text-sm p-2 gap-2 z-40 top-0 bg-whitePrimary ${active ? "fixed" : "sticky"}`} ref={ref}>
    <span className="text-3xl flex items-center justify-center text-slate-400" onClick={handleChange}><AiOutlineArrowLeft/></span>
    <div className="flex items-center text-grayTxt w-3/5 relative flex items-center justify-start" onClick={handleChange}>
      <input type="teks" className="absolute left-1 flex items-center text-slate-400 peer-focus " value={input}/>
      <div className={`absolute left-1 flex items-center ${input.length > 0 && "hidden"} peer-focus:hidden`}>
        <span className="text-xl grid place-items-center"><CiSearch/></span>
        <p className="select-none">Cari di KokoPedia</p>
      </div>
    </div>
    
    <div className="text-2xl flex items-center justify-evenly w-2/5" onClick={()=>console.log(input)}>
    <span className="grid place-items-center"><CiShoppingCart/></span>
    <div className="flex items-center w-4 h-6 flex-col justify-evenly">
      <span className="bg-blackTxt inline-block w-full h-[2px] rounded"></span>
      <span className="bg-blackTxt inline-block w-full h-[2px] rounded"></span>
      <span className="bg-blackTxt inline-block w-full h-[2px] rounded"></span>
    </div>
    </div>
  </div>
  <CategoryList data={listCategory} kategory={kategory}/>
  </div>
  )
}
