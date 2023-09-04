export default function index(props){
  const {icon,title,subtitle} = props
  return (
  <div className="py-2 gap-2 flex items-center">
   <span className="text-xl text-slate-600 py-1">{icon}</span>
   <div className="flex flex-col items-start justify-center p-1 text-slate-800">
    <h1 className="font-inter font-semibold text-md leading-tight">{title}</h1>
    <p className="font-noto text-[.8rem] leading-tight">{subtitle}</p>
   </div>
  </div>
  )
}