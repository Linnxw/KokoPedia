import pro from '/pro.png'
import ongkir from "/ongkir.png"
import {convertRupiah} from "../../helper/convertRupiah"
import {MdArrowForwardIos} from "react-icons/md"
import {BsTruck} from "react-icons/bs"
export default function index({jumlah,data}){
  const harga = convertRupiah(data?.harga)
  return (
   <div className="w-full bg-white p-4 flex flex-col items-center gap-1 font-inter font-semibold">
     <div className="font-normal w-full">
       <div className="flex items-center gap-1">
         <img src={data?.url_foto_profil} className="w-7 h-7 rounded-full"/>
         <p>{data?.nama}</p>
       </div>
       <div className="py-1 flex font-noto">
         <div className="border-r pr-2 border-r-slate-600">
            <p>{data?.alamat}</p>
         </div> 
         <div className="px-2">
            <img src={ongkir} className="h-5"/>
         </div> 
       </div> 
     </div>
     <div className="flex items-start w-full">
     <div className="">
       <img src={data?.url_foto_produk} className="w-20 h-20 object-cover rounded-md"/>
     </div>
 
      <div className="font-inter p-1 h-full flex flex-col">
        <h6>{data?.nama_produk}</h6>
        <p className="font-noto font-normal text-[.6rem]">{jumlah} Barang {data?.berat} gram</p>
        <p className="text-sm">{harga && harga}</p>
      </div>
     </div>
     <div className="w-full my-5 border border-slate-300 p-2 flex items-center justify-between rounded-md">
     <div className="flex gap-2">
      <span className="text-greenPrimary text-xl"><BsTruck/></span>
      <p className="text-sm font-inter">Pilih Pengiriman</p>
     </div>
      <span className="text-slate-400"><MdArrowForwardIos/></span>
     </div>
   </div>
    )
}