import MenuIcons from "../components/MenuIcons"
import {useEffect,useState} from "react"
import {CiHome} from "react-icons/ci"
import {BsSpeedometer2} from "react-icons/bs"
import {CiCircleList} from "react-icons/ci"
import {CiTimer} from "react-icons/ci"
import {CiUser} from "react-icons/ci"
import {axiosJwt} from "../api/interceptor"
import {useDispatch,useSelector} from "react-redux"
export default function NavbarLayout(){
  
 const [menu,setMenu] = useState([
  {
    title:"Dashboard",
    icon:<BsSpeedometer2/>
  },
  {
    title:"Home",
    icon:<CiHome/>
  },
  {
    title:"Category",
    icon:<CiCircleList/>
  },
  {
    title:"History",
    icon:<CiTimer/>
  },
  {
    title:"Acount",
    icon:<CiUser/>
  },
  ])
  
  const getMe = async () =>{
  try{
    const response=await axiosJwt.get("/user/me")
    return true
  }catch(err){
    console.log(err)
    if(err.response){
      return false
    }
  }
  }
  
  useEffect(()=>{
   async function handleMenu(){
    const user = await getMe()
    if(!user){
      setMenu(state => state.filter(m=>m.title !== "Dashboard"))
    }
    }
    handleMenu()
   },[])

  return (
  <div className="w-screen h-14 border-t-[.5px] border-grayTxt fixed bottom-0 flex z-40 items-center bg-whitePrimary justify-evenly">
  {
    menu?.map((m,i)=>{
    return <MenuIcons key={i} title={m.title} icon={m.icon}/>
  })
  }

  </div>
  )
}