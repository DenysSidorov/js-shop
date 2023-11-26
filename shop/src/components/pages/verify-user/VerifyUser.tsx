// @ts-nocheck
import React, {FC, useCallback, useEffect} from 'react';
import {useDispatch} from 'react-redux';
import {saveUserToken} from '../../../redux/reducers/auth-reducer/actions';
import queryParams from '../../../helpers/libs/queryParams';
import {useLocation} from 'react-router-dom';

interface IVerifyUser {}

const VerifyUser: FC<IVerifyUser> = () => {
  const location = useLocation();
  const dispatch = useDispatch();
  const saveUserTokenFu = useCallback(
    (token: string) => {
      dispatch(saveUserToken(token));
    },
    [dispatch],
  );

  useEffect(() => {
    window.scrollTo(0, 0);
    const params = queryParams(location.search);
    const token = params['t'];
    if (token) {
      saveUserTokenFu(token);
    }
  }, []);
  return <div className='verifyUserContainer' />;
};

export default VerifyUser;
