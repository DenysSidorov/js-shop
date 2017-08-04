import React from 'react';
import { Route, Link } from 'react-router-dom';
import Home from './Home';


import WrapperApp from './WrapperApp';

class App extends React.Component{
    render(){
        return (
                <div style={{width: '100%', height: '100%'}}>
                    <header>
                        <Link to="/">Home</Link>
                        <Link to="/about-us">About</Link>
                    </header>

                    <main>
                        <Route exact path="/" component={Home} />
                        <Route exact path="/about-us" component={About} />
                    </main>

                    <WrapperApp {...this.props}/>
                </div>


        )
    }
}
export default App;

// const Home = (props)=> <div>Home Component</div>
const About = (props) => (
    <div>
        <h1>About Us</h1>
        <p>Hello Medium!</p>
    </div>
)