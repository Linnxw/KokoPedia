import reward from "/reward.png"
import gopay from "/gopay.png"
import avatar from "/avatar.webp"
import promoGopay from "/promoGopay.png"
import {GoPencil} from "react-icons/go"
import {BsShieldPlus} from "react-icons/bs"
import {getMe} from "../../redux/slice/meSlice"
import {useNavigate} from "react-router-dom"
import {useDispatch,useSelector} from "react-redux"
import {MdArrowForwardIos} from "react-icons/md"
import {useEffect} from "react"
export default function index(){
  const dispatch=useDispatch()
  const navigate = useNavigate()
  const {me,isLoading,msg}=useSelector(state=>state.me)
  useEffect(()=>{
    dispatch(getMe())
  },[])
  return (
    <>
    <div className="w-screen px-2  h-24 flex items-center">
      <div className="h-full flex items-center justify-center px-2">
      <div className="rounded-full overflow-hidden w-16 h-16">
       <img src={me ? me.url : avatar} className="h-full object-cover w-full"/>
      </div>
      </div>
      <div className="w-full flex flex-col px-2 items-start font-noto text-[.7rem] text-blackTxt">
      <div className="flex flex-col gap-1">
        <h1 className="font-inter font-semibold leading-none text-lg">{me ? me.nama : "Guest akun"}</h1>
        <p className="font-noto text-sm">{me ? me.email : "Guest akun"}</p>
        <div className="bg-greenPrimary py-1 px-4 flex items-center gap-1 font-inter text-white font-bold tracking-wide rounded">
         <span className="text-lg"><BsShieldPlus/></span>
         <button>Tambah Nomor Hp</button>
        </div>
      </div>
      </div>
      <div onClick={()=>navigate("/acount/edit")} className="w-16 h-full flex items-center justify-center text-2xl text-slate-600">
        <span><GoPencil/></span>
      </div>
    </div>
    </>
    )
}