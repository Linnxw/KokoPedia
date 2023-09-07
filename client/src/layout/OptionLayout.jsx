import {useEffect} from "react"
export default function OptionLayout({open,produk}){
  useEffect(()=>{
     console.log(open)
  },[open])
 
  return (
    <div className={`w-screen border-t border-slate-700 h-72 z-30 p-2 bg-white fixed ${open ? "bottom-0" : "-bottom-96"} rounded-t`}>
      <div>
        <div className="w-full p-3 flex items-center gap-2">
          <img className="w-14 h-14 rounded"src={produk.url_foto_produk}/>
          <div className="flex flex-col items-start justify-center">
          <h3 className="text-sm font-inter font-semibold text-slate-800">Harga: {produk.harga}</h3>
            <p className="text-sm italic font-noto text-slate-800">Stock: {produk.stok}</p>
          </div>
      
        </div>
      </div>
    </div>
    )
}