import Input from "@components/Input"
import {useState,useEffect} from "react"
import FormLayout from "../layout/FormLayout"
import InputFile from "@components/InputFile"
import {useNavigate} from "react-router-dom"
import {axiosJwt} from "../api/interceptor"
export default function EditProfile(){
const [error,setError] = useState(null)
const [data,setData]=useState({
  nama:"",
  email:"",
  alamat:"",
  file:"",
  password:"",
  confPassword:""
})
const [preview,setPreview] = useState(null)
const navigate = useNavigate()

useEffect(()=>{
  getProfileUser()
},[])

const getProfileUser = async () =>{
  try{
    const profile = await axiosJwt.get("/user/me")
  setData({
      nama:profile.data.nama,
      email:profile.data.email,
      alamat:profile.data.alamat,
      password:profile.data.password,
      confPassword:profile.data.confPassword
    })
  }catch(err){
    console.log(err)
  }
}

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
    const formData = new FormData()
    
    const fields = ['nama','email','password','confPassword','file','alamat']
    fields.forEach(field=>{
       formData.append(field,data[field])
    })
    const profile = await axiosJwt.patch("/user",formData,{
      headers:{
        "Content-Type":"multipart-form-data"
      }
    })
  setData({
    nama:"",
    email:"",
    alamat:"",
    file:"",
    password:"",
    confPassword:""
  })
  
  navigate("/acount")
  }catch(err){
    console.log(err)
    if(err.response){
      setError(err.response.data.msg)
    }
  }
}

const handleFile = ({target}) =>{
  if(target.files[0]){
    setData(prev=>{
      return {
        ...prev,
      file:target.files[0]
      }
    })
    const url = URL.createObjectURL(target.files[0])
    setPreview(url)
  }
}

const handleRemoveImage = () =>{
  setPreview("")
  setData(prev=>{
    return {
      ...prev,
      file:""
    }
  })
}
  return (
  <div className="w-screen min-h-screen">
   <FormLayout type="edit">
    <form onSubmit={handleSubmit} className="w-full flex flex-col items-center gap-5">
    <p className="text-red-400 text-sm">{error}</p>
     <Input name="nama" event={handleChange} type="teks" placeholder="Nama lengkap" input={data.nama}/>
     <Input name="email" event={handleChange} type="email" placeholder="Email" input={data.email}/>
     <Input name="password" event={handleChange} type="password" placeholder="Password" input={data.password}/>
     <Input name="confPassword" event={handleChange} type="password" placeholder="Komfimasi Password" input={data.confPassword}/>
     <Input name="alamat" event={handleChange} type="textarea" placeholder="Alamat" input={data.alamat}/>
     <InputFile title="Foto Profile (Biarkan kosong jika tidak ingin mengganti)" url={preview} event = {handleFile} removeImage={handleRemoveImage}/>
     <button className="w-[80%] py-3 bg-greenPrimary rounded-md text-whitePrimary font-noto font-bold">Masuk</button>
     </form>
   </FormLayout>
  </div>
  )
}