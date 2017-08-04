import React from 'react';
import { Route, Link } from 'react-router-dom';



import WrapperApp from './WrapperApp/WrapperApp';

class App extends React.Component{
    render(){
        return (
                <div style={{width: '100%', height: '100%'}}>
                    {/*<header>*/}
                        {/*<Link to="/">Home</Link>*/}
                        {/*<Link to="/about-us">About</Link>*/}
                    {/*</header>*/}

                    {/*<main>*/}
                        {/*<Route exact path="/" component={Home} />*/}
                        {/*<Route exact path="/about-us" component={About} />*/}
                    {/*</main>*/}

                    <WrapperApp {...this.props}/>
                </div>


        )
    }
}
export default App;