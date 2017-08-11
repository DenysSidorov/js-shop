import React from 'react';
import st from './login.scss';
const Login = props => (
    <div className="loginPage_container">

        <form action="">
            <label htmlFor="login">Please input your LOGIN:</label>
            <br/>
            <input name="login" type="text" placeholder="Your login"/>
            <br/> <br/>
            <label htmlFor="pass">Please input your PASSWORD:</label>
            <br/>
            <input name="pass" type="password" placeholder="Your password"/>
            <br/>
            <br/>
            <input onClick={e=>e.preventDefault()} type="button" value="Send"/>
        </form>
    </div>
)
export default Login;
