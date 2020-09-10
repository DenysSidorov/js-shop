import React from 'react';
import {Link} from 'react-router-dom';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import './index.less';
import './slick-slider.less';
import {pushToCart} from '../../../../reducers/cart';

class SimilarGoodsSection extends React.Component {
  render() {
    return <div />;
  }
}
class SimilarGoodsSection2 extends React.Component {
  constructor(props) {
    super(props);
    this.initSlick = this.initSlick.bind(this);
  }

  // hook for update component
  state = {counter: 0, isUpdateted: false};

  componentDidMount() {
    // console.log('componentDidMount');
    if (!this.state.isUpdateted && this.props.cards.length) {
      const c = ++this.state.counter;
      this.interval = setTimeout(() => {
        this.setState({counter: c, isUpdateted: true}, () => {
          this.initSlick();
        });
      }, 1000);
    }
  }

  initSlick() {
    const slickContainerSimilarGoods = $('.slickContainerSimilarGoods');
    console.log(slickContainerSimilarGoods);
    if (slickContainerSimilarGoods.length) {
      // console.log('Da');
      $('.slickContainerSimilarGoods').slick({
        // -----------------------slick slider #2---------------
        // dots: true,
        infinite: true,
        speed: 300,
        autoplay: true,
        autoplaySpeed: 2000,
        slidesToShow: 5,
        slidesToScroll: 2,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true
              // dots: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
          // You can unslick at a given breakpoint now by adding:
          // settings: "unslick"
          // instead of a settings object
        ]
      }); // все дети этого дива станут слайдами// -----------------------slick slider #2---------------
    }
  }

  componentWillUpdate() {
    // console.log('componentWillUpdate');
  }

  // TODO поменять на react
  // https://github.com/akiran/react-slick

  render() {
    let {cards} = this.props;
    if (cards.length > 2) {
      cards = [cards[cards.length - 1], cards[cards.length - 2], cards[cards.length - 3]];
    }
    // console.log('RENDER SIMILAR');
    return (
      <div className='similarGoodsContainer'>
        {cards.length ? <h2 className='similarGoodsTitle'>{this.props.title || 'Похожие товары'}</h2> : null}
        <div className='slickContainerSimilarGoods'>
          {cards.length
            ? cards.map((card) => {
                return (
                  <div key={card._id} className='bodyCardItems__oneCardItem'>
                    <Link to={`/card/${card._id}`}>
                      <div className='oneCardItem__headCard'>
                        <div className='oneCardItem__headCard__priceCard'>
                          <span>
                            {'от '}
                            {card.price}
                            {' грн'}
                          </span>
                        </div>
                        <div className='oneCardItem__headCard__nameBrand noWrap'>{card.model}</div>
                        <div className='oneCardItem__headCard__wrap-things'>
                          {/* <div className="oneCardItem__headCard__otherThings"> */}
                          {/* <i className="fa fa-heart"></i> */}
                          {/* <span className="oneCardItem__headCard__otherThings_like"> {card.likes}</span> */}
                          {/* </div> */}
                          <div className='oneCardItem__headCard__view'>
                            <i className='fa fa-eye' aria-hidden='true' />
                            <span className='oneCardItem__headCard__view_items'> {card.views}</span>
                          </div>
                        </div>
                      </div>

                      <div className='oneCardItem__imageBody'>
                        <img src={`/img-static/${card.photo[0]}`} alt='' />
                      </div>
                    </Link>
                    <div className='oneCardItem__bottomCard'>
                      <Link to={`/card/${card._id}`} className='oneCardItem__bottomCard__shortText'>
                        <span className='oneCardItem__bottomCard__shortText_dots'>{card['desc-short']}</span>
                      </Link>
                      {/* <div */}
                      {/*  className="oneCardItem__bottomCard__status">{card.isExists ? 'В наличии' : 'Нет в наличии'}</div> */}
                      <div onClick={() => this.props.addItem(card)} className='oneCardItem__bottomCard__buy'>
                        <span>В КОРЗИНУ</span>
                      </div>
                    </div>
                    {card.sail ? (
                      <div className='oneCardItem__bottomCard_sale'>
                        <span>-{card.sail}%</span>
                      </div>
                    ) : null}
                    {card.isNewGood ? (
                      <div className='oneCardItem__bottomCard_new'>
                        NEW
                        <span />
                      </div>
                    ) : null}
                  </div>
                );
              })
            : null}
          {cards.length ? (
            <div className='goToAllGoodsFromSimilar'>
              <Link
                to={{
                  pathname: '/shop',
                  search: '?sort=main',
                  hash: '',
                  state: {relo: true}
                }}
                className='goToAllGoodsFromSimilar_text'
              >
                Перейти ко всем похожим товарам
              </Link>
            </div>
          ) : null}
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(
    {
      addItem: (item) => pushToCart(item)
    },
    dispatch
  );
};

export default connect(null, mapDispatchToProps)(SimilarGoodsSection);

function randomInteger(min, max) {
  let rand = min + Math.random() * (max + 1 - min);
  rand = Math.floor(rand);
  return rand;
}
