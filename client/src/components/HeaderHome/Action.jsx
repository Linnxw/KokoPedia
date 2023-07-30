import {CiSearch} from "react-icons/ci"
import {CiMail} from "react-icons/ci"
import {CiShoppingCart} from "react-icons/ci"
export default function Action(){
  return (
  <div className="w-screen flex items-center justify-start font-noto tracking-wide text-sm px-2">
  
    <div className="flex items-center text-grayTxt w-3/5 relative flex items-center justify-start">
      <input type="teks" className="outline-none rounded-lg p-2 w-full bg-whitePrimary box-border"/>
      <div className="absolute left-1 flex items-center">
        <span className="text-xl grid place-items-center"><CiSearch/></span>
        <p>Cari di KokoPedia</p>
      </div>
    </div>
    
    <div className="text-xl text-whitePrimary flex items-center justify-evenly w-2/5">
    <span className="grid place-items-center"><CiMail/></span>
    <span className="grid place-items-center"><CiShoppingCart/></span>
    <div className="flex items-center gap-1 w-4 h-6 flex-col justify-center">
      <span className="inline-block w-full h-[1px] bg-whitePrimary rounded"></span>
      <span className="w-full inline-blox  h-[1px] bg-whitePrimary rounded"></span>
      <span className="w-full inline-block h-[1px] bg-whitePrimary rounded"></span>
    </div>
    </div>
  </div>
  )
}