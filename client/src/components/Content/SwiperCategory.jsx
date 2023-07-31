import promo from "/promo.webp"
import kategory from "/kategory.webp"
import now from "/now.webp"
import earphone from "/earphone.webp"
import keuangan from "/keuangan.webp"
import laptop from "/laptop.webp"
import balon from "/balon.webp"
import pakaian from "/pakaian.webp"
import pulsa from "/pulsa.webp"
import hp from "/hp.webp"
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