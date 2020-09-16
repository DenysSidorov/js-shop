import React, {FC} from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import {bindActionCreators} from 'redux';
import './index.less';
import {pushToCart, deleteFromCart, incrementItem, decrementItem} from '../../../../redux/reducers/cart-reducer';
import AllPrice from './AllPrice';

interface IGoodsTable {
  cart: any;
  decrementItemFu: Function;
  incrementItemFu: Function;
  deleteItemFu: Function;
}

const GoodsTable: FC<IGoodsTable> = ({cart, decrementItemFu, incrementItemFu, deleteItemFu}) => {
  const goods = cart;
  return (
    <div className='itemsInCart'>
      <div className='tableWrapperInOrder'>
        <table className='tableWrapperInOrdertable__table'>
          <thead>
            <tr>
              <th>Фото</th>
              <th>Наимен.</th>
              <th>Кол-во</th>
              <th>Цена</th>
              <th>Уд.</th>
            </tr>
          </thead>
          <tbody>
            {goods.map((el: any) => {
              return (
                <tr key={el._id}>
                  <td data-label='Фото'>
                    <img className='imgINOrderTable' src={`/img-static/${el.photo[0]}`} alt='' />
                  </td>
                  <td data-label='Описание'>
                    <Link to={`/card/${el._id}`} className='linkFromCartToItem'>
                      {el.name} {el.model}
                    </Link>
                  </td>
                  <td data-label='Кол-во'>
                    <div className='countCartInTableContainer'>
                      <button
                        onClick={() => {
                          decrementItemFu(el._id);
                        }}
                        className='countCartInTableContainer__countMinus'
                      >
                        -
                      </button>
                      <input
                        value={el.count}
                        onChange={() => {
                          //
                        }}
                        className='countCartInTableContainer__count'
                      />
                      <button
                        onClick={() => {
                          incrementItemFu(el._id);
                        }}
                        className='countCartInTableContainer__countPlus'
                      >
                        +
                      </button>
                    </div>
                  </td>
                  <td data-label='Цена'>
                    <span>{el.price}</span>
                    <span>
                      грн.
                      {el.sail ? <span className='sailInfoInMainCart'>-{el.sail}%</span> : null}
                    </span>
                  </td>
                  <td
                    onClick={() => {
                      if (window.confirm(`Вы уверены что хотите удалить товар: ${el.name} ${el.model}`)) {
                        deleteItemFu(el);
                      }
                    }}
                    data-label='Удалить'
                  >
                    <span className='deleteCross'>X</span>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
      <AllPrice />
    </div>
  );
};

const mapStateToProps = (state: any) => {
  return {
    cart: state.cartReducer.items
  };
};

const mapDispatchToProps = (dispatch: any) => {
  return bindActionCreators(
    {
      deleteItemFu: (item) => deleteFromCart(item),
      addItemFu: (item) => pushToCart(item),
      incrementItemFu: (id) => incrementItem(id),
      decrementItemFu: (id) => decrementItem(id)
    },
    dispatch
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(GoodsTable);
