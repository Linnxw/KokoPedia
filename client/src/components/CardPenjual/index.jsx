import pro from "/pro.png"
import gopay from "/gopay.png"
export default function index(){
  return(
    <div className="w-screen p-2 h-20 flex items-center">
      <div className="h-full flex items-center justify-center">
      <div className="rounded-full overflow-hidden w-16 h-16">
       <img src={gopay} className="h-full object-cover w-full"/>
      </div>
      </div>
      <div className="w-full flex flex-col px-2 items-start font-inter text-[.7rem] text-blackTxt">
      <div className="w-full flex items-center justify-start gap-1 font-inter font-semibold text-lg">
        <img src={pro} className="w-5 object-contain"/>
        <h1>Ulil alanan</h1>
      </div>
      <div className="w-full flex items-center text-slate-700 justify-start gap-1">
        <p>2 Followers</p>
      </div>
      <div className="w-full flex items-center justify-start text-slate-700 gap-1">
        <p>Kudus</p>
      </div>
      </div>
      <button className="rounded border border-greenPrimary bg-whitePrimary font-inter text-greenPrimary py-1 px-4">Follow</button>
    </div>
    )
}