import React from 'react'
import one from '../img/home/one.png'

const HowHelpDonate = () => {
  return (
    <div className="donate">
      <div className="donate__info">
        <img src={one} alt="число один" />
        <h2>ПЕРЕХОДИТЕ НА ФОРМУ</h2>
      </div>
      <div className="donate__text">
        <p>
          Нажмите на кнопку пожертвований и переходите на форму поддержки приюта
        </p>
      </div>
      <div className="donate__block">
        <a target="_blank" href={'https://yoomoney.ru/to/4100118170933236'}>
          <div className="donate__link">
            <h2>ПОЖЕРТВОВАТЬ</h2>
          </div>
        </a>
      </div>
    </div>
  )
}

export default HowHelpDonate
