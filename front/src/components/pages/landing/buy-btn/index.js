import React, {Component, Fragment} from 'react';
// import './index.less';
import OneClickModal from './modals/one-click-modal';

class BuyBtn extends Component {

  state = {
    isShowOneClickModal : false
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
    return (
      <div className="buyNowContBodyTextContent2" onClick={this.handleShowOneClick}>
        <div className="buyNow2_arrow">
          <img src="/img-static/land/red-arrow.png" alt=""/>
        </div>
        <span>{this.props.text || 'КУПИТЬ'}</span>

        {this.state.isShowOneClickModal && <OneClickModal
          close={this.handleShowOneClick}
          goods={[]}
          willDeleteGoods={false}
          showFileUpload={this.props.showFileUpload}
        />}

      </div>
    );
  }
}




export default BuyBtn;
