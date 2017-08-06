import React from "react";
import {Route, Redirect} from "react-router-dom";

const RouteAuth = ({component: Component, ...rest})=>(

    <Route {...rest} render={(matchProps)=> {

        let fakeAuth = false;
        console.log(fakeAuth, 'fakeAuth ');
        return fakeAuth
            ? <Component {...matchProps}/>
            : <Redirect to={{
            pathname: '/',
            state: {from: matchProps.location}
        }}/>
    }}/>
)

export  default RouteAuth;

