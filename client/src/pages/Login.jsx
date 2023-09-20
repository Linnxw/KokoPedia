import Input from "@components/Input"
import {useState,useEffect} from "react"
import FormLayout from "../layout/FormLayout"
import {login} from "../redux/slice/authSlice"
import {useDispatch,useSelector} from "react-redux"
import {useNavigate} from "react-router-dom"
export default function Login(){
const [email,setEmail]=useState("")
const [password,setPassword]=useState("")
const dispath=useDispatch()
const {msg,token}=useSelector(prev=>prev.auth)
const navigate=useNavigate()

useEffect(()=>{
console.log("use effect")
  if(token){
    navigate("/")
  }
  console.log(token)
},[dispath,msg,token,navigate])

const handleEmail=(e)=>{
  setEmail(e.target.value)
}
const handlePassword=(e)=>{
  setPassword(e.target.value)
}
const handleSubmit=(e)=>{
  e.preventDefault()
  const data={email,password}
  dispath(login(data))
}
  return (
  <div className="w-screen min-h-screen">
   <FormLayout type="login">
   <form className="w-full flex flex-col items-center gap-5" onSubmit={handleSubmit}>
     <p className="text-red-400">{msg}</p>
     <Input event={handleEmail} type="email" placeholder="Nomor HP atau Email" input={email}/>
     <Input event={handlePassword} type="password" placeholder="Password" input={password}/>
     <button type="submit" className="w-[80%] py-3 bg-greenPrimary rounded-md text-whitePrimary font-noto font-bold">Masuk</button>
    </form>
   </FormLayout>
  </div>
  )
}