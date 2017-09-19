import React from "react";

import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import {saveUserToken} from '../../../../reducers/authReducer/actions';
import queryParams from '../../helpers/lib/queryParams';
class VerifyUser extends React.Component {
    componentDidMount = (prevProps) => {
        window.scrollTo(0, 0)
        var token = queryParams['t'];
        if (token) {
            console.log(token, 'tokenischeeeeeee');

            this.props.saveUserToken(token);

            // post('/api/find-user-by-token'
            // TODO проверка этого токена!
            // Если все хорошо даем редаксу понять что это норм токен
            // Если плохо Выводим сообщение
            // //
        }
    }

    render = ()=> {
        return (
            <div className="verifyUserContainer">

            </div>
        )

    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        authReducer: state.authReducer,
        isAdmin: state.isAdmin
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return bindActionCreators({
        saveUserToken: (token) => saveUserToken(token),
    }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(VerifyUser);

