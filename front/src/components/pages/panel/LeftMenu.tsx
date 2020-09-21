import React, {FC} from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';

interface ILeftMenu {
  countTypes?: any;
}

const LeftMenu: FC<ILeftMenu> = ({countTypes}) => {
  return (
    <div className='adminPan__mainContent_menu leftMenuSection left'>
      <div className='adminPan__menu_item'>
        <i className='fa fa-credit-card' />
        <Link to='/panel' className='adminPan__menu_item_text'>
          Заказы
        </Link>
        {countTypes.new ? (
          <span className='adminPan__menu_item_count'>
            <span>{countTypes.new}</span>
          </span>
        ) : null}
      </div>
      <div className='adminPan__menu_item'>
        <i className='fa fa-flag-checkered' />
        <Link to='/panel/admin' className='adminPan__menu_item_text'>
          Admin Info
        </Link>
      </div>
      <div className='adminPan__menu_item'>
        <i className='fa fa-flag-checkered' />
        <Link to='/panel/test' className='adminPan__menu_item_text'>
          Test Route
        </Link>
      </div>
    </div>
  );
};

const mapStateToProps = (state: any) => {
  return {
    countTypes: state.panelReducer.countTypes
  };
};

export default connect(mapStateToProps, null)(LeftMenu);
