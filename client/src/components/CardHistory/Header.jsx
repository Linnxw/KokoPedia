import {BiDotsVerticalRounded} from "react-icons/bi"
import {HiShoppingBag} from "react-icons/hi"
export default function Header(){
  return (
    <div className="flex w-full justify-between items-center font-inter text-slate-700">
     <div className="flex gap-1">
       <span className="text-3xl text-greenPrimary grid place-items-center"><HiShoppingBag/></span>
       <div className="flex flex-col items-start justify-center">
         <p className="text-[.8rem]">Belanja</p>
         <p className="text-[.6rem] text-slate-600 font-inter">12 Jun 2023</p>
       </div>
     </div>
     <div className="flex items-center gap-2">
       <div className="rounded-md bg-green-200 p-1 text-[.6rem] text-greenPrimary">
        <p>Success</p>
       </div>
       <span className="text-2xl text-slate-800 flex items-center justify-center"><BiDotsVerticalRounded/></span>
     </div>
    </div>
    )
}