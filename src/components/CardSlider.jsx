import React from 'react'

const CardSlider = ({ image, title, text }) => {
  return (
    <div className="cardslide">
      <div className="cardslide__img">
        <img src={image} alt="" />
      </div>
      <div className="cardslide__title">
        <h2>{title}</h2>
        <p>{text}</p>
      </div>
    </div>
  )
}

export default CardSlider
