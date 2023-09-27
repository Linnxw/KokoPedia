import Header from "./Header"
import Produk from "./Produk"
import Total from "./Total"
export default function index({data}){
  return (
    <div className="w-[92%] my-1 mx-auto p-2 flex rounded-md flex-col border border-slate-200">
     <Header data={data}/>
     <Produk data={data}/>
     <Total data={data}/>
    </div>
    )
}