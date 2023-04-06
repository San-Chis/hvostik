import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination, Scrollbar, A11y } from 'swiper'
import shelter from '../img/home/shelter_bg.png'
import 'swiper/scss'
import 'swiper/scss/pagination'
import 'swiper/css/scrollbar'

const ShelterSlider = () => {
  return (
    <section className="swiper">
      <div className="swiper__body">
        <Swiper
          modules={[Pagination, Scrollbar, A11y]}
          spaceBetween={1}
          slidesPerView={1}
          onSlideChange={() => console.log('slide change')}
          onSwiper={(swiper) => console.log(swiper)}
          pagination={{ clickable: true }}
        >
          <SwiperSlide>
            <img className="swiper-backgraund__img" src={shelter} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img className="swiper-backgraund__img" src={shelter} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img className="swiper-backgraund__img" src={shelter} alt="" />
          </SwiperSlide>
        </Swiper>
      </div>
    </section>
  )
}

export default ShelterSlider
