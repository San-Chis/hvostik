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
          <h2>КАК ПОМОЧЬ?</h2>
        </div>
        <div className="helphow__body">
          <HowHelpDonate />
          <div className="helphow__sum sum-helphow">
            <div className="sum-helphow__info">
              <img src={two} alt="число два" />
              <h2>ОТПРАВЬТЕ ЛЮБУЮ СУММУ</h2>
            </div>
            <div className="sum-helphow__text">
              <p>Будем рады любой поддержке</p>
            </div>
            <div className="sum-helphow__denomination ">
              <div className="sum-helphow__denomination__txt">
                <p>200₽</p>
              </div>
              <div className="sum-helphow__denomination__txt">
                <p>500₽</p>
              </div>
              <div className="sum-helphow__denomination__txt">
                <p>1 000₽</p>
              </div>
              <div className="sum-helphow__denomination__txt">
                <p>15 000₽</p>
              </div>
            </div>
          </div>
          <div className="helphow__thankyou">
            <div className="helphow-thankyou__block  block-helphow-thankyou">
              <div className="block-helphow-thankyou__title">
                <img src={three} alt="число три" />
                <h2>
                  СПАСИБО<span>😽</span>
                </h2>
              </div>
              <div className="block-helphow-thankyou__text">
                <p>
                  Вот так всего за несколько шагов вы можете помочь животным
                </p>
              </div>
            </div>
            <div className="thankyou-helphow__image image-helphow-thankyou">
              <div className="image-helphow-thankyou__one">
                <img src={helpone} alt="первое фото" />
              </div>
              <div className="image-helphow-thankyou__two">
                <img src={helptwo} alt="второе фото" />
              </div>
              <div className="image-helphow-thankyou__three">
                <img src={helpthree} alt="третье фото" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HowHelp
