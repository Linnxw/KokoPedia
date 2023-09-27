import {useState,useEffect} from "react"
import FormLayout from "../layout/FormLayout"
import withReactContent from 'sweetalert2-react-content'
import {RxCross2} from "react-icons/rx"
import {BiSolidImageAlt} from "react-icons/bi"
import Swal from 'sweetalert2'
import {RiArrowDownSLine} from "react-icons/ri"
import InputFile from "@components/InputFile"
import {useNavigate} from "react-router-dom"
export default function AddProduk(){ 
const [image,setImage]=useState(null)
const [url,setUrl]=useState(null)
const navigate = useNavigate()
const MySwal = withReactContent(Swal)

const handleAlamat=(e)=>{
  setAlamat(e.target.value)
}

const handleSubmit =(e)=>{
  e.preventDefault()
  MySwal.fire(
  'produk ditambahkan!',
  'Lanjutkan untuk menambahkan foto Produkmu!',
  'success'
).then(()=>{
  navigate("/produk/foto/add")
})
}

 const handleImageProduk = ({target}) =>{
   if(target.files[0]){
     console.log(target.files[0])
     const url = URL.createObjectURL(target.files[0])
     setImage(target.files[0])
     setUrl(url)
   }
 }
  return (
    <div className="w-screen min-h-screen">
   <FormLayout type="add produk">
    <form onSubmit={handleSubmit} className="w-full flex flex-col items-center gap-5">
   <InputFile event={handleImageProduk} title="Foto Produk" url={url}/>
   <div className={`${image ? "opacity-100" : "opacity-0"} ease-in-out duration-300 p-1 bg-slate-200 rounded flex gap-1 items-center`}>
   <span className="text-xl"><BiSolidImageAlt/></span>
    <p>{image?.name}</p>
    <span onClick={()=>{
      setUrl(null)
      setImage(null)
    }} className="text-xl"><RxCross2/></span>
   </div>


   <button className="w-[80%] mx-auto py-3 bg-greenPrimary rounded-md text-whitePrimary font-noto font-bold">Tambah</button>
     </form>
   </FormLayout>
  </div>
    )
}