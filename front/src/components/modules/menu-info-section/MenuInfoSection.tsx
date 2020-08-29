import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {Link} from 'react-router-dom';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

import Phone from './Phone';
import './index.less';
import {signoutUser, isAdminFunc} from '../../../redux/reducers/auth-reducer/actions';

interface IMenuInfoSection {
  isAdminFuncInternal: Function;
  signoutUserInternal: Function;
  authenticated: boolean;
  isAdmin: boolean;
  serviceReducer: any;
}

class MenuInfoSection extends React.PureComponent<IMenuInfoSection, {time: number}> {
  state = {time: 0};

  timer: any;

  componentDidMount() {
    this.verifyAdminLink();
    const {time} = this.state;
    this.timer = setInterval(() => {
      this.setState({time: time + 500});
    }, 500);
  }

  componentDidUpdate() {
    // this.verifyAdminLink();
    const {time} = this.state;
    if (time >= 5000) {
      clearInterval(this.timer);
    }
  }

  componentWillUnmount() {
    clearInterval(this.timer);
  }

  verifyAdminLink() {
    const {isAdminFuncInternal} = this.props;
    isAdminFuncInternal().then(() => {
      const {authenticated} = this.props;
      const {isAdmin} = this.props;
      console.log(authenticated, 'authenticated'.toUpperCase());
      console.log(isAdmin, 'isAdmin'.toUpperCase());
    });
  }

  unAuth() {
    const {signoutUserInternal} = this.props;
    signoutUserInternal();
  }

  render() {
    const {authenticated, isAdmin, serviceReducer} = this.props;
    // const {time} = this.state;
    // if(this.state.time < 1500) return null;
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
                        {/* <a title="Позвонить на Киевстар" */}
                        {/* href="tel:0988351315"><i */}
                        {/* className="fa fa-phone"></i>&nbsp;(098)83-51-315</a> */}
                      </li>
                      {/* <li> */}
                      {/*  <Phone phoneText="(093)88-75-395" phoneMobile="tel:0938875395"/> */}

                      {/*  /!*<a title="Позвонить на Life)" href="tel:0938875395"><i*!/ */}
                      {/*  /!*className="fa fa-phone"></i>&nbsp;(093)88-75-395</a>*!/ */}
                      {/* </li> */}
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
                {/* <div className="logoInfo"> */}
                {/* <img className="logoInfo__logo-img" src="/img-static/good.jpg" alt=""/> */}
                {/* </div> */}
                <div className='userInfo'>
                  <ul className='userInfo__listInfo'>
                    <ReactCSSTransitionGroup
                      transitionName='menuInfoSectionRigth'
                      transitionAppear
                      transitionAppearTimeout={300}
                      transitionEnterTimeout={300}
                      transitionLeave={false}
                    >
                      {/* {isAdmin && <li><Link to='/panel'>Ввойти в кабинет</Link></li>} */}
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
                          <a onClick={this.unAuth.bind(this)}>Выйти</a>
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
  }
}

const mapStateToProps = (state: any) => {
  return {
    authenticated: state.authReducer.authenticated,
    isAdmin: state.authReducer.isAdmin,
    serviceReducer: state.serviceReducer
  };
};

const mapDispatchToProps = (dispatch: any) => {
  return bindActionCreators(
    {
      signoutUserInternal: () => signoutUser(),
      isAdminFuncInternal: () => isAdminFunc()
    },
    dispatch
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(MenuInfoSection);
