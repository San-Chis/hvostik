import React from 'react'
import Contacts from '../components/Contacts'
import Header from '../components/Header'
import ShelterFooter from '../components/ShelterFooter'
import Luckys from '../components/Luckys'
import Shelter from '../components/Shelter'
import Slider from '../components/Slider'
import Sponsors from '../components/Sponsors'
import HowHelp from '../components/HowHelp'
import FooterInfo from '../components/FooterInfo'

export const Home = () => {
  return (
    <div className="homepage">
      <Header />
      <div className="homepage__body">
        <Shelter />
        <ShelterFooter />
        <Slider />
        <Luckys />
        <HowHelp />
        <Sponsors />
        <Contacts />
        <FooterInfo />
      </div>
    </div>
  )
}
