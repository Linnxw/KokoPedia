import Header from "./Header"
import Tabel from "./Tabel"
export default function index({history,event}){
console.log(history)
  return (
  <div className="w-[300px] mx-auto flex flex-col bg-whitePrimary items-center">
    <Header/>
    {
      history?.map((m)=> <Tabel key={m.id} jumlah={m.jumlah} id={m.id} nama={m.nma_produk} harga={m.ttl_jual} event={event}/>
    )
    }

  </div>
  )
}