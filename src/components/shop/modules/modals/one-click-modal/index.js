import React, {Component} from 'react';
import './index.scss';
import uuidv1 from 'uuid/v4';
import MaskedInput from 'react-maskedinput'
import BasicModalWindowPB from "../basic-modal-pb/index";
import OneGoodItemInList from "./OneGoodInList/index";



class OneClickModal extends Component {

  state = {
    randomNumber: 1,
    isSend: false,
    phone: '',
  }

  fireClose = () => {
    this.setState({randomNumber: uuidv1()})
  }

  chPhone(e) {
    if (e.target.value.length < 70) {
      this.setState({phone: e.target.value})
    }
  }

  _onChange = (e) => {
    this.setState({[e.target.name]: e.target.value})
  }

  sendOneClick = () => {
    this.fireClose();
  }

  render() {
    const {randomNumber} = this.state;
    return (
      <BasicModalWindowPB
        close={this.props.close}
        randomNumber={randomNumber}
      >
        {!this.state.isSend ?
          <div className="oneClickModal">
            <div className="oneClickModal_title">
              Заказ в один клик
            </div>
            <div className="oneClickModal_describe">
              Менеджер перезвонит Вам, узнает все детали и сам оформит заказ на Ваше имя.
            </div>
            <div className="oneClickModal_userDate">
              <div className="oneClickModal_phone">
                Телефон
              </div>
              <MaskedInput
                mask="(111) 111-11-11"
                name="phone"
                id="leading"
                onChange={this._onChange}
                className="oneClickModal_inputPhone"
              />
            </div>
            <div className="oneClickModal_sendBtn">
              <span onClick={this.sendOneClick}>Отправить</span>
            </div>

          </div>
          :
          <div className="oneClickModal_wasSend">
            <div className="oneClickModal_wasSend_title">
              Спасибо!
            </div>
            <div className="oneClickModal_wasSend_text">
              Менеджер свяжется с вами в ближайщее время!
            </div>
          </div>
        }
      </BasicModalWindowPB>
    );
  }
}

export default OneClickModal;