import {motion} from "framer-motion"
import NavbarLayout from "../layout/NavbarLayout"
import HistoryLayout from "../layout/HistoryLayout"
import CardNotHaveTransaction 
from 
"@components/CardNotHaveTransaction"
import tidakadariwayat from "/tidakadariwayat.png"
import {getHistory} from "../redux/slice/historySlice"
import {useEffect,useState} from "react"
import CardHistory from "@components/CardHistory"
import {useDispatch,useSelector} from "react-redux"
export default function History(){
  const [history,setHistory]=useState(null)
  const dispatch=useDispatch()
  const {data,msg,pending}=useSelector(state=>state.history)
   
   useEffect(()=>{
     dispatch(getHistory())
   },[])
  
  return (
  <motion.div
  initial={{opacity:0}}
  animate={{opacity:1}}
  transition={{duration:0.5}}
  >
   <HistoryLayout>
   {
     history ? (
         data?.map(m=>{
           return <CardHistory key={m.id} data={m}/>
         })
       ) 
       :
       (
      <CardNotHaveTransaction
      img={tidakadariwayat}
      desc="Yuk, mulai belanja dan penuhi berbagai kebutuhanmu di Kokopedia!"
      title="Kamu belum pernah bertransaksi"
     />
     )
   }
   </HistoryLayout>
   <NavbarLayout/>
  </motion.div>
  )
}