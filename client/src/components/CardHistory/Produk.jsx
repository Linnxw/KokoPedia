import laptop from "/laptop.webp"
export default function Produk({data}){
  return (
    <div className="w-full p-1 flex gap-2">
     <div className="h-16">
       <img src={data?.url} className="h-full w-full object-contain"/>
     </div>
     <div className="flex flex-col items-start justify-start py-1 text-slate-800 font-inter text-md">
      <p>{data?.nma_produk}</p>
      <p className="font-noto text-[.6rem] text-slate-600">{data?.jumlah} Barang</p>
     </div>
    </div>
    )
}