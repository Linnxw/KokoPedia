export default function MenuLayout({children,title,padding=true}){
  return (
    <div className="w-screen px-2 flex flex-col items-start">
     <div className={`w-screen text-lg font-noto tect-blackTxt font-bold ${padding ? "py-4" :"py-2" }`}>
       <h1>{title}</h1>
     </div>
     <div className={`w-screen flex flex-col gap-3 ${padding ? "px-1" : "px-0"} items-start`}>
       {children}
     </div>
    </div>
    )
}