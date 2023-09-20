import {useDispatch,useSelector} from "react-redux"
import {useEffect} from "react"
import {getMe} from "../../redux/slice/meSlice"
export default function index(){
  const {me,isLoading,isError} = useSelector(state => state.me)
  const dispatch = useDispatch()
  useEffect(() =>{
     dispatch(getMe())
  },[])
  useEffect(() =>{
     console.log({me,isLoading,isError})
  },[dispatch,isLoading,isError])
  return (
    <div className="w-full bg-white flex flex-col text-slate-700">
      <div className="py-5 px-4 text-md font-inter font-semibold">
        <h5>Alamat Pengiriman</h5>
      </div>
      <div className="px-4 font-noto text-sm">
        <div>
          <p><a className="font-inter hover:underline font-semibold mr-1">{me?.nama}</a>Rumah</p>
          <p>{me?.email}</p>
        </div>
        <div classname="text-[.7rem] flex flex-wrap">
         <p>{me?.alamat}</p>
        </div>
      </div>
    </div>
    )
}