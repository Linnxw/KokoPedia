export default function index({data,kategory}){
  return (
  <div className="w-screen overflow-scroll scrollbar">
   <div className="flex min-w-min inline-block gap-2">
    {
      data.map((m,i)=>{
        return <button className={`px-3 min-w-fit py-1 text-md rounded-xl flex border ${m === kategory ? "border-greenPrimary text-greenPrimary" : "text-slate-400 border-slate-400 "}`} key={i} onClick={()=>getByKategory(m)}>{m}</button>
      })
    }
   </div>
   </div>
  )
}