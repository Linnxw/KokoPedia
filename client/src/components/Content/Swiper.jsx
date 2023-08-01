import { Navigation,Autoplay,Pagination, Scrollbar, A11y } from 'swiper/modules';
import { Swiper,SwiperSlide } from 'swiper/react';
import 'swiper/css/autoplay'
import 'swiper/css';
import SwiperSlides from "./SwiperSlide"
import kejutan from "/kejutan.webp"
import samsung from "/samsung.webp"
import traktiran from "/traktiran.webp"
export default function SwiperPromo(){
  return (
  <div className="w-screen">
    <Swiper
      modules={[Autoplay]}
      spaceBetween={20}
      autoplay={{
        delay:3000,
        disableOnInteraction:false
      }}
    >       
      <SwiperSlide className="w-screen flex items-center justify-center">
        <img src={kejutan} className="object-contain w-[95%] rounded"/>
      </SwiperSlide>
      <SwiperSlide className="w-screen flex items-center justify-center">
        <img src={traktiran} className="object-contain w-[95%] rounded"/>
      </SwiperSlide>
      <SwiperSlide className="w-screen flex items-center justify-center">
        <img src={samsung} className="object-contain w-[95%] rounded"/>
      </SwiperSlide>
    </Swiper>
    </div>
  );
};