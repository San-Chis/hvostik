import React from 'react'
import LuckysCard from './LuckysCard'
import nata from '../img/home/card_lucky_nata.png'
import vasya from '../img/home/card_lucky_vasya.png'
import richard from '../img/home/card_lucky_richard.png'

const Luckys = () => {
  return (
    <div className="lucky">
      <div className="container">
        <div className="lucky__title">
          <h2>СЧАСТЛИВЧИКИ</h2>
        </div>
        <div className="lucky__body">
          <LuckysCard image={nata} text={'НАТА'} />
          <LuckysCard image={vasya} text={'ВАСЯ'} />
          <LuckysCard image={richard} text={'РИЧАРД'} />
        </div>
      </div>
    </div>
  )
}

export default Luckys
