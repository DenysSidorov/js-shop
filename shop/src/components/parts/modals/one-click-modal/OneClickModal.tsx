// @ts-nocheck
import React, {ChangeEvent, FC, useState} from 'react';
import InputMask from 'react-input-mask';
import './index.scss';
import BasicModalWindowPB from '../basic-modal-pb/BasicModalWindowPB';
import {IOrder} from '../../../pages/order/WaysDevPay';
import {createFastOrderAPI} from '../../../../api/endpoints';

interface IOneClickModal {
  close: Function;
  goods: Array<Object>;
  willDeleteGoods: boolean;
}

interface StateOneClickModal {
  randomNumber: number;
  isSend: boolean;
  name: string;
  phone: string;
  phoneErr: boolean;
}

const OneClickModal: FC<IOneClickModal> = (props) => {
  const initialState: StateOneClickModal = {
    randomNumber: 1,
    isSend: false,
    phone: '',
    name: '',
    // files: [],
    // imageSrc: '',
    phoneErr: false,
  };
  const [state, setState] = useState(initialState);

  // selectedFile = (files, imageSrc) => {
  //   // console.log(files, 'parent files');
  //   // console.log(imageSrc, 'parent imageSrc');
  //   this.setState({files, imageSrc});
  // };

  const onChangeName = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.currentTarget.value) {
      setState({...state, name: e.currentTarget.value});
    }
  };

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    const phone: string = e.target.value;
    setState({
      ...state,
      phone,
      phoneErr: false,
    });
  };

  const sendOneClick = async () => {
    const {name, phone} = state;

    const order: IOrder = {
      name,
      phone,
    };
    if (order.phone.length && !order.phone.includes('_')) {
      try {
        let response = await createFastOrderAPI(order);
        if (response) {
          response = response.data;
          console.log(response);
          setState({...state, isSend: true});
        }
      } catch (e) {
        console.log(e);
        alert('Не удалось отправить сообщение, позвоните нам по номеру указанном в контактах!');
      }
    } else {
      setState({...state, phoneErr: true});
    }
  };

  const {randomNumber, phoneErr, isSend} = state;
  const {close, goods} = props;
  return (
    <BasicModalWindowPB close={close} randomNumber={randomNumber}>
      {!isSend ? (
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
            <>
              <InputMask
                mask='(999)-999-99-99'
                value={state.phone}
                onChange={onChange}
                className='oneClickModal_inputPhone'
              />
            </>
          </div>
          {phoneErr ? <div className='oneClickModal_userError'>Укажите правильный номер телефона!</div> : null}
          <div className='oneClickModal_userDate'>
            <div className='oneClickModal_phone'>Имя</div>
            <input onChange={onChangeName} className='oneClickModal_inputPhone' />
          </div>

          <div className='oneClickModal_sendBtn' onClick={sendOneClick}>
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

          <div className='oneClickModal_gList'>
            {goods.map((good: any, ind) => {
              return (
                <div className='oneClickModal_gList_item' key={ind}>
                  <div className='oneClickModal_gList_item_logo'>
                    <img src={`/img-static/${good.photo[0]}`} />
                  </div>
                  <div className='oneClickModal_gList_item_name'>
                    {good.name && good.name} {good.model && good.model} -
                  </div>

                  <div className='oneClickModal_gList_item_price'>{good.price}$ -</div>

                  <div className='oneClickModal_gList_item_count'>
                    {good.count ? good.count : 1} {' шт.'} -
                  </div>

                  <div className='oneClickModal_gList_item_code'>
                    {' код-'}
                    {good.code}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      ) : (
        <div className='oneClickModal_wasSend'>
          <div className='oneClickModal_wasSend_title'>Спасибо!</div>
          <div className='oneClickModal_wasSend_text'>Менеджер свяжется с вами в ближайщее время!</div>
        </div>
      )}
    </BasicModalWindowPB>
  );
};

export default OneClickModal;
