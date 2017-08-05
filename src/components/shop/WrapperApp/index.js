import React from "react";
import { Route, Link } from 'react-router-dom';

import Home from '../Home';
import MainMenu from "./MainMenu";
import ConfirmBlock from "./ConfirmBlock";
import BtnUp from "./BtnUp";
import FooterSection from "./FooterSection";
import MainContent from "./MainContent";

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


// const Home = (props)=> <div>Home Component</div>
const About = (props) => (
    <div>
        <h1>About Us</h1>
        <p>Hello Medium!</p>
    </div>
)