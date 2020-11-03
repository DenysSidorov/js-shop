import React, {FC, useEffect} from 'react';
import './index.scss';
import {setMetaTag, setTitle} from '../../../helpers/libs/utils';
import {IHistory} from "../../../interfaces";

interface IVerifyEmail extends IHistory{}

const VerifyEmail: FC<IVerifyEmail> = ({history}) => {

  useEffect(() => {
    window.scrollTo(0, 0);
    setTitle('Проверка почты');
    setMetaTag('description', 'Проверка почты на doshki.com');
    setMetaTag(
      'keywords',
      'интернет-магазин картин, украинские картины, картины для интерьера, картины на дереве, картины на досках, doshki.com, doshki.kom, картины украина, деревянные картины'
    );
  }, []);

  const getHistoryValue = () => {
    const internalState = history.location.state;
    if ((internalState as any).email) {
        return <span style={{color: 'green'}}> {(internalState as any).email}</span>
    } else {
      return null;
    }
  }

  return (
    <div className='verifyEmailContainer'>
      <p>
        Подтвердите свою почту, письмо с ссылкой о подтверждении отправленно на
        {getHistoryValue()}
      </p>
    </div>
  );
};

export default VerifyEmail;
