import {PiWarningCircleLight} from "react-icons/pi"
export default function index(){
  return (
    <div className="w-screen font-noto flex flex-col items-center justify-center gap-1 py-2">
     <div>
      <span className="text-3xl text-red-400"><PiWarningCircleLight/></span>
     </div>
     <div className="text-center">
       <p>Tidak ada produk dengan kategori terkait</p>
     </div>
      
    </div>
    )
}