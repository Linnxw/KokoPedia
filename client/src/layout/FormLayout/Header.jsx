import {useNavigate} from "react-router-dom"
import {GoArrowLeft} from "react-icons/go"
export default function Header({type,event}){
  const navigate = useNavigate()
  return (
  <div className="w-screen h-14 flex items-center justify-between px-2 font-noto">
    <div className="h-full flex items-center justify-start gap-4 font-black">
     <span className="text-3xl text-grayTxt" onClick={()=>navigate(-1)}><GoArrowLeft/></span>
     <h1>{type === "login" ? "Masuk" : type === "add produk" ? "Tambah Produk" : type === "edit" ? "Edit Profile" : "Daftar"}</h1>
    </div>
    <div onClick={event} className="text-greenPrimary font-semibold text-sm">
     <h1>{type === "edit" ? "" : type === "login" ? "Daftar" : type === "add produk" ? "" :  "Login"}</h1>
    </div>
  </div>
  )
}