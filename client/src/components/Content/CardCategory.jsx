export default function CardCategory({img,title}){
  return (
  <div className="w-12 h-16 flex flex-col items-center justify-evenly gap-2">
   <div className="w-[70%] h-1/2 flex items-center justify-center">
     <img src={img} className="object-cover w-full"/>
   </div>
   <div className="text-[.6rem] h-1/2 font-noto tracking-wide flex text-center flex-wrap flex p-1 leading-none">
     <p>{title}</p>
   </div>
  </div>
  )
}