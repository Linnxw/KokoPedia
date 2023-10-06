import {reset,getProduk} from "../../redux/slice/produkSlice"
import {useDispatch,useSelector} from "react-redux"
import ProdukSkeleton from "../Skeleton/ProdukSkeleton"
import {useNavigate} from "react-router-dom"
import pro from "/pro.png"
import NotFound from "../NotFound"
import CardProduk from "../CardProduk"
import {useEffect} from "react"
import img from "/gopay.png"
export default function ProdukLain(){
  const {produk,isError,msg}=useSelector(state=>state.produk)
  
  const dispatch=useDispatch()
  const navigate=useNavigate()
  
  useEffect(()=>{
    dispatch(getProduk())
  },[dispatch])
  
  const handleNavigate=(id)=>{
    navigate(`/produk/${id}`)
  }
 
  return (
    <div className="w-screen border-t-2 border-slate-200 font-noto mb-14">
     <div className="py-2 px-2 text-blackTxt font-bold">
      <p>Produk Lainnya</p>
     </div>
     <div className="w-screen p-2 gap-x-2 gap-y-1 grid grid-cols-2 place-items-center">
     {
       produk?.length > 0 ? (produk.map((m,i)=>{
         return <CardProduk key={m.id} cashback={true} title={m.nama_produk} img={m.url_foto_produk} kota={m.alamat} terjual={m.terjual} harga={m.harga} width="w-40" height="h-36" id={m.id} event={handleNavigate} gap="gap-1" level={pro}/>
       })) : (<ProdukSkeleton width="w-40" height="h-36" cashback={true} cards={6}/>)
     }
     </div>
    </div>
    )
}