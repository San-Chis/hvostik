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
                  <span>Программы</span>
                </ForceNavLink>
              </li>
              <li className="nav-footer__item">
                <ForceNavLink className="nav-footer__link" to={HELP}>
                  <span>Помочь</span>
                </ForceNavLink>
              </li>
            </ul>
          </div>
          <div className="footer__donate donate-footer">
            <div className=" donate-footer__title">
              <h4>Поддержка</h4>
            </div>
            <div className="donate-footer__image">
              <img src={visa} alt="виза" />
            </div>
            <div className="donate-footer__carta">
              <a
                target="_blank"
                href={'https://yoomoney.ru/to/4100118170933236'}
              >
                <h3>Пожертвовать</h3>
              </a>
            </div>
          </div>
          <div className="footer__contacts contacts-footer">
            <div className="contacts-footer__title">
              <h4>Связь с нами</h4>
            </div>
            <div className="contacts-footer__network">
              <a
                target="_blank"
                href={'https://www.instagram.com/mi_hvostik.ru/'}
              >
                <img src={instagram} alt="инстаграм" />
              </a>
              <a target="_blank" href={'https://t.me/mimihvostik_ru'}>
                <img src={telegram} alt="телеграм" />
              </a>
              <a target="_blank" href={'https://www.tiktok.com/@mi_hvostik'}>
                <img src={tiktok} alt="тик-ток" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default FooterInfo
