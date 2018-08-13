import React, {Component} from 'react';
import './index.scss';
import uuidv1 from 'uuid/v4';
import MaskedInput from 'react-maskedinput'
import axios from "axios";
import urlApi from '../../../../../api/urlApi';
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

  sendOneClick = async () => {
    // this.setState({isSend: true})
    // this.fireClose();

    let price = this.props.goods.reduce((prev, cur) => prev + Math.floor((((cur.price / 100) * (100 - cur.sail)) * cur.count)), 0);
    let order = {
      price,
      payment: this.state.payment,
      delivery: this.state.delivery,
      name: this.state.name,
      address: this.state.address,
      email: this.state.email,
      phone: this.state.phone,
      goods: []

    };
    this.props.goods.forEach((item, ind) => {
      var curGood = {};
      curGood._id = item._id;
      curGood.count = item.count;
      curGood.name = item.name;
      curGood.model = item.model;
      curGood.sail = item.sail;
      curGood.price = item.price;

      order.goods.push(curGood);
    });

    try {
      let response = await axios.post(`${urlApi}/api/orders`, order);
      if (response) {
        response = response.data
        console.log(response, 'response1'); // _id
      }

      // setTimeout(()=>{this.setState({cards: cards.goods})}, 2000)
    } catch (e) {
      console.log(e);
    } finally {
      console.log();
    }

  }

  render() {
    const {randomNumber} = this.state;
    console.log(' + ', this.props.goods);
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
              +38
              <MaskedInput
                mask="(111)111-11-11"
                name="phone"
                id="leading"
                onChange={this._onChange}
                className="oneClickModal_inputPhone"
              />
            </div>
            <div className="oneClickModal_sendBtn">
              <span onClick={this.sendOneClick}>Отправить</span>
            </div>

            <div className="oneClickModal_gList">
              {this.props.goods.map((good, ind) => {
                return (
                  <div className="oneClickModal_gList_item" key={ind}>
                    <div className="oneClickModal_gList_item_logo">
                      <img src={'/img-static/' +  good.photo[0]}/>
                    </div>
                    <div className="oneClickModal_gList_item_name">
                      {good.name && good.name} {good.model && good.model} -
                    </div>

                    <div className="oneClickModal_gList_item_price">
                      {good.price}$ -
                    </div>

                    <div className="oneClickModal_gList_item_count">
                      {good.count ? good.count : 1} {' шт.'} -
                    </div>

                    <div className="oneClickModal_gList_item_code">
                      {' код-'}{good.code}
                    </div>
                  </div>
                )
              })}

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