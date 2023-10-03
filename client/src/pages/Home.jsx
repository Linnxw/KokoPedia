import NavbarLayout from "../layout/NavbarLayout"
import HeaderHome from "@components/HeaderHome"
import Content from "@components/Content"
import MenuBack from "@components/MenuBack"
import PopUpLayout from "../layout/PopUpLayout"
import CardAkun from "@components/CardAkun"
import MenuLayout from "../layout/MenuLayout"
import {RiCustomerService2Fill} from "react-icons/ri"
import {PiUsersLight} from "react-icons/pi"
import {PiHandbagThin} from "react-icons/pi"
import {CiShoppingCart} from "react-icons/ci" 
import {useNavigate} from "react-router-dom"
import {GoChecklist} from "react-icons/go"
import Button from "@components/Button"
import {useState} from "react"
import {motion} from "framer-motion"
export default function Home(){
  const [isOpen,setIsOpen]=useState(false)
  const navigate = useNavigate()
  const handlePopUp=()=>{
    setIsOpen(prev=>!prev)
  }
  
return (
 <motion.div 
  initial={{opacity:0}}
  animate={{opacity:1}}
  transition={{duration:0.5}}
  >
    <HeaderHome event={handlePopUp}/>
    <Content/>
    <NavbarLayout/>
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
  </motion.div>
  )
}