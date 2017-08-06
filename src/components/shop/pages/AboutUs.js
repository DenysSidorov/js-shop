import React from "react";

class About extends React.Component {
    componentDidMount(prevProps) {
        window.scrollTo(0, 0)
    }
    render() {
        return (
            <div>
                <span>
                    <p>
                        <b>Условия оплаты и доставки.</b>
                    </p>
                    <p>
                        <b>Оплатить заказ вы можете удобным для вас способом:</b>
                    </p>
                    <ol>
                        <li>На расчетный счет Приват банка.</li>
                        <li>Оплата заказа при получении, в отделении "Новой Почты"..</li>
                    </ol>
                    <br/>
                        <ul>
                            <li>
                                <span
                                    style={{lineHeight: "1.45em", backgroundColor: "initial"}}>Заказы отправляем ежедневно.</span>
                            </li>
                            <li><span
                                style={{lineHeight: "1.45em", backgroundColor: "initial"}}>Доставка осуществляется транспортной компанией "Новая Почта".&nbsp;
                            </span>
                            </li>
                            <li><span
                                style={{lineHeight: "1.45em", backgroundColor: "initial"}}>Услуги доставки оплачивает покупатель, согласно тарифов компании-перевозчика.
                            </span>
                            </li>
                            <li>
                                <span
                                    style={{lineHeight: "1.45em", backgroundColor: "initial"}}>Сроки доставки 1-3 дня.</span>
                            </li>
                            <li>
                                <b>Для жителей г. Киева предлагаем адресную доставку курьерской службой компании "Новая Почта". Стоимость услуги 80 грн.
                                </b>
                            </li>
                        </ul><p style={{fontWeight: 'bold'}}>
                        <b><br/></b>
                        </p><p style={{fontWeight: 'bold'}}></p><p
                        style={{fontWeight: 'bold'}}><img src="https://kupit-rukzak.com.ua//uploads/images/b32a622b6336a207c9be9ead37cfcfbc.png"
                                                        style={{width: '465px', height: '89px'}}/></p><p
                        style={{fontWeight: 'bold'}}></p><p><img
                        src="https://kupit-rukzak.com.ua//uploads/images/90625a2380aa604a1f68cc0773b7df84.png"
                        style={{width: '481.515px', 'height' : '137px'}}/></p><p></p><br/><p></p>
                        <p style={{fontWeight: 'bold'}}></p>
                        <p></p><p><b></b></p><p><b></b></p><p><b></b></p><b><br/></b><p></p>

                        </span>
            </div>
        )

    }
}

export default About;