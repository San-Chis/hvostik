import React from 'react'
import one from '../img/home/one.png'

const HowHelpDonate = () => {
  return (
    <div className="donate">
      <div className="donate__info">
        <img src={one} alt="число один" />
        <h2>ПЕРЕХОДІТЬ НА ФОРМУ</h2>
      </div>
      <div className="donate__text">
        <p>
          Натисніть кнопку пожертвувань і переходьте на форму підтримки притулку
        </p>
      </div>
      <div className="donate__block">
        <a target="_blank" href={'https://www.monobank.ua/?lang=uk'}>
          <div className="donate__link">
            <h2>ПОЖЕРТВУВАТИ</h2>
          </div>
        </a>
      </div>
    </div>
  )
}

export default HowHelpDonate
