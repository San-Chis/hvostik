import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import ButtonHelpMini from '../button/ButtonMini'
import logo from '../img/logo.svg'
import { HOME, FUND, PROGRAMS } from '../routes/constans'

const Header = ({ onClick }) => {
	const [menuMobile, setMenuMobile] = useState(false)
	const [logoMobile, setLogoMobile] = useState(false)
 
	const toggleMobileMenu = () => {
	  setMenuMobile(!menuMobile)
	  setLogoMobile(!logoMobile)
	}


  return (
    <header className="header">
      <div className="container">
        <div className={`header__body ${menuMobile ? 'active' : ''}`}>
          <div className={`header__logo ${logoMobile ? 'active' : ''}`}>
            <NavLink to={HOME} end>
              <img src={logo} alt="" />
            </NavLink>
            <h2>ХВОСТИК</h2>
          </div>
          <div className="header__nav nav-header">
            <ul className={`nav-header__list ${menuMobile ? 'active' : ''}`} >
              <li className="nav-header__item">
                <NavLink className="nav-header__link" to={HOME} end>
                  Главная
                </NavLink>
              </li>
              <li className="nav-header__item">
                <NavLink className="nav-header__link" to={FUND} end>
                  Про Фонд
                </NavLink>
              </li>
              <li className="nav-header__item">
                <NavLink className="nav-header__link" to={PROGRAMS} end>
                  Программы
                </NavLink>
              </li>
            </ul>
          </div>
          <div className={`header__btn ${menuMobile ? 'active' : ''}`}>
            <ButtonHelpMini onClick={onClick}>
              <span>ПОМОЧЬ</span>
            </ButtonHelpMini>
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
