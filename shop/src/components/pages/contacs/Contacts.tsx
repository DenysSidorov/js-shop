import React, {FC, useEffect} from 'react';
import {useSelector} from 'react-redux';
import {setMetaTag, setTitle} from '../../../helpers/libs/utils';
import {IServiceReducer} from '../../../redux/reducers/service-app';
import {selectServiceReducer} from '../../../redux/reducers/service-app/selectors';

interface IContacts {}

const Contacts: FC<IContacts> = () => {
  const serviceReducer: IServiceReducer = useSelector(selectServiceReducer);

  useEffect(() => {
    window.scrollTo(0, 0);
    setTitle('Контакты');
    setMetaTag('description');
    setMetaTag(
      'keywords',
      'интернет-магазин картин, украинские картины, картины для интерьера, картины на дереве, картины на досках, doshki.com, doshki.kom, картины украина, деревянные картины',
    );
  }, []);

  return (
    <>
      <div style={{fontSize: '1.6rem', fontFamily: 'Roboto-Regular', marginTop: '10px'}}>
        Онлайн магазин. Украина, г. Одесса.
      </div>
      <div style={{fontSize: '1.6rem', fontFamily: 'Roboto-Regular'}}>Телефон: {serviceReducer.number1}</div>
      <div style={{fontSize: '1.6rem', fontFamily: 'Roboto-Regular', marginBottom: '100px'}}>
        Почтовый ящик: {serviceReducer.email1}
      </div>
    </>
  );
};

export default Contacts;
