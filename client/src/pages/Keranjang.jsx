import MenuBack from "@components/MenuBack"
import {useNavigate} from "react-router-dom"
import CardKeranjang from "@components/CardKeranjang"
import {useEffect,useState} from "react"
import {axiosJwt} from "../api/interceptor"
import KeranjangSkeleton from "../components/Skeleton/KeranjangSkeleton"
import {motion} from "framer-motion"
export default function Keranjang(){
  const navigate=useNavigate()
 const [keranjang,setKeranjang]=useState(null)
 const [beli,setBeli] = useState(null)
  useEffect(()=>{
    getKeranjang()
  },[])
  
  const getKeranjang=async()=>{
    try{
      const response=await axiosJwt.get("/keranjang")
      setKeranjang(response.data)
    }catch(err){
      console.log(err)
    }
  }
const handleCheckBeli = (data) =>{
   setBeli(data)
 }
 
 const handleBeli = () =>{
   console.log(beli)
   navigate("/checkout/" + beli.id + "?jumlah=" + beli.jumlah)
 }
  return (
    <div>
    <motion.div 
    initial={{y:'100vh'}}
    animate={{y:0}}
    transition={{duration:0.5}}
    className="w-screen py-2 h-[1000px]">
  
     <MenuBack title="Keranjang Saya" event={()=>navigate("/home")}/>
     <div className="flex flex-col items-center gap-3 bg-slate-100">
     {
       keranjang ? (keranjang.map((data,i)=>{
        return <CardKeranjang beli={handleCheckBeli} data={data} key={i} refresh={()=>getKeranjang()}/>
       })) : (<KeranjangSkeleton cards={3}/>)
     }
     </div>
    </motion.div>
    <div className="w-screen fixed bottom-0 bg-whitePrimary flex h-16 items-center justify-center">
        <button onClick={handleBeli} className={`rounded border bg-greenPrimary text-whitePrimary border border-greenPrimary font-inter font-bold text-[.8rem] text-greenPrimary w-[96%] text-center h-11 px-10`}>Beli Sekarang</button>
      </div>
    </div>
    )
}