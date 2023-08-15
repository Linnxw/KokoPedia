import avatar from "/avatar.webp"
export default function Coment(){
  return (
    <div className="w-full flex py-1  flex-col items-start font-noto">
     <div className="flex gap-1 items-center justify-start px-2 py-1 font-inter">
       <img src={avatar} className="w-7 h-7 rounded-full object-cover"/>
       <p>Irfan Akbar</p>
     </div>
     <div className="w-full p-1 text-sm">
       <p>Barangnya bagus, Kualitas oke,Rekomended banget lah pokoknya mantappp min</p>
     </div>
    </div>
    )
}