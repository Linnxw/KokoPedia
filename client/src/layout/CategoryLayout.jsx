import {RiArrowDownSLine} from "react-icons/ri"
export default function CategoryLayout({children,title,open,index,event}){
  return (
    <div className="flex flex-col items-center w-screen py-4 px-3 gap-1">
     <div className="w-full flex justify-between py-1 font-inter font-semibold text-slate-700 text-md">
       <h1>{title}</h1>
       <span onClick={()=>event()} className={`${open === index && "rotate-180"} transition-all ease-in-out duration-500 text-2xl flex items-center justify-center items-center`}><RiArrowDownSLine/></span>
     </div>
     <div className={`${open === index ? "max-h-[900px]" : "max-h-0"} ease-in-out transition-all duration-500 w-full overflow-hidden`}>
       {children}
     </div>
    </div>
    )
}