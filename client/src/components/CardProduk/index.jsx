export default function index(props){
const {img,title,harga,kota,cashback=false,top=false,terjual}=props
  return (
  <div className="w-36 rounded overflow-hidden font-noto border border-slate-200">
    <div className="w-full h-28">
      <img src={img} className="w-full h-full object-cover"/>
    </div>
    <div className="flex flex-col items-start p-1 gap-[2px]">
    {
      top && (
      <div className="w-7 h-5 flex items-center justify-end px-2 text-[.7rem] text-whitePrimary rounded-r-full bg-orange-400 font-bold">#{top}</div>
      )
    }
    <div className="text-sm py-1 leading-none text-blackTxt tracking-wide">
     <p>{title}</p>
    </div>
    <div className="text-[.9rem] font-inter font-semibold tracking-wide">
     <p>Rp {harga}</p>
    </div>
    {
      cashback && (
      <div className="p-[2px] font-noto rounded bg-green-200 text-[.6rem] flex items-center justify-center text-greenPrimary font-bold">
       <p>Cashback</p>
      </div>
      )
    }
    <div className="text-sm text-grayTxt tracking-wide font-noto">
     <p>{kota}</p>
    </div>
    <div className="text-[.7rem] text-blackTxt tracking-wide">
     <p>Terjual {terjual}</p>
    </div>
    </div>
  </div>
  )
}