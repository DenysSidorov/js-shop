import React, {useEffect, useState} from 'react';
import './index.scss';
import {setMetaTag, setTitle} from '../../../helpers/libs/utils';
import {getCurrentUserByTokenAPI} from '../../../api/endpoints';

interface SPanel {
  user: any;
  isGotUser: boolean;
}

const initialState: SPanel = {
  user: Object.create(null),
  isGotUser: false
};

const Panel = () => {
  const [state, setState] = useState<SPanel>(initialState);

  useEffect(() => {
    window.scrollTo(0, 0);
    setTitle('Мой профиль');
    setMetaTag('description');
    setMetaTag(
      'keywords',
      'интернет-магазин картин, украинские картины, картины для интерьера, картины на дереве, картины на досках, doshki.com, doshki.kom, картины украина, деревянные картины'
    );
    (async () => {
      try {
        const token = localStorage.getItem('info') || '';
        const result = await getCurrentUserByTokenAPI(token);
        console.log(result.data, 'data');
        // setState({user: result.data, isGotUser: true});
        setState((prevState) => ({...prevState, user: result.data, isGotUser: true}));
      } catch (err) {
        console.log(err.message || err);
      }
    })();
  }, []);

  const {isGotUser, user} = state;
  if (!isGotUser) {
    return (
      <div className='adminPanelSpinner'>
        <i className='fa fa-spinner' />
      </div>
    );
  }
  return (
    <div className='profileContainer'>
      <div className='profileContainer_logo'>
        <img src='/img-static/profileUser.jpg' alt='' />
      </div>
      {user.isAdmin ? (
        <div className='profileContainer_rowInfo'>
          <span className='profileContainer_rowInfo_item'>
            Привет Администратор, как дела, готов служить тебе, твой сайт?!
          </span>
        </div>
      ) : null}
      <div className='profileContainer_rowInfo'>
        <span className='profileContainer_rowInfo_item'>_id</span>
        <span className='profileContainer_rowInfo_del'> : </span>
        <span className='profileContainer_rowInfo_value'>{user._id || 'Не определенно'} </span>
      </div>
      <div className='profileContainer_rowInfo'>
        <span className='profileContainer_rowInfo_item'>Почта</span>
        <span className='profileContainer_rowInfo_del'> : </span>
        <span className='profileContainer_rowInfo_value'>{user.login || 'Не определенно'}</span>
      </div>
      <div className='profileContainer_rowInfo'>
        <span className='profileContainer_rowInfo_item'>Ник</span>
        <span className='profileContainer_rowInfo_del'> : </span>
        <span className='profileContainer_rowInfo_value'>{user.nick || 'Не определенно'}</span>
      </div>
      <div className='profileContainer_rowInfo'>
        <span className='profileContainer_rowInfo_item'>Телефон</span>
        <span className='profileContainer_rowInfo_del'> : </span>
        <span className='profileContainer_rowInfo_value'>{user.phone || 'Не определенно'}</span>
      </div>
      <div className='profileContainer_rowInfo'>
        <span className='profileContainer_rowInfo_item'>Возраст</span>
        <span className='profileContainer_rowInfo_del'> : </span>
        <span className='profileContainer_rowInfo_value'>{user.age || 'Не определенно'}</span>
      </div>
      <div className='profileContainer_rowInfo'>
        <span className='profileContainer_rowInfo_item'>Пол</span>
        <span className='profileContainer_rowInfo_del'> : </span>
        <span className='profileContainer_rowInfo_value'>{user.male || 'Не определенно'}</span>
      </div>
      <div className='profileContainer_editBtn'>
        <span className='profileContainer_editBtn_btn'>Редактировать</span>
      </div>
    </div>
  );
};

export default Panel;
