import React from "react";
import st from './pagesStyles/verifyEmail.scss';
import {setMetaTag, setTitle} from "../helpers/lib/utils";

class VerifyEmail extends React.Component {
  componentDidMount = (prevProps) => {
    window.scrollTo(0, 0);
    setTitle('Проверка почты');
    setMetaTag('description', 'Проверка почты на doshki.com');
    setMetaTag('keywords', 'интернет-магазин картин, украинские картины, картины для интерьера, картины на дереве, картины на досках, doshki.com, doshki.kom, картины украина, деревянные картины');
  }

  render = () => {
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
