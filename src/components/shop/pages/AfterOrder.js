import React from "react";
import {Link} from 'react-router-dom';
import st from './pagesStyles/afterOrder.scss';
import {setTitle} from "../helpers/lib/utils";

class AfterOrder extends React.Component {
  componentDidMount(prevProps) {
    window.scrollTo(0, 0);
    setTitle('Заказ принят');
  }

  render() {
    return (
      <div className="greatPage-container">
        <p>Спасибо за ваш заказ. Наши менеджеры свяжутся с Вами в ближайшее время!</p>
        {this.props.history.location.state
        && <p>Номер вашего заказа:
          <span style={{color: 'green'}}>{this.props.history.location.state}</span>
        </p>}
        <p><Link to="/" style={{color: 'blue'}}>На главную</Link></p>
      </div>
    )

  }
}

export default AfterOrder;