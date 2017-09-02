import React from "react";;
import styles from './index.less';
import {Link} from 'react-router-dom';
import {connect} from "react-redux";
import {signoutUser} from '../../../../reducers/authReducer/actions'
import {bindActionCreators} from "redux";
class MenuInfoSection extends React.Component {
    unAuth(){
        this.props.signoutUser();
    }
    render() {
        let authenticated = this.props.authenticated;
        return (
            <div className="menuInfoSection left fullWidth ">
                <div className="container">
                    <div className="submenuBlock">
                        <div className="contactInfo">
                            <ul className="contactInfo__list-contacts-info">
                                <li>
                                    <a title="Позвонить на Киевстар" href="tel:0988351315"><i
                                        className="fa fa-phone"></i>&nbsp;(098)83-51-315</a>
                                </li>
                                <li>
                                    <a title="Позвонить на Life)" href="tel:0938875395"><i className="fa fa-phone"></i>&nbsp;(093)88-75-395</a>
                                </li>
                                <li>
                                    <a title="График работы, условия оплаты и доставки" href="#">
                                        <meta content="Mo-Fr 10:00-19:00"/>
                                            <i className="fa fa-clock-o"></i>&nbsp;10:00-19:00&nbsp;пн-пт</a>
                                </li>
                            </ul>
                        </div>
                        <div className="logoInfo">
                            <img className="logoInfo__logo-img" src="/img-static/good.jpg" alt=""/>
                        </div>
                        <div className="userInfo">
                            <ul className="userInfo__listInfo">
                                {authenticated && <li><Link to='/user'>Ввойти в кабинет</Link></li>}
                                {authenticated && <li><a onClick={this.unAuth.bind(this)}>Выйти</a></li>}
                                {!authenticated && <li><Link to="/logup">Регистрация</Link></li>}
                                {!authenticated && <li><Link to="/login">Войти</Link></li>}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}


const mapStateToProps = (state, ownProps) => {
    return {
        authenticated: state.authReducer.authenticated
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return bindActionCreators({
        signoutUser: ()=> signoutUser(),

    }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(MenuInfoSection);
