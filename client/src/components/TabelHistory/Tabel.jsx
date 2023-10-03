import {useEffect} from "react"
export default function TabelRows(props){
const {key,no,id,jumlah,nama,harga,event,detail}=props
useEffect(()=>{
  if(id){
   event(id)
  }

},[])
const tanggal= detail?.tgl?.replace("_","-")
  return (
  <>
   <td className="p-2 md:p-4 text-grayTxt whitespace-nowrap tracking-wide text-left">{no}</td>
      <td className="p-2 md:p-4 whitespace-nowrap tracking-wide text-left">{nama}</td>
      <td className="p-2 md:p-4 whitespace-nowrap tracking-wide text-left">{jumlah}</td>
      <td className="p-2 md:p-4 whitespace-nowrap tracking-wide text-left">{harga}</td>
      <td className="py-1 px-2 md:p-4 tracking-wide text-left bg-greenPrimary text-white rounded font-bold whitespace-nowrap md:hidden" onClick={()=>event(id)}>detail</td>
      <td className="p-2 md:p-4 whitespace-nowrap tracking-wide hidden md:inline-block text-left">{detail?.berat / 10 /10}</td>
      <td className="p-2 md:p-4 whitespace-nowrap tracking-wide hidden md:inline-block text-left">{detail?.nma_penjual}</td>
      <td className="p-2 md:p-4 whitespace-nowrap tracking-wide md:inline-block hidden text-left">{detail?.nma_pembeli}</td>
      <td className="p-2 md:p-4 whitespace-nowrap tracking-wide hidden md:inline-block text-left">{tanggal}</td>
   </>
  )
}