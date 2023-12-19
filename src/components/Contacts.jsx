import React from 'react'
import instagram from '../img/home/instagram.svg'
import telegram from '../img/home/telegram.svg'
import tiktok from '../img/home/tik_tok.svg'

const Contacts = () => {
  return (
    <div className="contact">
      <div className="container">
        <div className="contact__title">
          <h2>ЗВ'ЯЖІТЬСЯ З НАМИ</h2>
        </div>
        <div className="contact__body">
          <div className="contact__social social-contact">
            <div className="social-contact__link">
              <a target="_blank" href={'https://www.instagram.com'}>
                <img src={instagram} alt="інстаграм" />
                <p>Інстаграм</p>
              </a>
            </div>
            <div className="social-contact__link">
              <a target="_blank" href={'https://t.me'}>
                <img src={telegram} alt="телеграм" />
                <p>Телеграм</p>
              </a>
            </div>
            <div className="social-contact__link">
              <a target="_blank" href={'https://www.tiktok.com'}>
                <img src={tiktok} alt="тік-ток" />
                <p>Тік-ток</p>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contacts
