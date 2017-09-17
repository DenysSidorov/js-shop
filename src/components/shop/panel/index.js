import React from "react";
import queryParams from '../helpers/lib/queryParams';
class Panel extends React.Component {
    componentDidMount = (prevProps) => {
        window.scrollTo(0, 0)
        // var token = queryParams['t'];
        // if (token) {
        //     console.log(token, 'tokenischeeeeeee');
        // }

    };

    render = ()=> {
        return (
           <div style={{fontSize: '1.6rem', fontFamily: 'Roboto-Regular'}}>Panel</div>
        )

    }
}

export default Panel;