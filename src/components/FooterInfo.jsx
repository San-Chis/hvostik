import React from 'react'
import { NavLink } from 'react-router-dom'
import logo from '../img/logo.svg'
import { HOME, FUND, PROGRAMS, HELP } from '../routes/constans'
import visa from '../img/home/visa.png'
import instagram from '../img/home/footer_instagram.svg'
import telegram from '../img/home/footer_telegram.svg'
import wotsap from '../img/home/footer_wotsap.svg'
import tiktok from '../img/home/footer_tiktok.svg'

const FooterInfo = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__body">
          <div className="footer__logo">
            <NavLink to={HOME} end>
              <img src={logo} alt="" />
            </NavLink>
            <h2>ХВОСТИК</h2>
          </div>
          <div className="footer__nav nav-footer">
            <div className="nav-footer__title">
              <h4>Хвостик</h4>
            </div>
            <ul className="nav-footer__list">
              <li className="nav-footer__item">
                <NavLink className="nav-footer__link" to={FUND} end>
                  Про фонд
                </NavLink>
              </li>
              <li className="nav-footer__item">
                <NavLink className="nav-footer__link" to={PROGRAMS} end>
                  Программы
                </NavLink>
              </li>
              <li className="nav-footer__item">
                <NavLink className="nav-footer__link" to={HELP} end>
                  Помочь
                </NavLink>
              </li>
            </ul>
          </div>
          <div className="footer__requisites requisites-footer">
            <div className=" requisites-footer__title">
              <h4>Реквизиты</h4>
            </div>
            <div className="frequisites-footer__image">
              <img src={visa} alt="" />
            </div>
            <div className="requisites-footer__carta">
              <h4>Карта Visa</h4>
              <p>11111111111323412</p>
            </div>
            <div className="requisites-footer__carta">
              <h4>Карта Мир</h4>
              <p>11111111111323412</p>
            </div>
          </div>
          <div className="footer__contacts contacts-footer">
            <div className="contacts-footer__title">
              <h4>Связь с нами</h4>
            </div>
            <div className="contacts-footer__network">
              <NavLink to={'https://www.instagram.com/</div>'}>
                <img src={instagram} alt="" />
              </NavLink>
              <NavLink to={'https://web.telegram.org/z/'}>
                <img src={telegram} alt="" />
              </NavLink>
              <NavLink to={'https://www.whatsapp.com/?lang=es'}>
                <img src={wotsap} alt="" />
              </NavLink>
              <NavLink to={'https://www.tiktok.com/'}>
                <img src={tiktok} alt="" />
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default FooterInfo
