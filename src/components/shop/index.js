import React from "react";
import WrapperApp from "./WrapperApp";
import axios from "axios";
import {Route, Switch} from "react-router-dom";
import RouteAuth from "../shop/helpers/RouteAuth";
import Panel from '../shop/panel/index';
class App extends React.Component {
    async componentDidMount() {
        // TODO getTime, isAuth, getCurrency, getName, getDate, getLocation, getSomeData
        // https://www.npmjs.com/package/axios
        // var t = await axios.get('http://localhost:3000/goods');
        // console.log(t.data.goods, 't');
    }

    render() {

        return (
            <div style={{width: '100%', height: '100%'}}>
                <Switch>
                    <RouteAuth path="/panel" component={Panel}/>
                    <WrapperApp {...this.props}/>
                </Switch>

            </div>
        )
    }
}
export default App;

