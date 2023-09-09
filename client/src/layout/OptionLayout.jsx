import {useEffect,useState} from "react"
import MenuBack from "../components/MenuBack"
import {useSelector,useDispatch} from "react-redux"
import {add} from "../redux/slice/addKeranjangSlice"
import CardBeli from "../components/CardBeli"
import Button from "../components/CardBeli/Button"
import {HiOutlinePlusSm} from "react-icons/hi"
import {HiOutlineMinusSm} from "react-icons/hi"
import {RxCross2} from "react-icons/rx"
export default function OptionLayout({open,produk,event}){
  
  const dispatch = useDispatch()
  const Keranjang = useSelector(state=>state.addKeranjang)
  const [qty,setQty] = useState(0)
  
  useEffect(()=>{
     console.log(Keranjang  )
  },[])
 
 const handleAddKeranjang = async () =>{
   const data = {
     id:produk.id,
     jumlah:qty
   }
   dispatch(add(data))
 }
  return (
    <div className={`w-screen border-t border-slate-700 z-30 p-2 bg-white fixed ${open ? "bottom-0" : "-bottom-96"} rounded-t transition-all ease-in-out duration-300`}>
      <div className="w-screen py-1 flex justify-start">
       <div className="flex absolute left-1 items-center justify-center" onClick={event}>
        <span className="text-2xl text-blackTxt flex items-center justify-center"><RxCross2/></span>
       </div>
       <div className={`flex w-screen justify-start px-10 items-center font-inter font-bold tracking-wide`}>
       <p>Varian</p>
       </div>
      </div>
      <div>
        <div className="w-full p-3 flex items-center gap-2">
          <img className="w-28 h-28 rounded"src={produk.url_foto_produk}/>
          <div className="flex flex-col items-start justify-center">
          <h3 className="text-sm font-inter font-semibold text-slate-800">Harga: {produk.harga}</h3>
            <p className="text-sm italic font-noto text-slate-800">Stock: {produk.stok}</p>
          </div>
      
        </div>
        <div className="px-2 py-4 ">
          <div className="h-7 w-24 rounded flex items-center justify-center border border-greenPrimary text-white">
            <span onClick=
            {()=>{
              if(qty > 0){
                setQty(prev => prev - 1)
              }
            }}
              className="h-full inline-block bg-greenPrimary flex items-center justify-center w-1/3"><HiOutlineMinusSm/></span>
            <span className="text-sm font-inter h-full flex items-center overflow-hidden  w-1/3 px-3 inline-block text-black border-x border-slate-300 justify-center">{qty}</span> 
            <span onClick=
           {()=>{
              if(qty < produk.stok){
                setQty(prev => prev + 1)
              }
            }} className="h-full inline-block bg-greenPrimary w-1/3 flex items-center justify-center">
            <HiOutlinePlusSm/>
            </span>
          </div>
        </div>
        <div className="w-full bg-whitePrimary flex h-16 gap-1 items-center justify-evenly">
        <Button green={false}>Beli Langsung</Button>
        <Button green={true} event= {handleAddKeranjang}>Tambah Keranjang ({qty})</Button>
      </div>
      </div>
    </div>
    )
}