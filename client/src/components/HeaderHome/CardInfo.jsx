export default function CardInfo(props){
const {img,title,variant="text-grayTxt",value,detail} = props
  return (
  <div className="w-[50%] h-full p-2 text-[.7rem]">
    <div className="flex items-center justify-start">
     <div className="text-grayTxt text-[.6rem] flex items-center justify-center">
       <img src={img} className="w-4 h-4 object-contain"/>
     </div>
     <p className="font-bold text-grayTxt">{title}</p>
    </div>
    <div className="flex items-center justify-start font-bold text-blackTxt">
      <p>{value}</p>
    </div>
    <div className={`flex items-center justify-start font-bold ${variant}`}>
      <p>{detail}</p>
    </div>
  </div>
  )
}