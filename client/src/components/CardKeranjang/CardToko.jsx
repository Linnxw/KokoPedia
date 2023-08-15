import {FaCheck} from "react-icons/fa"
import pro from "/pro.png"
import {GoTrash} from "react-icons/go"
import {useState,useEffect} from "react"
import {axiosJwt} from "../../api/interceptor"
import {convertRupiah} from "../../helper/convertRupiah"
export default function CardToko({data, refresh}){
  const [count,setCount]=useState(data.jumlah)
  const [priece,setPriece]=useState(0)
  useEffect(()=>{
    setPriece(convertRupiah(data.harga))
  },[])
  
  const deleteKeranjang=async()=>{
  
    try{
      const response=await axiosJwt.delete(`/keranjang/${data.keranjang_id}`)
      if(response.status== 200){
        refresh()
      }
    }catch(err){
      console.log(err)
    }
  }
  return (
    <div className="w-screen border-b border-slate-400 py-2">
      <div className="w-full items-center flex py-2 px-2">
       <div className="flex items-center justify-center relative z-20 overflow-hidden rounded h-5 bg-transparent m-2 w-5">
        <input type="checkbox" className="form-checkbox appearance-none border border-blackTxt w-5 h-5 checked:border-none peer bg-transparent rounded static z-10"/>
        <span className="absolute flex items-center justify-center hidden peer-checked:inline-block p-1 peer-checked:bg-greenPrimary text-sm text-white z-0"><FaCheck/></span>
       </div>
       <div className="flex text-sm flex-col">
         <div className="flex gap-1 items-center font-inter text-blackTxt font-bold">
           <img src={pro} className="w-4 h-4"/>
           <p>{data.nama}</p>
         </div>
         <div className="font-noto text-slate-600">
           <p>{data.alamat}</p>
         </div>
       </div>
      </div>
      <div className="flex p-2 items-center w-full">
        <img src={data.url_foto_produk} className="h-14"/>
        <div className="px-3 font-noto flex flex-col">
          <p className="text-blackTxt text-md">{data.nma_produk}</p>
          <p className="text-[.8rem] text-greenPrimary font-inter">Sisa {data.stok}</p>
          <p className="font-inter font-semibold text-black">{priece}</p>
        </div>
      </div>
      <div className="flex font-inter flex-col px-4">
       <input type="teks" placeholder="Tulis Catatan" className="w-2/5 p-1 text-[.9rem] outline-none placeholder-greenPrimary text-greenPrimary rounded"/>
       <div className="font-noto text-[.8rem] text-slate-600 flex items-center w-full px-1 h-5">
        <div className="flex items-center justify-start w-2/3">
         <p>Pilih jumlah barang</p>
        </div>
         <div className="flex">
         <div className="px-4 flex items-center" onClick={deleteKeranjang}>
           <span className="text-xl text-slate-600"><GoTrash/></span>
         </div>
         <div>
           <div className="min-w-min h-6 flex rounded border border-slate-400 font-inter">
             <div className="h-full w-5 rounded-l flex items-center justify-center text-lg" onClick={()=>setCount(count=>count-1)}>-</div>
             <div className="h-full w-5 flex items-center justify-center">{count}</div>
             <div className="text-greenPrimary text-lg h-full items-center flex justify-center w-5 rounded-r" onClick={()=>setCount(count=>count+1)}>+</div>
           </div>
         </div>
         </div>
       </div>
      </div>
    </div>
    )
}