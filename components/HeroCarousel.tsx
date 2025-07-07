import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

const slides = [
  { img: '/kits/barcelona.webp', text: 'Barcelona Home 25/26' },
  { img: '/kits/manutd.webp', text: 'Man Utd Away 25/26' },
  { img: '/kits/real.webp', text: 'Real Madrid Retro' },
];

export default function HeroCarousel() {
  return (
    <Swiper spaceBetween={20} slidesPerView={1} loop={true} autoplay={{ delay: 5000 }}>
      {slides.map((slide, i) => (
        <SwiperSlide key={i}>
          <div className="relative">
            <img src={slide.img} className="w-full h-[400px] object-cover" />
            <div className="absolute bottom-0 bg-black/60 text-white p-4 w-full text-center text-lg font-bold">
              {slide.text}
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
