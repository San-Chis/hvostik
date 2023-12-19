import React from 'react'
import animals from '../img/home/animals.jpg'
import sumske from '../img/home/sumske.png'
import dnipro from '../img/home/dnipro.jpg'
import sirius from '../img/home/sirius.jpg'

const Sponsors = () => {
  return (
    <div className="sponsor">
      <div className="container">
        <div className="sponsor__title">
          <h3>Фонди з якими ми співпрацюємо</h3>
        </div>
        <div className="sponsor__body">
          <div className="sponsor__image image-sponsor">
            <div className="image-sponsor__item ">
              <img src={animals} alt="логотип фонду" />
            </div>
            <div className="image-sponsor__item ">
              <img src={sumske} alt="логотип фонду" />
            </div>
            <div className="image-sponsor__item">
              <img src={dnipro} alt="логотип фонду" />
            </div>
            <div className="image-sponsor__item">
              <img src={sirius} alt="логотип фонду" />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Sponsors
