import {motion} from "framer-motion"
import {CiSearch} from "react-icons/ci"
export default function Search(){
  return (
  <motion.div
  className="w-screen"
  initial={{y:'100vh'}}
  animate={{y:0}}
  transition={{duration:0.3}}
  >
    <div className="flex items-center text-grayTxt w-3/5 relative flex items-center justify-start">
      <input type="teks" className="outline-none rounded-lg p-2 w-full bg-whitePrimary ring-1 ring-grayTxt box-border peer"/>
      <div className="absolute left-1 flex items-center peer-focus:hidden">
        <span className="text-xl grid place-items-center"><CiSearch/></span>
        <p>Cari di KokoPedia</p>
      </div>
    </div>
  </motion.div>
  )
}