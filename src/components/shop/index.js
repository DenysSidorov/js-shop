import React from "react";
import WrapperApp from "./WrapperApp";
import axios from "axios";

class App extends React.Component {
    async componentDidMount() {
        // TODO getTime, isAuth, getCurrency, getName, getDate, getLocation, getSomeData
        // https://www.npmjs.com/package/axios
        var t = await axios.get('/goods');
        console.log(t.data.goods, 't');
    }

    render() {

        return (
            <div style={{width: '100%', height: '100%'}}>
                <WrapperApp {...this.props}/>
            </div>
        )
    }
}
export default App;
