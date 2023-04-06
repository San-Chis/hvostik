import React from 'react'

const LuckysCard = ({ image, text }) => {
  return (
    <div className="cardlucky">
      <div className="cardlucky__img">
        <img src={image} alt="" />
      </div>
      <div className="cardlucky__text">
        <p>{text}</p>
      </div>
    </div>
  )
}

export default LuckysCard
