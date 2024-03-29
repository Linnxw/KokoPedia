import {useState,useEffect,useRef} from "react"
import {useDispatch,useSelector} from 'react-redux'
import {add} from '../redux/slice/addKeranjangSlice'
import OptionLayout from "../layout/OptionLayout" 
import {useNavigate,useParams} from "react-router-dom"
import {CiShoppingCart} from "react-icons/ci" 
import {AiOutlineArrowLeft} from "react-icons/ai"
import {RiCustomerService2Fill} from "react-icons/ri"
import {PiUsersLight} from "react-icons/pi"
import UlasanPembeli from "@components/UlasanPembeli"
import {AiOutlineHeart} from "react-icons/ai"
import {PiHandbagThin} from "react-icons/pi"
import {GoChecklist} from "react-icons/go"
import {convertRupiah} from "../helper/convertRupiah"
import {axiosJwt} from "../api/interceptor"
import Button from "@components/Button"
import MenuBack from "@components/MenuBack"
import PopUpLayout from "../layout/PopUpLayout"
import CardAkun from "@components/CardAkun"
import MenuLayout from "../layout/MenuLayout"
import OptionBeliLayout from "../layout/OptionBeliLayout"
import ongkir from "/ongkir.png"
import img from "/laptop.webp"
import {CiSearch} from "react-icons/ci"
import CardPenjual from "@components/CardPenjual"
import CardBeli from "@components/CardBeli"
import {useProduk} from "../hooks/useProduk"
import {motion} from "framer-motion"
import {instance} from "../api/instance"
import ProdukDetailSkeleton from "@components/Skeleton/ProdukDetailSkeleton"
export default function ProdukDetail(){
  const [active,setActive]=useState(false)
  const [isOpen,setIsOpen]=useState(false)
  const [isFollowing,setisFollowing]=useState(false)
  
  const [isAddKeranjang,setIsAddKeranjang] = useState(false)
  const [produk,setProduk]=useState(null)
  const {id}=useParams()
  const [data,msg]=useProduk(`/produk/${id}`)
  const [keranjang,setKeranjang]=useState(0)
  const [isBuy,setIsBuy] = useState(false)
  const [coment,setComent]=useState([])
  const ref=useRef()
  const navigate=useNavigate()
  const [input,setInput]=useState("")

  useEffect(()=>{
  const handleScroll=()=>{
    if(window.scrollY > 5){
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
  
  useEffect(()=>{
    if(data){
    const newData={
      ...data,
      harga:convertRupiah(data?.harga)
    }
    setProduk(newData)
    }
  },[data])
  
  useEffect(()=>{
    getComent()
 
  },[])
  
  useEffect(()=>{
    if(data){
      isFollowSeller()
    }
   
  },[data])
  const isFollowSeller = async () =>{
    console.log({data,produk})
    try{
      const response = await axiosJwt.get("/user/follow")
      const following = []
      response.data.forEach((m,i)=>{
        if(m.following_id){
          following.push(m.following_id)
        }else{
          following.push(0)
        }
      })
      console.log({following,id:data?.user_id})
      if(following.includes(data?.user_id)){
        setisFollowing(true)
      }else{
        setisFollowing(false)
      }
    }catch(err){
      console.log(err)
    }
  }
  
  const getComent=async()=>{
    try{
      const {data}=await instance.get("/penilaian/"+id)
      setComent(data)
    }catch(err){
      console.log(err)
    }
  }
  
  const handleChange=()=>{
    navigate(-1)
  }
  
  const handleInputTerendah=(e)=>{
    console.log(e.target.value)
  }
  const handleInputTertinggi=(e)=>{
    console.log(e.target.value)
  }
  
  const handleAddKeranjang=()=>{
    console.log(isAddKeranjang)
    setIsAddKeranjang(state=>!state)
  }
  
  const handleBeli = () =>{
    setIsBuy(prev=>!prev)
  }
  useEffect(()=>{
    getKeranjang()
  },[])
  
  const getKeranjang=async()=>{
    try{
      const response=await axiosJwt.get("/keranjang")
      setKeranjang(response.data.length)
    }catch(err){
      console.log(err)
    }
  }
  return produk ? (
  <div className="w-screen overflow-x-hidden pb-14">
  <div className={`w-screen translateZ(0) flex ${active ? "bg-whitePrimary" : "bg-transparent"} items-center justify-start font-noto tracking-wide text-blackTxt text-sm p-2 gap-2 z-40 top-0 fixed`} ref={ref}>
    <span className="text-3xl flex items-center justify-center text-slate-400" onClick={handleChange}><AiOutlineArrowLeft/></span>
    <div className="flex items-center text-grayTxt w-3/5 relative flex items-center justify-start" onClick={()=>navigate("/search")}>
      <input type="teks" className="absolute left-1 bg-transparent flex items-center text-slate-400 peer-focus " value={input}/>
      <div className={`absolute left-1 flex items-center ${input.length > 0 && "hidden"} peer-focus:hidden`}>
        <span className="text-xl grid place-items-center"><CiSearch/></span>
        <p className="select-none">Cari di KokoPedia</p>
      </div>
    </div>
    
   <div className="text-2xl flex items-center justify-evenly w-2/5">
    <span className="grid relative place-items-center" onClick={()=>navigate("/keranjang")} >
     <span className="w-4 text-white font-inter h-4 text-[.5rem] text-semibold flex items-center justify-center rounded-full bg-red-500 absolute -right-2 -top-2">{keranjang}</span>
    <CiShoppingCart/>
    </span>
    <div className="flex items-center w-4 h-6 flex-col justify-evenly" onClick={()=>setIsOpen(prev=>!prev)}>
      <span className="bg-blackTxt inline-block w-full h-[2px] rounded"></span>
      <span className="bg-blackTxt inline-block w-full h-[2px] rounded"></span>
      <span className="bg-blackTxt inline-block w-full h-[2px] rounded"></span>
    </div>
    </div>
  </div>
  
  <div className="w-full">
   <div className="full h-80 bg-white">
     <img src={produk?.url_foto_produk} className="w-full h-full object-cover"/>
   </div>
   <div className="py-4 px-3 flex flex-col gap-y-1 font-inter bg-white">
    <div className="w-full flex justify-between">
     <div className="flex gap-2 items-center font-inter">
      <h1 className="font-bold text-blackTxt text-xl">{produk?.harga}</h1>
      <img src={ongkir} className="h-6"/>
    </div>
    <span className="text-2xl text-slate-700"><AiOutlineHeart/></span>
    </div>
     <p className="text-sm text-slate-700">{produk?.nama_produk}</p>
     <div className="flex gap-2 pt-2 text-[.8rem]">
       <p>{produk?.terjual} Terjual</p>
       <p>7 Ulasan</p>
     </div>
   </div>
    <MenuLayout size="text-md" title="Detail Produk">
     <tabel className="tabel-auto font-inter text-sm">
       <tr className="">
         <td className="w-40 py-1 text-slate-500 text-left font-thin">Min. Pemesanan</td>
         <td className="text-slate-700">1</td>
       </tr>
       <tr className="">
         <td className="w-40 py-1 text-slate-500 text-left">Stock Tersisa</td>
         <td className="text-slate-700">{produk?.stok}</td>
       </tr>
       <tr className="">
         <td className="w-40 py-1 text-slate-500 text-left">Kategori</td>
         <td className="text-greenPrimary font-semibold hover:underline">{produk?.nama_kategori}</td>
       </tr>
     </tabel>
    </MenuLayout>
    <MenuLayout size="text-md" title="Deskripsi Produk">
     <div className="w-full flex flex-wrap">
     <p className="font-inter text-sm text-slate-700">{produk?.deskripsi}</p>
     </div>
    </MenuLayout>
  </div>
  
  <PopUpLayout fixed={true} open={isOpen}>
       <div className="h-full py-1 w-screen">
        <MenuBack event={()=>setIsOpen(prev=>!prev)} title="Menu Utama"/>
        <CardAkun/>
        <MenuLayout title="Aktifitas Saya">
          <Button event={()=>navigate('/history')} title="Daftar Transaksi" icon={<GoChecklist/>}/>
          <Button event={()=>navigate('/')} title="Mengikuti" icon={<PiUsersLight/>}/>
          <Button event={()=>navigate('/keranjang')} title="Keranjang Saya" icon={<CiShoppingCart/>}/>
        </MenuLayout>
        <MenuLayout title="Semua Kategori">
          <Button event={()=>navigate('/category')} title="Kategori" icon={<PiHandbagThin/>}/>
        </MenuLayout>
        <MenuLayout title="Pusat Bantuan">
          <Button event={()=>navigate('/')}
          title="Hubingi Kami" 
          icon={<RiCustomerService2Fill/>}/>
        </MenuLayout>
       </div>
    </PopUpLayout>
    <CardPenjual data={produk} isFollowing={isFollowing}/>
    <CardBeli beli={handleBeli} keranjang={handleAddKeranjang}/>
    {
      coment?.map((m,i)=>{
      return <UlasanPembeli key={m.id} data={m}/>
      })
    }
    <OptionLayout event={()=>setIsAddKeranjang(prev=>!prev)} open={isAddKeranjang} produk={produk}/>
    <OptionBeliLayout event={()=>setIsBuy(prev=>!prev)} open={isBuy} produk={produk}/>
  </div>
    ) : <ProdukDetailSkeleton/>
}