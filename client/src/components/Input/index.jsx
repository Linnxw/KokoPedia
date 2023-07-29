
export default function index(props){
const {placeholder,type,input,event}=props

  return(
   <div className="w-[90%] relative mx-auto flex items-center justify-start tracking-wide font-noto font-medium">
     <input type={type} className="w-full peer border-b-[.8px] focus:border-b border-grayTxt outline-none text-sm py-1 font-semibold tracking-wide focus:border-greenPrimary caret-greenPrimary text-slate-600" onChange={event} name={type}/>
     <label className={`absolute text-grayTxt left-0 text-[.9rem] transition-all ease-in-out ${input ? "-translate-y-5 text-[.7rem]" : "-translate-y-0"} duration-300 peer-focus:-translate-y-5 peer-focus:text-[.7rem]`}>{placeholder}</label>
   </div>
  )
}