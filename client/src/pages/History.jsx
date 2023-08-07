import {motion} from "framer-motion"
import NavbarLayout from "../layout/NavbarLayout"
export default function History(){
  return (
  <motion.div
  initial={{opacity:0}}
  animate={{opacity:1}}
  transition={{duration:0.5}}
  >
    History
  <NavbarLayout/>
  </motion.div>
  )
}