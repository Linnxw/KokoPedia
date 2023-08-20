export default function index({img,title}){
  return (
  <div className="w-20 h-24 flex flex-col items-center ease-in-out transition-all justify-evenly gap-1 hover:scale-110">
   <div className="w-[70%] border border-slate-100 rounded-xl h-1/2 flex items-center justify-center p-1">
     <img src={img} className="object-contain w-full h-full"/>
   </div>
   <div className="text-[.7rem] h-1/2 font-inter text-slate-700 tracking-wide flex text-center flex-wrap flex p-1">
     <p className="leading-tight">{title}</p>
   </div>
  </div>
  )
}