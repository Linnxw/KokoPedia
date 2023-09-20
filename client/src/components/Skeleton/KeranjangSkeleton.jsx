import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
export default function KeranjangSkeleton({cards}){
  return Array(cards).fill(0).map((m,i)=>(
   <div key={i} className="w-screen bg-white py-2">
      <div className="w-full items-center flex py-2 gap-1 px-2">
       <Skeleton height={23} width={23}/>
       <div className="flex text-sm flex-col">
       <Skeleton height={15} width={120}/>
         <Skeleton height={15} width={140}/>
       </div>
      </div>
      <div className="flex p-2 items-center w-full">
        <Skeleton height={60} width={60}/>
        <div className="px-3 font-noto flex flex-col">
           <Skeleton height={15} width={150}/>
           <Skeleton height={15} width={70}/>
          <Skeleton height={15} width={80}/>
        </div>
      </div>
      <div className="flex font-inter flex-col px-4">
        <Skeleton height={15} width={70}/>
       <div className="font-noto text-[.8rem] text-slate-600 justify-between flex items-center w-full h-5">
         <Skeleton height={15} width={130}/>
         <div className="flex gap-1">
          <Skeleton height={25} width={25}/>
         <div>
            <Skeleton height={25} width={70}/>
         </div>
         </div>
       </div>
      </div>
   </div>
  ))
}