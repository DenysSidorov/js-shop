import React from "react";
import { Route, Link, Switch } from 'react-router-dom';

import MainMenu from "./MainMenu";
import ConfirmBlock from "./ConfirmBlock";
import BtnUp from "./BtnUp";
import FooterSection from "./FooterSection";
import MainContent from "./MainContent";

import Home from '../Home';
import AboutUs from '../pages/AboutUs';
import Blog from '../pages/Blog';

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

                                <Route path="/blog/:n/:m/" render={(props)=>{
                                    console.log(props, 'props!!!');
                                    // props.history.push('/');
                                    return (<div>bLOG {props.match.params.n} n/m</div>)
                                }} />
                                  <Route render={(props)=> {
                                      return <div>404 Sorry! Not Found Page with route: {props.location.pathname}</div>
                                  }}/>
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

