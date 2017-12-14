import React from "react";
import queryParams from "../helpers/lib/queryParams";
import {Switch, Route} from "react-router-dom";
import AdminInfo from "./AdminForPage";
import Header from "./Header";
import Orders from "./Orders";
import LoadingBar from "react-redux-loading-bar";
import LeftMenu from "./LeftMenu";

class Panel extends React.Component {
    state = {token: null, typeOrderParam: null};

    constructor(props) {
        super(props);


    }

    componentDidMount = async(prevProps) => {
        window.scrollTo(0, 0);


        try {
            var params = queryParams(this.props.location.search);
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
                <LoadingBar style={{backgroundColor: '#ff7867', height: '3px'}}/>
                <div className="adminPan__mainContent">
                    <LeftMenu />
<div className="adminPan__mainContent_content left">
                    <Switch>
                        <Route exact path="/panel" component={Orders}/>
                        <Route path="/panel/orders" component={Orders}/>
                        <Route path="/panel/test" component={User2}/>
                        <Route path="/panel/admin" component={AdminInfo}/>

                    </Switch>
</div>
                </div>
            </div>
        )

    }
}

const User2 = ({match}) => {
    return <h1>Hello user 2 {match.params.username}!</h1>
}
export default Panel;