export default function Header(){
  return (
  <div className="font-noto text-blackTxt">
 
    <div className="w-full py-2 px-5 flex items-center justify-end">
     <div className="text-blackTxt text-sm italic">
        <p>2023-06-06</p>
     </div>
    </div>
    
    <div className="w-full px-2 flex items-center justify-between text-[.5rem]">
     <div>
       <tabel>
         <tr>
           <td>ID Penjual</td>
           <td> : </td>
           <td>1001</td>
         </tr>
         <tr>
           <td>Nama Penjual</td>
           <td> : </td>
           <td>Ilham Akbar</td>
         </tr>
         <tr>
           <td>Dikirim dari</td>
           <td> : </td>
           <td>Kudus</td>
         </tr>
       </tabel>
     </div>
     <div>
       <tabel>
         <tr>
           <td>ID Pembeli</td>
           <td> : </td>
           <td>9007</td>
         </tr>
         <tr>
           <td>Nama Pembeli</td>
           <td> : </td>
           <td>Rina aulia</td>
         </tr>
         <tr>
           <td>Alamat</td>
           <td> : </td>
           <td>Bandung</td>
         </tr>
       </tabel>
     </div>
    </div>
    
  </div>
  )
}