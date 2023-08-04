import {reset,getProduk} from "../../redux/slice/produkSlice"
import {useDispatch,useSelector} from "react-redux"
import pro from "/pro.png"
import CardProduk from "../CardProduk"
import {useEffect} from "react"
import img from "/gopay.png"
export default function ProdukLain(){
  const dispatch=useDispatch()
  const {produk,isError,msg}=useSelector(state=>state.produk)
  useEffect(()=>{
    dispatch(getProduk())
    console.log(produk)
  },[dispatch])
  return (
    <div className="w-screen border-t-2 border-slate-200 font-noto">
     <div className="py-2 px-2 text-blackTxt font-bold">
      <p>Produk Lainnya</p>
     </div>
     <div className="w-screen p-2 gap-x-2 gap-y-1 grid grid-cols-2 place-items-center">
     {
       produk?.map((m,i)=>{
         return (
          <CardProduk cashback={true} title={m.nama_produk} img={m.url_foto_produk} kota={m.alamat} terjual={m.terjual} harga={m.harga} width="w-40" height="h-36" gap="gap-1" level={pro}/>
           )
       })
     }
     </div>
    </div>
    )
}