import Action from "./Action"
import InfoAlamat from "../InfoAlamat"
import InfoAcount from "./InfoAcount"
export default function index({event}){
  return (
    <div className="bg-greenPrimary w-screen pb-2 font-noto relative text-whitePrimary after:content-[''] after:w-screen after:h-12 after:bg-greenPrimary after:absolute after:-bottom-12 after:-z-10">
     <Action event={event}/>
     <InfoAlamat/>
     <InfoAcount/>
    </div>
  )
}