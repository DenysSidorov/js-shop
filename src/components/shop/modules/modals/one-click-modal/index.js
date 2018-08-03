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
       <p><span className="red">*</span> Мобильный телефон</p>
       <input value={this.state.phone} onChange={this.chPhone.bind(this)} type="text"
              ref={(v) => this.phoneV = v}
              className="orderWaysInput" id="phoneInput"/>
     </BasicModalWindowPB>
    );
  }
}

export default OneClickModal;