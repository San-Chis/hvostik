import React from 'react'
import FooterInfo from '../components/FooterInfo'
import Header from '../components/Header'
import Luckys from '../components/Luckys'
import Slider from '../components/Slider'
import HowHelpRequisites from '../components/HowHelpRequisites'

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
          <div className="programspage__requisites requisites-programspage">
            <div className="requisites-programspage__title">
              <h2>КАК ПОМОЧЬ?</h2>
            </div>
            <div className="requisites-programspage__howhelp">
              <HowHelpRequisites />
            </div>
          </div>
        </div>
        <FooterInfo />
      </div>
    </div>
  )
}
