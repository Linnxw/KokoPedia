import {motion} from "framer-motion"
export default function History(){
  return (
  <motion.div
  initial={{opacity:0}}
  animate={{opacity:1}}
  transition={{duration:0.5}}
  >
    History
  </motion.div>
  )
}