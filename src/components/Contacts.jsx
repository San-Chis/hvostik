import React from 'react'
import { NavLink } from 'react-router-dom'
import instagram from '../img/home/instagram.svg'
import telegram from '../img/home/telegram.svg'
import tiktok from '../img/home/tik_tok.svg'

const Contacts = () => {
  return (
    <div className="contact">
      <div className="container">
        <div className="contact__title">
          <h2>СВЯЖИТЕСЬ С НАМИ</h2>
        </div>
        <div className="contact__body">
          <div className="contact__social social-contact">
            <div className="social-contact__link">
              <NavLink to={'https://www.instagram.com/mi_hvostik.ru/'}>
                <img src={instagram} alt="инстаграм" />
                <p>Инстаграм</p>
              </NavLink>
            </div>
            <div className="social-contact__link">
              <NavLink to={'https://t.me/mimihvostik_ru'}>
                <img src={telegram} alt="телеграм" />
                <p>Телеграм</p>
              </NavLink>
            </div>
            <div className="social-contact__link">
              <NavLink to={'https://www.tiktok.com/@mi_hvostik'}>
                <img src={tiktok} alt="тик-ток" />
                <p>Тик-ток</p>
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contacts
