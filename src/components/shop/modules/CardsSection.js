import React from "react";
import axios from "axios";
import CardMainPage from './CardMainPage';
class CardsSection extends React.Component {
    state = {cards : []};
    // async componentDidMount() {
    //     // TODO getTime, isAuth, getCurrency, getName, getDate, getLocation, getSomeData
    //     // https://www.npmjs.com/package/axios
    //     var cards = await axios.get('http://localhost:3000/goods');
    //
    //     // setTimeout(()=>{this.setState({cards: cards.goods})}, 2000)
    //     this.setState({cards: cards.data})
    //
    //      console.log(cards.data, 't');
    // }

    render() {
        let {cards} = this.props;
        return (
            <div className="cardSection left fullWidth ">
                <div className="container">
                    <div className="productsCardBlock">
                        <div className="productsCardBlock__navigation"></div>
                        <div className="productsCardBlock__searchCard"></div>
                        <div className="productsCardBlock__searchCard-count">
                            Найдено : {this.props.count}
                        </div>

                        <div className="productsCardBlock__bodyCardItems">
                            { cards.map(el=> <CardMainPage card={el} key={el._id}/>)}
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default CardsSection;