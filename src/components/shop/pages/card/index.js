import React from "react";
import axios from "axios";
import MainContainerForCard from "./MainContainerForCard";
import SimilarGoodsSection from "../../modules/SimilarGoodsSection";
import ContainerForCardAdditional from "./ContainerForCardAdditional";
class Card extends React.Component {
    state = {card: null, popularCards: []};

    async componentDidMount(prevProps) {
        window.scrollTo(0, 0)
        var id = this.props.match.params.id;
        var popularCards = [];
        var card;
        // TODO getTime, isAuth, getCurrency, getName, getDate, getLocation, getSomeData
        // https://www.npmjs.com/package/axios
        try {
            card = await axios.get(`http://localhost:3000/goods/${id}`);
            popularCards = await axios.get('http://localhost:3000/goods/popular');
            // setTimeout(()=>{this.setState({cards: cards.goods})}, 2000)
        } catch (e) {
            console.log(e);
        } finally {
            this.setState({card: card.data, popularCards: popularCards.data});
        }


        console.log(card.data[0]._id, 'ID CARD');
    }

    render() {
        var {card} = this.state;
        return (
            <div>
                {card
                    ? <div>

                    <MainContainerForCard card={this.state.card}/>
                    {this.state.popularCards && this.state.popularCards.length
                        ? <SimilarGoodsSection cards={this.state.popularCards} title={'Похожие'}/>
                        : null}
                    <ContainerForCardAdditional card={this.state.card}/>
                </div>
                    : <div>Такого товара не существует</div> }
            </div>
        )

    }
}

export default Card;