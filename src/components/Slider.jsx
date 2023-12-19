import React, { useEffect, useState, useRef, useCallback } from 'react'
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
import arrowleft from '../img/home/slider_arrow_left.svg'
import arrowright from '../img/home/slider_arrow_right.svg'

const Slider = () => {
  const [total, setTotal] = useState(2)
  const [isStart, setIsStart] = useState(true)
  const [isEnd, setIsEnd] = useState(false)

  const windowSize = useWindowSize()
  const sliderRef = useRef(null)

  const handlePrev = useCallback(() => {
    if (!sliderRef.current) return
    sliderRef.current.swiper.slidePrev()
  }, [])

  const handleNext = useCallback(() => {
    if (!sliderRef.current) return
    sliderRef.current.swiper.slideNext()
  }, [])
  useEffect(() => {
    const count = windowSize.width < 600 ? 1 : 2
    setTotal(count)
  }, [windowSize.width])

  return (
    <section className="sliders">
      <div className="container">
        <div className="sliders__title">
          <h2>ЯК МИ ДОПОМАГАЄМО?</h2>
        </div>
        <div className="sliders__body">
          <Swiper
            modules={[Navigation, Scrollbar, A11y]}
            spaceBetween={40}
            slidesPerView={total}
            navigation
            ref={sliderRef}
            onSlideChange={(swiper) => {
              setIsEnd(swiper.isEnd)
              setIsStart(swiper.isBeginning)
            }}
          >
            <SwiperSlide>
              <CardSlider
                image={foodslide}
                title={'ПРОГРАМА “НАГОДУЙ ДРУГА”'}
                text={'Купуємо їжу для собак, щоб вони не залишилися голодними'}
              />
            </SwiperSlide>
            <SwiperSlide>
              <CardSlider
                image={hausslide}
                title={'ПРОЕКТ “СОБАКАДІМ”'}
                text={
                  'Проектуємо та будуємо комфортні будиночки для бездомних собак'
                }
              />
            </SwiperSlide>
            <SwiperSlide>
              <CardSlider
                image={dogsslide}
                title={'ПРОГРАМА “СТЕРИЛІЗАЦІЯ”'}
                text={'З клініками-партнерами стерилізуємо тварин'}
              />
            </SwiperSlide>
          </Swiper>
          <div
            className={`prev-arrow ${isStart ? 'arrow-opacity' : ''}`}
            onClick={handlePrev}
          >
            <img src={arrowleft} alt="стрілка ліворуч" />
          </div>
          <div
            className={`next-arrow ${isEnd ? 'arrow-opacity' : ''}`}
            onClick={handleNext}
          >
            <img src={arrowright} alt="стрілка вправо" />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Slider
