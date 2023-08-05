import NavbarLayout from "../layout/NavbarLayout"
import HeaderHome from "../components/HeaderHome"
import Content from "../components/Content"
import {motion} from "framer-motion"
export default function Home(){
  return (
 <motion.div 
  initial={{opacity:0}}
  animate={{opacity:1}}
  transition={{duration:0.5}}
  >
    <HeaderHome/>
    <Content/>
    
  </motion.div>
  )
}