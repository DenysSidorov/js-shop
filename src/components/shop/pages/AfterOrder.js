import React from "react";
import st from './afterOrder.scss';
class AfterOrder extends React.Component {
    componentDidMount(prevProps) {
        window.scrollTo(0, 0)
    }

    render() {
        return (
            <div>
                <div>Спасибо за ваш заказ. Наши менеджеры свяжутся с Вами в ближайшее время!</div>
                {this.props.history.location.state && <div>Номер вашего заказа: {this.props.history.location.state}</div>}

            </div>
        )

    }
}

export default AfterOrder;