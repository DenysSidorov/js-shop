import React from "react";
import {Route, Switch} from "react-router-dom";
// import ReactCSSTransitionGroup from 'react/lib/ReactCSSTransitionGroup';
// import  CSSTransitionGroup  from 'react-transition-group'
// TODO connect animation

import MainMenu from "./MainMenu";
import CategoryMenu from "./category-menu/CategoryMenu";
import BtnUp from "./BtnUp";
import SocialMedia from "./SocialMedia";
import FooterSection from "./FooterSection";
import MainContent from "./MainContent";
import Home from "../pages/Home";
import AboutUs from "../pages/AboutUs";
import Blog from "../pages/Blog";
import PaymentAndDelivery from "../pages/PaymentAndDelivery";
import CashbackAndExchange from "../pages/CashbackAndExchange";
import OrderComp from "../pages/order";
import AfterOrder from "../pages/AfterOrder";
import CardPage from "../pages/card";
import Profile from "../pages/Profile";
import Contacts from "../pages/Contacts";
import Login from "../pages/Login";
import Logup from "../pages/Logup";
import VerifyEmail from "../pages/VerifyEmail";
import VerifyUser from "../panel/auth/VerifyUser";
// import Panel from '../panel/index';
// import ErrorToken from "../panel/auth/ErrorToken";

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
                    <CategoryMenu/>
                    <MainContent {...this.props}>
                        <main>
                                <Switch key={location.key} location={location}>
                                    <Route exact path="/" component={Home}/>
                                    <Route path="/about-us" component={AboutUs}/>
                                    <Route path="/payment-and-delivery" component={PaymentAndDelivery}/>
                                    <Route path="/cashback-and-exchange" component={CashbackAndExchange}/>
                                    <Route exact path="/order" component={OrderComp}/>
                                    <Route path="/blog" component={Blog}/>
                                    <Route path="/card/:id" component={CardPage}/>
                                    <Route exact path="/great" component={AfterOrder}/>
                                    <Route exact path="/contacts" component={Contacts}/>
                                    <RouteAuth path="/profile" component={Profile}/>
                                    {/*<RouteAuth path="/panel" component={Panel}/>*/}
                                    <Route path="/login" component={Login}/>
                                    <Route path="/logup" component={Logup}/>
                                    <Route path="/verify-email" component={VerifyEmail}/>
                                    <Route path="/verify-user" component={VerifyUser}/>
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
                <SocialMedia/>
            </div>
        )

    }
}

export default WrapperApp;

