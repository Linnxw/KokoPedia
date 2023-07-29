export default function Text({title,data}){
  return (
  <div className="w-full px-3 md:px-5 md:py-3 py-1 font-noto font-black">
   <h1 className="text-[.8rem] md:text-sm text-grayTxt">{title}</h1>
   <p className="text-2xl md:text-4xl tracking-wide">{data}</p>
  </div>
  )
}