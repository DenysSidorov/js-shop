import React, {useCallback, useEffect, useState} from 'react';
import './index.scss';
import {setMetaTag, setTitle} from '../../../helpers/libs/utils';
import {useQuery} from '@apollo/react-hooks';
import ProfileEditRowPart from './ProfileEditRowPart';
import {GET_USER_BY_TOKEN} from '../../../apollo/queries/user';
import {Token} from '../../../interfaces';
import {defineSex, initialToken} from './helper';

interface SPanel {
  user: any;
  token: Token;
}

const initialState: SPanel = {
  user: Object.create(null),
  token: initialToken(),
};

const Profile = () => {
  const [state, setState] = useState<SPanel>(initialState);

  const changeParent = useCallback((value: string | number) => {
    setState((prevState) => ({...prevState, user: value}));
  }, []);

  const {loading, error} = useQuery(GET_USER_BY_TOKEN, {
    variables: {token: state.token},
    onCompleted: (data) => changeParent(data.getUser),
    fetchPolicy: 'network-only',
  });

  useEffect(() => {
    window.scrollTo(0, 0);
    setTitle('Мой профиль');
    setMetaTag('description');
    setMetaTag(
      'keywords',
      'интернет-магазин картин, украинские картины, картины для интерьера, картины на дереве, картины на досках, doshki.com, doshki.kom, картины украина, деревянные картины',
    );
  }, []);

  if (error) return <p>ERROR...</p>;

  if (loading) {
    return (
      <div className='adminPanelSpinner'>
        <i className='fa fa-spinner' />
      </div>
    );
  }

  const {user} = state;

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
        <ProfileEditRowPart dataType='nick' value={user.nick || ''} changeParent={changeParent} token={state.token} />
      </div>
      <div className='profileContainer_rowInfo'>
        <span className='profileContainer_rowInfo_item'>Телефон</span>
        <span className='profileContainer_rowInfo_del'> : </span>
        <span className='profileContainer_rowInfo_value'>{user.phone || 'Не определенно'}</span>
        <ProfileEditRowPart dataType='phone' value={user.phone || ''} changeParent={changeParent} token={state.token} />
      </div>
      <div className='profileContainer_rowInfo'>
        <span className='profileContainer_rowInfo_item'>Возраст</span>
        <span className='profileContainer_rowInfo_del'> : </span>
        <span className='profileContainer_rowInfo_value'>{user.age || 'Не определенно'}</span>
      </div>
      <div className='profileContainer_rowInfo'>
        <span className='profileContainer_rowInfo_item'>Пол</span>
        <span className='profileContainer_rowInfo_del'> : </span>
        <span className='profileContainer_rowInfo_value'>{defineSex(user.sex) || 'Не определенно'}</span>
      </div>
    </div>
  );
};

export default Profile;
