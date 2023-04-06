import React, { useEffect, useState } from 'react'
import { Navigation, Scrollbar, A11y } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/scrollbar'
import CardSlider from './CardSlider'
import foodslide from '../img/home/card_slide_food.png'
import hausslide from '../img/home/card_slide_haus.png'
import dogsslide from '../img/home/card_slide_dogs.png'
import { useWindowSize } from '../hooks/useWindowSize'

const Slider = () => {
  const [total, setTotal] = useState(2)
  const windowSize = useWindowSize()

  useEffect(() => {
    const count = windowSize.width < 600 ? 1 : 2
    setTotal(count)
  }, [windowSize.width])

  return (
    <section className="sliders">
      <div className="container">
        <div className="sliders__title">
          <h2>КАК МЫ ПОМОГАЕМ?</h2>
        </div>
        <div className="sliders__body">
          <Swiper
            modules={[Navigation, Scrollbar, A11y]}
            spaceBetween={40}
            slidesPerView={total}
            navigation
          >
            <SwiperSlide>
              <CardSlider
                image={foodslide}
                title={'ПРОГРАММА “НАКОРМИ ДРУГА”'}
                text={'Закупаем еду для собак, чтобы они не остались голодными'}
              />
            </SwiperSlide>
            <SwiperSlide>
              <CardSlider
                image={hausslide}
                title={'ПРОЕКТ “СОБАКАДОМ”'}
                text={
                  'Проектируем и строим комфортные домики для бездомных собак'
                }
              />
            </SwiperSlide>
            <SwiperSlide>
              <CardSlider
                image={dogsslide}
                title={'ПРОГРАММА “СТЕРЕЛИЗАЦИЯ”'}
                text={'С клиниками-партнерами стерилизуем животных'}
              />
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </section>
  )
}

export default Slider
