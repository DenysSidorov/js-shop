import React from "react";
import axios from "axios";
import urlApi from '../../../api/urlApi';
import st from './pagesStyles/profile.scss'

class Panel extends React.Component {
    state = {user: {}, isGotUser: false}
    componentDidMount = async (prevProps) => {
        window.scrollTo(0, 0)
        try {
            const token = localStorage.getItem('info');
            let result = await axios.get(`${urlApi}/api/users/current`, {
                // timeout: 1000,
                headers: {'authorization': token}
            });
            console.log(result.data, 'data');
            this.setState({user: result.data, isGotUser: true});
        } catch (err) {
            console.log(err.message || err);
        }

        // var token = queryParams['t'];
        // if (token) {
        //     console.log(token, 'tokenischeeeeeee');
        // }

    };

    render = () => {
        // return (<div style={{fontSize: '1.6rem', fontFamily: 'Roboto-Regular'}}>
        //         Профиль пользователя пуст, подтверждение в обработке...
        //     </div>
        // )
        if (!this.state.isGotUser) {
            return <div className="adminPanelSpinner"><i className="fa fa-spinner"></i></div>
        }
        return (
            <div className="profileContainer">
                <div className="profileContainer_logo">
                    <img src="/img-static/profileUser.jpg" alt=""/>
                </div>
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