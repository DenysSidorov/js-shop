import React from 'react';
import axios from 'axios';
import urlApi from '../../../../api/urlApi';
import './index.scss';
import {setMetaTag, setTitle} from '../../../../helpers/libs/utils';

interface IPanel {
  path: string;
}

interface SPanel {
  // user: IUser;
  user: any;
  isGotUser: boolean;
}

class Panel extends React.Component<IPanel, SPanel> {
  state = {
    user: Object.create(null),
    isGotUser: false
  };

  componentDidMount = async () => {
    window.scrollTo(0, 0);
    setTitle('Мой профиль');
    setMetaTag('description');
    setMetaTag(
      'keywords',
      'интернет-магазин картин, украинские картины, картины для интерьера, картины на дереве, картины на досках, doshki.com, doshki.kom, картины украина, деревянные картины'
    );
    try {
      const token = localStorage.getItem('info');
      const result = await axios.get(`${urlApi}/api/users/current`, {
        headers: {authorization: token}
      });
      console.log(result.data, 'data');
      this.setState({user: result.data, isGotUser: true});
    } catch (err) {
      console.log(err.message || err);
    }
  };

  render = () => {
    const {isGotUser, user} = this.state;
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
}

export default Panel;
