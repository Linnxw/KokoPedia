import PopUpLayout from "../../layout/PopUpLayout"
import Button from "./Button"
import {useState} from "react"
import FilterMenu from "./FilterMenu"
export default function index(){
  const [by,setBy]=useState("Terlaris")
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
      isShowAll:false
    }
    ]
  return (
    <PopUpLayout>
     {
       data.map((m,i)=>{
         return (
      <FilterMenu title={m.title} isShowAll={m.isShowAll}>
        {
          m.filterBy.map(m=>(
            <Button title={m} filterBy={by}/>
            ))
        }
      </FilterMenu>
           )
       })
     }
    </PopUpLayout>
    )
}