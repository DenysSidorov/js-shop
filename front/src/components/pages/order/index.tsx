import React, {CSSProperties} from 'react';
import {connect} from 'react-redux';
// import MenuInfoSection from '../../modules/MenuInfoSection';
import WaysDevPay from './WaysDevPay';
import GoodsTable from './GoodsTable';
import OneClickModal from '../../parts/modals/one-click-modal/OneClickModal';
import './index.less';
import {setMetaTag, setTitle} from '../../../helpers/libs/utils';

interface SOrderPage {
  isShowOneClickModal: boolean;
}

interface IOrderPage {
  cart: any;
}

class OrderPage extends React.Component<IOrderPage, SOrderPage> {
  state = {
    isShowOneClickModal: false
  };

  componentDidMount() {
    this.initCadd();
    setTitle('Корзина');
    setMetaTag('description', 'Корзина ваших товаров');
    setMetaTag(
      'keywords',
      'интернет-магазин картин, украинские картины, картины для интерьера, картины на дереве, картины на досках, doshki.com, doshki.kom, картины украина, деревянные картины'
    );
  }

  handleShowOneClick = (state: any) => {
    if (state === undefined) {
      this.setState((prevState) => ({isShowOneClickModal: !prevState.isShowOneClickModal}));
    } else {
      this.setState({
        isShowOneClickModal: state
      });
    }
  };

  initCadd = async () => {
    window.scrollTo(0, 0);
  };

  render() {
    const styles: CSSProperties = {
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'center',
      flexDirection: 'column'
    };
    const {cart: goods} = this.props;
    return (
      <div style={styles}>
        {/* <MenuInfoSection /> */}
        {goods.length > 0 && (
          <div className='orderPage_fast'>
            <span onClick={this.handleShowOneClick}>Купить без заполнения формы!</span>
          </div>
        )}
        {!goods.length ? (
          <div style={{padding: '30px'}}>
            <span style={{fontSize: '2rem'}}>Корзина пуста!</span>
          </div>
        ) : (
          <div className='formOrderMain'>
            <GoodsTable />
            <WaysDevPay {...this.props} />
          </div>
        )}
        {this.state.isShowOneClickModal ? (
          <OneClickModal close={this.handleShowOneClick} goods={goods} willDeleteGoods />
        ) : null}
      </div>
    );
  }
}

const mapStateToProps = (state: any) => {
  return {
    cart: state.cartReducer.items
  };
};
export default connect(mapStateToProps)(OrderPage);
