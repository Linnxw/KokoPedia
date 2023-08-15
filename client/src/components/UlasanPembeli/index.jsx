import Coment from "./Coment"
export default function index(){
  return (
    <div className="w-full py-2 border-t border-slate-400 font-inter text-blackTxt">
     <div className="p-2 justify-between font-bold flex">
       <h1>Ulasan Pembeli</h1>
       <h1 className="text-sm text-greenPrimary">Lihat Semua</h1>
     </div>
     <Coment/>
    </div>
    )
}