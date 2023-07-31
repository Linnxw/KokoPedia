import SwiperCategory from "./SwiperCategory"
import SwiperPromo from "./Swiper"
export default function index(){
  return (
  <div className="w-screen min-h-screen rounded-t-xl bg-whitePrimary font-noto static z-20 overflow-x-hidden">
    <SwiperCategory/>
    <SwiperPromo/>
  </div>
  )
}