import React, {useCallback, useEffect, useState} from 'react';
import MainContainerForCard from './MainContainerForCard';
import SimilarGoodsSection from '../../modules/similar-goods-section/SimilarGoodsSection';
import ContainerForCardAdditional from './ContainerForCardAdditional';
import {setMetaTag, setTitle} from '../../../helpers/libs/utils';
import {IHistory} from '../../../interfaces';
import {getGoodByIdAPI, getPopularGoodsAPI, getSimilarGoodsByIdAPI} from '../../../api/endpoints';

type ICardComponent = IHistory;

const CardComponent = ({match}: ICardComponent) => {
  const [card, setCard] = useState([]);
  const [similarCategory, setSimilarCategory] = useState([]);
  const [popularCards, setPopularCards] = useState([]);

  const getMetaTags = useCallback((arr: Array<any>) => {
    return arr.reduce((prev, curr, ind) => {
      return `${ind === 0 ? prev : `${prev},`} ${curr}`;
    }, '');
  }, []);

  const initCadd = useCallback(
    (idItem: number) => {
      async function fetchData(id: number) {
        window.scrollTo(0, 0);
        const descriptionText =
          'Купить картину на дереве в Украине, ручная работа, картины на досках высокого качества. Украина.';
        setTitle('Карта товара');
        setMetaTag('description', descriptionText);
        setMetaTag(
          'keywords',
          'интернет-магазин картин, украинские картины, картины для интерьера, картины на дереве, картины на досках, doshki.com, картины украина, деревянные картины, doshki.kom',
        );

        let similarCategoryInternal: any;
        let popularCardsInternal: any;
        let cardInternal: any;
        try {
          cardInternal = await getGoodByIdAPI(id);
          if (cardInternal.data.length) {
            similarCategoryInternal = await getSimilarGoodsByIdAPI(id, cardInternal.data[0].category);
          }
          popularCardsInternal = await getPopularGoodsAPI();
        } catch (e) {
          console.log(e);
        } finally {
          setCard(cardInternal && cardInternal.data ? cardInternal.data : []);
          setSimilarCategory(
            similarCategoryInternal && similarCategoryInternal.data ? similarCategoryInternal.data : [],
          );
          setPopularCards(popularCardsInternal && popularCardsInternal.data ? popularCardsInternal.data : []);

          const internalCard = cardInternal;
          if (internalCard && internalCard.length) {
            setTitle(`${internalCard[0]['name'] && `${internalCard[0]['name']}, `}${internalCard[0]['model']}`);
            setMetaTag(
              'description',
              `${internalCard[0]['name'] && `${internalCard[0]['name']}, `}${internalCard[0]['model']} - ${
                internalCard[0]['desc-short'] || descriptionText
              }`,
            );
            setMetaTag(
              'keywords',
              `${internalCard[0]['name'] && `${internalCard[0]['name']}, `}${internalCard[0]['model']}, ${
                internalCard[0]['producer']
              }, ${getMetaTags(internalCard[0]['tags'])}, ${getMetaTags(
                internalCard[0]['category'],
              )}, интернет-магазин картин, украинские картины, картины для интерьера, картины на дереве, картины на досках, doshki.com, картины украина, деревянные картины`,
            );
          }
        }
      }
      fetchData(idItem);
    },
    [getMetaTags],
  );

  useEffect(() => {
    const {id} = match.params;
    initCadd(id);
  }, [initCadd, match.params]);

  return (
    <div>
      {card.length ? (
        <div>
          <MainContainerForCard card={card[0]} />
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
};

export default CardComponent;
