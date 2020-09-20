import React, {ChangeEvent} from 'react';
import './index.scss';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {signinUser, deleteErrorMessage} from '../../../../redux/reducers/auth-reducer/actions';
import {setMetaTag, setTitle} from '../../../../helpers/libs/utils';

interface SLogin {
  login: string;
  pass: string;
  normal: boolean;
  // press: boolean;
  serverGet: boolean;
}

interface ILogin {
  delErrorMessage: Function;
  signinUser: Function;
  authReducer: any;
}

class Login extends React.Component<ILogin, SLogin> {
  state = {
    login: '',
    pass: '',
    normal: false,
    // press: false,
    serverGet: false
  };

  UNSAFE_componentWillMount() {
    this.props.delErrorMessage();
    setTitle('Логин');
    setMetaTag('description', 'Логин в магазин картин на дереве');
    setMetaTag(
      'keywords',
      'интернет-магазин картин, украинские картины, картины для интерьера, картины на дереве, картины на досках, doshki.com, doshki.kom, картины украина, деревянные картины'
    );
  }

  sendData = () => {
    console.log('send2');
    const {login, pass} = this.state;
    // console.log(login, pass, 'req111111');
    this.props.signinUser(login, pass);
    this.setState({pass: '', normal: false});
    // Отправить данные о пользователе
    // Запустить прелоадер

    // Если ошибка очистить данные
    // Отключить прелоадер
    // Вывести уведомление пользователю об ошибке

    // Если все нормально выключить прелоадер
    // Сохранить токен
    // Перенаправить на другую страницу
  };

  // chPress = () => {
  //   this.setState((prevState) => {
  //     return {press: !prevState.press};
  //   });
  // }

  chLogin = (e: ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value;
    if (val.length < 70) {
      this.setState({login: val}, this.validateData);
    }
  };

  chPass = (e: ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value;
    if (val.length < 70) {
      this.setState({pass: val}, this.validateData);
    }
  };

  validateData() {
    // eslint-disable-next-line no-useless-escape
    const emailRegExp = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    if (emailRegExp.test(this.state.login) && this.state.pass.length >= 4) {
      this.setState({normal: true});
    } else {
      this.setState({normal: false});
    }
  }

  render() {
    return (
      <div className='loginPage_container'>
        {this.state.serverGet && (
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
          <input value={this.state.login} onChange={this.chLogin} name='login' type='text' placeholder='Ваш логин' />
          <br /> <br />
          <label htmlFor='pass'>Введите свой Пароль:</label>
          <br />
          <input value={this.state.pass} onChange={this.chPass} name='pass' type='password' placeholder='Ваш пароль' />
          <br />
          <br />
          {this.state.normal ? (
            <ReactCSSTransitionGroup
              transitionName='example'
              transitionAppear
              transitionAppearTimeout={300}
              transitionEnterTimeout={300}
              transitionLeaveTimeout={300}
            >
              <div className='btnInLoginDis' onClick={this.sendData}>
                <span>Подтвердить</span>
              </div>
            </ReactCSSTransitionGroup>
          ) : (
            <div className='btnInLoginIn'>
              <span>Подтвердить</span>
            </div>
          )}
          <div style={{margin: '15px', color: 'red', fontSize: '1.5rem'}}>{this.props.authReducer.error}</div>
        </form>
      </div>
    );
  }
}

// {error:'', authenticated: false, message: ''}
const mapStateToProps = (state: any) => {
  return {
    authReducer: state.authReducer
  };
};

const mapDispatchToProps = (dispatch: any) => {
  return bindActionCreators(
    {
      signinUser: (login, password) => signinUser(login, password),
      delErrorMessage: () => deleteErrorMessage()
    },
    dispatch
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
