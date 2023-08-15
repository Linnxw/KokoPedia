import reward from "/reward.png"
import gopay from "/gopay.png"
import avatar from "/avatar.webp"
import promoGopay from "/promoGopay.png"
import {IoSettingsOutline} from "react-icons/io5"
import {getMe} from "../../redux/slice/meSlice"
import {useDispatch,useSelector} from "react-redux"
import {MdArrowForwardIos} from "react-icons/md"
import {useEffect,useState} from "react"
export default function index(){
  const dispatch=useDispatch()
  const {me,isLoading,msg}=useSelector(state=>state.me)
  useEffect(()=>{
    dispatch(getMe())
  },[])
  return (
    <>
    <div className="w-screen px-2 h-20 flex items-center">
      <div className="h-full flex items-center justify-center">
      <div className="rounded-full overflow-hidden w-16 h-16">
       <img src={me?.url} className="h-full object-cover w-full"/>
      </div>
      </div>
      <div className="w-full flex flex-col px-2 items-start font-noto text-[.7rem] text-blackTxt">
      <div className="w-full flex items-center justify-start gap-1 font-inter font-semibold text-lg">
        <img src={reward} className="w-5 object-contain"/>
        <h1>{me?.nama}</h1>
      </div>
      <div className="w-full flex items-center justify-start gap-1">
        <img src={gopay} className="w-5 object-contain"/>
        <p>GoPay dan GoPay Coint belum aktif</p>
      </div>
      <div className="w-full flex items-center justify-start gap-1">
        <img src={promoGopay} className="w-5 object-contain"/>
        <p>Saldo Rp0</p>
      </div>
      </div>
      <div className="w-16 h-full flex items-center justify-center text-2xl text-slate-600">
        <span><IoSettingsOutline/></span>
      </div>
    </div>
    <div className="w-screen h-16 flex items-center px-3 justify-between gap-3">
     <div className="w-[48%] py-2 rounded-md text-sm font-noto text-blackTxt flex items-center justify-center gap-2 border border-slate-400">
       <p>Jual Produk</p>
       <span className="text-md"><MdArrowForwardIos/></span>
     </div>
     <div className="w-[48%] py-2 rounded-md text-sm font-noto text-blackTxt flex items-center justify-center gap-2 border border-slate-400">
       <p>Kelola Produk</p>
       <span className="text-md"><MdArrowForwardIos/></span>
     </div>
    </div>
    </>
    )
}