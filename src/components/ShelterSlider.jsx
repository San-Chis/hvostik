import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination, Scrollbar, A11y, Autoplay } from 'swiper'
import shelter from '../img/home/shelter_bg.png'
import img_1289 from '../img/home/1289.png'
import img_1288 from '../img/home/1288.png'
import 'swiper/scss'
import 'swiper/scss/pagination'
import 'swiper/css/scrollbar'
import 'swiper/css/autoplay'

const ShelterSlider = () => {
  return (
    <section className="swiper">
      <div className="swiper__body">
        <Swiper
          modules={[Pagination, Scrollbar, A11y, Autoplay]}
          spaceBetween={1}
          slidesPerView={1}
          onSlideChange={() => {}}
          onSwiper={(swiper) => {}}
          pagination={{ clickable: true }}
          loop={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
        >
          <SwiperSlide>
            <img
              className="swiper-backgraund__img"
              src={shelter}
              alt="фото з тваринами"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              className="swiper-backgraund__img"
              src={img_1288}
              alt="фото з тваринами"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              className="swiper-backgraund__img"
              src={img_1289}
              alt="фото з тваринами"
            />
          </SwiperSlide>
        </Swiper>
      </div>
    </section>
  )
}

export default ShelterSlider
