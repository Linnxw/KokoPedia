import {useRef} from "react"
import {AiOutlineCloudUpload} from "react-icons/ai"
export default function index({event,title,url}){
  const ref= useRef()
  const handleFile = () =>{
    ref.current.click()
  }
  return (
  <div onClick={handleFile} className="w-[90%] text-grayTxt font-noto font-bold">
    <h1>{title}</h1>
    <div className="w-full h-52 overflow-hidden rounded border border-dashed border-grayTxt flex items-center justify-center flex-col">
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