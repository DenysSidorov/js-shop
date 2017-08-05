import React from "react";
import { Route, Link } from 'react-router-dom';

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

