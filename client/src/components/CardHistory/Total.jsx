import {convertRupiah} from "../../helper/convertRupiah"
export default function Total({data}){
  const harga=convertRupiah(data.ttl_harga)
  return (
    <div className="flex w-full p-1 justify-between items-center">
     <div className="flex flex-col justify-center items-start font-inter">
       <p className="text-[.6rem] text-slate-600">Total Belanja</p>
       <p className="text-sm text-slate-800">Rp {harga}</p>
     </div>
     <button className="rounded  text-[.8rem] py-1 px-4 text-white bg-greenPrimary font-inter">Beri Ulasan</button>
    </div>
    )
}