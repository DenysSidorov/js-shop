import React from 'react';

class Price extends React.Component {
  render(){
    return(
      <div className="price">
        <div className="price_container">
          <h2 className="price_title"><a name="price" id="price"></a>Цены картин на досках в Украине</h2>
          <div className="price_title_discount">Сейчас действует скидка -40% на все!</div>
          <div className="price_prices">
            <div className="price_prices_squ">
              <div className="price_prices_squ_title">ПРЯМОУГОЛЬНАЯ</div>
              <div className="price_prices_squ_text"><span
                className="price_prices_squ_text_size">Размер: </span>40x30<span
                className="price_prices_squ_text_size">&nbsp;&nbsp;&nbsp;Цена: </span> <span
                className="price_prices_squ_text_disc">915 </span>550 грн
              </div>
              <div className="price_prices_squ_text"><span
                className="price_prices_squ_text_size">Размер: </span>60x40<span
                className="price_prices_squ_text_size">&nbsp;&nbsp;&nbsp;Цена: </span><span
                className="price_prices_squ_text_disc">1200 </span>750 грн
              </div>
              <div className="price_prices_squ_text"><span
                className="price_prices_squ_text_size">Размер: </span>90x60<span
                className="price_prices_squ_text_size">&nbsp;&nbsp;&nbsp;Цена: </span><span
                className="price_prices_squ_text_disc">2200 </span>1300 грн<strong>Хит</strong>
              </div>
              <div className="price_prices_squ_text"><span
                className="price_prices_squ_text_size">Размер: </span>80x100<span
                className="price_prices_squ_text_size">&nbsp;&nbsp;&nbsp;Цена: </span><span
                className="price_prices_squ_text_disc">2665 </span>1600 грн
              </div>
              <div className="price_prices_squ_text"><span
                className="price_prices_squ_text_size">Размер: </span>80x120<span
                className="price_prices_squ_text_size">&nbsp;&nbsp;&nbsp;Цена: </span><span
                className="price_prices_squ_text_disc">3165 </span>1900 грн
              </div>
              <div className="price_prices_squ_text"><span
                className="price_prices_squ_text_size">Размер: </span>100x150<span
                className="price_prices_squ_text_size">&nbsp;&nbsp;&nbsp;Цена: </span><span
                className="price_prices_squ_text_disc">4665 </span>2800 грн
              </div>
              <div className="price_prices_squ_text"><span
                className="price_prices_squ_text_size">Размер: </span>120x180<span
                className="price_prices_squ_text_size">&nbsp;&nbsp;&nbsp;Цена: </span><span
                className="price_prices_squ_text_disc">6665 </span>4000 грн
              </div>
            </div>
            <div className="price_prices_squ">
              <div className="price_prices_squ_title">КВАДРАТНАЯ</div>
              <div className="price_prices_squ_text"><span
                className="price_prices_squ_text_size">Размер: </span>40x40<span
                className="price_prices_squ_text_size">&nbsp;&nbsp;&nbsp;Цена: </span><span
                className="price_prices_squ_text_disc">1000 </span>600 грн
              </div>
              <div className="price_prices_squ_text"><span
                className="price_prices_squ_text_size">Размер: </span>60x60<span
                className="price_prices_squ_text_size">&nbsp;&nbsp;&nbsp;Цена: </span><span
                className="price_prices_squ_text_disc">1550 </span>950 грн
              </div>
              <div className="price_prices_squ_text"><span
                className="price_prices_squ_text_size">Размер: </span>90x90<span
                className="price_prices_squ_text_size">&nbsp;&nbsp;&nbsp;Цена: </span><span
                className="price_prices_squ_text_disc">2835 </span>1700 грн <strong>Хит</strong>
              </div>
              <div className="price_prices_squ_text"><span
                className="price_prices_squ_text_size">Размер: </span>100x100<span
                className="price_prices_squ_text_size">&nbsp;&nbsp;&nbsp;Цена: </span><span
                className="price_prices_squ_text_disc">3000 </span>1800 грн
              </div>
              <div className="price_prices_squ_text"><span
                className="price_prices_squ_text_size">Размер: </span>120x120<span
                className="price_prices_squ_text_size">&nbsp;&nbsp;&nbsp;Цена: </span><span
                className="price_prices_squ_text_disc">3835 </span>2300 грн
              </div>
              <div className="price_prices_squ_text"><span
                className="price_prices_squ_text_size">Размер: </span>150x150<span
                className="price_prices_squ_text_size">&nbsp;&nbsp;&nbsp;Цена: </span><span
                className="price_prices_squ_text_disc">5835 </span>3500 грн
              </div>
              <div className="price_prices_squ_text"><span
                className="price_prices_squ_text_size">Размер: </span>180x180<span
                className="price_prices_squ_text_size">&nbsp;&nbsp;&nbsp;Цена: </span><span
                className="price_prices_squ_text_disc">8335 </span>5000 грн
              </div>
            </div>
          </div>
          <div className="price_black"></div>
          {/*<div className="price_add">*/}
          {/*  <strong>Состаренные края: </strong><span> +10% от стоимости</span>*/}
          {/*  <strong>БЕСПЛАТНО</strong>*/}
          {/*</div>*/}
        </div>
      </div>
    )
  }
}

export default Price;

