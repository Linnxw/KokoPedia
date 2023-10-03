export default function Header({detail}){
const tanggal=detail?.tgl?.replace("_","-")
  return (
  <div className="font-noto text-blackTxt">
 
    <div className="w-full py-2 px-5 flex items-center justify-end">
     <div className="text-blackTxt text-[.6rem] italic">
        <p>{tanggal}</p>
     </div>
    </div>
    
    <div className="w-full px-2 flex items-center justify-between text-[.5rem]">
     <div>
       <tabel>
         <tr>
           <td>ID Penjual</td>
           <td> : </td>
           <td>{detail?.id_penjual}</td>
         </tr>
         <tr>
           <td>Nama Penjual</td>
           <td> : </td>
           <td>{detail?.nma_penjual}</td>
         </tr>
       </tabel>
     </div>
     <div>
       <tabel>
         <tr>
           <td>ID Pembeli</td>
           <td> : </td>
           <td>{detail?.id_pembeli}</td>
         </tr>
         <tr>
           <td>Nama Pembeli</td>
           <td> : </td>
           <td>{detail?.nma_pembeli}</td>
         </tr>
       </tabel>
     </div>
    </div>
    
  </div>
  )
}