import React from 'react'
import ButtonBig from '../button/ButtonBig'

const HomeFooter = () => {
  return (
    <div className="homefooter">
      <div className="container">
        <div className="homefooter__block block-homefooter">
          <div className="block-homefooter__title">
            <h2>ПОДАРИТЕ ДОМ ЖИВОТНЫМ УЖЕ СЕГОДНЯ</h2>
          </div>
          <div className="block-homefooter__btn">
            <ButtonBig>
              <span>ПОМОЧЬ</span>
            </ButtonBig>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HomeFooter
