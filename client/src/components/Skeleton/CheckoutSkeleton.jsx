import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

export default function CheckoutSkeleton(){
  return (
     <div className="w-full flex flex-col items-center gap-2">
     
     
     <div className="w-full bg-white flex flex-col text-slate-700">
      <div className="py-5 px-4 text-md font-inter font-semibold">
        <Skeleton width={140} height={25}/>
      </div>
      <div className="px-4 py-1 font-noto text-sm">
        <div>
        <Skeleton width={90} height={15}/>
        <Skeleton width={120} height={15}/>
        </div>
        <div classname="text-[.7rem] flex flex-wrap">
         <Skeleton width={170} height={15}/>
        </div>
      </div>
    </div>
     
  
    <div className="w-full bg-white p-4 flex flex-col items-center gap-1 font-inter font-semibold">
     <div className="font-normal w-full">
       <div className="flex items-center gap-1">
        <Skeleton width={30} circle height={30}/>
        <Skeleton width={140} height={15}/>
       </div>
       <div className="py-1 gap-1 flex font-noto">
          <Skeleton width={120} height={20}/>
          <Skeleton width={100} height={20}/> 
       </div> 
     </div>
     <div className="flex items-start w-full">
      <Skeleton width={60} height={60}/>
 
      <div className="font-inter p-1 h-full flex flex-col">
        <Skeleton width={140} height={16}/>
        <Skeleton width={100} height={15}/>
        <Skeleton width={120} height={16}/>
      </div>
     </div>
      <Skeleton width={320} height={30}/>
   </div>
      
      
      
      <div className="w-full bg-white p-2 flex justify-between items-center">
          <Skeleton width={80} height={15}/>
          <Skeleton width={70} height={15}/>
      </div>
     <div className="w-full bg-white px-2 py-4 flex justify-between items-center">
      <div className="flex flex-col gap-1">
        <Skeleton width={110} count={2} height={17}/>
      </div>
       
        <div className="flex items-end">
         <Skeleton width={70} height={20}/>
        </div>
      </div>
      <div className="w-full bg-white px-2 py-4 flex justify-between items-center">
      <div className="flex flex-col gap-1">
        <Skeleton width={100} height={17}/>
         <Skeleton width={80} height={17}/>
      </div>
       
        <div className="flex items-end">
         <Skeleton width={70} height={40}/>
        </div>
      </div>
    </div>
    )
}