import React, {Component} from 'react';
import './index.scss';
import BasicModalWindowPB from "../basic-modal-pb/index";


class OneClickModal extends Component {

  state = {
    phone: '',
  }

  chPhone(e) {
    if (e.target.value.length < 70) {
      this.setState({phone: e.target.value})
    }
  }

  render() {
    return (
      <BasicModalWindowPB>
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
            <input value={this.state.phone} onChange={this.chPhone.bind(this)} type="text"
                   ref={(v) => this.phoneV = v}
                   className="oneClickModal_inputPhone" id="phoneInput"/>
          </div>
          <div className="oneClickModal_sendBtn">
              <span>Отправить</span>
          </div>
        </div>
      </BasicModalWindowPB>
    );
  }
}

export default OneClickModal;