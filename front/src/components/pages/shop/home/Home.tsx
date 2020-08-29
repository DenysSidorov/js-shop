import React from 'react';
import axios from 'axios';
// import qs from 'query-string';
// import {push} from 'react-router-redux';
import urlApi from '../../../../api/urlApi';
import linkParams from '../../../../helpers/libs/queryParams';
// import CardsSection from '../modules/CardsSection';
// import TagsMainSection from '../modules/TagsMainSection';
import MenuInfoSection from '../../../modules/menu-info-section/MenuInfoSection';
// import SimilarGoodsSection from '../modules/SimilarGoodsSection';
// import Pagination from '../modules/Pagination';
import {setMetaTag, setTitle} from '../../../../helpers/libs/utils';
// import LinksToImages from '../modules/LinksToImages';
// import HeadBanner from '../modules/HeadBanner';

interface IHome {
  location: any;
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
    const {location} = this.props;
    console.log('componentWillReceiveProps');
    this.setState({cards: []}, async () => {
      window.scrollTo(0, 0);
      // получение обьекта параметров запроса

      const params = linkParams(location.search);
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
        this.setState({
          paginationPageActive: (numberPage && numberPage - 1) || 0,
          count: cards.data.count,
          cards: cards.data.goods
        });
      }
    });
  }

  onPageChange(pagin: any) {
    const {location} = this.props;
    const params = linkParams(location.search);
    params.pagesize = 50;
    params.numberpage = pagin.selected + 1;
    // const searchString = qs.stringify(params);
    // this.props.dispatch(push(`/shop?${searchString}`));
    alert('Chage page');
  }

  render() {
    const {count, cards, pageOfItems, popularCards, uniqCategory, paginationPageActive} = this.state;
    console.log(count, cards, pageOfItems, popularCards, uniqCategory, paginationPageActive);
    return (
      <div>
        Hello
        <MenuInfoSection />
        {/* <HeadBanner /> */}
        {/* {this.state.uniqCategory && this.state.uniqCategory.length ? ( */}
        {/*  <TagsMainSection uniqCategory={this.state.uniqCategory} /> */}
        {/* ) : null} */}
        {/* {this.state.cards && this.state.cards.length ? ( */}
        {/*  <CardsSection count={this.state.count} cards={this.state.cards} /> */}
        {/* ) : null} */}
        {/* {this.state.cards && this.state.cards.length ? ( */}
        {/*  <Pagination */}
        {/*    pageCount={this.state.count} */}
        {/*    inOnePage={50} */}
        {/*    paginationPageActive={this.state.paginationPageActive} */}
        {/*    onPageChange={this.onPageChange} */}
        {/*  /> */}
        {/* ) : null} */}
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

export default Home;
