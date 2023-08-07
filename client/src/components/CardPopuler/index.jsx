import gopay from "/gopay.png"
export default function index(){
  return (
    <div className="h-16 w-screen flex items-center">
      <div className="w-16 flex items-center justify-center">
        <img src={gopay} className="w-14 object-center"/>
      </div>
      <div className="flex flex-col justify-center items-start gap-1 px-3">
        <div className="flex items-center justify-center text-md font-semibold font-inter">
          <h1>Promo GoPay hari ini</h1>
        </div>
        <div className="flex items-center justify-center text-sm text-slate-400">
          <p>Aktifkan gopay untuk memakai promo</p>
        </div>
      </div>
    </div>
    )
}