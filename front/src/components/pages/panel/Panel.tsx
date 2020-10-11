import React, {useEffect, useState} from 'react';
import {Switch, Route, useRouteMatch} from 'react-router-dom';
import LoadingBar from 'react-redux-loading-bar';
import AdminInfo from './AdminForPage';
import Header from './Header';
import Orders from './Orders';
import LeftMenu from './LeftMenu';
// import {useRouteMatch} from "react-router";

type Token = string | null;

const Panel = () => {
  const [token, setToken] = useState<Token>('');

  useEffect(() => {
    window.scrollTo(0, 0);

    try {
      const tokenFromStorage: Token = localStorage.getItem('info');
      setToken(tokenFromStorage);
    } catch (error) {
      console.error(error);
    }
  }, []);

  const match = useRouteMatch('/panel/test');
  if (!token) return <div>Отказано в доступе</div>;

  return (
    <div className='adminPanContainer fullWidth left'>
      <Header />
      <LoadingBar style={{backgroundColor: '#ff7867', height: '3px'}} />
      <div className='adminPan__mainContent'>
        <LeftMenu />
        <div className='adminPan__mainContent_content left'>
          <Switch>
            <Route exact path='/panel' component={Orders} />
            <Route path='/panel/orders' component={Orders} />
            <Route path='/panel/admin' component={AdminInfo} />
          </Switch>
          {match ? <h1>Hello user 2 {match.params.toString()}!</h1> : null}
        </div>
      </div>
    </div>
  );
};

export default Panel;
