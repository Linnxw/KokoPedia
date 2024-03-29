import NavbarLayout from "../layout/NavbarLayout"
import CardStatistics from "@components/CardStatistics"
import PopUpBox from "@components/PopUpBox"
import {AiOutlineShoppingCart} from "react-icons/ai"
import {MdAttachMoney} from "react-icons/md"
import ChartShelling from "../charts/ChartShelling"
import TabelHistory from "@components/TabelHistory"
import {useDispatch,useSelector} from "react-redux"
import {axiosJwt} from "../api/interceptor"
import {useNavigate} from "react-router-dom"
import {motion} from "framer-motion"
import {useState,useEffect} from "react"
import {convertRupiah} from "../helper/convertRupiah"
export default function Dashboard(){
const [produk,setProduk]=useState([])
const [terjual,setTerjual]=useState(0)
const [pendapatan,setPendapatan]=useState(0)
const [history,setHistory]=useState([])
const [active,setActive]=useState(false)
const [detailHistory,setDetailHistory]=useState({})
const dispatch=useDispatch()
const {accesToken}=useSelector(prev=>prev.token)
const navigate=useNavigate()
useEffect(()=>{
 getProduk()
 getHistory()
},[])
const data=[
{
  icon:<AiOutlineShoppingCart/>,
  title:"Jumlah terjual",
  data:terjual ? terjual :0,
  variant:"bg-green-400"
},
{
  icon:<MdAttachMoney/>,
  title:"Total pendapatan",
  data:pendapatan ? pendapatan : 0,
  variant:"bg-orange-400"
}
]
  
  const getProduk=async()=>{
  try{
    const {data}=await axiosJwt.get("/produk/me")
 
    setProduk(data)
    getTotalPenjualan(data)
    getTotalPendapatan(data)
  }catch(err){
    if(err.response.status === 401 || err.response.status === 403){
      // navigate("/home")
    }
    console.log(err)
  }
  }
  
  const getTotalPenjualan=(data)=>{
    const myProduk=data && data
    const total=myProduk.reduce((value,next)=>{
    return value+next.terjual
    },0)
    setTerjual(total)
  }
  
  const getTotalPendapatan=(data)=>{
    const myProduk=data && data
    const total=myProduk.reduce((value,next)=>{
    return value+next.terjual*next.harga
    },0)
    const convert = convertRupiah(total)
    setPendapatan(convert)
  }
  
  const getHistory=async()=>{
    try{
      const response=await axiosJwt.get("/beli/riwayat/jual/me")
      setHistory(response.data)
    }catch(err){
      console.log(err)
    }
  }
  
  const getDetailHistory=async(id)=>{
    const {data}=await axiosJwt.get(`/beli/riwayat/jual/${id}`)
    setDetailHistory(data)
  }
  
  const handlePopUp=(id)=>{
    getDetailHistory(id)
    setActive(state=>!state)
  }
  return (
  <motion.div
  className="w-screen min-h-screen bg-whiteSecond pb-14"
  initial={{opacity:0}}
  animate={{opacity:1}}
  transition={{duration:0.5}}
  >
    <header className="p-3 text-blackTxt font-noto text-2xl md:text-5xl md:p-6 font-normal">
     <h1>Dashboard</h1>
    </header>
    <div className="w-screen flex flex-col md:flex-row gap-3 md:justify-center" onClick={getHistory}>
    {
      data.map((m,i)=> <CardStatistics key={i} icon = {m.icon} title = {m.title} data = {m.data} variant = {m.variant}/>)
    }
    </div>
    <ChartShelling produk={produk}/>
    <TabelHistory history={history} event={handlePopUp} detail={detailHistory}/>
    <PopUpBox active={active} event={handlePopUp} detail={detailHistory}/>
    <NavbarLayout/>
  </motion.div>
  )
}