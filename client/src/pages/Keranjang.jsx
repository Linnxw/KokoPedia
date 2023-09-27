import MenuBack from "@components/MenuBack"
import {useNavigate} from "react-router-dom"
import withReactContent from 'sweetalert2-react-content'
import CardKeranjang from "@components/CardKeranjang"
import {useEffect,useState} from "react"
import {axiosJwt} from "../api/interceptor"
import KeranjangSkeleton from "../components/Skeleton/KeranjangSkeleton"
import Swal from 'sweetalert2'
import {motion} from "framer-motion"
export default function Keranjang(){
  const MySwal = withReactContent(Swal)
  const navigate=useNavigate()
 const [keranjang,setKeranjang]=useState(null)
 const [beli,setBeli] = useState(null)
  useEffect(()=>{
    getKeranjang()
  },[])
  
  const getKeranjang=async()=>{
    try{
      const response=await axiosJwt.get("/keranjang")
      setKeranjang(response.data)
    }catch(err){
      console.log(err)
    }
  }
const handleCheckBeli = (data) =>{
  if(beli){
  MySwal.fire({
  title: 'Ganti product?',
  text: "Kamu hanya bisa Checkout satu barang dalam satu waktu",
  icon: 'warning',
  showCancelButton: true,
  confirmButtonColor: '#3085d6',
  cancelButtonColor: '#d33',
  confirmButtonText: 'ya,ganti Produk!'
}).then((result) => {
  if (result.isConfirmed) {
    setBeli(data)
    MySwal.fire(
      'mengganti!',
      'Berhasil Mengganti product.',
      'success'
    )
  }
})
  }else{
   setBeli(data)
  }
 }
 
 const handleBeli = () =>{
   if(beli){
    navigate("/checkout/" + beli.id + "?jumlah=" + beli.jumlah)
   }else{
     MySwal.fire({
      icon: 'error',
      title: 'Oops...',
      text: 'Anda belum memilih Produk!'
    })
   }

 }
  return (
    <div>
    <motion.div 
    initial={{y:'100vh'}}
    animate={{y:0}}
    transition={{duration:0.5}}
    className="w-screen py-2 h-[1000px]">
  
     <MenuBack title="Keranjang Saya" event={()=>navigate("/home")}/>
     <div className="flex flex-col items-center gap-3 bg-slate-100">
     {
       keranjang ? (keranjang.map((data,i)=>{
        return <CardKeranjang beli={handleCheckBeli} data={data} key={i} refresh={()=>getKeranjang()}/>
       })) : (<KeranjangSkeleton cards={3}/>)
     }
     </div>
    </motion.div>
    <div className="w-screen fixed bottom-0 bg-whitePrimary flex h-16 items-center justify-center">
        <button onClick={handleBeli} className={`rounded border ${beli ? "bg-greenPrimary text-whitePrimary" : "bg-whitePrimary text-greenPrimary"} border border-greenPrimary font-inter font-bold text-[.8rem] text-greenPrimary w-[96%] text-center h-11 px-10`}>Beli Sekarang</button>
      </div>
    </div>
    )
}