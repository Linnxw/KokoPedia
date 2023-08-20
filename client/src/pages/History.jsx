import {motion} from "framer-motion"
import NavbarLayout from "../layout/NavbarLayout"
import HistoryLayout from "../layout/HistoryLayout"
import CardNotHaveTransaction 
from 
"../components/CardNotHaveTransaction"
import tidakadariwayat from "/tidakadariwayat.png"
export default function History(){
  return (
  <motion.div
  initial={{opacity:0}}
  animate={{opacity:1}}
  transition={{duration:0.5}}
  >
   <HistoryLayout>
     <CardNotHaveTransaction
     img={tidakadariwayat}
     desc="Yuk, mulai belanja dan penuhi berbagai kebutuhanmu di Kokopedia!"
     title="Kamu belum pernah bertransaksi"
     />
   </HistoryLayout>
   <NavbarLayout/>
  </motion.div>
  )
}