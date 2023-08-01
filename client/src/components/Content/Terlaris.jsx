import CardProduk from "../CardProduk"
import gopay from "/gopay.png"
export default function Terlaris(){
  return (
  <div className="w-screen border-t-2 border-slate-200 font-noto flex flex-col gap-2">
   <div className="w-full px-3 flex justify-between items-center">
     <div className="text-md font-bold tracking-wide text-blackTxt">
       <p>Terlaris</p>
     </div>
     <div className="text-sm font-bold tracking-wide text-greenPrimary">
       <p>Lihat semua</p>
     </div>
   </div>
   <div className="px-3 w-screen overflow-scroll scrollbar">
    <div className="flex inline-block gap-2">
    <button className="px-3 w-auto py-1 text-md rounded-lg flex border border-grayTxt hover:border-greenPrimary hover:text-greenPrimary">Laptop</button>
    <button className="px-3 w-auto py-1 text-md rounded-lg border border-grayTxt hover:border-greenPrimary hover:text-greenPrimary">Earphone</button>
    <button className="px-3 w-auto py-1 text-md rounded-lg border border-grayTxt hover:border-greenPrimary hover:text-greenPrimary">Handphone</button>
    <button className="px-3 w-auto py-1 text-md rounded-lg border border-grayTxt hover:border-greenPrimary hover:text-greenPrimary">Pakaian</button>
    </div>
   </div>
   <div className="flex justify-center w-screen">
    <CardProduk title="LAPTOP ASUS TERBARU" cashback={true} top={1} img={gopay} kota="Kudus" terjual={2000} harga={'3000.000'}/>
   </div>
  </div>
  )
}