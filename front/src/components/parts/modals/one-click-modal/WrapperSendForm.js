import React from "react";
// import style from './mainBodyCard.less';
// import {bindActionCreators} from 'redux';
// import {connect} from 'react-redux';
// import {pushToCart} from '../../../../reducers/cart';
import {Link} from "react-router-dom";
import OneClickModal from "../modals/one-click-modal/index";
// import {checkTextLength} from "../../helpers/libs/utils";
class CardMainPage extends React.Component {

  state = {
    isShowOneClickModal : true
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

  render() {
    let {card} = this.props;
    return (
      <div className="bodyCardItems__oneCardItem">
        {this.state.isShowOneClickModal && <OneClickModal
          close={this.handleShowOneClick}
          goods={[card]}
          willDeleteGoods={false}
        />}
      </div>
    )
  }
}


const mapDispatchToProps = (dispatch, ownProps) => {
  return bindActionCreators({
    addItem: (item) => pushToCart(item)
  }, dispatch)
}

export default connect(
  null, mapDispatchToProps
)(CardMainPage);


function randomInteger(min, max) {
  var rand = min + Math.random() * (max + 1 - min);
  rand = Math.floor(rand);
  return rand;
}
