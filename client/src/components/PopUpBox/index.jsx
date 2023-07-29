import Header from "./Header"
import Body from "./Body"
import Footer from "./Footer"
import {CgClose} from "react-icons/cg"
export default function index({active,event,detail}){
  return (
  <div className={`w-screen min-h-screen ${active ? "backdrop-blur-sm bg-white/35" :"backdrop-blur-0 -z-10"} transition-all ease-in-out duration-200 fixed top-0 left-0 flex flex-col items-center justify-center`}>
    <div className="w-[340px] h-14 flex justify-end py-2 items-center">
      <span onClick={event} className="rounded-full w-8 h-8 bg-whitePrimary shadow shadow-greyTxt text-blackTxt flex items-center justify-center">
      <CgClose/>
      </span>
    </div>
    <div className={`${active ? "w-[340px] h-[350px]" : "w-0 h-0 translate-x-10 blur-2xl"} transition-all ease-in-out duration-200 bg-whitePrimary rounded shadow-sm shadow-grayTxt`}>
     <Header detail={detail}/>
     <Body detail={detail}/>
     <Footer detail={detail}/>
    </div>
  </div>

  )
}