import React, { useState } from 'react'
import one from '../img/home/one.png'
import visa from '../img/home/visa.png'

const HowHelpRequisites = () => {
  const cardNumber = '30101810400000000225'
  const [copied, setCopied] = useState(false)

  const copy = () => {
    navigator.clipboard.writeText(cardNumber)
    if (!copied) {
      setCopied(true)
      setTimeout(() => {
        setCopied(false)
      }, 1000)
    }
  }

  return (
    <div className="helphow__requisites requisites-helphow">
      <div className="requisites-helphow__info">
        <img src={one} alt="" />
        <h2>СКОПИРУЙТЕ РЕКВИЗИТЫ</h2>
      </div>
      <div className="requisites-helphow__numbers">
        <p>30101810400000000225</p>
        <img src={visa} alt="" />
      </div>
      <div className="requisites-helphow__btn">
        <button
          style={{
            padding: '13.5px',
            color: ` ${copied ? 'yellow' : 'white'}`,
          }}
          onClick={copy}
        >
          {copied ? 'СКОПИРОВАНО' : 'КОПИРОВАТЬ'}
        </button>
      </div>
    </div>
  )
}

export default HowHelpRequisites
