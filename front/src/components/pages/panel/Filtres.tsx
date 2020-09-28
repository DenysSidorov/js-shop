import React, {FC, useEffect} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import {getTypes} from '../../../redux/reducers/panel-reducer/actions';
import {pushToCart} from '../../../redux/reducers/cart-reducer/cartReducer';
import {changeConfirm} from '../../../redux/reducers/confirm-in-card';

interface IFilters {
  addItemFu: Function;
  changeKindFu: Function;
  getTypeFu: Function;
  countTypes: any;
}

const Filters: FC<IFilters> = ({getTypeFu, countTypes}) => {
  useEffect(() => {
    let token;
    try {
      token = localStorage.getItem('info');
    } catch (error) {
      console.error(error);
    }
    if (token) {
      getTypeFu(token);
    }
  }, [getTypeFu]);

  return (
    <div className='adminPan__mainContent_content_filters'>
      <Link to='/panel?type=new' className='adminPan__filters_item'>
        <div className='adminPan__filters_item_log colorGreen'>
          <i className='fa fa-shopping-cart' />
        </div>
        <div className='adminPan__filters_item_text'>
          <div className='adminPan__filters_item_text_count'>{countTypes.new} шт.</div>
          <div className='adminPan__filters_item_text_desk'>Новых покупок</div>
        </div>
      </Link>

      <Link to='/panel?type=progress' className='adminPan__filters_item'>
        <div className='adminPan__filters_item_log colorYellow'>
          <i className='fa fa-spinner' />
        </div>
        <div className='adminPan__filters_item_text'>
          <div className='adminPan__filters_item_text_count'>{countTypes.progress} шт.</div>
          <div className='adminPan__filters_item_text_desk'>В обработке</div>
        </div>
      </Link>

      <Link to='/panel?type=delivery' className='adminPan__filters_item'>
        <div className='adminPan__filters_item_log colorViolet'>
          <i className='fa fa-truck' />
        </div>
        <div className='adminPan__filters_item_text'>
          <div className='adminPan__filters_item_text_count'>{countTypes.delivery} шт.</div>
          <div className='adminPan__filters_item_text_desk'>В пути</div>
        </div>
      </Link>

      <Link to='/panel?type=done' className='adminPan__filters_item'>
        <div className='adminPan__filters_item_log colorRed'>
          <i className='fa fa-check-square-o' />
        </div>
        <div className='adminPan__filters_item_text'>
          <div className='adminPan__filters_item_text_count'>{countTypes.done} шт.</div>
          <div className='adminPan__filters_item_text_desk'>Завершено</div>
        </div>
      </Link>

      <Link to='/panel' className='adminPan__filters_item'>
        <div className='adminPan__filters_item_log colorMain'>
          <i className='fa fa-money' />
        </div>
        <div className='adminPan__filters_item_text'>
          <div className='adminPan__filters_item_text_count'>
            {countTypes.new + countTypes.done + countTypes.delivery + countTypes.progress} шт.
          </div>
          <div className='adminPan__filters_item_text_desk'>Все</div>
        </div>
      </Link>
    </div>
  );
};

const mapStateToProps = (state: any) => {
  return {
    countTypes: state.panelReducer.countTypes
  };
};

const mapDispatchToProps = (dispatch: any) => {
  return bindActionCreators(
    {
      addItemFu: (item) => pushToCart(item),
      changeKindFu: (kind) => changeConfirm(kind),
      getTypeFu: (token) => getTypes(token)
    },
    dispatch
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(Filters);
