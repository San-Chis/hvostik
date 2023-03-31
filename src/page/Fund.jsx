import React from 'react'
import FooterInfo from '../components/FooterInfo'
import Header from '../components/Header'
import Sponsors from '../components/Sponsors'
import blockimg from '../img/fund/fund_block.png'

export const Fund = () => {
  return (
    <div className="fundpage">
      <Header />
      <div className="container">
        <div className="fundpage__body">
          <div className="fundpage__block block-fundpage">
            <div className="block-fundpage__image">
              <img src={blockimg} alt="" />
            </div>
            <div className="block-fundpage__info">
              <h2>ПРИЮТ ХВОСТИК</h2>
              <p>
                Приют для собак и котов "Хвостик" - это место, где бездомные
                животные находят любовь и заботу. Мы являемся некоммерческой
                организацией, которая занимается спасением и уходом за
                животными, которые потеряли своих хозяев или стали жертвами
                жестокого обращения.
                <br />
                <br />
                В нашем приюте мы предоставляем нашим питомцам качественный уход
                и внимание. Мы заботимся о их здоровье, обеспечиваем их
                ежедневным питанием, уборкой и социализацией. Каждое животное
                получает необходимые медицинские процедуры и лечение, а также
                проходит все необходимые вакцинации и обработки от паразитов.
                <br />
                <br />
                Наш приют - это место, где каждое животное получает шанс на
                новую жизнь. Мы стремимся найти дом для каждого питомца, который
                был у нас в приюте. Мы тщательно подбираем новых хозяев, чтобы
                убедиться, что животное будет жить в любящей и заботливой семье.
                <br />
                <br />
                Мы считаем, что каждое животное заслуживает любви и уважения, и
                поэтому мы делаем все возможное, чтобы обеспечить им комфортное
                пребывание в приюте и найти им новый дом. Если вы хотите помочь
                нашему приюту, вы можете стать нашим волонтером, сделать
                пожертвование или просто навестить наших питомцев и подарить им
                немного своей любви и внимания.
              </p>
            </div>
          </div>
          <Sponsors />
        </div>
      </div>
      <FooterInfo />
    </div>
  )
}
