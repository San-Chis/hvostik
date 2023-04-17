import React from 'react'
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
          <div className="contact_social social-contact">
            <div className="social-contact__link">
              <a
                target="_blank"
                href={'https://www.instagram.com/mi_hvostik.ru/'}
              >
                <img src={instagram} alt="инстаграм" />
                <p>Инстаграм</p>
              </a>
            </div>
            <div className="social-contact__link">
              <a target="_blank" href={'https://t.me/mimihvostik_ru'}>
                <img src={telegram} alt="телеграм" />
                <p>Телеграм</p>
              </a>
            </div>
            <div className="social-contact__link">
              <a target="_blank" href={'https://www.tiktok.com/@mi_hvostik'}>
                <img src={tiktok} alt="тик-ток" />
                <p>Тик-ток</p>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contacts
