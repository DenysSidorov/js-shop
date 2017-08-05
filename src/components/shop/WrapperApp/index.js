import React from "react";
import { Route, Link, Switch } from 'react-router-dom';

import MainMenu from "./MainMenu";
import ConfirmBlock from "./ConfirmBlock";
import BtnUp from "./BtnUp";
import FooterSection from "./FooterSection";
import MainContent from "./MainContent";

import Home from '../Home';
import About from '../pages/About';

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

                            <header>
                                <Link to="/">Home</Link>
                                <Link to="/about-us">About</Link>
                            </header>

                            <main>
                                <div></div>
                              <Switch>
                                <Route exact path="/" component={Home} />

                                <Route path="/about-us/:n" component={About} />
                                <Route exact path="/about-us" component={About} />

                                <Route exact path="/blog/:n/" render={(props)=>{
                                    console.log(props, 'props!!!');
                                    // props.history.push('/');
                                    return (<div>bLOG {props.match.params.n} / n/</div>)
                                }} />

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
<div></div>
                    </div>
                        <FooterSection/>
                        <BtnUp/>
                </div>
        )
    }
}

export default WrapperApp;

