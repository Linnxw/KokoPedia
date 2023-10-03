import Header from "./Header"
import TabelRows from "./Tabel"
export default function index({history,event,detail}){
  return (
  <div className="w-[300px] md:w-screen md:px-5 md:py-10 mx-auto flex flex-col bg-whitePrimary py-5 px-2 rounded items-center">
    <Header/>
    <div className="w-full overflow-y-scroll">
     <tabel className="table-auto mx-auto text-blackTxt font-noto text-[.8rem] md:text-xl">
     <thead>
     <tr>
      <td className="p-2 md:p-4 text-grayTxt whitespace-nowrap tracking-wide text-left">No</td>
      <td className="p-2 md:p-4 whitespace-nowrap tracking-wide text-left">Nama</td>
      <td className="p-2 md:p-4 whitespace-nowrap tracking-wide text-left">jumlah</td>
      <td className="p-2 md:p-4 whitespace-nowrap tracking-wide text-left">Harga</td>
      <td className="p-2 md:p-4 whitespace-nowrap tracking-wide text-left">Event</td>
     
     </tr>
     </thead>
     <tbody className="bg-whitePrimary">
      {
      history?.map((m,i)=> (
        <tr>  <TabelRows key={i} jumlah={m.jumlah} no={i+1} id={m.id} nama={m.nma_produk} harga={m.ttl_jual} event={event} detail={detail}/></tr>
      
      ))
      }
    </tbody>
   </tabel>
   </div>
   </div>
  )
}