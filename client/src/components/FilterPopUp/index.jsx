import PopUpLayout from "../../layout/PopUpLayout"
import Button from "./Button"
import Input from "./Input"
import {useState} from "react"
import FilterMenu from "./FilterMenu"
export default function index({eventFilter,event,inputTerendah,inputTertinggi,open}){
  const [by,setBy]=useState("")
  const data=[
    {
      title:"Urutkan",
      filterBy:['Harga Tertinggi', 'Harga Terendah','Terlaris'],
      isShowAll:false
    },
    {
      title:"Lokasi",
      filterBy:['Mejobo', 'Kudus','Semarang'],
      isShowAll:true
    },
    {
      title:"Urutkan",
      filterBy:['Harga Tertinggi', 'Harga Terendah'],
      isShowAll:true
    },
    {
      title:'Harga',
      filterBy:['Terendah','Tertinggi'],
      isShowAll:false,
      isInput:true
    }
    ]
  return (
    <PopUpLayout event={event} open={open}>
     {
       data.map((m,i)=>{
         return (
      <FilterMenu title={m.title} isShowAll={m.isShowAll}>
        {
          m.isInput ? (
            <>
            <Input placeholder={m.filterBy[0]} event={inputTerendah}/>
            <Input placeholder={m.filterBy[1]} event={inputTertinggi}/>
            </>
            ) : (
          m.filterBy.map(n=>(
            <Button title={n} filterBy={by} event={eventFilter}/>
            ))
            )
        }
      </FilterMenu>
           )
       })
     }
    </PopUpLayout>
    )
}