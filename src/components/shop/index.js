import React from "react";
import WrapperApp from "./WrapperApp";
import axios from "axios";

import {Route, Switch} from "react-router-dom";
import RouteAuth from "../shop/helpers/RouteAuth";
import Panel from '../shop/panel/index';
import Landing from '../shop/pages/landing';
import NotificationsWrapper from '../shop/helpers/NotificationsWrapper';
import Home from "./pages/Home";

class App extends React.Component {
    constructor(props){
        super(props);
      // this._notificationSystem = null;
    }
    async componentDidMount() {
        // TODO getTime, isAuth, getCurrency, getName, getDate, getLocation, getSomeData
        // https://www.npmjs.com/package/axios
        // var t = await axios.get('http://localhost:3000/goods');
        // console.log(t.data.goods, 't');

      // this._notificationSystem = this.refs.notificationSystem;
      // console.log(this.refs.notificationSystem, 'this.refs.notificationSystem');
    }

  // _addNotification(event) {
  //   event.preventDefault();
  //   this._notificationSystem.addNotification({
  //     message: 'Notification message',
  //     level: 'success'
  //   });
  // }


    render() {

        return (
            <div style={{width: '100%', height: '100%'}}>
                {/*<button onClick={this._addNotification.bind(this)}>Add notification</button>*/}
                {/*<NotificationSystem ref="notificationSystem" />*/}


                <Switch>
                  <Route exact path="/" component={Landing}/>
                    <RouteAuth path="/panel" component={Panel}/>
                    <WrapperApp {...this.props}/>
                </Switch>
              <div id="modal-root" style={{zIndex: 99999999}}></div>
              <NotificationsWrapper/>
            </div>
        )
    }
}

export default App;

