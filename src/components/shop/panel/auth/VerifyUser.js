import React from "react";
import queryParams from '../../helpers/lib/queryParams';
class VerifyUser extends React.Component {
    componentDidMount = (prevProps) => {
        window.scrollTo(0, 0)
        var token = queryParams['t'];
        if (token) {
            console.log(token, 'tokenischeeeeeee');
        }
        // TODO проверка этого токена!
        // Если все хорошо даем редаксу понять что это норм токен
        // Если плохо Выводим сообщение
        // //

    }

    render = ()=> {
        return (
            <div className="verifyUserContainer">

            </div>
        )

    }
}

export default VerifyUser;