import React, {PureComponent} from "react";

import './index.less';
import ReactCSSTransitionGroup from "react-addons-css-transition-group";
import {Link} from 'react-router-dom';
import {connect} from "react-redux";
import {signoutUser, isAdminFunc, isValidToken} from '../../../../reducers/authReducer/actions'
import {bindActionCreators} from "redux";

class MenuInfoSection extends React.PureComponent {

  state = {time: 0}

  verifyAdminLink() {
    this.props.isAdminFunc().then(() => {
      let authenticated = this.props.authenticated;
      let isAdmin = this.props.isAdmin;
      console.log(authenticated, 'authenticated'.toUpperCase());
      console.log(isAdmin, 'isAdmin'.toUpperCase());
    });
  }

  componentDidMount() {
    this.verifyAdminLink();

    this.timer = setInterval(() => {
      this.setState({time: this.state.time + 500})
    }, 500)
  }

  componentDidUpdate() {
    // this.verifyAdminLink();
    if (this.state.time >= 5000) {
      clearInterval(this.timer)
    }
  }

  componentWillUnmount() {
    clearInterval(this.timer)
  }

  unAuth() {
    this.props.signoutUser();
  }

  render() {
    let authenticated = this.props.authenticated;
    let isAdmin = this.props.isAdmin;
    // if(this.state.time < 1500) return null;
    return (
      <div className="menuInfoSection left fullWidth ">
        <div className="container">
          <div className="submenuBlock">
            {this.state.time < 1000
              ? null
              : <div className="submenuBlock_container">
                <div className="contactInfo">
                  <ul className="contactInfo__list-contacts-info">
                    <ReactCSSTransitionGroup
                      transitionName="menuInfoSection"
                      transitionAppear={true}
                      transitionAppearTimeout={300}
                      transitionEnterTimeout={300}
                      transitionLeave={false}>
                      <li>
                        <Phone phoneText={this.props.serviceReducer.number1}
                               phoneMobile={`tel:${this.props.serviceReducer.number1}`}/>
                        {/*<a title="Позвонить на Киевстар"*/}
                        {/*href="tel:0988351315"><i*/}
                        {/*className="fa fa-phone"></i>&nbsp;(098)83-51-315</a>*/}
                      </li>
                      {/*<li>*/}
                      {/*  <Phone phoneText="(093)88-75-395" phoneMobile="tel:0938875395"/>*/}

                      {/*  /!*<a title="Позвонить на Life)" href="tel:0938875395"><i*!/*/}
                      {/*  /!*className="fa fa-phone"></i>&nbsp;(093)88-75-395</a>*!/*/}
                      {/*</li>*/}
                      <li>
                        <span
                          className="contactInfo__list-contacts-info_time"
                          title="График работы, условия оплаты и доставки"
                           href="#">
                          <meta content="Mo-Fr 10:00-19:00"/>
                          <i className="fa fa-clock-o"></i>&nbsp;
                          10:00-19:00&nbsp;пн-пт</span>
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
                      {authenticated && isAdmin &&
                      <li><Link to='/panel'>Админка</Link></li>}
                      {authenticated &&
                      <li><Link to='/profile'>Профиль юзера</Link></li>}
                      {authenticated &&
                      <li><a onClick={this.unAuth.bind(this)}>Выйти</a></li>}
                      {!authenticated &&
                      <li><Link to="/logup">Регистрация</Link></li>}
                      {!authenticated && <li><Link to="/login">Войти</Link></li>}
                    </ReactCSSTransitionGroup>
                  </ul>
                </div>
              </div>}
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
    serviceReducer: state.serviceReducer
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return bindActionCreators({
    signoutUser: () => signoutUser(),
    isAdminFunc: () => isAdminFunc(),
    isValidToken: () => isValidToken()

  }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(MenuInfoSection);


class Phone extends React.Component {

  state = {
    phoneForUser: this.props.phoneText.slice(0, 5) + ' Показать номер'
  }

  showAll = () => {
    this.setState({phoneForUser: this.props.phoneText});
  }

  render() {
    return (
      <a title="Позвонить на Лайф"
         href={this.props.phoneMobile}
         className="contactInfo__list-contacts-info_time"
         // onClick={this.showAll}
      >
        <i className="fa fa-phone"></i>
        &nbsp;{this.props.phoneText}
      </a>
    )
  }
}
