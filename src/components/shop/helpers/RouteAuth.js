import React from "react";
import {Route, Redirect} from "react-router-dom";

const RouteAuth = ({component: Component, ...rest})=>(

    <Route {...rest} render={(matchProps)=> {

        let fakeAuth = false;
        console.log(fakeAuth, 'fakeAuth ');
        return fakeAuth
            ? <Component {...matchProps}/>
            : <Redirect to='/login'/>
    }}/>
)

export  default RouteAuth;

{/*: <Redirect to={{pathname: '/', state: {from: matchProps.location}}}/>*/}
