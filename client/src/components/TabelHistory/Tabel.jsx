import {useEffect} from "react"
export default function Tabel(props){
const {key,no,id,jumlah,nama,harga,event,detail}=props
useEffect(()=>{
  event(id)
},[])
const tanggal= detail?.tgl?.replace("_","-")
  return (
  <div className="w-full overflow-y-scroll">
   <tabel className="table-auto mx-auto text-blackTxt font-noto font-medium text-[.8rem] md:text-xl">
     <tr className="bg-whitePrimary">
      <td className="p-2 md:p-4 text-grayTxt whitespace-nowrap tracking-wide text-left">{no}</td>
      <td className="p-2 md:p-4 whitespace-nowrap tracking-wide font-black text-left">{nama}</td>
      <td className="p-2 md:p-4 whitespace-nowrap tracking-wide text-left">{jumlah}</td>
      <td className="p-2 md:p-4 whitespace-nowrap tracking-wide text-left">{harga}</td>
      <td className="p-2 md:p-4 tracking-wide text-left text-greenPrimary font-bold whitespace-nowrap md:hidden" onClick={()=>event(id)}>detail</td>
      <td className="p-2 md:p-4 whitespace-nowrap tracking-wide hidden md:inline-block text-left">{detail?.berat / 10 /10}</td>
      <td className="p-2 md:p-4 whitespace-nowrap tracking-wide hidden md:inline-block text-left">{detail?.nma_penjual}</td>
      <td className="p-2 md:p-4 whitespace-nowrap tracking-wide md:inline-block hidden text-left">{detail?.nma_pembeli}</td>
      <td className="p-2 md:p-4 whitespace-nowrap tracking-wide hidden md:inline-block text-left">{tanggal}</td>
    </tr>
   </tabel>
   </div>
  )
}