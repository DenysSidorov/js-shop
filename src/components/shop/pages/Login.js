import React from "react";
import "./login.scss";
import ReactCSSTransitionGroup from "react-addons-css-transition-group";
class Login extends React.Component {
    constructor(pr) {
        super(pr);
        this.chPress = this.chPress.bind(this);
    }

    state = {
        login: '',
        pass: '',
        normal: false,
        press: false

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
        if (this.state.login.length > 5 && this.state.pass.length > 5) {
            this.setState({normal: true});
        } else {
            this.setState({normal: false});
        }
    }

    render() {
        return (
            <div className="loginPage_container">

                <form action="">
                    <label htmlFor="login">Please input your LOGIN:</label>
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
                             onClick={()=> {
                             }}
                             type="button">
                            <span>Подтвердить</span>
                        </div>
                    </ReactCSSTransitionGroup>
                        :
                        <div className="btnInLoginIn"
                             onClick={()=> {
                             }}
                             onMouseDown={()=> {
                                 console.log(4);
                             }}
                             onMouseUp={()=> {
                                 console.log(5);
                             }}
                             type="button">
                            <span>Подтвердить</span>
                        </div>

                    }
                </form>
            </div>
        )
    }
}


export default Login;

console.log(2);

