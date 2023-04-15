import React from 'react'
import ButtonBlack from '../button/ButtonBlack'
import cat from '../img/button/cat.svg'
import { Link } from 'react-scroll'
import ShelterSlider from './ShelterSlider'

const Shelter = () => {
  return (
    <section className="shelters">
      <div className="container">
        <div className="shelters__body">
          <div className="shelters__info info-shelters">
            <div className="info-shelters__title">
              <h1>ПРИЮТ ХВОСТИК</h1>
            </div>
            <div className="info-shelters__text">
              <p>Поможем хвостатым вместе</p>
            </div>
            <div className="info-shelters__btn">
              <Link
                to="helphow"
                spy={true}
                smooth={true}
                offset={0}
                duration={500}
              >
                <ButtonBlack>
                  <img src={cat} alt="картинка кот" />
                  <span>ПОМОЧЬ</span>
                </ButtonBlack>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="shelters__swiper">
        <ShelterSlider />
      </div>
    </section>
  )
}

export default Shelter
