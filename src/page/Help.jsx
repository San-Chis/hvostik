import React from 'react'
import FooterInfo from '../components/FooterInfo'
import Header from '../components/Header'
import HowHelp from '../components/HowHelp'
import Sponsors from '../components/Sponsors'

export const Help = () => {
  return (
    <div className="helps">
      <div className="helps__haeader">
        <Header />
      </div>
      <div className="helps__body">
        <HowHelp />
        <Sponsors />
        <FooterInfo />
      </div>
    </div>
  )
}
