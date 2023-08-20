import {CiSearch} from "react-icons/ci"
import {MdCancel} from "react-icons/md"
export default function index(props){
  const {
    handleSearch,
    handleChange,
    input,
    reset
  } = props
  return (
    <div className="flex items-center text-blackTxt w-[90%] py-3 relative flex items-center justify-start text-[.9rem] mx-auto">
      <input type="number" className="outline-none rounded-md py-[6px] px-2 w-full bg-transparent ring-1 ring-slate-400 box-border peer font-noto z-30" onKeyPress={handleSearch} onChange={handleChange} value={input}/>
      <div className={`absolute left-1 flex items-center z-20 text-slate-400 peer-focus:hidden ${input.length > 0 && "hidden"}`}>
        <span className="text-xl grid place-items-center"><CiSearch/></span>
        <p>ID Transaksi</p>
      </div>
       {
         input.length > 0 && <span className="absolute text-lg text-slate-400 z-40 right-1" onClick={reset}><MdCancel/></span>
       }
    </div>    
    )
}