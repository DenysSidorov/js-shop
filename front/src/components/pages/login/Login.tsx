import React, {ChangeEvent, FC, useCallback, useEffect, useState} from 'react';
import './index.scss';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import {useDispatch, useSelector} from 'react-redux';
import {
  signinUser as signinUserRedux,
  deleteErrorMessage as deleteErrorMessageRedux
} from '../../../redux/reducers/auth-reducer/actions';
import {setMetaTag, setTitle} from '../../../helpers/libs/utils';
import {selectAuthReducer} from '../../../redux/reducers/auth-reducer/selectors';

interface ILogin {}

const Login: FC<ILogin> = () => {
  const [login, setLogin] = useState<string>('');
  const [pass, setPass] = useState<string>('');
  const [normal, setNormal] = useState<boolean>(false);
  const [serverGet] = useState<boolean>(false);

  const authReducer = useSelector(selectAuthReducer);
  const dispatch = useDispatch();

  const signinUser = useCallback(
    (loginPar: string, password: string) => {
      dispatch(signinUserRedux(loginPar, password));
    },
    [dispatch]
  );

  const deleteErrorMessage = useCallback(() => {
    dispatch(deleteErrorMessageRedux());
  }, [dispatch]);

  useEffect(() => {
    deleteErrorMessage();
    setTitle('Логин');
    setMetaTag('description', 'Логин в магазин картин на дереве');
    setMetaTag(
      'keywords',
      'интернет-магазин картин, украинские картины, картины для интерьера, картины на дереве, картины на досках, doshki.com, doshki.kom, картины украина, деревянные картины'
    );
  }, [deleteErrorMessage]);

  const validateData = useCallback(() => {
    // eslint-disable-next-line no-useless-escape
    const emailRegExp = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    if (emailRegExp.test(login) && pass.length >= 4) {
      setNormal(true);
    } else {
      setNormal(false);
    }
  }, [login, pass.length]);

  const sendData = useCallback(() => {
    signinUser(login, pass);
    setPass('');
    setNormal(false);
  }, [login, pass, signinUser]);

  const chLogin = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      const val = e.target.value;
      if (val.length < 70) {
        setLogin(val);
        validateData();
      }
    },
    [validateData]
  );

  const chPass = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      const val = e.target.value;
      if (val.length < 70) {
        setPass(val);
        validateData();
      }
    },
    [validateData]
  );

  return (
    <div className='loginPage_container'>
      {serverGet && (
        <div className='loginPage_container_block'>
          <span>
            <i className='fa fa-briefcase fa-spin' />
          </span>
        </div>
      )}
      <form action=''>
        <h1 className='loginTitle'>Ввойдите в систему</h1>
        <label htmlFor='login'>Введите свой Email:</label>
        <br />
        <input value={login} onChange={chLogin} name='login' type='text' placeholder='Ваш логин' />
        <br /> <br />
        <label htmlFor='pass'>Введите свой Пароль:</label>
        <br />
        <input value={pass} onChange={chPass} name='pass' type='password' placeholder='Ваш пароль' />
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

export default Login;
