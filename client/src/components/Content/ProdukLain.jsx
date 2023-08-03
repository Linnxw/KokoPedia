import {reset,getProduk} from "../../redux/slice/produkSlice"
import {useDispatch,useSelector} from "react-redux"
import CardProduk from "../CardProduk"
import {useEffect} from "react"
import img from "/gopay.png"
export default function ProdukLain(){
  const dispatch=useDispatch()
  const {produk,isError,msg}=useSelector(state=>state.produk)
  useEffect(()=>{
    dispatch(getProduk())
    console.log(produk)
    return ()=>{
      dispatch(reset())
    }
  },[])
  return (
    <div className="w-screen border-t-2 border-slate-200 font-noto">
     <div className="py-2 px-2 text-blackTxt font-bold">
      <p>Produk Lainnya</p>
     </div>
     <div className="w-screen p-2 gap-x-2 gap-y-1 grid grid-cols-2 place-items-center">
       <CardProduk title="laptop rog" img={img} kota="Kudus" terjual={28} harga={37000000} width="w-40" height="h-36" gap="gap-1"/>
       <CardProduk title="laptop rog" img={img} kota="Kudus" terjual={28} harga={37000000} width="w-40" height="h-36" gap="gap-1"/>
       <CardProduk title="laptop rog" img={img} kota="Kudus" terjual={28} harga={37000000} width="w-40" height="h-36" gap="gap-1"/>
       <CardProduk title="laptop rog" img={img} kota="Kudus" terjual={28} harga={37000000} width="w-40" height="h-36" gap="gap-1"/>
       <CardProduk title="laptop rog" img={img} kota="Kudus" terjual={28} harga={37000000} width="w-40" height="h-36" gap="gap-1"/>
       <CardProduk title="laptop rog" img={img} kota="Kudus" terjual={28} harga={37000000} width="w-40" height="h-36" gap="gap-1"/>
       <CardProduk title="laptop rog" img={img} kota="Kudus" terjual={28} harga={37000000} width="w-40" height="h-36" gap="gap-1"/>

     </div>
    </div>
    )
}