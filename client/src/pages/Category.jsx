import NavbarLayout from "../layout/NavbarLayout"
import {useState} from "react"
import {motion} from "framer-motion"
import CategoryLayout from "../layout/CategoryLayout"
import CardCategory from "@components/CardCategory"
import pilihanCategory from "../helper/pilihanCategory"
export default function Category(){
  const [open,setOpen]=useState(0)
  
   const handleOpen=(index)=>{
     index != open ? 
     setOpen(index) : setOpen(null)
   }
   
  return (
  <motion.div
  className="w-screen min-h-screen bg-whiteSecond pb-14"
  initial={{opacity:0}}
  animate={{opacity:1}}
  transition={{duration:0.8}}
  >
  {
    pilihanCategory.map((m,i)=>{
      return (
       <CategoryLayout key={i} event={()=>handleOpen(i)} index={i} open={open} title={m.title}>
         <div className="flex items-center flex-wrap gap-1 mx-auto">
         {
           m.menu.map((m,i)=>{
             return (
              <CardCategory 
              title={m.title} 
              img={m.img}/>
               )
           })
         }
         </div>
       </CategoryLayout>
        )
    })
  }
   <NavbarLayout/>
  </motion.div>
  )
}