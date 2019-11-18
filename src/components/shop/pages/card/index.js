import React from "react";
import axios from "axios";
import {withRouter} from 'react-router-dom';
import urlApi from "../../../../api/urlApi";
import MainContainerForCard from "./MainContainerForCard";
import SimilarGoodsSection from "../../modules/SimilarGoodsSection";
import ContainerForCardAdditional from "./ContainerForCardAdditional";
import {setMetaTag, setTitle} from "../../helpers/lib/utils";

class CardComponent extends React.PureComponent {

  state = {
    card: [],
    similarCategory: [],
    popularCards: []
  };

  constructor(props) {
    super(props);
    this.initCadd = this.initCadd.bind(this);
  }


  async initCadd(id) {
    window.scrollTo(0, 0);
    setTitle('Карта товара');
    setMetaTag('description', 'Купить картину на дереве в Украине, картины на досках Украина');
    setMetaTag('keywords', 'интернет-магазин картин, украинские картины, картины для интерьера, картины на дереве, картины на досках, doshki.com, картины украина, деревянные картины, doshki.kom');

    var similarCategory = [];
    var popularCards = [];
    var card;
    // TODO getTime, isAuth, getCurrency, getName, getDate, getLocation, getSomeData
    try {
      card = await axios.get(`${urlApi}/api/goods/${id}`);
      if (card.data.length) {
        similarCategory = await axios.post(`${urlApi}/api/goods/${id}/similar`,
          {params: {'category': card.data[0].category}}
        );
      }
      popularCards = await axios.get(`${urlApi}/api/goods/popular`);
    } catch (e) {
      console.log(e);
    } finally {
      this.setState({
        card: card && card.data ? card.data : [],
        similarCategory: similarCategory && similarCategory.data ? similarCategory.data : [],
        popularCards: popularCards.data && popularCards.data ? popularCards.data : []
      }, () => {
        if (this.state.card.length) {
          setTitle(`${this.state.card[0].name} ${this.state.card[0].model}`);
          setMetaTag('description', `${this.state.card[0].name} ${this.state.card[0].model} - ${this.state.card[0]['desc-short']}`);
          setMetaTag('keywords', `${this.state.card[0].name}, ${this.state.card[0].model}, ${this.state.card[0].producer}, ${this.getMetaTags(this.state.card[0].tags)}, ${this.getMetaTags(this.state.card[0].category)}, интернет-магазин картин, украинские картины, картины для интерьера, картины на дереве, картины на досках, doshki.com, картины украина, деревянные картины`);
        }
      });
    }
  }

  getMetaTags = (arr) => {
    return arr.reduce((prev, curr, ind) => {
      return `${ind === 0 ? prev : prev + ','} ${curr}`
    }, '');
  }

  componentDidMount() {
    var id = this.props.match.params.id;
    this.initCadd(id);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.match.params.id !== this.props.match.params.id) {
      var id = nextProps.match.params.id;
      this.initCadd(id);
    }
    // this.forceUpdate();
  }

  render() {
    var {card} = this.state;
    // console.log(card, 'CART', card && card.length && card[0].model ? card[0].model.toUpperCase() : '');
    return (
      <div>
        {card.length
          ? <div>

            <MainContainerForCard card={this.state.card}/>
            {/*{this.state.similarCategory && this.state.similarCategory.length*/}
            {/*? <SimilarGoodsSection cards={this.state.similarCategory} title={'Похожие'}/>*/}
            {/*: null}*/}
            {this.state.popularCards && this.state.popularCards.length && this.state.card.length
              ? <ContainerForCardAdditional card={this.state.card}
                                            popularCards={this.state.popularCards}/>
              : null}

          </div>
          : <div className="adminPanelSpinner"><i className="fa fa-spinner"></i></div>}
      </div>
    )
  }
}

export default withRouter(CardComponent);
