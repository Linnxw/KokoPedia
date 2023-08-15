import pro from "/pro.png"
import gopay from "/gopay.png"
import {useState,useEffect} from "react"
import {instance} from "../../api/instance"
export default function index({data}){
  const [follow,setFollow]=useState({})
  
  useEffect(()=>{
    getFollow()
  },[data])
  
  const getFollow=async()=>{
    try{
      const response=await instance.get(`/user/follow/count/?userId=${data?.user_id}`)
      setFollow(response.data[0])
    }catch(err){
      console.log(err)
    }
  }
  return(
    <div className="w-screen px-2 py-6 flex items-center">
      <div className="h-full flex items-center justify-center">
      <div className="rounded-full overflow-hidden w-16 h-16">
       <img src={data?.url_foto_profil} className="h-full object-cover w-full"/>
      </div>
      </div>
      <div className="w-full flex flex-col px-2 items-start font-inter text-[.7rem] text-blackTxt">
      <div className="w-full flex items-center justify-start gap-1 font-inter font-semibold text-lg">
        <img src={pro} className="w-5 object-contain"/>
        <h1>{data?.nama}</h1>
      </div>
      <div className="w-full flex items-center text-slate-700 justify-start gap-1">
        <p>{follow.follower} Followers</p>
      </div>
      <div className="w-full flex items-center justify-start text-slate-700 gap-1">
        <p>{data?.alamat}</p>
      </div>
      </div>
      <button className="rounded border border-greenPrimary bg-whitePrimary font-inter text-greenPrimary py-1 px-4">Follow</button>
    </div>
    )
}