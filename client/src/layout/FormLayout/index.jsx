import Header from "./Header"
import Footer from "./Footer"
export default function index({children,type,event}){
  return (
  <div className="w-full flex flex-col gap-5">
   <Header type={type} event={event}/>
   {children}
   <Footer/>
  </div>
  )
}