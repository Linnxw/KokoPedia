export default function FilterMenu({title,children,isShowAll=false}){
  return (
    <div className="w-screen flex flex-col gap-2 p-3">
     <div className="flex justify-between items-center text-lg font-inter font-semibold">
       <div className="flex items-center justify-center text-blackTxt">
         <p>{title}</p>
       </div>
       {isShowAll && (
         <div className="flex items-center justify-center text-greenPrimary text-sm">
         <p>Lihat semua</p>
         </div>
         )}
     </div>
     <div className="flex flex-wrap gap-2">
       {children}
     </div>
    </div>
    )
}