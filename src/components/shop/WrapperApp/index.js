import React from "react";
import { Route, Link, Switch } from 'react-router-dom';

import MainMenu from "./MainMenu";
import ConfirmBlock from "./ConfirmBlock";
import BtnUp from "./BtnUp";
import FooterSection from "./FooterSection";
import MainContent from "./MainContent";

import Home from '../pages/Home';
import AboutUs from '../pages/AboutUs';
import Blog from '../pages/Blog';
import PaymentAndDelivery from '../pages/PaymentAndDelivery';
import CashbackAndExchange from '../pages/CashbackAndExchange';
import Contacts from '../pages/Contacts';
import NotFount from '../pages/NotFount';

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
                              <Switch>
                                <Route exact path="/" component={Home} />
                                <Route exact path="/about-us" component={AboutUs} />
                                <Route exact path="/blog" component={Blog} />
                                <Route exact path="/payment-and-delivery" component={PaymentAndDelivery} />
                                <Route exact path="/cashback-and-exchange" component={CashbackAndExchange} />
                                <Route exact path="/contacts" component={Contacts} />
                                <Route  component={NotFount} />

                              </Switch>
                            </main>

                        </MainContent>
<div></div><div></div>
                    </div>
                        <FooterSection/>
                        <BtnUp/>
                </div>
        )
    }
}

export default WrapperApp;

