import React from "react";
import axios from "axios";
import MainContainerForCard from "./MainContainerForCard";
import SimilarGoodsSection from "../../modules/SimilarGoodsSection";
import ContainerForCardAdditional from "./ContainerForCardAdditional";
class Card extends React.Component {
    state = {cards : []};
    async componentDidMount(prevProps) {
        window.scrollTo(0, 0)

            // TODO getTime, isAuth, getCurrency, getName, getDate, getLocation, getSomeData
            // https://www.npmjs.com/package/axios
            var cards = await axios.get('http://localhost:3000/goods/1');

            // setTimeout(()=>{this.setState({cards: cards.goods})}, 2000)
            this.setState({cards: cards.data})

            console.log(cards.data, 'card t');


    }
    render() {
        return (
            <div>
                <MainContainerForCard/>
                <SimilarGoodsSection/>
                <ContainerForCardAdditional/>
            </div>

        )

    }
}

export default Card;