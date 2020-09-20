import React, {ChangeEvent} from 'react';
import './index.scss';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {signupUser, deleteErrorMessage} from '../../../../redux/reducers/auth-reducer/actions';
import {setMetaTag, setTitle} from '../../../../helpers/libs/utils';

interface ILogup {
  delErrorMessage: Function;
  signupUser: Function;
  authReducer: any;
}

interface SLogup {
  login: string;
  pass: string;
  repPass: string;
  nick: string;
  normal: boolean;
  // press: boolean;
  serverGet: boolean;
}

class Logup extends React.Component<ILogup, SLogup> {
  state = {
    login: '',
    pass: '',
    repPass: '',
    nick: '',
    normal: false,
    // press: false,
    serverGet: false
  };

  UNSAFE_componentWillMount() {
    this.props.delErrorMessage();
    setTitle('Регистрация');
    setMetaTag('description', 'Регистрация в магазине doshki.com');
    setMetaTag(
      'keywords',
      'интернет-магазин картин, украинские картины, картины для интерьера, картины на дереве, картины на досках, doshki.com, doshki.kom, картины украина, деревянные картины'
    );

    // window.st= this.props.store;
    // this.props.store.dispatch(deleteErrorMessage());
    // dispatch(deleteErrorMessage());
  }

  sendData = () => {
    console.log('send2');
    const {nick, login, pass} = this.state;
    console.log(nick, login, pass, 'req111111');
    this.props.signupUser(login, pass, nick);
    this.setState({repPass: '', pass: '', normal: false});
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
  //   this.setState({
  //     press: !this.state.press
  //   });
  // }

  chLogin = (e: ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value;
    if (val.length < 70) {
      this.setState({login: val}, this.validateData);
    }
  };

  chPassRepeat = (e: ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.value, 'repeat');
    const val = e.target.value;
    if (val.length < 70) {
      this.setState({repPass: val}, this.validateData);
    }
  };

  chNickName = (e: ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value;
    console.log(val, 'chNickName');
    if (val.length < 70) {
      this.setState({nick: val}, this.validateData);
    }
  };

  chPass = (e: ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value;
    if (val.length < 70) {
      this.setState({pass: val}, this.validateData);
    }
  };

  validateData = () => {
    // eslint-disable-next-line no-useless-escape
    const emailRegExp = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    const {login, nick, pass, repPass} = this.state;
    if (emailRegExp.test(login) && nick.length >= 4 && pass.length >= 4 && pass === repPass) {
      this.setState({normal: true});
    } else {
      this.setState({normal: false});
    }
  };

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
        <form className='formRegistration' action=''>
          <h1 className='h1Registration'>Регистрация в системе</h1>
          <h2 className='h1RegistrationRules'>Все поля должны иметь более 4-х символов</h2>
          <label htmlFor='login'>Введите свой Email:</label>
          <br />
          <input value={this.state.login} onChange={this.chLogin} name='login' type='text' placeholder='Ваш логин' />
          <br /> <br />
          <label htmlFor='pass'>Введите свой Пароль:</label>
          <br />
          <input value={this.state.pass} onChange={this.chPass} name='pass' type='password' placeholder='Ваш пароль' />
          <br />
          <br />
          <label htmlFor='passRepeat'>Важно повторить пароль:</label>
          <br />
          <input
            value={this.state.repPass}
            onChange={this.chPassRepeat}
            name='passRepeat'
            type='password'
            placeholder='Повторите пароль'
          />
          <br />
          <br />
          <label htmlFor='nickName'>Введите своё имя в системе:</label>
          <br />
          <input
            value={this.state.nick}
            onChange={this.chNickName}
            name='nickName'
            type='text'
            placeholder='Ваш никнэйм'
          />
          <br />
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
      signupUser: (login, password, nick) => signupUser(login, password, nick),
      delErrorMessage: () => deleteErrorMessage()
    },
    dispatch
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(Logup);
