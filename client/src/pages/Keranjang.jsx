import MenuBack from "../components/MenuBack"
import {useNavigate} from "react-router-dom"
import CardKeranjang from "../components/CardKeranjang"
import {useEffect,useState} from "react"
import {axiosJwt} from "../api/interceptor"
import {motion} from "framer-motion"
export default function Keranjang(){
  const navigate=useNavigate()
 const [keranjang,setKeranjang]=useState([])
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
  return (
    <motion.div 
    initial={{y:'100vh'}}
    animate={{y:0}}
    transition={{duration:0.5}}
    className="w-screen py-2 min-h-screen">
     <MenuBack title="Keranjang Saya" event={()=>navigate("/home")}/>
     {
       keranjang?.map((data,i)=>{
        return <CardKeranjang data={data} key={i} refresh={()=>getKeranjang()}/>
       })
     }
    </motion.div>
    )
}