import promo from "../../../public/promo.webp"
import kategory from "../../../public/kategory.webp"
import now from "../../../public/now.webp"
import earphone from "../../../public/earphone.webp"
import keuangan from "../../../public/keuangan.webp"
import laptop from "../../../public/laptop.webp"
import balon from "../../../public/balon.webp"
import pakaian from "../../../public/pakaian.webp"
import pulsa from "../../../public/pulsa.webp"
import hp from "../../../public/hp.webp"
import CardCategory from "./CardCategory"
export default function SwiperCategory(){
const menu=[
{
  img:promo,
  title:"Promo hari ini"
},
{
  img:kategory,
  title:"Lihat semua"
},
{
  img:now,
  title:"Belanja sekarang"
},
{
  img:earphone,
  title:"Elektronik"
},
{
  img:keuangan,
  title:"Keuangan"
},
{
  img:laptop,
  title:"Latop dan Pc"
},
{
  img:hp,
  title:"Handphone & Tablet"
},
{
  img:pulsa,
  title:"TopUp dan Tagihan"
},
{
  img:pakaian,
  title:"Fashion Pria"
}
]
  return (
  <div className="w-screen py-2 overflow-x-scroll scrollbar">
    <div className="h-20 w-[500px] flex gap-4 items-center px-4">
    {menu.map((m,i)=><CardCategory key={i} img={m.img} title={m.title}/>)}
    </div>
  </div>
  )
}