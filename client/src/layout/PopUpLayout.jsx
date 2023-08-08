import {motion} from "framer-motion"
export default function PopUpLayout({children}){
  return (
    <motion.div
    initial={{y:'100vh'}}
    animate={{y:0}}
    exit={{y:'100vh'}}
    transition={{ duration: 0.2, damping: 0, stiffness: 0 }}
    className="w-screen fixed bottom-0 bg-whitePrimary rounded-lg static z-50 border-t border-t-slate-700"
    >
    <div className="w-screen py-3 flex justify-center">
     <div className="w-28 h-1 bg-slate-700 rounded-lg"></div>
    </div>
    {children}
    </motion.div>
    )
}