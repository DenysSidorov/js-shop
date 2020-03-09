import React from "react";
import MenuInfoSection from "../../modules/MenuInfoSection";
import WaysDevPay from "./WaysDevPay";
import GoodsTable from "./GoodsTable";
import {connect} from "react-redux";
import OneClickModal from '../../modules/modals/one-click-modal';
import './index.less';
import {setMetaTag, setTitle} from "../../helpers/lib/utils";

class OrderPage extends React.Component {

  state = {
    isShowOneClickModal: false
  }

  handleShowOneClick = (state) => {
    if (state === undefined) {
      this.setState({
        isShowOneClickModal: !this.state.isShowOneClickModal
      })
    } else {
      this.setState({
        isShowOneClickModal: state
      })
    }
  }

  constructor(props) {
    super(props);
    this.initCadd = this.initCadd.bind(this);

  }

  async initCadd() {
    window.scrollTo(0, 0)
  }

  componentDidMount() {
    this.initCadd();
    setTitle('Корзина');
    setMetaTag('description', 'Корзина ваших товаров');
    setMetaTag('keywords', 'интернет-магазин картин, украинские картины, картины для интерьера, картины на дереве, картины на досках, doshki.com, doshki.kom, картины украина, деревянные картины');
  }

  render() {
    var styles = {
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'center',
      flexDirection: 'column'
    };
    let goods = this.props.cart;
    return (
      <div style={styles}>
        <MenuInfoSection/>
        {goods.length > 0 && <div className="orderPage_fast">
          <span onClick={this.handleShowOneClick}>Купить без заполнения формы!</span>
        </div>}
        {!goods.length
          ? <div style={{padding: '30px'}}>
            <span style={{fontSize: '2rem'}}>Корзина пуста!</span>
          </div>
          : <div className="formOrderMain">
            <GoodsTable/>
            <WaysDevPay {...this.props}/>
          </div>}
        {this.state.isShowOneClickModal && <OneClickModal
          close={this.handleShowOneClick}
          goods={goods}
          willDeleteGoods={true}
        />}
      </div>
    )

  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    cart: state.cart.items
  }
}
export default connect(mapStateToProps)(OrderPage);
