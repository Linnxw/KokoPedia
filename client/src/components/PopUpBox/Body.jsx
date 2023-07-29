export default function Body({detail}){
  return (
  <div className="w-full py-3 font-noto">
  
    <div className="flex justify-center w-full">
      <tabel className="text-[.6rem] font-noto text-blackTxt border-collapse text-center table-auto">
       <tr className="border-t border-b border-blackTxt font-semibold">
         <td className="px-6">INFO PRODUK</td>
         <td className="px-2">JUMLAH</td>
         <td className="px-2">HARGA SATUAN</td>
         <td className="px-2">TOTAL HARGA</td>
       </tr>
       <tr className="text-[.6rem]">
         <td className="px-6 py-1">
          <p className="text-left text-greenPrimary font-bold">{detail.nma_produk}</p>
          <p className="text-[.5rem] text-left">berat : {detail?.berat / 10 / 10} {" " + "kg"}</p>
         </td>
         <td className="px-2 py-1">{detail.jumlah}</td>
         <td className="px-2 py-1">{detail.ttl_jual / detail.jumlah}</td>
         <td className="px-2 py-1">{detail.ttl_jual}</td>
       </tr>
      </tabel>
    </div>
    
    <div className="flex justify-end text-[.6rem] px-2 py-3">
      <div>
       <tabel>
         <tr>
          <td>Total harga( {detail.jumlah} barang)</td>
          <td> : </td>
          <td className="font-semibold">{detail.ttl_jual}</td>
         </tr>
         <tr>
          <td>Total ongkit(per kg)</td>
          <td> : </td>
          <td>0</td>
         </tr>
         <tr>
          <td>Vourcer</td>
          <td> : </td>
          <td>0</td>
         </tr>
         <tr>
          <td>Total Belanja</td>
          <td> : </td>
          <td className="font-semibold">{detail.ttl_jual}</td>
         </tr>
         <tr>
          <td>Total tagihan</td>
          <td> : </td>
          <td className="font-semibold">{detail.ttl_jual}</td>
         </tr>
       </tabel>
      </div>
    </div>
    
  </div>
  )
}