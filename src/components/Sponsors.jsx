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
              <img src={abc} alt="" />
            </div>
            <div className="image-sponsor__item image-sponsor__item-mini">
              <img src={onf} alt="" />
            </div>
            <div className="image-sponsor__item">
              <img src={acn} alt="" />
            </div>
            <div className="image-sponsor__item">
              {' '}
              <img src={prezident} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Sponsors
