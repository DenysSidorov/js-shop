// tslint:disable:no-var-requires
import React from 'react';
import axios from 'axios';
import {RouteComponentProps} from 'react-router-dom';
import urlApi from '../../../../api/urlApi';
import MainContainerForCard from './MainContainerForCard';
import SimilarGoodsSection from '../../../modules/similar-goods-section/SimilarGoodsSection';
import ContainerForCardAdditional from './ContainerForCardAdditional';
import {setMetaTag, setTitle} from '../../../../helpers/libs/utils';

interface IHome extends RouteComponentProps<any> {
  location: any;
  history: any;
}

interface SCardComponent {
  card: Array<{name: string; tags: any}>;
  popularCards: any;
  similarCategory: any;
}

class CardComponent extends React.Component<IHome, SCardComponent> {
  state = {
    card: [],
    similarCategory: [],
    popularCards: []
  };

  componentDidMount() {
    const {match} = this.props;
    const {id} = match.params;
    this.initCadd(id);
  }

  UNSAFE_componentWillReceiveProps(nextProps: any) {
    const {match} = this.props;
    if (nextProps.match.params.id !== match.params.id) {
      const {id} = nextProps.match.params;
      this.initCadd(id);
    }
    // this.forceUpdate();
  }

  getMetaTags = (arr: Array<any>) => {
    return arr.reduce((prev, curr, ind) => {
      return `${ind === 0 ? prev : `${prev},`} ${curr}`;
    }, '');
  };

  async initCadd(id: number) {
    // let {card} = this.state;

    window.scrollTo(0, 0);
    const descriptionText =
      'Купить картину на дереве в Украине, ручная работа, картины на досках высокого качества. Украина.';
    setTitle('Карта товара');
    setMetaTag('description', descriptionText);
    setMetaTag(
      'keywords',
      'интернет-магазин картин, украинские картины, картины для интерьера, картины на дереве, картины на досках, doshki.com, картины украина, деревянные картины, doshki.kom'
    );

    let similarCategory: any;
    let popularCards: any;
    let card: any;
    // TODO getTime, isAuth, getCurrency, getName, getDate, getLocation, getSomeData
    try {
      card = await axios.get(`${urlApi}/api/goods/${id}`);
      if (card.data.length) {
        similarCategory = await axios.post(`${urlApi}/api/goods/${id}/similar`, {
          params: {category: card.data[0].category}
        });
      }
      popularCards = await axios.get(`${urlApi}/api/goods/popular`);
    } catch (e) {
      console.log(e);
    } finally {
      this.setState(
        {
          card: card && card.data ? card.data : [],
          similarCategory: similarCategory && similarCategory.data ? similarCategory.data : [],
          popularCards: popularCards.data && popularCards.data ? popularCards.data : []
        },
        () => {
          const {card: internalCard} = this.state;
          if (internalCard.length) {
            setTitle(`${internalCard[0]['name'] && `${internalCard[0]['name']}, `}${internalCard[0]['model']}`);
            setMetaTag(
              'description',
              // eslint-disable-next-line react/destructuring-assignment
              `${internalCard[0]['name'] && `${internalCard[0]['name']}, `}${internalCard[0]['model']} - ${
                internalCard[0]['desc-short'] || descriptionText
              }`
            );
            setMetaTag(
              'keywords',
              `${internalCard[0]['name'] && `${internalCard[0]['name']}, `}${internalCard[0]['model']}, ${
                internalCard[0]['producer']
              }, ${this.getMetaTags(internalCard[0]['tags'])}, ${this.getMetaTags(
                internalCard[0]['category']
              )}, интернет-магазин картин, украинские картины, картины для интерьера, картины на дереве, картины на досках, doshki.com, картины украина, деревянные картины`
            );
          }
        }
      );
    }
  }

  render() {
    const {card, popularCards, similarCategory} = this.state;
    const a: any = popularCards;
    a.push();
    // console.log(card, 'CART', card && card.length && card[0].model ? card[0].model.toUpperCase() : '');
    console.log('asdasdsddsddasdadada', this.props);
    return (
      <div>
        {card.length ? (
          <div>
            <MainContainerForCard card={card} />
            {similarCategory && similarCategory.length ? (
              <SimilarGoodsSection cards={similarCategory} title='Похожие' />
            ) : null}
            {popularCards && popularCards.length && card.length ? (
              <ContainerForCardAdditional card={card} popularCards={popularCards} />
            ) : null}
          </div>
        ) : (
          <div className='adminPanelSpinner'>
            <i className='fa fa-spinner' />
          </div>
        )}
      </div>
    );
  }
}

// export default withRouter(CardComponent);
export default CardComponent;
