import React from "react";
import st from './afterOrder.scss';
class AfterOrder extends React.Component {
    componentDidMount(prevProps) {
        window.scrollTo(0, 0)
    }

    render() {
        return (
            <div>
                <div></div>
                Спасибо за ваш заказ. Наши менеджеры свяжутся с Вами в ближайшее время!
            </div>
        )

    }
}

export default AfterOrder;