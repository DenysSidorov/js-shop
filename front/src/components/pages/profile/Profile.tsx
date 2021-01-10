import React, {Fragment, useCallback, useEffect, useState} from 'react';
import './index.scss';
import {setMetaTag, setTitle} from '../../../helpers/libs/utils';
import {editUserAPI, getCurrentUserByTokenAPI} from '../../../api/endpoints';
import {Token} from '../../../interfaces';
import Preloader from '../../parts/preloader';

// import {getTypes} from '../../../redux/reducers/panel-reducer/actions';

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

  const changeParent = useCallback(
    (value: string | number) => {
      console.log('value in parent ', value);
    },
    []
  );

  const {isGotUser, user} = state;
  if (!isGotUser) {
    return (
      <div className='adminPanelSpinner'>
        <i className='fa fa-spinner'/>
      </div>
    );
  }

  return (
    <div className='profileContainer'>
      <div className='profileContainer_logo'>
        <img src='/img-static/profileUser.jpg' alt=''/>
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

        <ProfileEditRowPart
          dataType='nick'
          value={user.nick || ''}
          changeParent={changeParent}
        />
      </div>
      <div className='profileContainer_rowInfo'>
        <span className='profileContainer_rowInfo_item'>Телефон</span>
        <span className='profileContainer_rowInfo_del'> : </span>
        <span className='profileContainer_rowInfo_value'>{user.phone || 'Не определенно'}</span>
        {/*<ProfileEditRowPart value={user.phone || ''}/>*/}
      </div>
      <div className='profileContainer_rowInfo'>
        <span className='profileContainer_rowInfo_item'>Возраст</span>
        <span className='profileContainer_rowInfo_del'> : </span>
        <span className='profileContainer_rowInfo_value'>{user.age || 'Не определенно'}</span>
        {/*<ProfileEditRowPart value={user.age || ''}/>*/}
      </div>
      <div className='profileContainer_rowInfo'>
        <span className='profileContainer_rowInfo_item'>Пол</span>
        <span className='profileContainer_rowInfo_del'> : </span>
        <span className='profileContainer_rowInfo_value'>{user.male || 'Не определенно'}</span>
        {/*<ProfileEditRowPart value={user.male || ''}/>*/}
      </div>
    </div>
  );
};

export default Panel;

interface IProfileEditRowPart {
  dataType: string;
  value: string | number;
  changeParent: Function;
}

const ProfileEditRowPart = ({value, dataType}: IProfileEditRowPart) => {
  const [isEdit, changeIsEdit] = useState<boolean>();
  const [defValue, changeDefValue] = useState<string | number>(value);
  const [isFetching] = useState<boolean>(false);

  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    changeDefValue(e.target.value)
  }

  // changeParent
  const editValueWithAPI = async () => {
    try {
      const token: Token = localStorage.getItem('info');
      await editUserAPI(token, {[dataType]: defValue as string});
    } catch (error) {
      console.error(error);
    }
  }
  return (
    <Fragment>
      {!isEdit && <span
        className='profileContainer_editBtn_btn'
        onClick={() => {
          changeIsEdit(true);
        }}
      >Редактировать</span>}
      {isEdit && <Fragment>
        {isFetching && <div className="profileContainer_row_preloader">
          <Preloader height="24px" borderWidth="2px"/>
        </div>}
        <input
          value={defValue}
          onChange={handleInput}
          type='text'
          className='shopInput profileContainer_input'
        />
        <span className='profileContainer_editBtn_btn'
              onClick={() => {
                changeIsEdit(false);
              }}>Отмена</span>
        <span
          className='profileContainer_editBtn_btn'
          onClick={editValueWithAPI}
        >Сохранить</span>
      </Fragment>}
    </Fragment>
  );
};
