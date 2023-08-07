import NavbarLayout from "../layout/NavbarLayout"
import {motion} from "framer-motion"
export default function Acount(){
  return (
   <motion.div
  className="w-screen min-h-screen bg-whiteSecond pb-14"
  initial={{opacity:0}}
  animate={{opacity:1}}
  transition={{duration:0.5}}
  >
    Acount
   <NavbarLayout/>
  </motion.div>
  )
}