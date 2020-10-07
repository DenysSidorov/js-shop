import React, {FC, useEffect} from 'react';
import './index.scss';
import {setMetaTag, setTitle} from '../../../helpers/libs/utils';
import {IHistory} from '../../../interfaces';

interface IVerifyEmail extends IHistory {
  history: any;
}

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

  return (
    <div className='verifyEmailContainer'>
      <p>
        Подтвердите свою почту, письмо с ссылкой о подтверждении отправленно на
        {history.location.state.email && <span style={{color: 'green'}}> {history.location.state.email}</span>}
      </p>
    </div>
  );
};

export default VerifyEmail;
