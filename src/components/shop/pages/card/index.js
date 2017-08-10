import React from "react";
import axios from "axios";
import MainContainerForCard from "./MainContainerForCard";
import SimilarGoodsSection from "../../modules/SimilarGoodsSection";
import ContainerForCardAdditional from "./ContainerForCardAdditional";
class Card extends React.Component {
    state = {card: []};

    async componentDidMount(prevProps) {
        window.scrollTo(0, 0)
        var id = this.props.match.params.id;
        // TODO getTime, isAuth, getCurrency, getName, getDate, getLocation, getSomeData
        // https://www.npmjs.com/package/axios
        var card = await axios.get(`http://localhost:3000/goods/${id}`);

        // setTimeout(()=>{this.setState({cards: cards.goods})}, 2000)
        this.setState({card: card.data});

        console.log(card.data[0]._id, 'ID CARD');
    }

    render() {
        var {card} = this.state;
        return (
            <div>
                {card.length
                    ? <div>

                    <MainContainerForCard card={this.state.card} />
                    <SimilarGoodsSection/>
                    <ContainerForCardAdditional card={this.state.card} />
                </div>
                    : null }
            </div>
        )

    }
}

export default Card;