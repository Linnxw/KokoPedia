export default function Footer(){
  return (
  <div className="py-10 flex justify-between text-blackTxt font-noto text-[.4rem] px-2">
    <div className="flex gap-1 flex-col items-start">
     <p>Invoince ini resmi dibuat oleh Koko Pedia</p>
     <p>Silahkan hubungi <a className="text-greenPrimary font-bold hover:underline">Kami</a> apa bila kamu memerlukan bantuan</p>
    </div>
    <div className="italic tracking-wide">
     <p>Terakhir dibuat pada 17 january 2023</p>
    </div>
  </div>
  )
}