import React from "react";
import  './login.scss';
class Login extends React.Component {
    state = {
        login: '',
        pass: '',
        normal: false
    }
    chLogin(e){
        let val = e.target.value;
        if (val.length < 70) {
            this.setState({login: val},  this.validateData)
        }
    }
    chPass(e){
        let val = e.target.value;
        if (val.length < 70) {
            this.setState({pass: val}, this.validateData)
        }
    }
    validateData() {
        if (this.state.login.length > 5 && this.state.pass.length > 5){
            this.setState({normal: true });
        } else{
            this.setState({normal: false });
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
                        ? <div className="btnInLoginDis"
                               onClick={()=>{}}
                               type="button"><span>Подтвердить</span></div>
                        : <div className="btnInLoginIn"
                               onClick={()=>{}}
                               type="button"><span>Подтвердить</span></div>
                    }
                </form>
            </div>
        )
    }
}


export default Login;
