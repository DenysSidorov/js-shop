import React from 'react';
import WrapperApp from './WrapperApp';

class App extends React.Component{
    componentDidMount(){
        // TODO getTime, isAuth, getCurrency, getName, getDate, getLocation, getSomeData
    }
    render(){

        return (
                <div style={{width: '100%', height: '100%'}}>
                    <WrapperApp {...this.props}/>
                </div>
        )
    }
}
export default App;
