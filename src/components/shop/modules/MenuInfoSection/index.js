import React, {PureComponent} from "react";;
import styles from './index.less';
import ReactCSSTransitionGroup from "react-addons-css-transition-group";
import {Link} from 'react-router-dom';
import {connect} from "react-redux";
import {signoutUser, isAdminFunc, isValidToken} from '../../../../reducers/authReducer/actions'
import {bindActionCreators} from "redux";
class MenuInfoSection extends React.PureComponent {

    state = {time:0}

    verifyAdminLink(){
          this.props.isAdminFunc();
    }
    componentDidMount(){
       this.verifyAdminLink();

        this.timer = setInterval(()=>{
            this.setState({time: this.state.time + 1000})
        },1000)
    }
    componentDidUpdate(){
      this.verifyAdminLink();
        if(this.state.time >= 10000){
            clearInterval( this.timer)
        }
    }
    unAuth(){
        this.props.signoutUser();
    }
    render() {
        let authenticated = this.props.authenticated;
        let isAdmin = this.props.isAdmin;
        console.log(authenticated, 'authenticated'.toUpperCase());
        console.log(isAdmin, 'isAdmin'.toUpperCase());
        if(this.state.time < 1500) return null;
        return (
            <div className="menuInfoSection left fullWidth ">
                <div className="container">
                    <div className="submenuBlock">
                        <div className="contactInfo">
                            <ul className="contactInfo__list-contacts-info">
                                <ReactCSSTransitionGroup
                                    transitionName="menuInfoSection"
                                    transitionAppear={true}
                                    transitionAppearTimeout={300}
                                    transitionEnterTimeout={300}
                                    transitionLeave={false}>
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
                                </ReactCSSTransitionGroup>
                            </ul>
                        </div>
                        {/*<div className="logoInfo">*/}
                            {/*<img className="logoInfo__logo-img" src="/img-static/good.jpg" alt=""/>*/}
                        {/*</div>*/}
                        <div className="userInfo">
                            <ul className="userInfo__listInfo">
                                <ReactCSSTransitionGroup
                                    transitionName="menuInfoSectionRigth"
                                    transitionAppear={true}
                                    transitionAppearTimeout={300}
                                    transitionEnterTimeout={300}
                                    transitionLeave={false}>
                                {/*{isAdmin && <li><Link to='/panel'>Ввойти в кабинет</Link></li>}*/}
                                {authenticated && isAdmin && <li><Link to='/panel'>Админка</Link></li>}
                                {authenticated && <li><Link to='/profile'>Профиль юзера</Link></li>}
                                {authenticated && <li><a onClick={this.unAuth.bind(this)}>Выйти</a></li>}
                                {!authenticated && <li><Link to="/logup">Регистрация</Link></li>}
                                {!authenticated && <li><Link to="/login">Войти</Link></li>}
                                </ReactCSSTransitionGroup>
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
        authenticated: state.authReducer.authenticated,
        isAdmin: state.authReducer.isAdmin,
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return bindActionCreators({
        signoutUser: ()=> signoutUser(),
      isAdminFunc: ()=> isAdminFunc(),
        isValidToken: ()=> isValidToken()

    }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(MenuInfoSection);
