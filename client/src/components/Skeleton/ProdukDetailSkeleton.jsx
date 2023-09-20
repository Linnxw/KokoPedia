import Skeleton from 'react-loading-skeleton'
import {useState} from "react"
import {useNavigate,useParams} from "react-router-dom"
import {PiUsersLight} from "react-icons/pi"
import {PiHandbagThin} from "react-icons/pi"
import {GoChecklist} from "react-icons/go"
import {CiShoppingCart} from "react-icons/ci" 
import Button from "@components/Button"
import MenuBack from "@components/MenuBack"
import PopUpLayout from "../../layout/PopUpLayout"
import CardAkun from "@components/CardAkun"
import MenuLayout from "../../layout/MenuLayout"
import {AiOutlineArrowLeft} from "react-icons/ai"
import {RiCustomerService2Fill} from "react-icons/ri"
import {CiSearch} from "react-icons/ci"
import 'react-loading-skeleton/dist/skeleton.css'
export default function ProdukDetailSkeleton({keranjang}){
   const [active,setActive]=useState(false)
  const [isOpen,setIsOpen]=useState(false)
  const navigate=useNavigate()
   const handleChange=()=>{
    navigate("/home")
  }
  return (
  <div className="w-screen overflow-x-hidden pb-14">
  <div className={`w-screen translateZ(0) flex ${active ? "bg-whitePrimary" : "bg-transparent"} items-center justify-start font-noto tracking-wide text-blackTxt text-sm p-2 gap-2 z-40 top-0 fixed`}>
    <span className="text-3xl flex items-center justify-center text-slate-400" onClick={handleChange}><AiOutlineArrowLeft/></span>
    <div className="flex items-center text-grayTxt w-3/5 relative flex items-center justify-start" onClick={()=>navigate("/search")}>
      <input type="teks" className="absolute left-1 bg-transparent flex items-center text-slate-400 peer-focus "/>
      <div className={`absolute left-1 flex items-center peer-focus:hidden`}>
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
   <Skeleton className="w-full h-80"/>
   <div className="py-4 px-3 flex flex-col gap-y-1 font-inter bg-white">
    <div className="w-full flex justify-between">
     <div className="flex gap-2 items-center font-inter">
      <Skeleton width={180} height={30}/>
      <Skeleton width={90} height={30}/>
    </div>
    
    </div>
     <Skeleton width={150} height={18}/>
     <div className="flex gap-2 pt-2 text-[.8rem]">
       <Skeleton width={80} count={2} height={17}/>
     </div>
   </div>
   
   
     <div className="w-screen px-2 flex flex-col items-start">
     <div className={`w-screen font-noto text-blackTxt font-bold py-4`}>
      <Skeleton width={150} height={20}/>
     </div>
     <div className={`w-screen flex flex-col gap-3 px-1 items-start`}>
     <tabel className="tabel-auto font-inter text-sm">
       <tr className="">
         <td className="w-40 py-1 text-slate-500 text-left font-thin"><Skeleton width={140} height={18}/></td>
         <td className="text-slate-700"><Skeleton width={60} height={18}/></td>
       </tr>
       <tr className="">
         <td className="w-40 py-1 text-slate-500 text-left font-thin"><Skeleton width={140} height={18}/></td>
         <td className="text-slate-700"><Skeleton width={60} height={18}/></td>
       </tr>
       <tr className="">
        <td className="w-40 py-1 text-slate-500 text-left font-thin"><Skeleton width={140} height={18}/></td>
         <td className="text-slate-700"><Skeleton width={60} height={18}/></td>
       </tr>
     </tabel>

     </div>
    </div>
   
     <div className="w-screen px-2 flex flex-col items-start">
     <div className={`w-screen font-noto text-blackTxt font-bold py-4`}>
      <Skeleton width={150} height={20}/>
     </div>
     <div className={`w-screen flex flex-col gap-3 px-1 items-start`}>
     <div className="w-full flex flex-wrap">
     <Skeleton width={290} height={15} count={4}/>
     </div>
     </div>
    </div>
  </div>
    <PopUpLayout open={isOpen}>
       <div className="h-full py-1 w-screen">
        <MenuBack event={()=>setIsOpen(prev=>!prev)} title="Menu Utama"/>
        <CardAkun/>
        <MenuLayout title="Aktifitas Saya">
          <Button title="Daftar Transaksi" icon={<GoChecklist/>}/>
          <Button title="Mengikuti" icon={<PiUsersLight/>}/>
          <Button title="Keranjang Saya" icon={<CiShoppingCart/>}/>
        </MenuLayout>
        <MenuLayout title="Semua Kategori">
          <Button title="Kategori" icon={<PiHandbagThin/>}/>
        </MenuLayout>
        <MenuLayout title="Pusat Bantuan">
          <Button title="Hubingi Kami" icon={<RiCustomerService2Fill/>}/>
        </MenuLayout>
       </div>
    </PopUpLayout>
    <div className="w-screen px-2 py-6 flex items-center">
      <div className="h-full flex items-center justify-center">
       <Skeleton circle width={50} height={50}/>
      </div>
      <div className="w-full flex flex-col px-2 items-start font-inter text-[.7rem] text-blackTxt">
      <div className="w-full flex items-center justify-start gap-1 font-inter font-semibold text-lg">
        <Skeleton circle width={18} height={18}/>
        <Skeleton width={180} height={23}/>
      </div>
      <div className="w-full flex items-center text-slate-700 justify-start gap-1">
       <Skeleton width={80} height={18}/>
      </div>
      <div className="w-full flex items-center justify-start text-slate-700 gap-1">
        <Skeleton width={80} height={18}/>
      </div>
      </div>
     <Skeleton width={90} height={30}/>
    </div>
  </div>
    )
}