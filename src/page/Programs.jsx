import React from 'react'
import FooterInfo from '../components/FooterInfo'
import Header from '../components/Header'
import Luckys from '../components/Luckys'
import Slider from '../components/Slider'

export const Programs = () => {
  return (
    <div className="programspage">
     <div className='programspage__haeader'> <Header /></div>
      <div className="programspage__body">
        <Slider />
        <Luckys />
        <FooterInfo />
      </div>
    </div>
  )
}
