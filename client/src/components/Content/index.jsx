import SwiperCategory from "./SwiperCategory"
import SwiperPromo from "./Swiper"
import Terlaris from "./Terlaris"
import ProdukLain from "./ProdukLain"
export default function index(){
  return (
  <div className="w-screen min-h-screen rounded-t-xl bg-whitePrimary font-noto static z-20 flex flex-col gap-3 overflow-x-hidden">
    <SwiperCategory/>
    <SwiperPromo/>
    <Terlaris/>
    <ProdukLain/>
  </div>
  )
}