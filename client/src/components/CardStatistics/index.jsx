import Icons from "./Icons"
import Text from "./Text"
export default function index(props){
  const {icon,title,data,variant}=props
  return (
  <div className="w-[300px] h-28 mx-auto border-[1px] border-slate-200 rounded flex items-center bg-whitePrimary px-3">
    <Icons icon={icon} variant = {variant}/>
    <Text title={title} data={data}/>
  </div>
  )
}