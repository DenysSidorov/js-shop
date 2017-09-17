import React from "react";
import st from './verifyUser.scss';
class VerifyUser extends React.Component {
    componentDidMount = (prevProps) => {
        window.scrollTo(0, 0)

        var params = window
            .location
            .search
            .replace('?','')
            .split('&')
            .reduce(
                function(p,e){
                    var a = e.split('=');
                    p[ decodeURIComponent(a[0])] = decodeURIComponent(a[1]);
                    return p;
                },
                {}
            );
        var token  = params['t'];
        if(token){
            console.log(token, 'tokenischeeeeeee');
        }
    }

    render = ()=>{
        console.log(this.props, 'propspsss');
        return (
            <div className="verifyUserContainer">
                <p>Подтвердите свою почту, письмо с ссылкой о подтверждении отправленно на

                </p>
            </div>
        )

    }
}

export default VerifyUser;