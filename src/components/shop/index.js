import React from 'react';




import WrapperApp from './WrapperApp';

class App extends React.Component{
    render(){
        return (
                <div style={{width: '100%', height: '100%'}}>




                    <WrapperApp {...this.props}/>
                </div>


        )
    }
}
export default App;
