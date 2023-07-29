import Header from "./Header"
import Footer from "./Footer"
export default function index({children}){
  return (
  <div className="w-full flex flex-col gap-5">
   <Header/>
   {children}
   <Footer/>
  </div>
  )
}