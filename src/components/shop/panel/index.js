import React from "react";
import queryParams from '../helpers/lib/queryParams';
import styles from './index.scss';

import {Link,Switch, Route} from 'react-router-dom';
import PropsRoute from '../helpers/PropsRoute';


import Header from './Header';
import Orders from './Orders';
import LoadingBar from 'react-redux-loading-bar';
import params from '../helpers/lib/queryParams';
import {showLoading, hideLoading} from "react-redux-loading-bar";
import LeftMenu from "./LeftMenu";

class Panel extends React.Component {
    state = {token: null, typeOrderParam: null};
    constructor(props) {
        super(props);


    }
    componentDidMount = async (prevProps) => {
        window.scrollTo(0, 0);


        try {
            var param = params['type'];
            let token = localStorage.getItem("info");
            this.setState({token, typeOrderParam: param})
        } catch (error) {
            console.error(error);
        }
    };

    render = () => {
        console.log('renders');
        if (!this.state.token) return <div>Отказано в доступе</div>
        return (
            <div className="adminPanContainer fullWidth left">
               <Header/>
                <LoadingBar style={{ backgroundColor: '#ff7867', height: '3px' }} />
                <div className="adminPan__mainContent">
                  <LeftMenu />
                    <Switch>
                        <Route exact  path="/panel"  component={Orders}/>
                        <Route  path="/panel/orders" component={Orders}/>
                        <Route  path="/panel/test" />
                        <Route  path="/panel/test2" component={User2}/>

                    </Switch>

                </div>
            </div>
        )

    }
}
const User = ({ match }) => {
    return <h1>Hello user1 {match.params.username}!</h1>
}
const User2 = ({ match }) => {
    return <h1>Hello user 2 {match.params.username}!</h1>
}
export default Panel;