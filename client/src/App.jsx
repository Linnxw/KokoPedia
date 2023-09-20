import { Routes,Route,useLocation } from 'react-router-dom'
import Dashboard from "./pages/Dashboard"
import Home from "./pages/Home"
import History from "./pages/History"
import Acount from "./pages/Acount"
import Category from "./pages/Category"
import Login from "./pages/Login"
import Register from "./pages/Register"
import Search from "./pages/Search"
import ResultSearch from "./pages/ResultSearch"
import Checkout from "./pages/Checkout/"
import ProdukDetail from "./pages/ProdukDetail"
import Keranjang from "./pages/Keranjang"
import {AnimatePresence} from "framer-motion"

function App() {
  const location=useLocation()
  return (
    <>
  <AnimatePresence>
    <Routes location={location} key={location.pathname}>
     <Route path ="/" element={<Dashboard/>}/>
     <Route path ="/home" element={<Home/>}/>
     <Route path ="/category" element={<Category/>}/>
     <Route path ="/acount" element={<Acount/>}/>
     <Route path ="/history" element={<History/>}/>
     <Route path ="/login" element={<Login/>}/>
     <Route path="/register" element={<Register/>}/>
     <Route path="/search" element={<Search/>}/>
     <Route path="/search/:search" element={<ResultSearch/>}/>
     <Route path="/keranjang" element={<Keranjang/>}/>
     <Route path="/checkout/:id" element={<Checkout/>}/>
     <Route path="/produk/:id" element={<ProdukDetail/>}/>
    </Routes>
   </AnimatePresence>
    </>
  )
}

export default App
