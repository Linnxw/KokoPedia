import Input from "@components/Input"
import {useState,useEffect} from "react"
import FormLayout from "../layout/FormLayout"
import InputFile from "@components/InputFile"
export default function Register(){
const [email,setEmail]=useState("")
const [password,setPassword]=useState("")
const [nama,setNama]=useState("")
const [confPassword,setConfPassword]=useState("")
const [image,setImage]=useState(null)
const [alamat,setAlamat]=useState("")
const handleEmail=(e)=>{
  setEmail(e.target.value)
}
const handlePassword=(e)=>{
  setPassword(e.target.value)
}
const handleNama=(e)=>{
  setNama(e.target.value)
}
const handleConfPassword=(e)=>{
  setConfPassword(e.target.value)
}
const handleAlamat=(e)=>{
  setAlamat(e.target.value)
}
  return (
  <div className="w-screen min-h-screen">
   <FormLayout type="register">
    <form className="w-full flex flex-col items-center gap-5">
     <Input event={handleNama} type="teks" placeholder="Nama lengkap" input={nama}/>
     <Input event={handleEmail} type="email" placeholder="Nomor HP atau Email" input={email}/>
     <Input event={handlePassword} type="password" placeholder="Password" input={password}/>
     <Input event={handleConfPassword} type="password" placeholder="Komfimasi Password" input={confPassword}/>
     <Input event={handleAlamat} type="textarea" placeholder="Alamat" input={alamat}/>
     <InputFile/>
     <button className="w-[80%] py-3 bg-greenPrimary rounded-md text-whitePrimary font-noto font-bold">Masuk</button>
     </form>
   </FormLayout>
  </div>
  )
}