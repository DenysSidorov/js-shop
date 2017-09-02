import React from "react";
import {Route, Redirect} from "react-router-dom";
import {connect} from "react-redux";
const RouteAuth = ({component: Component, ...rest})=>(

    <Route {...rest} render={(matchProps)=> {

        let fakeAuth = rest.authReducer.authenticated;
        console.log(fakeAuth, 'fakeAuth ');
        return fakeAuth
            ? <Component {...matchProps}/>
            : <Redirect to='/login'/>
    }}/>
)


const mapStateToProps = (state, ownProps) => {
    return {
        authReducer: state.authReducer
    }
}

console.log(131323);
console.log(131123);
console.log(131323);

export default connect(mapStateToProps, null)(RouteAuth);

{/*: <Redirect to={{pathname: '/', state: {from: matchProps.location}}}/>*/}
