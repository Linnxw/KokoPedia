export default function index({img,title,desc}){
  return (
    <div className="w-screen flex flex-col items-center text-center gap-2 p-5">
     <img src={img} className='w-[85%]'/>
     <p className="font-inter text-xl text-blackTxt font-semibold">{title}</p>
     <p className="text-slate-700 font-noto text-sm leading-loose">{desc}</p>
     <button className="font-inter bg-greenPrimary rounded-md py-2 text-white px-7">Mulai Belanja</button>
    </div>
    )
}