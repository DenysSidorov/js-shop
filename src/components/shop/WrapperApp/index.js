import React from "react";
import { Route, Link, Switch, Redirect, Prompt } from 'react-router-dom';

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
import NotFound from '../pages/NotFound';

import RouteFade from '../helpers/RouteFade';
import RouteAuth from '../helpers/RouteAuth';

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
                                <Route  path="/about-us/" component={AboutUs} />
                                <Route  path="/payment-and-delivery/" component={PaymentAndDelivery} />
                                <Route  path="/cashback-and-exchange/" component={CashbackAndExchange} />
                                <Route  path="/blog/" component={Blog} />
                                <RouteAuth  path="/contacts/" component={Contacts} />
                                <Route  component={NotFound} />
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

class Form extends React.Component{
    constructor(props) {
        super(props);

        this.state = {dirty: false}; // состояние формы - нет изменений
    }
    setDirty () { this.setState({dirty: true})};

    render() {
        return (
            <div>
                <h1>Form</h1>

                <input type='text' onInput={this.setDirty.bind(this)} />

                <Prompt
                    when={this.state.dirty}
                    message='Данные будут потеряны!' />
            </div>
        )
    }
}