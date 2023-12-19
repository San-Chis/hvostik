import React from 'react'
import two from '../img/home/two.png'
import three from '../img/home/three.png'
import helpone from '../img/home/help_one.png'
import helptwo from '../img/home/help_two.png'
import helpthree from '../img/home/help_three.png'
import HowHelpDonate from './HowHelpDonate'

const HowHelp = () => {
  return (
    <section className="helphow">
      <div className="container">
        <div className="helphow__title">
          <h2>ЯК ДОПОМОГТИ?</h2>
        </div>
        <div className="helphow__body">
          <HowHelpDonate />
          <div className="helphow__sum sum-helphow">
            <div className="sum-helphow__info">
              <img src={two} alt="число два" />
              <h2>ВІДПРАВИТЬ БУДЬ-ЯКУ СУМУ</h2>
            </div>
            <div className="sum-helphow__text">
              <p>Будемо раді будь-якій підтримці</p>
            </div>
            <div className="sum-helphow__denomination ">
              <div className="sum-helphow__denomination-txt">
                <p>200₴</p>
              </div>
              <div className="sum-helphow__denomination-txt">
                <p>500₴</p>
              </div>
              <div className="sum-helphow__denomination-txt">
                <p>1 000₴</p>
              </div>
              <div className="sum-helphow__denomination-txt">
                <p>10 000₴</p>
              </div>
            </div>
          </div>
          <div className="helphow__thankyou">
            <div className="helphow-thankyou__block  block-helphow-thankyou">
              <div className="block-helphow-thankyou__title">
                <img src={three} alt="число три" />
                <h2>
                  ДЯКУЄМО<span>😽</span>
                </h2>
              </div>
              <div className="block-helphow-thankyou__text">
                <p>
                  Ось так всього за кілька кроків ви можете допомогти тваринам
                </p>
              </div>
            </div>
            <div className="thankyou-helphow__image image-helphow-thankyou">
              <div className="image-helphow-thankyou__one">
                <img src={helpone} alt="перше фото" />
              </div>
              <div className="image-helphow-thankyou__two">
                <img src={helptwo} alt="друге фото" />
              </div>
              <div className="image-helphow-thankyou__three">
                <img src={helpthree} alt="третє фото" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HowHelp
