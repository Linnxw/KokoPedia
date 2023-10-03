import {Chart as ChartJs,BarElement,CategoryScale,LinearScale,Colors} from "chart.js"
import {useState,useEffect} from "react"
import {Bar} from "react-chartjs-2"
  ChartJs.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Colors
  )
import ChartDataLabels from 'chartjs-plugin-datalabels';

export default function ChartShelling({produk}){

const [label,setLabel]=useState([])

useEffect(()=>{
  generateProdukName()
},[])
const generateProdukName=()=>{
    const newName=[]
    for(let i = 0 ; i < produk.length ; i++){
       
      if(produk[i].nama_produk.length > 14){
        let str=produk[i].nama_produk.split(" ")
        newName.push(str)
      }else{
        newName.push(produk[i].nama_produk)
      }
    }
    return newName
  }
const data = {
  labels:produk.map(m=>m.nama_produk),
  datasets: [{
    label: '# of Votes',
    data:produk.map(m=>m.terjual),
    borderWidth: 0
  }]
}

const options = {
  maintainAspectRatio: true,
  scales: {
    y: {
      beginAtZero: true
    },
  },
  plugins: {
    legend: {
      labels: {
        fontSize: 20,
      }
    },
  }
}

return (
  <div className="w-[300px] md:w-[600px] font-noto text-grayTxt bg-whitePrimary rounded font-bold my-3 md:my-5 md:text-4xl mx-auto overflow-scroll gap-1 md:gap-4 flex flex-col">
    <Bar
      height={250}
      data={data}
      options={options}
    />
  </div>
)
}