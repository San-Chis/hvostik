import React from 'react'
import two from '../img/home/two.png'
import three from '../img/home/three.png'
import helpone from '../img/home/help_one.png'
import helptwo from '../img/home/help_two.png'
import helpthree from '../img/home/help_three.png'
import HowHelpRequisites from './HowHelpRequisites'

const HowHelp = () => {
  return (
    <div className="help">
      <div className="container">
        <div className="help__title">
          <h2>КАК ПОМОЧЬ?</h2>
        </div>
        <div className="help__body">
          <HowHelpRequisites />
          <div className="help__sum sum-help">
            <div className="sum-help__info">
              <img src={two} alt="" />
              <h2>ОТПРАВЬТЕ ЛЮБУЮ СУММУ</h2>
            </div>
            <div className="sum-help__text">
              <p>Будем рады любой поддержке</p>
            </div>
            <div className="sum-help__denomination ">
              <div className="sum-help__denomination__txt">
                <p>+5Р</p>
              </div>
              <div className="sum-help__denomination__txt">
                <p>+50Р</p>
              </div>
              <div className="sum-help__denomination__txt">
                <p>+100Р</p>
              </div>
              <div className="sum-help__denomination__txt">
                <p>+1 000Р</p>
              </div>
            </div>
          </div>
          <div className="help__thankyou">
            <div className="help-thankyou__block  block-help-thankyou">
              <div className="block-help-thankyou__title">
                <img src={three} alt="" />
                <h2>СПАСИБО</h2>
              </div>
              <div className="block-help-thankyou__text">
                <p>
                  Вот так всего за несколько шагов вы можете помочь животным
                </p>
              </div>
            </div>
            <div className="thankyou-help__image">
              <img src={helpone} alt="" />
              <img src={helptwo} alt="" />
              <img src={helpthree} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HowHelp
