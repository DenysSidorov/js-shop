import React from 'react';
import {Link} from 'react-router-dom';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import Slider from 'react-slick';
// import './index.less';
// import './slick-slider.less';
import {pushToCart} from '../../../redux/reducers/cart-reducer';
import CardMainPage from '../card/Card';

interface ISimilarGoodsSection {
  cards: Array<any>;
  title: string;
  addItem: Function;
}

class SimilarGoodsSection extends React.Component<ISimilarGoodsSection, {}> {
  render() {
    let {cards} = this.props;
    const {title} = this.props;
    if (cards.length > 2) {
      cards = [cards[cards.length - 1], cards[cards.length - 2], cards[cards.length - 3]];
    }
    // console.log('RENDER SIMILAR');
    const settings = {
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
    };
    if (!cards.length) return null;
    return (
      <div className='similarGoodsContainer'>
        <h2 className='similarGoodsTitle'>{title || 'Связанные овары'}</h2>
        <div className='slickContainerSimilarGoods'>
          <Slider {...settings}>
            {cards.map((el: any) => (
              <CardMainPage card={el} key={el._id} />
            ))}
          </Slider>

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
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch: any) => {
  return bindActionCreators(
    {
      addItem: (item) => pushToCart(item)
    },
    dispatch
  );
};

export default connect(null, mapDispatchToProps)(SimilarGoodsSection);
/*
function randomInteger(min: number, max: number) {
  let rand = min + Math.random() * (max + 1 - min);
  rand = Math.floor(rand);
  return rand;
}
*/
