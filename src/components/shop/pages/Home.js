import React from "react";
import axios from "axios";
import qs from 'query-string';
import {push} from "react-router-redux";
import {connect} from 'react-redux';
import urlApi from "../../../api/urlApi";
import linkParams from "../helpers/lib/queryParams";
import CardsSection from "../modules/CardsSection";
import TagsMainSection from "../modules/TagsMainSection";
import MenuInfoSection from "../modules/MenuInfoSection";
import SimilarGoodsSection from "../modules/SimilarGoodsSection";
import Pagination from "../modules/Pagination";
import {setMetaTag, setTitle} from "../helpers/lib/utils";

class Home extends React.Component {
  constructor() {
    super();
    this.state = {
      pageOfItems: [],
      cards: [],
      popularCards: [],
      uniqCategory: [],
      paginationPageActive: 1,
    };
    this.onPageChange = this.onPageChange.bind(this);
  }

  onPageChange(pagin) {
    console.log(pagin.selected, 'onChangePage in parent');
    var params = linkParams(this.props.location.search);
    params['pagesize'] = 50;
    params['numberpage'] = pagin.selected + 1
    const searchString = qs.stringify(params);
    this.props.dispatch(push(`/?${searchString}`));
    // this.componentWillReceiveProps();
  }

  // shouldComponentUpdate(nextProps){
  //     return nextProps.location.href != this.props.location.href
  // }

  async componentWillReceiveProps(prevProps) {
    console.log('componentWillReceiveProps');
    this.setState({cards: []}, async () => {
      window.scrollTo(0, 0)
      // получение обьекта параметров запроса

      var params = linkParams(this.props.location.search);
      var param = params['sort'];
      var pageSize = params['pagesize'];
      var numberPage = params['numberpage'];


      //&pagesize=${pageSize}&numberpage=${numberPage}


      // set new title
      if (param) {
        setTitle(param + 'портфель');
      } else {
        setTitle('Главная');
      }

      var cards = [];
      try {
        if (param) {
          if (pageSize && numberPage) {
            cards = await axios.get(`${urlApi}/api/goods?sort=${param}&pagesize=${pageSize}&numberpage=${numberPage}`);
          } else {
            cards = await axios.get(`${urlApi}/api/goods?sort=${param}`);
          }
        } else {
          if (pageSize && numberPage) {
            cards = await axios.get(`${urlApi}/api/goods?pagesize=${pageSize}&numberpage=${numberPage}`);
          } else {
            cards = await axios.get(`${urlApi}/api/goods`);
          }
        }
      } catch (e) {
        console.log(e);
      } finally {
        this.setState({
          paginationPageActive: (numberPage && numberPage - 1) || 0,
          count: cards.data.count,
          cards: cards.data.goods,
        },)
      }
    })
  }

  async componentDidMount(prevProps) {
    window.scrollTo(0, 0)
    var params = linkParams(this.props.location.search);
    var param = params['sort'];
    var pageSize = params['pagesize'];
    var numberPage = params['numberpage'];

    var cards = [];
    var popularCards = [];
    var uniqCategory = [];

    // set new title
    if (param) {
      setTitle(param + ' портфель');
      setMetaTag('description', param + ' | Купить портфель сумку или рюкзак на любой вкус');
      setMetaTag('keywords', 'портфели, сумки, рюкзаки, купить для школы, shop-ukraine.pro ,' + param);
    } else {
      setTitle('Главная');
      setMetaTag('description', 'Купить портфель сумку или рюкзак на любой вкус');
      setMetaTag('keywords', 'портфели, сумки, рюкзаки, купить для школы, shop-ukraine.pro');
    }

    try {
      if (param) {
        if (pageSize && numberPage) {
          cards = await axios.get(`${urlApi}/api/goods?sort=${param}&pagesize=${pageSize}&numberpage=${numberPage}`);
        } else {
          cards = await axios.get(`${urlApi}/api/goods?sort=${param}`);
        }
      } else {
        if (pageSize && numberPage) {
          cards = await axios.get(`${urlApi}/api/goods?pagesize=${pageSize}&numberpage=${numberPage}`);
        } else {
          cards = await axios.get(`${urlApi}/api/goods`);
        }
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
      })
    }
  }

  render() {
    return (
      <div>
        <MenuInfoSection/>
        {this.state.uniqCategory && this.state.uniqCategory.length
          ? <TagsMainSection uniqCategory={this.state.uniqCategory}/>
          : null}
        {this.state.cards && this.state.cards.length
          ? <CardsSection count={this.state.count} cards={this.state.cards}/>
          : null}
        {this.state.cards && this.state.cards.length
          ? <Pagination
            pageCount={this.state.count}
            inOnePage={50}
            paginationPageActive={this.state.paginationPageActive}
            onPageChange={this.onPageChange}/>
          : null}
        {!this.state.cards.length
          ? <div className="adminPanelSpinner"><i className="fa fa-spinner"></i></div>
          : null}

        {/*<AdditionalSection/>*/}

        {this.state.popularCards && this.state.popularCards.length
          ? <SimilarGoodsSection cards={this.state.popularCards} title={'Популярные'}/>
          : null}
      </div>
    )
  }
}

export default connect(null, null)(Home);