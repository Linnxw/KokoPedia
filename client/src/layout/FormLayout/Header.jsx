import {GoArrowLeft} from "react-icons/go"
export default function Header({type}){
  return (
  <div className="w-screen h-14 flex items-center justify-between px-2 font-noto">
    <div className="h-full flex items-center justify-start gap-4 font-black">
     <span className="text-3xl text-grayTxt"><GoArrowLeft/></span>
     <h1>{type === "login" ? "Masuk" : "Daftar"}</h1>
    </div>
    <div className="text-greenPrimary font-semibold text-sm">
     <h1>{type === "login" ? "Daftar" : "Masuk"}</h1>
    </div>
  </div>
  )
}