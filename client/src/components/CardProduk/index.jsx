import freeOngkir2 from "/20230804_212108.png"
import pro from "/pro.png"
import {motion} from "framer-motion"
export default function index(props){
const {img,
id,
level,
title,
harga,
kota,
cashback=false,
top=false,
terjual,
width='w-36',
height='h-28',
gap="gap-2px",
initial={ opacity: 0},
animate={ opacity: 1}
}=props

  const convertRupiah=(data)=>{
    const rupiah = data.toLocaleString('id-ID', { style: 'currency', currency: 'IDR' });
    return rupiah
  }
  
  return (
    <motion.div
      className={`${width} rounded overflow-hidden font-noto border border-slate-200 box min-h-min static z-10`}
      onClick={()=>props.event(props.id)}
      initial={initial}
      animate={animate}
      transition={{
        duration: 0.3,
        ease: [0, 0.71, 0.2,1]
      }}>
    <div className={`w-full ${height} relative`}>
      <img src={img} className="w-full h-full object-cover"/>
      <img src={freeOngkir2} className="h-6 absolute -bottom-1 -left-1 object-cover bg-white rounded-tr-xl"/>
    </div>
    <div className={`flex flex-col items-start p-1 ${gap}`}>
    {
      top && (
      <div className="w-7 h-5 flex items-center justify-end px-2 text-[.7rem] text-whitePrimary rounded-r-full bg-[#E1AA1C] font-bold">#{top}</div>
      )
    }
    <div className="text-md py-[2px] leading-none font-noto font-medium text-blackTxt">
     <p>{title}</p>
    </div>
    <div className="text-[.9rem] font-inter font-semibold tracking-wide">
     <p>{convertRupiah(harga)}</p>
    </div>
    {
      cashback && (
      <div className="p-[2px] font-noto rounded bg-green-200 text-[.6rem] flex items-center justify-center text-greenPrimary font-bold">
       <p>Cashback</p>
      </div>
      )
    }
    <div className="text-sm text-grayTxt font-noto flex items-center justify-center gap-1">
    <div className="flex items-center justify-center">
      <img src={level} className="w-4"/>
    </div>
     <p>{kota}</p>
    </div>
    <div className="text-[.7rem] text-blackTxt tracking-wide">
     <p>Terjual {terjual}</p>
    </div>
    </div>
 </motion.div>
  )
}