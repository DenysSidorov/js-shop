import React from 'react';
import axios from 'axios';
// import {connect} from 'react-redux';
import {RouteComponentProps} from 'react-router-dom';
import qs from 'query-string';
// import {push} from 'react-router-redux';
// import {push} from 'connected-react-router';
import urlApi from '../../../../api/urlApi';
import linkParams from '../../../../helpers/libs/queryParams';
import CardsSection from '../../../modules/cards-section/CardsSection';
import TagsMainSection from '../../../modules/tags-main-section/TagsMainSection';
import MenuInfoSection from '../../../modules/menu-info-section/MenuInfoSection';
// import SimilarGoodsSection from '../modules/SimilarGoodsSection';
import Pagination from '../../../modules/pagination/Pagination';
import {setMetaTag, setTitle} from '../../../../helpers/libs/utils';
// import LinksToImages from '../modules/LinksToImages';
import HeadBanner from '../../../modules/head-banner/HeadBanner';

interface IHome extends RouteComponentProps<any> {
  location: any;
  history: any;
}

interface StateHome {
  pageOfItems: Array<any>;
  cards: Array<any>;
  popularCards: Array<any>;
  uniqCategory: Array<any>;
  paginationPageActive: number;
  count: number;
}

class Home extends React.Component<IHome, StateHome> {
  constructor(props: IHome) {
    super(props);
    this.state = {
      pageOfItems: [],
      cards: [],
      popularCards: [],
      uniqCategory: [],
      paginationPageActive: 1,
      count: 0
    };
    this.onPageChange = this.onPageChange.bind(this);
  }

  async componentDidMount() {
    const {location} = this.props;
    window.scrollTo(0, 0);
    const params = linkParams(location.search);
    const param = params.sort;
    const pageSize = params.pagesize;
    const numberPage = params.numberpage;

    let cards: any = [];
    let popularCards: any = [];
    let uniqCategory: any = [];

    // set new title
    if (param) {
      setTitle(`Картины на дереве - ${param}`);
      setMetaTag('description');
      setMetaTag(
        'keywords',
        `интернет-магазин картин, украинские картины, картины для интерьера, картины на дереве, картины на досках, doshki.com, картины украина, деревянные картины ${param}`
      );
    } else {
      setTitle('Главная');
      setMetaTag('description');
      setMetaTag(
        'keywords',
        'интернет-магазин картин, украинские картины, картины для интерьера, картины на дереве, картины на досках, doshki.com, doshki.kom, картины украина, деревянные картины'
      );
    }

    try {
      if (param) {
        if (pageSize && numberPage) {
          cards = await axios.get(`${urlApi}/api/goods?sort=${param}&pagesize=${pageSize}&numberpage=${numberPage}`);
        } else {
          cards = await axios.get(`${urlApi}/api/goods?sort=${param}`);
        }
      } else if (pageSize && numberPage) {
        cards = await axios.get(`${urlApi}/api/goods?pagesize=${pageSize}&numberpage=${numberPage}`);
      } else {
        cards = await axios.get(`${urlApi}/api/goods`);
      }
      popularCards = await axios.get(`${urlApi}/api/goods/popular`);
      uniqCategory = await axios.get(`${urlApi}/api/goods/tags`);
    } catch (e) {
      console.log(e);
    } finally {
      this.setState({
        count: cards.data.count,
        cards: cards.data.goods,
        paginationPageActive: (numberPage && numberPage - 1) || 0,
        popularCards: popularCards.data,
        uniqCategory: uniqCategory.data
      });
    }
  }

  async UNSAFE_componentWillReceiveProps() {
    const {history} = this.props;
    console.log('componentWillReceiveProps');
    this.setState({cards: []}, async () => {
      window.scrollTo(0, 0);
      // получение обьекта параметров запроса

      const params = linkParams(history.location.search);
      const param = params.sort;
      const pageSize = params.pagesize;
      const numberPage = params.numberpage;

      // &pagesize=${pageSize}&numberpage=${numberPage}

      // set new title
      if (param) {
        setTitle(`Картины на дереве - ${param}`);
      } else {
        setTitle('Главная');
      }

      let cards: any = [];
      try {
        if (param) {
          if (pageSize && numberPage) {
            cards = await axios.get(`${urlApi}/api/goods?sort=${param}&pagesize=${pageSize}&numberpage=${numberPage}`);
          } else {
            cards = await axios.get(`${urlApi}/api/goods?sort=${param}`);
          }
        } else if (pageSize && numberPage) {
          cards = await axios.get(`${urlApi}/api/goods?pagesize=${pageSize}&numberpage=${numberPage}`);
        } else {
          cards = await axios.get(`${urlApi}/api/goods`);
        }
      } catch (e) {
        console.log(e);
      } finally {
        const res = (numberPage && numberPage - 1) || 0;
        this.setState({
          paginationPageActive: res,
          count: cards.data.count,
          cards: cards.data.goods
        });
      }
    });
  }

  onPageChange(pagin: any) {
    const {history} = this.props;
    const params = linkParams(history.location.search);
    params.pagesize = 50;
    params.numberpage = pagin.selected + 1;
    const searchString = qs.stringify(params);
    history.push(`/shop?${searchString}`);
  }

  render() {
    const {count, cards, pageOfItems, popularCards, uniqCategory, paginationPageActive} = this.state;
    const a = (rr: any, ...rest: any): void => {
      const b = [rr, rest];
      b.push(5);
    };
    a(count, cards, pageOfItems, popularCards, uniqCategory, paginationPageActive);
    console.log('paginationPageActive', paginationPageActive);
    console.log('count', count);
    return (
      <div>
        Hello
        <MenuInfoSection />
        <HeadBanner />
        {uniqCategory && uniqCategory.length ? <TagsMainSection uniqCategory={uniqCategory} /> : null}
        {cards && cards.length ? <CardsSection count={count} cards={cards} /> : null}
        {cards && cards.length ? (
          <Pagination
            pageCount={count}
            inOnePage={50}
            paginationPageActive={paginationPageActive}
            onPageChange={this.onPageChange}
          />
        ) : null}
        {/* {this.state.cards && this.state.cards.length ? <LinksToImages /> : null} */}
        {/* {!this.state.cards.length ? ( */}
        {/*  <div className='adminPanelSpinner'> */}
        {/*    <i className='fa fa-spinner' /> */}
        {/*  </div> */}
        {/* ) : null} */}
        {/* {this.state.popularCards && this.state.popularCards.length ? ( */}
        {/*  <SimilarGoodsSection cards={this.state.popularCards} title='Популярные' /> */}
        {/* ) : null} */}
      </div>
    );
  }
}

// export default withRouter(Home);
export default Home;
// export default connect(null, {push})(Home);
