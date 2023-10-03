import {motion} from "framer-motion"
import MenuBack from "../components/MenuBack"
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
import {useLocation,useParams} from "react-router-dom"
import {IoIosArrowDown} from "react-icons/io"
import CheckoutSkeleton from "../components/Skeleton/CheckoutSkeleton"
import {axiosJwt} from "../api/interceptor"
import {useNavigate} from "react-router-dom"
import {convertRupiah} from "../helper/convertRupiah"
import {useProduk} from "@hooks/useProduk"
import CheckoutAlamat from '@components/CheckoutAlamat'
import CheckoutProduk from '@components/CheckoutProduk'
export default function Checkout(props){
 const urlLocation = useLocation();
 const navigate = useNavigate()
 const {id} = useParams()
 const queryParams = new URLSearchParams(urlLocation.search)
 const MySwal = withReactContent(Swal)
 const jumlah = queryParams.get("jumlah")
 const [data,msg] = useProduk("produk/" + id)
 
 const total = data?.harga * parseInt(jumlah)
 const subTotal = convertRupiah(total)
 const handleCheckout = async () =>{
   console.log(data)
   try{
     const response = await axiosJwt.post("beli/" + data.id + "?jumlah=" + jumlah)
     console.log(response)
    if(response.status === 200){
    MySwal.fire({
      title: <strong>Sukses Membeli Produk!</strong>,
      html: <i>Lihat history anda</i>,
      icon: 'success'
    }).then(() => {
      navigate("/history")
    })
    }
   }catch(err){
     console.log(err)
   }
 }

  return (
 <motion.div
  initial={{opacity:0}}
  animate={{opacity:1}}
  transition={{duration:0.5}} 
  className="w-screen bg-slate-100">
    <div className="py-2 bg-white">
     <MenuBack event={()=>navigate(-1)} title="Pengiriman" center={false}/>
    </div>
    {
      data ? (   <div className="w-full flex flex-col items-center gap-2">
      <CheckoutAlamat/>
      <CheckoutProduk data={data} jumlah={jumlah}/>
      <div className="w-full bg-white p-2 flex justify-between items-center">
        <p className="font-noto text-slate-800 text-sm">Subtotal</p>
        <div className="flex gap-2 items-center">
          <p className="font-inter font-semibold tracking-tight text-sm">{subTotal}</p>
          <span className="text-slate-300"><IoIosArrowDown/></span>
        </div>
      </div>
     <div className="w-full bg-white px-2 py-4 flex justify-between items-center">
      <div className="flex flex-col gap-1">
       <p className="font-inter text-slate-800 text-sm">Ringkasan Belanja</p>
       <p className="font-noto text-slate-800 text-sm">Total harg ({jumlah} barang)</p>
      </div>
       
        <div className="flex items-end">
          <p className="font-inter font-semibold tracking-tight text-sm">{subTotal}</p>
        </div>
      </div>
      <div className="w-full bg-white px-2 py-4 flex justify-between items-center">
        <div className="flex flex-col gap-1">
         <p className="font-inter text-slate-800 text-sm">Total belanja</p>
         <p className="font-noto text-slate-800 text-sm">{subTotal}</p>
        </div>
         
       <button onClick={handleCheckout} className="px-6 py-3 bg-greenPrimary text-white rounded font-inter font-bold">Beli Sekarang</button>
      </div>
    </div>) : <CheckoutSkeleton/>
    }
 
     
  </motion.div>
    )
}