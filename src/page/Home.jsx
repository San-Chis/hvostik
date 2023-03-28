import React from 'react'
import Contacts from '../components/Contacts'
import Header from '../components/Header'
import HomeFooter from '../components/HomeFooter'
import Luckys from '../components/Luckys'
import Shelter from '../components/Shelter'
import Slider from '../components/Slider'
import Sponsors from '../components/Sponsors'

export const Home = () => {
  return (
    <div className="homepage">
      <Header />
      <div className="homepage__body">
        <Shelter />
        <HomeFooter />
        <Slider />
        <Luckys />
		  <Sponsors/>
		  <Contacts/>
      </div>
    </div>
  )
}
