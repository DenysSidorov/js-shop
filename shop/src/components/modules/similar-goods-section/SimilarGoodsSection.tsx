import React from 'react';
import {Link} from 'react-router-dom';
import Slider from 'react-slick';
import './index.scss';

import CardMainPage from '../card/Card';
import {ICartReducerItem} from '../../../redux/reducers/cart-reducer/cartReducer';

interface ISimilarGoodsSection {
  cards: Array<ICartReducerItem>;
  title: string;
  isShowAllSimilar?: boolean;
}

const SimilarGoodsSection = (props: ISimilarGoodsSection) => {
  const {cards, title, isShowAllSimilar = true} = props;
  const settings = {
    infinite: true,
    speed: 300,
    autoplay: true,
    autoplaySpeed: 2000,
    slidesToShow: 5,
    slidesToScroll: 2,
    className: 'slickMainContainerAnchorFromReact',
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  if (!cards.length || cards.length < 5) return null;
  return (
    <div className='similarGoodsContainer'>
      <h2 className='similarGoodsTitle'>{title || 'Связанные овары'}</h2>
      <div className='slickContainerSimilarGoods'>
        <Slider {...settings}>
          {cards.map((el: ICartReducerItem, index) => {
            return (
              <div className='slickContainerSimilarGoods_wrapperForOne' key={el.code}>
                <CardMainPage card={el} width='100%' />
              </div>
            );
          })}
          {isShowAllSimilar && (
            <div className='goToAllGoodsFromSimilar'>
              <Link
                to={{
                  pathname: '/shop',
                  search: `?sort=${cards[0].category[0]}`,
                  hash: '',
                  state: {relo: true},
                }}
                className='goToAllGoodsFromSimilar_text'
              >
                Перейти ко всем похожим товарам
              </Link>
            </div>
          )}
        </Slider>
      </div>
    </div>
  );
};

export default SimilarGoodsSection;
