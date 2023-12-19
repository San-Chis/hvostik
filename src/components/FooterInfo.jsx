import React from 'react'
import logo from '../img/logo.svg'
import { HOME, FUND, PROGRAMS, HELP } from '../routes/constans'
import visa from '../img/home/visa.png'
import instagram from '../img/home/footer_instagram.svg'
import telegram from '../img/home/footer_telegram.svg'
import tiktok from '../img/home/footer_tiktok.svg'
import ForceNavLink from './ForceNavLink'
const FooterInfo = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__body">
          <ForceNavLink to={HOME} end>
            <div className="footer__logo">
              <img src={logo} alt="логотип" />
              <h2>ХВОСТИК</h2>
            </div>
          </ForceNavLink>
          <div className="footer__nav nav-footer">
            <div className="nav-footer__title">
              <h4>Хвостик</h4>
            </div>
            <ul className="nav-footer__list">
              <li className="nav-footer__item">
                <ForceNavLink className="nav-footer__link" to={FUND}>
                  <span>Про фонд</span>
                </ForceNavLink>
              </li>
              <li className="nav-footer__item">
                <ForceNavLink className="nav-footer__link" to={PROGRAMS}>
                  <span>Програми</span>
                </ForceNavLink>
              </li>
              <li className="nav-footer__item">
                <ForceNavLink className="nav-footer__link" to={HELP}>
                  <span>Допомогти</span>
                </ForceNavLink>
              </li>
            </ul>
          </div>
          <div className="footer__donate donate-footer">
            <div className=" donate-footer__title">
              <h4>Підтримка</h4>
            </div>
            <div className="donate-footer__image">
              <img src={visa} alt="віза" />
            </div>
            <div className="donate-footer__carta">
              <a target="_blank" href={'https://www.monobank.ua/?lang=uk'}>
                <h3>Пожертвувати</h3>
              </a>
            </div>
          </div>
          <div className="footer__contacts contacts-footer">
            <div className="contacts-footer__title">
              <h4>Зв'язок з нами</h4>
            </div>
            <div className="contacts-footer__network">
              <a target="_blank" href={'https://www.instagram.com'}>
                <img src={instagram} alt="інстаграм" />
              </a>
              <a target="_blank" href={'https://t.me'}>
                <img src={telegram} alt="телеграм" />
              </a>
              <a target="_blank" href={'https://www.tiktok.com'}>
                <img src={tiktok} alt="тік-ток" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default FooterInfo
