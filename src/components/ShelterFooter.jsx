import React from 'react'
import ButtonBig from '../button/ButtonBig'
import { Link } from 'react-scroll'

const ShelterFooter = () => {
  return (
    <div className="footershelter">
      <div className="container">
        <div className="footershelter__block block-footershelter">
          <div className="block-footershelter__title">
            <h2>ПОДАРУЙТЕ БУДИНОК ТВАРИН УЖЕ СЬОГОДНІ</h2>
          </div>
          <div className="block-footershelter__btn">
            <Link
              to="helphow"
              spy={true}
              smooth={true}
              offset={0}
              duration={500}
            >
              <ButtonBig>
                <span>ДОПОМОГТИ</span>
              </ButtonBig>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ShelterFooter
