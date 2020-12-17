import React, {FC, useCallback} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {Link} from 'react-router-dom';
import './index.less';
import {ICartReducerItem} from '../../../redux/reducers/cart-reducer/cartReducer';
import {deleteFromCart, incrementItem, decrementItem} from '../../../redux/reducers/cart-reducer/actions';
import AllPrice from './AllPrice';
import {selectCartItems} from '../../../redux/reducers/cart-reducer/selectors';

interface IGoodsTable {}

const GoodsTable: FC<IGoodsTable> = () => {
  const cartItems: Array<ICartReducerItem> = useSelector(selectCartItems);
  const goods = cartItems;
  const dispatch = useDispatch();

  const decrementItemFu = useCallback(
    (id: number | string) => {
      dispatch(decrementItem(id));
    },
    [dispatch]
  );

  const incrementItemFu = useCallback(
    (id: number | string) => {
      dispatch(incrementItem(id));
    },
    [dispatch]
  );

  const deleteItemFu = useCallback(
    (item: ICartReducerItem) => {
      dispatch(deleteFromCart(item));
    },
    [dispatch]
  );
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

export default GoodsTable;
