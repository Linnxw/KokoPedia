import Input from "@components/Input"
import {useState,useEffect} from "react"
import FormLayout from "../layout/FormLayout"
import {instance} from "../api/instance"
import {axiosJwt} from "../api/interceptor"
import withReactContent from 'sweetalert2-react-content'
import Swal from 'sweetalert2'
import {RiArrowDownSLine} from "react-icons/ri"
import InputFile from "@components/InputFile"
import {useNavigate} from "react-router-dom"
export default function AddProduk(){ 
const [produk,setProduk]=useState({
  nama:"",
  harga:null,
  warna:"",
  berat:null,
  stok:null,
  deskripsi:"",
  kategory:""
})
const [listKategory,setListKategory] = useState([])
const navigate = useNavigate()
const MySwal = withReactContent(Swal)

useEffect(()=>{
  getKategory()
},[])

const getKategory = async () =>{
  try{
    const response = await instance.get("/kategori")
    setListKategory(response.data)
  }catch(err){
    console.log(err)
  }
}

const handleChange=(e)=>{
  setProduk(prev=>{
    return {
      ...prev,
      [e.target.name]:e.target.value
    }
  })
}

const handleSubmit = async (e)=>{
  e.preventDefault()
 try{
   const kategoryId = listKategory.filter(m=>m.nma_kategori === produk.kategory)
   const data = {namaProduk:produk.nama,
    warna:produk.warna,
    berat:produk.berat,
    harga:produk.harga,
    stok:produk.stok,
    deskripsi:produk.deskripsi,
    terjual:0,
    kategoryId:kategoryId[0].id
  }
  const addProduk = await axiosJwt.post("/produk",data)
  setProduk({
  nama:"",
  harga:null,
  warna:"",
  berat:null,
  stok:null,
  deskripsi:"",
  kategory:""
})
  MySwal.fire(
  'produk ditambahkan!',
  'Lanjutkan untuk menambahkan foto Produkmu!',
  'success'
  ).then(()=>{
     navigate("/produk/foto/add/"+addProduk.data.id)
      return true
  })

 }catch(err){
   console.log(err)
 }
}
  return (
    <div className="w-screen min-h-screen">
   <FormLayout type="add produk">
    <form onSubmit={handleSubmit} className="w-full flex flex-col items-center gap-5">
     <Input event={handleChange} type="teks" name="nama" placeholder="Nama Produk" input={produk.nama}/>
     <Input event={handleChange} name="harga" type="number" placeholder="Harga" input={produk.harga}/>
     <Input event={handleChange} type="number" name="berat" placeholder="Berat" input={produk.berat}/>
     <Input event={handleChange} type="numbe" placeholder="Stok" name="stok" input={produk.stok}/>
     <Input event={handleChange} type="text" name="warna" placeholder="Warna" input={produk.warna}/>
     <Input event={handleChange} type="textarea" name="deskripsi" placeholder="Deskripsi" input={produk.deskripsi}/>
      <div className="w-[90%] my-2 relative mx-auto flex items-center justify-end tracking-wide font-noto font-medium">
     <select value={produk.kategory} name="kategory" onChange={handleChange} className="appearance-none w-[100%] absolute bottom-0 bg-transparent peer border-b-[.8px] border-b border-b-grayTxt outline-none text-sm py-1 font-semibold tracking-wide focus:border-greenPrimary text-slate-600">
     <option hidden value="">Pilih Kategori</option>

      {
        listKategory?.map((m,i)=>(
            <option key={m.id} value={m.nma_kategori}>{m.nma_kategori}</option>
          ))
      }
    
     </select>
     <label className={`text-grayTxt absolute left-0 text-[.9rem] text-[.7rem] -top-6`}>Kategori</label>
     <span className="right-2 text-xl"><RiArrowDownSLine/></span>
   </div>

   <button className="w-[80%] mx-auto py-3 bg-greenPrimary rounded-md text-whitePrimary font-noto font-bold">Tambah</button>
     </form>
   </FormLayout>
  </div>
    )
}