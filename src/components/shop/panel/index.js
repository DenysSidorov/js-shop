import React from "react";
import queryParams from '../helpers/lib/queryParams';
import styles from './index.scss';
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
           <div className="adminPanContainer fullWidth left">
               <div className="container">Админ Панель</div>
           </div>
        )

    }
}

export default Panel;