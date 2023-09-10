import {useParams,useNavigate} from "react-router-dom"
import CardProduk from "../components/CardProduk"
import {axiosJwt} from "../api/interceptor"
import {useProduk} from "../hooks/useProduk"
import {CiShoppingCart} from "react-icons/ci" 
import FilterPopUp from "../components/FilterPopUp"
import pro from "/pro.png"
import {AiOutlineArrowLeft} from "react-icons/ai"
import {CiSearch} from "react-icons/ci"
import {useEffect,useRef,useState} from "react"
import CategoryList from "../components/CategoryList"
import InfoAlamat from "../components/InfoAlamat"
export default function ResultSearch(){
  const {search}=useParams()
  const url=`/produk/search?search=${search}`
  let [data,msg]=useProduk(url)
  const [active,setActive]=useState(false)
  const [keranjang,setKeranjang]=useState(0)
  const [isOpen,setIsOpen]=useState(false)
  const [produk,setProduk]=useState([])
  const ref=useRef()
  const navigate=useNavigate()
  const [kategory,setKategory]=useState("Cashback")
  const [input,setInput]=useState("")
  
  useEffect(()=>{
   setInput(search.replace("-"," "))
  },[])
 
  useEffect(()=>{
    const handleScroll=()=>{
      if(window.scrollY > 10){
        setActive(true)
      }else{
        setActive(false)
      }
    }
  window.addEventListener("scroll",handleScroll)
  return ()=>{
    window.removeEventListener("scroll",handleScroll)
  }
   },[])
  
  useEffect(()=>{
    setProduk(data)
  },[data])
  
  const handleChange=()=>{
    navigate("/search")
  }
  
  const listCategory=["Filter","Oficial store","Cashback","Free ongkir"]
  
  const handleFilter=(m)=>{
    switch (m) {
      case 'Oficial store':
        const resultFilter=data.filter(m=>m.role_penjual === "admin")
        setProduk(resultFilter)
        break;
      case 'Cashback':
        setProduk(data)
        break;
      case ('Free ongkir'):
        setProduk(data)
        break;
      case ('Filter'):
        setIsOpen(prev=>!prev)
        break;
    }
    setKategory(m)
  }
 
  const handleFilterDetail=(type)=>{
    switch (type) {
      case 'Terlaris':
        const terlaris=data.sort((a,b)=>b.terjual - a.terjual)
        setProduk(terlaris)
        setIsOpen(false)
        break;
      case 'Harga Terendah':
        const hargaTerendah=data.sort((a,b)=>a.harga - b.harga)
        setProduk(hargaTerendah)
        setIsOpen(false)
      break;
      case 'Harga Tertinggi':
        const hargaTertinggi=data.sort((a,b)=>b.harga - a.harga)
        setProduk(hargaTertinggi)
        setIsOpen(false)
      break;
      case 'Mejobo':
        const lokPilihan=data.filter(m=>m.alamat === "kirig")
        console.log(lokPilihan)
        setProduk(lokPilihan)
        setIsOpen(false)
    }
  }
  
  const handleInputTerendah=(e)=>{
    console.log(e.target.value)
  }
  const handleInputTertinggi=(e)=>{
    console.log(e.target.value)
  }
  
   useEffect(()=>{
    getKeranjang()
  },[])
  
  const getKeranjang=async()=>{
    try{
      const response=await axiosJwt.get("/keranjang")
      setKeranjang(response.data.length)
    }catch(err){
      console.log(err)
    }
  }
  return (
  <div className="w-screen">
  <div className={`w-screen flex items-center justify-start font-noto tracking-wide text-blackTxt text-sm p-2 gap-2 z-40 top-0 bg-whitePrimary ${active ? "fixed" : "sticky"}`} ref={ref}>
    <span className="text-3xl flex items-center justify-center text-slate-400" onClick={handleChange}><AiOutlineArrowLeft/></span>
    <div className="flex items-center text-grayTxt w-3/5 relative flex items-center justify-start" onClick={handleChange}>
      <input type="teks" className="absolute left-1 flex items-center text-slate-400 peer-focus " defaultValue={input}/>
      <div className={`absolute left-1 flex items-center ${input.length > 0 && "hidden"} peer-focus:hidden`}>
        <span className="text-xl grid place-items-center"><CiSearch/></span>
        <p className="select-none">Cari di KokoPedia</p>
      </div>
    </div>
    
    <div className="text-2xl flex items-center justify-evenly w-2/5">
    <span className="grid relative place-items-center" onClick={()=>navigate("/keranjang")} >
     <span className="w-4 text-white font-inter h-4 text-[.5rem] text-semibold flex items-center justify-center rounded-full bg-red-500 absolute -right-2 -top-2">{keranjang}</span>
    <CiShoppingCart/>
    </span>
    <div className="flex items-center w-4 h-6 flex-col justify-evenly">
      <span className="bg-blackTxt inline-block w-full h-[2px] rounded"></span>
      <span className="bg-blackTxt inline-block w-full h-[2px] rounded"></span>
      <span className="bg-blackTxt inline-block w-full h-[2px] rounded"></span>
    </div>
    </div>
  </div>
  <CategoryList data={listCategory} kategory={kategory} event={handleFilter}/>
  <InfoAlamat size="text-sm"/>
  <div className="w-screen grid grid-cols-2 place-items-center gap-y-2 px-3">
   {
     produk ? produk.map(m=>{
       return (
        <CardProduk 
        key={m.id}
        id={m.id}
        event={(id)=>navigate("/produk/"+id)}
        cashback={true} 
        title={m.nama_produk}
        img={m.url_foto_produk} 
        kota={m.alamat} 
        terjual={m.terjual} 
        harga={m.harga} 
        width="w-40"
        height="h-36" 
        gap="gap-1" 
        level={pro}
        initial={{y:'100vh',opacity:0}}
        animate={{y:0,opacity:1}}
        />
         )
     }) : (<p>{msg}</p>)
   }
  </div>
  {
    (<FilterPopUp open={isOpen} event={()=>setIsOpen(false)} eventFilter={handleFilterDetail} inputTerendah={handleInputTerendah} inputTertinggi={handleInputTertinggi}/>)
  }
  </div>
  )
}
