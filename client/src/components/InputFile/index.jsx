import {useRef} from "react"
import {RxCross2} from "react-icons/rx"
import {AiOutlineCloudUpload} from "react-icons/ai"
export default function index({event,removeImage,title,url}){
  const ref= useRef()
  const handleFile = () =>{
    ref.current.click()
  }
  return (
  <div onClick={handleFile} className="w-[90%] text-grayTxt font-noto font-bold">
    <h1>{title}</h1>
    <div className="w-full relative h-52 overflow-hidden rounded border border-dashed border-grayTxt flex items-center justify-center flex-col">
    {
      url && <span onClick={removeImage} className="text-xl absolute top-2 right-2 text-slate-800"><RxCross2/></span>
    }
    {
     url ? <img src={url} className="w-full h-full object-cover"/> : (
       <>
       <span className="text-4xl text-grayTxt">
        <AiOutlineCloudUpload/>
      </span>
      <p>Upload</p>
      <input onChange={event} ref={ref} type="file" hidden/>
      </>
      )
    }
     
    </div>
  </div>
  )
}