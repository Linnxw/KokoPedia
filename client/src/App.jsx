import { Routes,Route } from 'react-router-dom'
import Dashboard from "./pages/Dashboard"
import Home from "./pages/Home"
import History from "./pages/History"
import Acount from "./pages/Acount"
import Category from "./pages/Category"
import Login from "./pages/Login"
import Register from "./pages/Register"
function App() {
  return (
    <Routes>
     <Route path ="/" element={<Dashboard/>}/>
     <Route path ="/home" element={<Home/>}/>
     <Route path ="/category" element={<Category/>}/>
     <Route path ="/acount" element={<Acount/>}/>
     <Route path ="/history" element={<History/>}/>
     <Route path ="/login" element={<Login/>}/>
     <Route path="/register" element={<Register/>}/>
    </Routes>
  )
}

export default App
