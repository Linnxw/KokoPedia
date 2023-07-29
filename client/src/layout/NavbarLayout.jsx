import MenuIcons from "../components/MenuIcons"

import {CiHome} from "react-icons/ci"
import {IoSpeedometerOutline} from "react-icons/io"
import {CiCircleList} from "react-icons/ci"
import {CiTimer} from "react-icons/ci"
import {CiUser} from "react-icons/ci"
export default function NavbarLayout(){
  const menu=[
  {
    title:"Dashboard",
    icon:<IoSpeedometerOutline/>
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
  ]
  return (
  <div className="w-screen h-14 border-t-[.5px] border-grayTxt fixed bottom-0 flex items-center bg-whitePrimary justify-evenly">
  {
    menu?.map((m,i)=>{
    return <MenuIcons key={i} title={m.title} icon={m.icon}/>
  })
  }

  </div>
  )
}