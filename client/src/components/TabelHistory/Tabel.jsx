export default function Tabel(props){
const {id,jumlah,nama,harga,event}=props
  return (
  <div className="w-full overflow-y-scroll">
   <tabel className="table-auto mx-auto text-blackTxt font-noto font-medium text-[.8rem]">
     <tr className="bg-whitePrimary">
      <td className="p-2 text-grayTxt whitespace-nowrap tracking-wide text-left">1</td>
      <td className="p-2 whitespace-nowrap tracking-wide font-black text-left">{nama}</td>
      <td className="p-2 whitespace-nowrap tracking-wide text-left">{jumlah}</td>
      <td className="p-2 whitespace-nowrap tracking-wide text-left">{harga}</td>
      <td className="p-2 tracking-wide text-left text-greenPrimary font-bold whitespace-nowrap" onClick={()=>event(id)}>detail</td>
    </tr>
   </tabel>
   </div>
  )
}