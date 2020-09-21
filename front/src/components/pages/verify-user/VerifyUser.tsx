import React, {FC, useEffect} from 'react';

import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {saveUserToken} from '../../../redux/reducers/auth-reducer/actions';
import queryParams from '../../../helpers/libs/queryParams';

interface IVerifyUser {
  saveUserTokenFu: Function;
  location: any;
}

const VerifyUser: FC<IVerifyUser> = ({location, saveUserTokenFu}) => {
  useEffect(() => {
    window.scrollTo(0, 0);
    const params = queryParams(location.search);
    const token = params['t'];
    if (token) {
      console.log(token, 'tokenischeeeeeee');

      saveUserTokenFu(token);

      // post('/api/find-user-by-token'
      // TODO проверка этого токена!
      // Если все хорошо даем редаксу понять что это норм токен
      // Если плохо Выводим сообщение
      // //
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return <div className='verifyUserContainer' />;
};

// const mapStateToProps = (state: any) => {
//   return {
//     authReducer: state.authReducer,
//     isAdmin: state.isAdmin
//   };
// };

const mapDispatchToProps = (dispatch: any) => {
  return bindActionCreators(
    {
      saveUserTokenFu: (token) => saveUserToken(token)
    },
    dispatch
  );
};

export default connect(null, mapDispatchToProps)(VerifyUser);
