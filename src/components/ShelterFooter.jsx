import React from 'react'
import ButtonBig from '../button/ButtonBig'

const ShelterFooter = () => {
  return (
    <div className="footershelter">
      <div className="container">
        <div className="footershelter__block block-footershelter">
          <div className="block-footershelter__title">
            <h2>ПОДАРИТЕ ДОМ ЖИВОТНЫМ УЖЕ СЕГОДНЯ</h2>
          </div>
          <div className="block-footershelter__btn">
            <ButtonBig>
              <span>ПОМОЧЬ</span>
            </ButtonBig>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ShelterFooter
