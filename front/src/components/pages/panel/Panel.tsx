import React from 'react';
import {Switch, Route} from 'react-router-dom';
import LoadingBar from 'react-redux-loading-bar';
import AdminInfo from './AdminForPage';
import Header from './Header';
import Orders from './Orders';
import LeftMenu from './LeftMenu';

interface IPanel {
  location: any;
}

interface SPanel {
  token: string | null;
}

class Panel extends React.Component<IPanel, SPanel> {
  state = {
    token: ''
  };

  componentDidMount = async () => {
    window.scrollTo(0, 0);

    try {
      const token: string | null = localStorage.getItem('info');
      this.setState({token});
    } catch (error) {
      console.error(error);
    }
  };

  render = () => {
    if (!this.state.token) return <div>Отказано в доступе</div>;
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
              <Route
                path='/panel/test'
                render={({match}) => {
                  return <h1>Hello user 2 {match.params.username}!</h1>;
                }}
              />
              <Route path='/panel/admin' component={AdminInfo} />
            </Switch>
          </div>
        </div>
      </div>
    );
  };
}

export default Panel;
