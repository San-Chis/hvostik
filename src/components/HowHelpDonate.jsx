import React from 'react'
import { NavLink } from 'react-router-dom'
import one from '../img/home/one.png'
// import visa from '../img/home/visa.png'

const HowHelpDonate = () => {
  //   const cardNumber = '30101810400000000225'
  //   const [copied, setCopied] = useState(false)

  //   const copy = () => {
  //     navigator.clipboard.writeText(cardNumber)
  //     if (!copied) {
  //       setCopied(true)
  //       setTimeout(() => {
  //         setCopied(false)
  //       }, 1000)
  //     }
  //   }

  return (
    <div className="donate">
      <div className="donate__info">
        <img src={one} alt="" />
        <h2>ПЕРЕХОДИТЕ НА ФОРМУ</h2>
      </div>
      <div className="donate__text">
        <p>
          Нажмите на кнопку пожертвований и переходите на форму поддержки приюта
        </p>
      </div>
      <div className="donate__block">
        <NavLink to={'https://yoomoney.ru/to/4100118170933236'}>
          <div className="donate__link">
            <h2>ПОЖЕРТВОВАТЬ</h2>
          </div>
        </NavLink>
      </div>
      {/* <div className="requisites-helphow__numbers">
        <p>30101810400000000225</p>
        <img src={visa} alt="" />
      </div> */}
      {/* <div className="requisites-helphow__btn">
        <button
          style={{
            padding: '13.5px',
            color: ` ${copied ? 'yellow' : 'white'}`,
          }}
          onClick={copy}
        >
          {copied ? 'СКОПИРОВАНО' : 'КОПИРОВАТЬ'}
        </button>
      </div> */}
    </div>
  )
}

export default HowHelpDonate
