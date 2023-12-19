import React from 'react'
import FooterInfo from '../components/FooterInfo'
import Header from '../components/Header'
import Luckys from '../components/Luckys'
import Slider from '../components/Slider'
import HowHelpDonate from '../components/HowHelpDonate'

export const Programs = () => {
  return (
    <div className="programspage">
      <div className="programspage__haeader">
        <Header />
      </div>
      <div className="programspage__body">
        <Slider />
        <Luckys />
        <div className="container">
          <div className="programspage__donate donate-programspage">
            <div className="donate-programspage__title">
              <h2>ЯК ДОПОМОГТИ?</h2>
            </div>
            <div className="donate-programspage__howhelp">
              <HowHelpDonate />
            </div>
          </div>
        </div>
        <FooterInfo />
      </div>
    </div>
  )
}
