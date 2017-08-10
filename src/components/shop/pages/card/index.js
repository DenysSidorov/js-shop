import React from "react";
import axios from "axios";
import MainContainerForCard from "./MainContainerForCard";
import SimilarGoodsSection from "../../modules/SimilarGoodsSection";
import ContainerForCardAdditional from "./ContainerForCardAdditional";
class Card extends React.Component {
    state = {card: null, similarCategory: [], popularCards: []};

    async componentDidMount(prevProps) {
        window.scrollTo(0, 0)
        var id = this.props.match.params.id;
        var similarCategory = [];
        var popularCards = [];
        var card;
        // TODO getTime, isAuth, getCurrency, getName, getDate, getLocation, getSomeData
        // https://www.npmjs.com/package/axios
        try {
            popularCards = await axios.get('http://localhost:3000/goods/popular');
            card = await axios.get(`http://localhost:3000/goods/${id}`);
            console.log(card.data[0].category, 'cards');
            similarCategory = await axios.post(`http://localhost:3000/goods/${id}/similar`,
                {params: {'category': card.data[0].category}}
            );
            // setTimeout(()=>{this.setState({cards: cards.goods})}, 2000)
        } catch (e) {
            console.log(e);
        } finally {
            this.setState({
                card: card.data,
                similarCategory: similarCategory.data,
                popularCards: popularCards.data
            });
        }
    }

    render() {
        var {card} = this.state;
        return (
            <div>
                {card
                    ? <div>

                    <MainContainerForCard card={this.state.card}/>
                    {this.state.similarCategory && this.state.similarCategory.length
                        ? <SimilarGoodsSection cards={this.state.similarCategory} title={'Похожие'}/>
                        : null}
                    {this.state.popularCards && this.state.popularCards.length
                        ? <ContainerForCardAdditional card={this.state.card}
                                                      popularCards={this.state.popularCards}/>
                        : null}

                </div>
                    : <div>Такого товара не существует</div> }
            </div>
        )

    }
}

export default Card;