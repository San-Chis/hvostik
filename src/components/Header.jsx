import React, { useEffect, useState } from 'react'
import ButtonHelpMini from '../button/ButtonMini'
import logo from '../img/logo.svg'
import ForceNavLink from './ForceNavLink'
import { HOME, FUND, PROGRAMS, HELP } from '../routes/constans'

const Header = ({ onClick }) => {
  const [menuMobile, setMenuMobile] = useState(false)
  const [logoMobile, setLogoMobile] = useState(false)
  const [dimensions, setDimensions] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  })

  useEffect(() => {
    window.addEventListener('resize', handleResize, false)
  }, [])

  const toggleMobileMenu = () => {
    setMenuMobile(!menuMobile)
    setLogoMobile(!logoMobile)
  }

  useEffect(() => {
    if (typeof window != 'undefined' && window.document) {
      document.body.style.overflow =
        menuMobile && dimensions.width < 750 ? 'hidden' : 'unset'
    }
  }, [menuMobile, dimensions.width])

  const handleResize = () => {
    setDimensions({
      width: window.innerWidth,
      height: window.innerHeight,
    })
  }

  return (
    <header className="header">
      <div className="container">
        <div className={`header__body ${menuMobile ? 'active' : ''}`}>
          <ForceNavLink to={HOME} end>
            <div className={`header__logo ${logoMobile ? 'active' : ''}`}>
              <img src={logo} alt="логотип" />
              <h2>ХВОСТИК</h2>
            </div>
          </ForceNavLink>
          <div className={`header__block ${menuMobile ? 'active' : ''}`}>
            <div className="header__nav nav-header">
              <ul className={`nav-header__list ${menuMobile ? 'active' : ''}`}>
                <li className="nav-header__item">
                  <ForceNavLink className="nav-header__link" to={HOME}>
                    Головна
                  </ForceNavLink>
                </li>
                <li className="nav-header__item">
                  <ForceNavLink className="nav-header__link" to={FUND}>
                    Про Фонд
                  </ForceNavLink>
                </li>
                <li className="nav-header__item">
                  <ForceNavLink className="nav-header__link" to={PROGRAMS}>
                    Програми
                  </ForceNavLink>
                </li>
              </ul>
            </div>
            <div className={`header__btn ${menuMobile ? 'active' : ''}`}>
              <ForceNavLink to={HELP} end>
                <ButtonHelpMini onClick={onClick}>
                  <span>ДОПОМОГТИ</span>
                </ButtonHelpMini>
              </ForceNavLink>
            </div>
          </div>
          <div
            className={`menu-btn ${menuMobile ? 'active' : ''}`}
            onClick={toggleMobileMenu}
          >
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header
