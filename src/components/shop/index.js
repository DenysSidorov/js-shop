import React from 'react';
import WrapperApp from './WrapperApp';

class App extends React.Component{
    async componentDidMount(){
        // TODO getTime, isAuth, getCurrency, getName, getDate, getLocation, getSomeData
        var t = await fetch('http://localhost:3000/goods');
        console.log( t, 't');
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
