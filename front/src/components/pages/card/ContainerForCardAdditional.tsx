import React from 'react';
import Comment from './Comment';
import Card from '../../modules/card/Card';
import '../../../styles/helpers/tabsInCard.scss';
import {ICartReducerItem} from '../../../redux/reducers/cart-reducer/cartReducer';

interface IContainerForCardAdditional {
  card: Array<ICartReducerItem>;
  popularCards: Array<ICartReducerItem>;
}

const ContainerForCardAdditional = ({popularCards, card}: IContainerForCardAdditional) => {
  return (
    <div className='containerForCardAdditional'>
      <div className='mainCardContainer__tabs'>
        {/* <input id="mainCardContainer__tabs_tab1" type="radio" name="tabs" defaultChecked/> */}
        {/* <label htmlFor="mainCardContainer__tabs_tab1" title="Вкладка 1">ОБЗОР</label> */}

        <input id='mainCardContainer__tabs_tab2' type='radio' name='tabs' defaultChecked />
        <label htmlFor='mainCardContainer__tabs_tab2' title='Вкладка 2'>
          РЕКОМЕНДУЕМ
        </label>

        <input id='mainCardContainer__tabs_tab3' type='radio' name='tabs' />
        <label htmlFor='mainCardContainer__tabs_tab3' title='Вкладка 3'>
          ОТЗЫВЫ
        </label>

        {/* <section id="mainCardContainer__tabs_content-tab1"> */}
        {/*    <div className="containerInTabs"> */}
        {/*        /!*Содержимое таба*!/ */}

        {/*        <div><p>{card['desc-full']}</p></div> */}

        {/*        /!*Содержимое таба*!/ */}
        {/*    </div> */}
        {/* </section> */}
        <section id='mainCardContainer__tabs_content-tab2'>
          {/* <Card/> */}
          <div className='containerInTabs'>
            {popularCards.map((el) => {
              return <Card key={el._id} card={el} />;
            })}
          </div>
        </section>
        <section id='mainCardContainer__tabs_content-tab3'>
          <div className='containerInTabs'>
            {card.length === 0 || card[0].comments.length === 0 ? (
              <div>Комментариев нет</div>
            ) : (
              card[0].comments.map((el) => {
                return <Comment key={el._id} comment={el} />;
              })
            )}
          </div>
        </section>
      </div>
    </div>
  );
};

export default ContainerForCardAdditional;
