import { useState, useEffect } from 'react'
import { A11y, Autoplay } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'
import { useWindowSize } from '../hooks/useWindowSize'
import LuckysCard from './LuckysCard'
import nata from '../img/home/card_lucky_nata.png'
import IMG_1294 from '../img/home/IMG_1294.JPG'
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
          <h2>СЧАСТЛИВЧИКИ</h2>
        </div>
        <div className="lucky__body">
          <Swiper
            modules={[A11y, Autoplay]}
            spaceBetween={40}
            slidesPerView={total}
            onSwiper={(swiper) => console.log(swiper)}
            onSlideChange={() => console.log('slide change')}
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
              <LuckysCard image={IMG_1294} text={'ВАСЯ'} />
            </SwiperSlide>
            <SwiperSlide>
              <LuckysCard image={richard} text={'РИЧАРД'} />
            </SwiperSlide>
            <SwiperSlide>
              <LuckysCard image={nata} text={'НАТА'} />
            </SwiperSlide>
            <SwiperSlide>
              <LuckysCard image={nata} text={'НАТА'} />
            </SwiperSlide>
            <SwiperSlide>
              <LuckysCard image={nata} text={'НАТА'} />
            </SwiperSlide>
            <SwiperSlide>
              <LuckysCard image={nata} text={'НАТА'} />
            </SwiperSlide>
            <SwiperSlide>
              <LuckysCard image={nata} text={'НАТА'} />
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </div>
  )
}

export default Luckys
