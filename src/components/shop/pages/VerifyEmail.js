import React from "react";
import st from './verifyEmail.scss';
class VerifyEmail extends React.Component {
    componentDidMount = (prevProps) => {
        window.scrollTo(0, 0)
    }

    render = ()=>{
        console.log(this.props, 'propspsss');
        console.log(this.props, 'propspsss');
        return (
            <div className="verifyEmailContainer">
                <p>Подтвердите свою почту, письмо с ссылкой о подтверждении отправленно на
                    {this.props.history.location.state.email
                    &&
                        <span style={{color: 'green'}}> {this.props.history.location.state.email}</span>}
                </p>
            </div>
        )

    }
}

export default VerifyEmail;