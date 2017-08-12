import React from "react";
import {Route, Switch} from "react-router-dom";
// import ReactCSSTransitionGroup from 'react/lib/ReactCSSTransitionGroup';
// import  CSSTransitionGroup  from 'react-transition-group'
// TODO connect animation

import MainMenu from "./MainMenu";
import BtnUp from "./BtnUp";
import FooterSection from "./FooterSection";
import MainContent from "./MainContent";
import Home from "../pages/Home";
import AboutUs from "../pages/AboutUs";
import Blog from "../pages/Blog";
import PaymentAndDelivery from "../pages/PaymentAndDelivery";
import CashbackAndExchange from "../pages/CashbackAndExchange";
import Card from "../pages/Card";
import Order from "../pages/Order";
import Contacts from "../pages/Contacts";
import Login from "../pages/Login";
import NotFound from "../pages/NotFound";
import RouteAuth from "../helpers/RouteAuth";

// TODO maybe use async loading component with ErrorComp and PreloadComp ???
// https://github.com/ctrlplusb/react-async-component

class WrapperApp extends React.Component {
    render() {
        return (
            <div className="wrapper">
                <div className="content">
                    {/*<ConfirmBlock/>*/}
                    <MainMenu {...this.props}/>
                    <MainContent {...this.props}>
                        <main>
                                <Switch key={location.key} location={location}>
                                    <Route exact path="/" component={Home}/>
                                    <Route path="/about-us/" component={AboutUs}/>
                                    <Route path="/payment-and-delivery/" component={PaymentAndDelivery}/>
                                    <Route path="/cashback-and-exchange/" component={CashbackAndExchange}/>
                                    <Route path="/blog/" component={Blog}/>
                                    <Route path="/card/:id" component={Card}/>
                                    <Route exact path="/order/" component={Order}/>
                                    <RouteAuth path="/contacts/" component={Contacts}/>
                                    <Route path="/login/" component={Login}/>

                                    <Route component={NotFound}/>
                                    {/*<Route exact path="/404" component={NotFound} />*/}
                                    {/*<Redirect to="/404" />*/}
                                </Switch>
                            {/*<Route  path="*" component={NotFound} />*/}
                        </main>
                    </MainContent>
                </div>
                <FooterSection/>
                <BtnUp/>
            </div>
        )
    }
}

export default WrapperApp;

