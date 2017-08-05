import React from "react";
import { Route, Link } from 'react-router-dom';

import MainMenu from "./MainMenu";
import ConfirmBlock from "./ConfirmBlock";
import BtnUp from "./BtnUp";
import FooterSection from "./FooterSection";
import MainContent from "./MainContent";

import Home from '../Home';
import About from '../pages/About';


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

                                <Route exact path="/about-us" component={About} />

                                <Route path="/blog/:n" render={(props)=>{
                                    console.log(props, 'props!!!');
                                    // props.history.push('/');
                                    return (<div>bLOG</div>)
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

