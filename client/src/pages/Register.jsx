import Input from "@components/Input"
import {useState,useEffect} from "react"
import FormLayout from "../layout/FormLayout"
import InputFile from "@components/InputFile"
export default function Register(){
const [data,setData]=useState({
  nama:"",
  email:"",
  password:"",
  confPassword:"",
  alamat:"",
  fotoProfile:""
})
const [preview,setPreview] = useState(null)

const handleChange = ({target}) =>{
  setData(prev=>{
    return {
      ...prev,
      [target.name]:target.value
    }
  })
}

const handleSubmit = async (e) =>{
  e.preventDefault()
  try{
    console.log(data)
  }catch(err){
    console.log(err)
  }
}

const handleFile = ({target}) =>{
  if(target.files[0]){
    setData(prev=>{
      return {
        ...prev,
      fotoProfile:target.files[0]
      }
    })
    const url = URL.createObjectURL(target.files[0])
    setPreview(url)
  }
}
  return (
  <div className="w-screen min-h-screen">
   <FormLayout type="register">
    <form onSubmit={handleSubmit} className="w-full flex flex-col items-center gap-5">
     <Input name="nama" event={handleChange} type="teks" placeholder="Nama lengkap" input={data.nama}/>
     <Input name="email" event={handleChange} type="email" placeholder="Email" input={data.email}/>
     <Input name="password" event={handleChange} type="password" placeholder="Password" input={data.password}/>
     <Input name="confPassword" event={handleChange} type="password" placeholder="Komfimasi Password" input={data.confPassword}/>
     <Input name="alamat" event={handleChange} type="textarea" placeholder="Alamat" input={data.alamat}/>
     <InputFile title="Foto Profile" url={preview} event = {handleFile}/>
     <button className="w-[80%] py-3 bg-greenPrimary rounded-md text-whitePrimary font-noto font-bold">Masuk</button>
     </form>
   </FormLayout>
  </div>
  )
}