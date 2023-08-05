import CardProduk from "../CardProduk"
import NotFound from "../NotFound"
import gopay from "/gopay.png"
import {useEffect,useState} from "react"
import {useDispatch,useSelector} from "react-redux"
import pro from "/pro.png"
import {getProdukKategory,reset} from "../../redux/slice/produkKategorySlice"
import {PiWarningCircleLight} from "react-icons/pi"
export default function Terlaris(){
  const [kategory,setKategory]=useState("Laptop")
  const dispatch=useDispatch()
  const {produk,msg,isError}=useSelector(state=>state.produkKategory)
  useEffect(()=>{
    dispatch(getProdukKategory(kategory))
    return ()=>{
      dispatch(reset())
    }
  },[])
  
  const getByKategory=(kategorys)=>{
    setKategory(kategorys)
    dispatch(reset())
    dispatch(getProdukKategory(kategorys))
  }
  
  const pilihanKategory=['Laptop','Earphone','Handphone','Pakaian']
  return (
  <div className="w-screen border-t-2 border-slate-200 font-noto flex flex-col gap-2">
   <div className="w-full px-3 flex justify-between items-center">
     <div className="text-md font-bold tracking-wide text-blackTxt">
       <p>Terlaris</p>
     </div>
     <div className="text-sm font-bold tracking-wide text-greenPrimary">
       <p>Lihat semua</p>
     </div>
   </div>
   <div className="px-3 w-screen overflow-scroll scrollbar">
    <div className="flex inline-block gap-2">
    {
      pilihanKategory.map((m,i)=>{
        return <button className={`px-3 w-auto py-1 text-md rounded-xl flex border border-grayTxt ${m === kategory ? "border-greenPrimary text-greenPrimary" : "text-blackTxt"}`} key={i} onClick={()=>getByKategory(m)}>{m}</button>
      })
    }
    </div>
   </div>
   <div className="flex h-56 w-screen overflow-x-scroll px-1 scrollbar">
   <div className="flex gap-1 min-w-min">
   {
    isError ? (
      <NotFound 
      icon={<PiWarningCircleLight/>} 
      title="Tidak ada produk dengan kategori terkait"/>
      ):(
     produk.map((m,i)=>{
      return (
      <CardProduk
      key={i}
      title={m.nama_produk} 
      cashback={true} 
      top={i+1}
      img={m?.url_foto_produk} 
      kota={"Kudus"} 
      terjual={m.terjual}
      harga={m.harga} 
      level={pro}/>
      )
   })
   )
   }
   </div>
   </div>
  </div>
  )
}