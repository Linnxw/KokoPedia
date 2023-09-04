export default function SettingLayout({children}){
  return (
    <div className="flex w-full bg-white flex-col p-3 gap-2">
     <div className="w-full font-inter font-bold text-md">
      <h1>Pengaturan Akun</h1>
     </div>
     <div className="flex flex-col">
      {children}
     </div>
    </div>
    )
}