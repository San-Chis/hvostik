import React from 'react'
import abc from '../img/home/sponsor_abc.png'
import onf from '../img/home/sponsor_onf.png'
import acn from '../img/home/sponsor_acn.png'
import prezident from '../img/home/sponsor_prezident.png'

const Sponsors = () => {
  return (
    <div className="sponsor">
      <div className="container">
        <div className="sponsor__title">
          <h3>Фонды с которыми мы сотрудничаем</h3>
        </div>
        <div className="sponsor__body">
          <div className="sponsor__image image-sponsor">
            <div className="image-sponsor__item">
              <img src={abc} alt="логотип фонда авц" />
            </div>
            <div className="image-sponsor__item image-sponsor__item-mini">
              <img src={onf} alt="логотип фонда онф" />
            </div>
            <div className="image-sponsor__item">
              <img src={acn} alt="логотип фонда аси" />
            </div>
            <div className="image-sponsor__item">
              <img src={prezident} alt="логотип фонда президент" />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Sponsors
