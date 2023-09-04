import {MdArrowForwardIos} from "react-icons/md"
export default function AkunLayout(props){
  const {children,title,icon=false} = props
  return (
    <div className="px-3 h-full">
      <div className="w-full py-2 flex justify-between items-center font-inter font-bold text-slate-800">
       <h1>{title}</h1>
       {
         !icon ? <p className="text-greenPrimary font-noto text-[.8rem]">Lihat Semua</p> : <span className="text-md text-slate-700"><MdArrowForwardIos/></span>
       }
      </div>
      <div className="shadow-sm rounded shadow-slate-300">
       {children}
      </div>
    </div>
    )
}