export default function index({event,icon,title}){
  return (
    <div onClick={event} className="w-screen flex items-center gap-1 text-black font-noto text-sm">
     <span className="text-2xl flex items-center justify-center">{icon}</span>
     <p>{title}</p>
    </div>
    )
}