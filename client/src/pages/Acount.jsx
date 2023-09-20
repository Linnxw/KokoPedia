import NavbarLayout from "../layout/NavbarLayout"
import CardMyAkun from "@components/CardMyAkun"
import CardSetting from "@components/CardSetting"
import AkunLayout from "../layout/AkunLayout"
import CardInventory from "@components/CardInventory"
import {BsShop} from "react-icons/bs"
import SettingLayout from "../layout/SettingLayout"
import {LuBellRing} from "react-icons/lu"
import {PiLockKey} from "react-icons/pi"
import {BiWallet} from "react-icons/bi"
import {RiBankLine} from "react-icons/ri"
import {FiLogOut} from "react-icons/fi"
import gopay from "/gopay.png"
import {logout,reset} from "../redux/slice/logoutSlice"
import {useDispatch} from "react-redux"
import card from "/kokocard.png"
import saldo from "/saldo.png"
import tokomember from "/tokomember.png"
import topquest from "/TopQuest.png"
import Coupons from "/Coupons.png"
import {motion} from "framer-motion"
export default function Acount(){
  const dispatch = useDispatch()
  const setting=[
      {
       icon:<BsShop/>,
       title:"Daftar Alamat" ,
       subtitle:"Atur alamat pengiriman belanjaan"
    },
    {
      icon:<RiBankLine/>,
      title:"Rekening Bank",
      subtitle:"Tarik Saldo Tokopedia ke rekening tujuan"
    },
    {
       icon:<BiWallet/>,
      title:"Pembayaran Instan",
      subtitle:"E-Wallet, kartu kredit, & debit instan terdaftar"
    },
    {
       icon:<BiWallet/>,
      title:"Keamanan Akun",
      subtitle:"Kata sandi, PIN , & verifikasi data diri"
    },
    {
       icon:<LuBellRing/>,
      title:"Notifikasi",
      subtitle:"Atur segala jenis pesan notifikasi"
    }
    ]
  const data=[
    {
      title:"Saldo & Points",
      icons:false,
      data:[
        {
          img:gopay,
          title:"Aktifkan",
          desc:"KokoPedia card",
          status:true
        },
        {
          img:card,
          title:"Daftar Sekarang",
          desc:"Gopay & Coins",
          status:true
        },
        {
          img:saldo,
          title:"Rp 0",
          desc:"Saldo KokoPedia",
          status: false 
        },
        ]
    },
    {
      title:"Member Silver",
      icons:true,
      data:[
        {
          img:tokomember,
          title:"KokoMember",
          desc:"0 Toko",
          status:false,
          reverse:true
        },
        {
          img:topquest,
          title:"Misi Seru",
          desc:"5 Tantangan",
          status:false,
          reverse:true
        },
        {
          img:Coupons,
          title:"Kupon Saya",
          desc:"27 Kupon",
          status:false,
          reverse:true
        },
        ]
    }
    ]
  
  const handleLogout =() =>{
    dispatch(logout())
    dispatch(reset())
  }
  return (
   <motion.div
  className="w-screen min-h-screen bg-slate-100 pb-14 flex flex-col gap-2"
  initial={{opacity:0}}
  animate={{opacity:1}}
  transition={{duration:0.5}}
  >
   <div className="font-inter font-bold text-xl text-slate-800 pt-2 text-left px-1">
     <h1>Akun saya</h1>
   </div>
   <CardMyAkun/>
   {
     data.map((m,i)=>{
       return (
       <AkunLayout title={m.title} icon={m.icons} key={i}>
        <CardInventory data={m.data} key={i}/>
       </AkunLayout>
       )
     })
   }
   <SettingLayout>
   {
     setting.map((m,i)=>(
      <CardSetting key={i} icon={m.icon} title={m.title} subtitle={m.subtitle}/>
       ))
   }
   </SettingLayout>
   <div onClick ={handleLogout} className = "w-full p-2 gap-2 bg-white flex items-center">
     <span className="text-xl text-slate-600 py-1"><FiLogOut/></span>
     <div className="flex flex-col items-start justify-center p-1 text-slate-800">
      <h1 className="font-inter font-semibold text-md leading-tight">Logout</h1>
   </div>
   </div>
   <NavbarLayout/>
  </motion.div>
  )
}