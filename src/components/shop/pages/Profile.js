import React from "react";
import axios from "axios";
import urlApi from '../../../api/urlApi';
import st from './pagesStyles/profile.scss'
import {setMetaTag, setTitle} from "../helpers/lib/utils";

class Panel extends React.Component {
  state = {user: {}, isGotUser: false}
  componentDidMount = async (prevProps) => {
    window.scrollTo(0, 0);
    setTitle('Мой профиль');
    setMetaTag('description', 'Твой профиль в shop-ukraine.pro');
    setMetaTag('keywords', 'портфели, сумки, рюкзаки, купить для школы, shop-ukraine.pro');
    try {
      const token = localStorage.getItem('info');
      let result = await axios.get(`${urlApi}/api/users/current`, {
        headers: {'authorization': token}
      });
      console.log(result.data, 'data');
      this.setState({user: result.data, isGotUser: true});
    } catch (err) {
      console.log(err.message || err);
    }
  };

  render = () => {
    if (!this.state.isGotUser) {
      return <div className="adminPanelSpinner"><i className="fa fa-spinner"></i></div>
    }
    return (
      <div className="profileContainer">
        <div className="profileContainer_logo">
          <img src="/img-static/profileUser.jpg" alt=""/>
        </div>
        {this.state.user.isAdmin
          ? <div className="profileContainer_rowInfo">
            <span className="profileContainer_rowInfo_item">Привет Администратор, как дела, готов служить тебе, твой сайт?!</span>
          </div>
          : null}
        <div className="profileContainer_rowInfo">
          <span className="profileContainer_rowInfo_item">_id</span>
          <span className="profileContainer_rowInfo_del"> : </span>
          <span className="profileContainer_rowInfo_value">{this.state.user._id || 'Не определенно'} </span>
        </div>
        <div className="profileContainer_rowInfo">
          <span className="profileContainer_rowInfo_item">Почта</span>
          <span className="profileContainer_rowInfo_del"> : </span>
          <span className="profileContainer_rowInfo_value">{this.state.user.login || 'Не определенно'}</span>
        </div>
        <div className="profileContainer_rowInfo">
          <span className="profileContainer_rowInfo_item">Ник</span>
          <span className="profileContainer_rowInfo_del"> : </span>
          <span className="profileContainer_rowInfo_value">{this.state.user.nick || 'Не определенно'}</span>
        </div>
        <div className="profileContainer_rowInfo">
          <span className="profileContainer_rowInfo_item">Телефон</span>
          <span className="profileContainer_rowInfo_del"> : </span>
          <span className="profileContainer_rowInfo_value">{this.state.user.phone || 'Не определенно'}</span>
        </div>
        <div className="profileContainer_rowInfo">
          <span className="profileContainer_rowInfo_item">Возраст</span>
          <span className="profileContainer_rowInfo_del"> : </span>
          <span className="profileContainer_rowInfo_value">{this.state.user.age || 'Не определенно'}</span>
        </div>
        <div className="profileContainer_rowInfo">
          <span className="profileContainer_rowInfo_item">Пол</span>
          <span className="profileContainer_rowInfo_del"> : </span>
          <span className="profileContainer_rowInfo_value">{this.state.user.male || 'Не определенно'}</span>
        </div>
        <div className="profileContainer_editBtn">
          <span className="profileContainer_editBtn_btn">Редактировать</span>
        </div>
      </div>
    )

  }
}

export default Panel;