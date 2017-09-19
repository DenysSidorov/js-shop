import React from "react";
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
            <div style={{fontSize: '1.6rem', fontFamily: 'Roboto-Regular'}}>Профиль пользователя пуст, подтверждение в обработке...</div>
        )

    }
}

export default Panel;