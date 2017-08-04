import React from 'react';
import WrapperApp from './WrapperApp/WrapperApp';

class App extends React.Component{
    render(){
        return (<WrapperApp {...this.props}/>)
    }
}
export default App;