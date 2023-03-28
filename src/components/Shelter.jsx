import React from 'react'
import ButtonBlack from '../button/ButtonBlack'
import shelter from '../img/home/shelter_bg.png'
import cat from '../img/button/cat.svg'

const Shelter = () => {
  return (
    <section className="shelters">
      <div className="shelters__bg">
        <div className="shelters__image">
          <img src={shelter} alt="" />
        </div>
      </div>
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
              <ButtonBlack>
                <img src={cat} alt="" />
                <span>ПОМОЧЬ</span>
              </ButtonBlack>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Shelter
