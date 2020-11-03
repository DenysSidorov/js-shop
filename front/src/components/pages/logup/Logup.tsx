import React, {ChangeEvent, useCallback, useEffect, useReducer} from 'react';
import './index.scss';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import {useDispatch, useSelector} from 'react-redux';
import {
  signupUser as signupUserRedux,
  deleteErrorMessage as deleteErrorMessageRedux
} from '../../../redux/reducers/auth-reducer/actions';
import {setMetaTag, setTitle} from '../../../helpers/libs/utils';
import {IReducersState} from '../../../redux/reducers';

interface SLogup {
  login: string;
  pass: string;
  repPass: string;
  nick: string;
  normal: boolean;
  serverGet: boolean;
}

function reducerFu(state: SLogup, action: any) {
  switch (action.type) {
    case 'UPDATE_LOGIN':
      return {...state, login: action.payload};
    case 'UPDATE_PASSWORD':
      return {...state, pass: action.payload};
    case 'UPDATE_NICK':
      return {...state, nick: action.payload};
    case 'UPDATE_NORMAL':
      return {...state, normal: action.payload};
    case 'UPDATE_SERVERGET':
      return {...state, serverGet: action.payload};
    case 'UPDATE_REPPASS':
      return {...state, repPass: action.payload};
    default:
      return state;
  }
}

const initialState = {
  login: '',
  pass: '',
  nick: '',
  repPass: '',
  normal: false,
  serverGet: false
};

const Logup = () => {
  const [state, updateState /* dispatch */] = useReducer(reducerFu, initialState);
  const authReducer = useSelector((globState: IReducersState) => globState.authReducer);
  const dispatch = useDispatch();

  const deleteErrorMessage = useCallback(() => {
    dispatch(deleteErrorMessageRedux());
  }, [dispatch]);

  const signupUser = useCallback(
    (login, password, nick) => {
      dispatch(signupUserRedux(login, password, nick));
    },
    [dispatch]
  );

  useEffect(() => {
    deleteErrorMessage();
    setTitle('Регистрация');
    setMetaTag('description', 'Регистрация в магазине doshki.com');
    setMetaTag(
      'keywords',
      'интернет-магазин картин, украинские картины, картины для интерьера, картины на дереве, картины на досках, doshki.com, doshki.kom, картины украина, деревянные картины'
    );
  }, [deleteErrorMessage]);

  const sendData = useCallback(() => {
    const {login, nick, pass} = state;
    signupUser(login, pass, nick);

    updateState({type: 'UPDATE_REPPASS', payload: ''});
    updateState({type: 'UPDATE_PASSWORD', payload: ''});
    updateState({type: 'UPDATE_NORMAL', payload: false});
  }, [state, signupUser]);

  const validateData = useCallback(() => {
    // eslint-disable-next-line no-useless-escape
    const emailRegExp = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    const {login, nick, pass, repPass} = state;
    if (emailRegExp.test(login) && nick.length >= 4 && pass.length >= 4 && pass === repPass) {
      updateState({type: 'UPDATE_NORMAL', payload: true});
    } else {
      updateState({type: 'UPDATE_NORMAL', payload: false});
    }
  }, [state]);

  /** setState function in Classes had callback as second parameter,
   * but useState or useReduce doesn't have that callback:(
   * That's why I use useEffect as a huck under this text. I could do it with some external library, but didn't do it.
   *  */
  useEffect(() => {
    validateData();
  }, [state.normal]);

  useEffect(() => {
    validateData();
  }, [state.pass]);
  useEffect(() => {
    validateData();
  }, [state.login]);

  useEffect(() => {
    validateData();
  }, [state.nick]);

  useEffect(() => {
    validateData();
  }, [state.repPass]);

  const chLogin = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      const val = e.target.value;
      if (val.length < 70) {
        updateState({type: 'UPDATE_LOGIN', payload: val});
        validateData();
      }
    },
    [validateData]
  );

  const chPassRepeat = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      const val = e.target.value;
      if (val.length < 70) {
        updateState({type: 'UPDATE_REPPASS', payload: val});
        validateData();
      }
    },
    [validateData]
  );

  const chNickName = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value;
    if (val.length < 70) {
      updateState({type: 'UPDATE_NICK', payload: val});
    }
  }, []);

  const chPass = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      const val = e.target.value;
      if (val.length < 70) {
        updateState({type: 'UPDATE_PASSWORD', payload: val});
        validateData();
      }
    },
    [validateData]
  );

  const {login, nick, pass, repPass, serverGet, normal} = state;

  return (
    <div className='loginPage_container'>
      {serverGet && (
        <div className='loginPage_container_block'>
          <span>
            <i className='fa fa-briefcase fa-spin' />
          </span>
        </div>
      )}
      <form className='formRegistration' action=''>
        <h1 className='h1Registration'>Регистрация в системе</h1>
        <h2 className='h1RegistrationRules'>Все поля должны иметь более 4-х символов</h2>
        <label htmlFor='login'>Введите свой Email:</label>
        <br />
        <input value={login} onChange={chLogin} name='login' type='text' placeholder='Ваш логин' />
        <br /> <br />
        <label htmlFor='pass'>Введите свой Пароль:</label>
        <br />
        <input value={pass} onChange={chPass} name='pass' type='password' placeholder='Ваш пароль' />
        <br />
        <br />
        <label htmlFor='passRepeat'>Важно повторить пароль:</label>
        <br />
        <input
          value={repPass}
          onChange={chPassRepeat}
          name='passRepeat'
          type='password'
          placeholder='Повторите пароль'
        />
        <br />
        <br />
        <label htmlFor='nickName'>Введите своё имя в системе:</label>
        <br />
        <input value={nick} onChange={chNickName} name='nickName' type='text' placeholder='Ваш никнэйм' />
        <br />
        <br />
        <br />
        {normal ? (
          <ReactCSSTransitionGroup
            transitionName='example'
            transitionAppear
            transitionAppearTimeout={300}
            transitionEnterTimeout={300}
            transitionLeaveTimeout={300}
          >
            <div className='btnInLoginDis' onClick={sendData}>
              <span>Подтвердить</span>
            </div>
          </ReactCSSTransitionGroup>
        ) : (
          <div className='btnInLoginIn'>
            <span>Подтвердить</span>
          </div>
        )}
        <div style={{margin: '15px', color: 'red', fontSize: '1.5rem'}}>{authReducer.error}</div>
      </form>
    </div>
  );
};

export default Logup;
