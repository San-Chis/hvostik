import { useState, useEffect } from 'react'
import { A11y, Autoplay } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'
import { useWindowSize } from '../hooks/useWindowSize'
import LuckysCard from './LuckysCard'
import nata from '../img/home/card_lucky_nata.png'
import img_1020 from '../img/home/1020.png'
import img_1021 from '../img/home/1021.png'
import img_1022 from '../img/home/1022.png'
import img_1023 from '../img/home/1023.png'
import richard from '../img/home/card_lucky_richard.png'
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/scrollbar'
import 'swiper/css/autoplay'

const Luckys = () => {
  const [total, setTotal] = useState(3)
  const windowSize = useWindowSize()

  useEffect(() => {
    if (windowSize.width > 1280) {
      setTotal(3)
    } else if (windowSize.width > 780) {
      setTotal(3)
    } else if (windowSize.width > 450) {
      setTotal(2)
    } else {
      setTotal(1)
    }
  }, [windowSize.width])

  return (
    <div className="lucky">
      <div className="container">
        <div className="lucky__title">
          <h2>ЩАСЛИВЦІ</h2>
        </div>
        <div className="lucky__body">
          <Swiper
            modules={[A11y, Autoplay]}
            spaceBetween={40}
            slidesPerView={total}
            onSwiper={(swiper) => {}}
            onSlideChange={() => {}}
            loop={true}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
          >
            <SwiperSlide>
              <LuckysCard image={nata} text={'НАТА'} />
            </SwiperSlide>
            <SwiperSlide>
              <LuckysCard image={img_1020} text={'АСЯ'} />
            </SwiperSlide>
            <SwiperSlide>
              <LuckysCard image={richard} text={'РІЧАРД'} />
            </SwiperSlide>
            <SwiperSlide>
              <LuckysCard image={img_1021} text={'ГРЕЙ'} />
            </SwiperSlide>
            <SwiperSlide>
              <LuckysCard image={img_1022} text={'НІКІ'} />
            </SwiperSlide>
            <SwiperSlide>
              <LuckysCard image={img_1023} text={'АРЧІ'} />
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </div>
  )
}

export default Luckys
