import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

export default function ProdukSkeleton(props){
  const {img,
id,
level,
cashback=false,
top=false,
width='w-36',
height='h-28',
gap="gap-2px",
cards
}=props
  return Array(cards).fill(0).map((m,i)=>(
<div key={i} className={`${width} rounded overflow-hidden font-noto border border-slate-200 box min-h-min static z-10`}
      onClick={()=>props.event(id)}>
    <Skeleton className={`w-full ${height} relative`}/>
    <div className={`flex flex-col items-start p-1 ${gap}`}>
    <Skeleton count={2} width={140} height={18}/>
    
    {
      cashback && (
        <Skeleton width={50} height={18}/>
      )
    }
    <div className="text-sm text-grayTxt font-noto flex items-center justify-center gap-1">
    <div className="flex items-center justify-center">
     <Skeleton circle width={18} height={18}/>
    </div>
      <Skeleton width={40} height={18}/>
    </div>
    <div className="text-[.7rem] text-blackTxt tracking-wide">
     <Skeleton width={50} height={18}/>
    </div>
    </div>
 </div>
 ))
}