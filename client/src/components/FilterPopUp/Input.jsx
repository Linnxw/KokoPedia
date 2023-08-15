export default function Input({placeholder,event}){
  return (
   <div className="w-32 h-10 p-3 rounded-lg ring-1 ring-slate-400 overflow-hidden flex items-center">
    <div className="h-full w-[20%] font-bold font-inter text-sm text-slate-400 flex items-center justify-center">
    <p>Rp</p>
    </div>
     <input type="number" placeholder={placeholder} className="w-[80%] pr-2 py-1 rounded-xl focus:ring-greenPrimary outline-none" onChange={(e)=>event(e)}/>
   </div>
    )
}