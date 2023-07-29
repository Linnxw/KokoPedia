import Header from "./Header"
import Tabel from "./Tabel"
export default function index({history,event,detail}){
console.log(history)
  return (
  <div className="w-[300px] md:w-screen md:px-5 md:py-10 mx-auto flex flex-col bg-whitePrimary py-5 px-2 rounded items-center">
    <Header/>
    {
      history?.map((m,i)=> <Tabel key={i} jumlah={m.jumlah} no={i+1} id={m.id} nama={m.nma_produk} harga={m.ttl_jual} event={event} detail={detail}/>
    )
    }

  </div>
  )
}