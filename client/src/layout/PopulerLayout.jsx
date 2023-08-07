export default function PopulerLayout({children}){
  return (
    <div className="w-screen">
    <div className="p-2 font-inter text-sm font-semibold">
      <p>Paling Populer</p>
    </div>
    {children}
    </div>
    )
}