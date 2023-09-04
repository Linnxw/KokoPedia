import gopay from "/gopay.png"
export default function index({data}){
  return (
    <div className="w-full rounded flex items-center py-1 bg-white text-center">
     <div className="w-1/3 p-1 gap-y-1 flex flex-col items-center">
      <img src={data[0].img} className="w-8"/>
      <h1 className={`font-inter ${data[0].status ? "text-greenPrimary":"text-slate-700"} ${data[0].reverse ? "font-normal text-[.6rem]" : "font-bold text-[.8rem]"}`}>{data[0].title}</h1>
      <p className={`${!data[0].reverse ? "font-normal text-[.7rem] font-noto" : "font-bold text-[.9rem] font-bold"}`}>{data[0].desc}</p>
     </div>
     <div className="w-1/3 p-1 gap-y-1 flex flex-col items-center relative before: content-[''] before:w-[1px] before:h-[80%] before:bg-slate-200 before:left-0 before:absolute before:rounded-full after: content-[''] after:w-[1px] after:h-[80%] after:bg-slate-200 after:right-0 after:absolute after:rounded-full">
      <img src={data[1].img} className="w-8"/> 
      <h1 className={`font-inter ${data[1].status ? "text-greenPrimary":"text-slate-700"} ${data[1].reverse ? "font-normal text-[.6rem]" : "font-bold text-[.8rem]"}`}>{data[1].title}</h1>
      <p className={`${!data[0].reverse ? "font-normal text-[.7rem] font-noto" : "font-bold text-[.9rem] font-bold"}`}>{data[1].desc}</p>

     </div>
     <div className="w-1/3 p-1 gap-y-1 flex flex-col items-center">
      <img src={data[2].img} className="w-8"/>
      <h1 className={`font-inter ${data[2].status ? "text-greenPrimary":"text-slate-700"} ${data[2].reverse ? "font-normal text-[.6rem]" : "font-bold text-[.8rem]"}`}>{data[2].title}</h1>
      <p className={`${!data[1].reverse ? "font-normal text-[.7rem] font-noto" : "font-bold text-[.9rem] font-bold"}`}>{data[2].desc}</p>
     </div>
    </div>
    )
}