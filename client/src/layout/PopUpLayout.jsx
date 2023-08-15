import {motion} from "framer-motion"
import {useEffect,useState} from "react"
export default function PopUpLayout({children,event,fixed=true,open}){
  return (
    <motion.div
    initial={{y:'100vh'}}
    animate={open ? {y:0} : {y:'100vh'}}
    exit={{y:'100vh'}}
    transition={{ duration: 0.3, damping: 0, stiffness: 0 }}
    className={`w-screen ${fixed ? "fixed bottom-0" : "static"} bg-whitePrimary rounded-lg z-50 border-t border-t-slate-700 box-border py-3`}
    >
   
    {children}
    </motion.div>
    )
}