import React, {useCallback, useEffect, useState} from 'react';
import axios from 'axios';
import qs from 'query-string';
import urlApi from '../../../api/urlApi';
import linkParams from '../../../helpers/libs/queryParams';
import CardsSection from '../../modules/cards-section/CardsSection';
import TagsMainSection from '../../modules/tags-main-section/TagsMainSection';
import MenuInfoSection from '../../modules/menu-info-section/MenuInfoSection';
import Pagination from '../../modules/pagination/Pagination';
import {setMetaTag, setTitle} from '../../../helpers/libs/utils';
import HeadBanner from '../../modules/head-banner/HeadBanner';
import LinksToImages from '../../modules/links-to-images/LinksToImages';
import SimilarGoodsSection from '../../modules/similar-goods-section/SimilarGoodsSection';
import {IHistory} from '../../../interfaces';

interface IHome extends IHistory {}

const Home = ({location, history}: IHome) => {
  const [cardsState, setCards] = useState([]);
  const [popularCardsState, setPopularCards] = useState([]);
  const [uniqCategoryState, setUniqCategory] = useState([]);
  const [paginationPageActiveState, setPaginationPageActive] = useState<number>(1);
  const [countState, setCount] = useState<number>(1);

  useEffect(() => {
    const getData = async () => {
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
        setCount(cards.data.count);
        setCards(cards.data.goods);
        setPaginationPageActive((numberPage && numberPage - 1) || 0);
        setPopularCards(popularCards.data);
        setUniqCategory(uniqCategory.data);
      }
    };

    getData();
  }, [location.search]);

  useEffect(() => {
    setCards([]);

    const getData = async () => {
      window.scrollTo(0, 0);
      // получение обьекта параметров запроса

      const params = linkParams(history.location.search);
      const param = params.sort;
      const pageSize = params.pagesize;
      const numberPage = params.numberpage;

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

        setPaginationPageActive(res);
        setCount(cards.data.count);
        setCards(cards.data.goods);
      }
    };

    getData();
  }, [history.location.search]);

  const onPageChange = useCallback(
    (pagin: any) => {
      const params = linkParams(history.location.search);
      params.pagesize = 50;
      params.numberpage = pagin.selected + 1;
      const searchString: string = qs.stringify(params);
      history.push(`/shop?${searchString}`);
    },
    [history]
  );

  return (
    <div>
      <MenuInfoSection />
      <HeadBanner />
      {uniqCategoryState && uniqCategoryState.length ? <TagsMainSection uniqCategory={uniqCategoryState} /> : null}
      {cardsState && cardsState.length ? <CardsSection count={countState} cards={cardsState} /> : null}
      {cardsState && cardsState.length ? (
        <Pagination
          pageCount={countState}
          inOnePage={50}
          paginationPageActive={paginationPageActiveState}
          onPageChange={onPageChange}
        />
      ) : null}
      {cardsState && cardsState.length ? <LinksToImages /> : null}
      {!cardsState.length ? (
        <div className='adminPanelSpinner'>
          <i className='fa fa-spinner' />
        </div>
      ) : null}
      {popularCardsState && popularCardsState.length > 0 ? (
        <SimilarGoodsSection cards={popularCardsState} title='Популярные' />
      ) : null}
    </div>
  );
};

export default Home;
