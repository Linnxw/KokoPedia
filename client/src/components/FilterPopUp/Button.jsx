export default function Button({filterBy,event,title}){
  return (
    <button className={`px-3 min-w-fit py-1 text-md rounded-xl flex border ${title === filterBy ? "border-greenPrimary text-greenPrimary" : "text-slate-400 border-slate-400 "}`} >{title}</button>
    )
}