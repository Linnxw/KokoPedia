import {useRef} from "react"
import {AiOutlineCloudUpload} from "react-icons/ai"
export default function index(){
  return (
  <div className="w-[90%] text-grayTxt font-noto font-bold">
    <h1>Foto Profile</h1>
    <div className="w-full h-52 rounded border border-dashed border-grayTxt flex items-center justify-center flex-col">
      <span className="text-4xl text-grayTxt">
        <AiOutlineCloudUpload/>
      </span>
      <p>Upload</p>
      <input type="file" hidden/>
    </div>
  </div>
  )
}