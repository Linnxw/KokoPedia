import {useNavigate} from "react-router-dom"
export default function NotLogin(){
  const navigate = useNavigate()
  return (
    <div className="absolute backdrop-blur-[1px] w-screen h-full bg-gradient-to-b from-[#ffffff1d] from-10% via-[#fffffff4] via-40% to-[#fffffff4] to-40% flex items-center flex-col justify-center font-inter gap-2">
   <button onClick={()=>navigate("/login")} className="rounded bg-greenPrimary text-whitePrimary border border-greenPrimary font-inter font-bold text-[.8rem] text-greenPrimary h-11 px-11">Login</button>
   <p className="text-[.8rem] text-greenPrimary font-semibold">Silahkan <a className="text-greenPrimary">Login</a> untuk melanjutkan</p>
    </div>
    )
}