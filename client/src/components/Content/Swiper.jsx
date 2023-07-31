import { Navigation,Autoplay,Pagination, Scrollbar, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css/autoplay'
import 'swiper/css';

export default function SwiperPromo(){
  return (
 <div className="w-screen overflow-scroll">
  <div className="w-[5200px]">
    <Swiper
      // install Swiper modules
      modules={[Autoplay]}
      spaceBetween={20}
     
      autoplay={{
        delay:3000,
        disableOnInteraction:false
      }}
   
    >      <SwiperSlide className="w-60 h-52 bg-red-600">Slide 1</SwiperSlide>
      <SwiperSlide className="w-60 h-52 bg-red-600">Slide 2</SwiperSlide>      <SwiperSlide className="w-60 h-52 bg-red-600">Slide 3</SwiperSlide>
      <SwiperSlide className="w-60 h-52 bg-red-600">Slide 4</SwiperSlide>
      <SwiperSlide className="w-60 h-52 bg-red-600">Slide 5</SwiperSlide>
    </Swiper>
    </div>
   </div>
  );
};