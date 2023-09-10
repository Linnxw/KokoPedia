import { SwiperSlide } from 'swiper/react';
export default function SwiperSlides({img}){
  return (
  <SwiperSlide className="w-screen flex items-center justify-center">
    <img src={img} className="object-contain w-[90%] h-32"/>
  </SwiperSlide>
  )
}