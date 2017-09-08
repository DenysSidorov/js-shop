import React from "react";
import "./login.scss";
import ReactCSSTransitionGroup from "react-addons-css-transition-group";
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import {signinUser} from '../../../reducers/authReducer/actions';

class Login extends React.Component {
    constructor(pr) {
        super(pr);
        this.chPress = this.chPress.bind(this);
    }

    state = {
        login: '',
        pass: '',
        normal: false,
        press: false,
        serverGet: false
    }

    sendData = () => {
        console.log('send2');
        let {login, pass} = this.state;
        console.log(login, pass, 'req111111');
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
    }
    chPress() {
        this.setState({
            press: !this.state.press
        })
    }

    chLogin(e) {
        let val = e.target.value;
        if (val.length < 70) {
            this.setState({login: val}, this.validateData)
        }
    }

    chPass(e) {
        let val = e.target.value;
        if (val.length < 70) {
            this.setState({pass: val}, this.validateData)
        }
    }

    validateData() {
        if (this.state.login.length >= 4 && this.state.pass.length >= 4) {
            this.setState({normal: true});
        } else {
            this.setState({normal: false});
        }
    }

    render() {
        return (
            <div className="loginPage_container">
                {this.state.serverGet && <div className="loginPage_container_block">
                    <span><i className="fa fa-briefcase fa-spin" ></i></span>
                </div>}
                <form action="">
                    <label htmlFor="login">Please input your Email:</label>
                    <br/>
                    <input value={this.state.login}
                           onChange={this.chLogin.bind(this)}
                           name="login"
                           type="text"
                           placeholder="Your login"/>
                    <br/> <br/>
                    <label htmlFor="pass">Please input your PASSWORD:</label>
                    <br/>
                    <input value={this.state.pass}
                           onChange={this.chPass.bind(this)}
                           name="pass"
                           type="password"
                           placeholder="Your password"/>
                    <br/>
                    <br/>

                    {this.state.normal
                        ? <ReactCSSTransitionGroup
                        transitionName="example"
                        transitionAppear={true}
                        transitionAppearTimeout={300}
                        transitionEnterTimeout={300}
                        transitionLeaveTimeout={300}>
                        <div className="btnInLoginDis"
                             onClick={this.sendData}
                             type="button">
                            <span>Подтвердить</span>
                        </div>
                    </ReactCSSTransitionGroup>
                        :
                        <div className="btnInLoginIn"
                             type="button"
                        >
                            <span>Подтвердить</span>
                        </div>
                    }
                    <div style={{margin: '15px', color: 'red', fontSize: '1.5rem'}}>{this.props.authReducer.error}</div>
                </form>
            </div>
        )
    }
}
//{error:'', authenticated: false, message: ''}
const mapStateToProps = (state, ownProps) => {
    return {
        authReducer: state.authReducer
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return bindActionCreators({
        signinUser: (login, password) => signinUser(login, password),
    }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);