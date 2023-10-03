import PopUpLayout from "../../layout/PopUpLayout"
import Button from "./Button"
import Input from "./Input"
import {useState} from "react"
import FilterMenu from "./FilterMenu"
export default function index({eventFilter,event,inputTerendah,inputTertinggi,open}){
  const [by,setBy]=useState("")
  const [rangeHarga,setRangeHarga] = useState({min:"",max:""})
  const handleTerlaris = () =>{
    eventFilter("Terlaris")
  }
  const handleHargaTertinggi = () =>{
     eventFilter("Harga Tertinggi")
  }
  const handleHargaTerendah = () =>{
     eventFilter("Harga Terendah")
     console.log("cliecked")
  }
  const handleTerbaru = () =>{
     eventFilter("Terbaru")
  }
  
  const handleMinimal = ({target}) =>{
    const min = target.value
    setRangeHarga({...rangeHarga,min:parseInt(min)})
  }
  const handleMaximal = ({target}) =>{
    const max = target.value
    setRangeHarga({...rangeHarga,max:parseInt(max)})
  }
  
  const handleSubmit = (e) =>{
    e.preventDefault()
    eventFilter("Range harga",rangeHarga)
  }
  
  return (
    <PopUpLayout event={event} open={open}>
      <FilterMenu title="Urutkan">
        <Button event={handleTerlaris} filterBy={by} title="Terlaris"/>
        <Button event={handleHargaTertinggi} filterBy={by} title="Harga Tertinggi"/>
        <Button event={handleHargaTerendah} filterBy={by} title="Harga Terendah"/>
        <Button event={handleTerbaru} filterBy={by} title="Terbaru"/>
      </FilterMenu>
      <FilterMenu title="Rentan Harga">
      <form className="flex items-cw=enter gap-1" onSubmit={handleSubmit}>
        <Input event={handleMinimal} placeholder="Minim"/>
        <Input event={handleMaximal} placeholder="Max"/>
        <button type="submit" className="rounded bg-greenPrimary text-whitePrimary border border-greenPrimary font-inter font-bold text-[.8rem] text-greenPrimary p-2">Terapkan</button>
      </form>
      </FilterMenu>
    </PopUpLayout>
    )
}