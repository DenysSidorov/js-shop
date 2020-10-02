import React, {FC, useCallback, useEffect, useRef, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
// import {bindActionCreators} from 'redux';
import {Link} from 'react-router-dom';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import Phone from './Phone';
import './index.less';
import {signoutUser, isAdminFunc} from '../../../redux/reducers/auth-reducer/actions';
import {IReducersState} from '../../../redux/reducers';
import {IAuthReducerState} from '../../../redux/reducers/auth-reducer/authReducer';

interface IMenuInfoSection {
  // isAdminFuncInternal: Function;
  // signoutUserInternal: Function;
  // authenticated: boolean;
  // isAdmin: boolean;
  // serviceReducer: any;
}

const MenuInfoSection: FC<IMenuInfoSection> = () => {
  // Redux part START
  const authReducer: IAuthReducerState = useSelector((state: IReducersState) => state.authReducer);
  const serviceReducer = useSelector((state: IReducersState) => state.serviceReducer);
  const {authenticated, isAdmin} = authReducer;

  const dispatch = useDispatch();

  const unAuth = useCallback(() => {
    dispatch(signoutUser());
  }, [dispatch]);

  const isAdminFuncInternal = useCallback(() => {
    dispatch(isAdminFunc());
  }, [dispatch]);
  // Redux part END

  const [time, setTime] = useState(0);
  const timer = useRef<any>(null);

  const verifyAdminLink = useCallback(() => {
    isAdminFuncInternal();
  }, [isAdminFuncInternal]);

  useEffect(() => {
    verifyAdminLink();
    timer.current = setInterval(() => {
      setTime((prev) => prev + 500);
    }, 500);
    return clearInterval(timer.current);
  }, [verifyAdminLink]);

  useEffect(() => {
    if (time >= 5000) {
      clearInterval(timer.current);
    }
  });

  return (
    <div className='menuInfoSection left fullWidth '>
      <div className='container'>
        <div className='submenuBlock'>
          {1001 < 1000 ? null : (
            <div className='submenuBlock_container'>
              <div className='contactInfo'>
                <ul className='contactInfo__list-contacts-info'>
                  <ReactCSSTransitionGroup
                    transitionName='menuInfoSection'
                    transitionAppear
                    transitionAppearTimeout={300}
                    transitionEnterTimeout={300}
                    transitionLeave={false}
                  >
                    <li>
                      <Phone phoneText={serviceReducer.number1} phoneMobile={`tel:${serviceReducer.number1}`} />
                    </li>

                    <li>
                      <span
                        className='contactInfo__list-contacts-info_time'
                        title='График работы, условия оплаты и доставки'
                      >
                        <meta content='Mo-Fr 10:00-19:00' />
                        <i className='fa fa-clock-o' />
                        &nbsp; 10:00-19:00&nbsp;пн-пт
                      </span>
                    </li>
                  </ReactCSSTransitionGroup>
                </ul>
              </div>
              <div className='userInfo'>
                <ul className='userInfo__listInfo'>
                  <ReactCSSTransitionGroup
                    transitionName='menuInfoSectionRigth'
                    transitionAppear
                    transitionAppearTimeout={300}
                    transitionEnterTimeout={300}
                    transitionLeave={false}
                  >
                    {authenticated && isAdmin && (
                      <li>
                        <Link to='/panel'>Админка</Link>
                      </li>
                    )}
                    {authenticated && (
                      <li>
                        <Link to='/profile'>Профиль юзера</Link>
                      </li>
                    )}
                    {authenticated && (
                      <li>
                        <a onClick={unAuth}>Выйти</a>
                      </li>
                    )}
                    {!authenticated && (
                      <li>
                        <Link to='/logup'>Регистрация</Link>
                      </li>
                    )}
                    {!authenticated && (
                      <li>
                        <Link to='/login'>Войти</Link>
                      </li>
                    )}
                  </ReactCSSTransitionGroup>
                </ul>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default MenuInfoSection;
