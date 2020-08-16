import React, {Component} from 'react';
import MaskedInput from 'react-maskedinput';
import uuidv1 from 'uuid/v4';
// import {connect} from "react-redux";
// import {bindActionCreators} from "redux";
import axios from 'axios';
import './index.scss';
import urlApi from '../../../../../../../api/urlApi';
import BasicModalWindowPB from '../basic-modal-pb/index';
// upload files! - import UploadFileField from "../../upload-file-field/index";
// import OneGoodItemInList from "./OneGoodInList/index";
// import {deleteAll} from "../../../../../reducers/cart";

class OneClickModal extends Component {
  state = {
    randomNumber: 1,
    isSend: false,
    phone: '',
    name: '',
    files: [],
    imageSrc: '',
    phoneErr: false
  };

  selectedFile = (files, imageSrc) => {
    // console.log(files, 'parent files');
    // console.log(imageSrc, 'parent imageSrc');
    this.setState({files, imageSrc});
  };

  onChangeName = (e) => {
    this.setState({name: e.target.value});
  };

  fireClose = () => {
    this.setState({randomNumber: uuidv1()});
  };

  chPhone(e) {
    if (e.target.value.length < 70) {
      this.setState({phone: e.target.value});
    }
  }

  _onChange = (e) => {
    this.setState({[e.target.name]: e.target.value, phoneErr: false});
  };

  sendOneClick = async () => {
    const order = {
      name: this.state.name,
      phone: this.state.phone
    };
    if (order.phone.length && !order.phone.includes('_')) {
      try {
        let response = await axios.post(`${urlApi}/api/orders/land`, order);
        if (response) {
          response = response.data;
          // console.log(response, 'response1');
          this.setState({isSend: true});
        }
      } catch (e) {
        console.log(e);
        throw e;
        alert('Не удалось отправить сообщение, позвоните нам по номеру указанном в контактах!');
      } finally {
      }
    } else {
      this.setState({phoneErr: true});
    }
  };

  render() {
    const {randomNumber} = this.state;
    return (
      <BasicModalWindowPB close={this.props.close} randomNumber={randomNumber}>
        {!this.state.isSend ? (
          <div className='oneClickModal'>
            <div className='oneClickModal_title'>Заказ в один клик</div>
            <div className='oneClickModal_describe'>
              Менеджер перезвонит Вам, узнает все детали и сам оформит заказ на Ваше имя.
            </div>
            <div className='oneClickModal_userDate'>
              <div className='oneClickModal_phone'>
                Телефон<span className='redColor'>*</span>
              </div>
              +38
              <MaskedInput
                mask='(111)111-11-11'
                name='phone'
                id='leading'
                onChange={this._onChange}
                className='oneClickModal_inputPhone'
              />
            </div>
            {this.state.phoneErr ? (
              <div className='oneClickModal_userError'>Укажите правильный номер телефона!</div>
            ) : null}
            <div className='oneClickModal_userDate'>
              <div className='oneClickModal_phone'>Имя</div>
              <input onChange={this.onChangeName} className='oneClickModal_inputPhone' />
            </div>

            <div className='oneClickModal_sendBtn' onClick={this.sendOneClick}>
              <span>Отправить</span>
            </div>

            {/* {this.props.showFileUpload ? <Fragment> */}
            {/*  <div className="oneClickModal_titleName">При необходимости добавьте файл</div> */}
            {/*  <div className="oneClickModal_file"> */}
            {/*    <UploadFileField */}
            {/*      emptyComponent={this.state.imageSrc} */}
            {/*      selectedFile={this.selectedFile} */}
            {/*    /> */}
            {/*  </div> */}
            {/* </Fragment> : null} */}

            {/* <div className="oneClickModal_gList"> */}
            {/* {this.props.goods.map((good, ind) => { */}
            {/* return ( */}
            {/* <div className="oneClickModal_gList_item" key={ind}> */}
            {/* <div className="oneClickModal_gList_item_logo"> */}
            {/* <img src={'/img-static/' + good.photo[0]}/> */}
            {/* </div> */}
            {/* <div className="oneClickModal_gList_item_name"> */}
            {/* {good.name && good.name} {good.model && good.model} -*/}
            {/* </div> */}

            {/* <div className="oneClickModal_gList_item_price"> */}
            {/* {good.price}$ -*/}
            {/* </div> */}

            {/* <div className="oneClickModal_gList_item_count"> */}
            {/* {good.count ? good.count : 1} {' шт.'} -*/}
            {/* </div> */}

            {/* <div className="oneClickModal_gList_item_code"> */}
            {/* {' код-'}{good.code} */}
            {/* </div> */}
            {/* </div> */}
            {/* ) */}
            {/* })} */}

            {/* </div> */}
          </div>
        ) : (
          <div className='oneClickModal_wasSend'>
            <div className='oneClickModal_wasSend_title'>Спасибо!</div>
            <div className='oneClickModal_wasSend_text'>Менеджер свяжется с вами в ближайщее время!</div>
          </div>
        )}
      </BasicModalWindowPB>
    );
  }
}

export default OneClickModal;

// const mapDispatchToProps = (dispatch, ownProps) => {
//   return bindActionCreators({
//     deleteAll,
//   }, dispatch)
// }
//
// export default connect(null, mapDispatchToProps)(OneClickModal);
