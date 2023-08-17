import {PiWarningCircleLight} from "react-icons/pi"
import {motion} from "framer-motion"
export default function index({title,icon}){
  return (
    <motion.div 
    initial={{opacity:0,scale:0.5}}
    animate={{opacity:1,scale:1}}
    transition={{duration:0.3}}
    className="w-screen font-noto flex flex-col items-center justify-center gap-1 py-2"
    
    >
     <div>
      <span className="text-3xl text-red-400">{icon}</span>
     </div>
     <div className="text-center">
       <p>{title}</p>
     </div>
      
    </motion.div>
    )
}