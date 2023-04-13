import React from 'react'
import AboutFunds from '../components/AboutFunds'
import FooterInfo from '../components/FooterInfo'
import Header from '../components/Header'
import Sponsors from '../components/Sponsors'
import HowHelpDonate from '../components/HowHelpDonate'

export const Fund = () => {
  return (
    <div className="fundpage">
      <div className="fundpage__header">
        <Header />
      </div>
      <div className="fundpage__body">
        <AboutFunds />
        <div className="fundpage__sponsors">
          <Sponsors />
        </div>

        <div className="container">
          <div className="fundpage__donate donate-fundpage">
            <div className="donate-fundpage__title">
              <h2>КАК ПОМОЧЬ?</h2>
            </div>
            <div className="donate-fundpage__howhelp">
              <HowHelpDonate />
            </div>
          </div>
        </div>
      </div>
      <FooterInfo />
    </div>
  )
}
