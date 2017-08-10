import React from "react";
import axios from "axios";
import CardsSection from "../modules/CardsSection";
import TagsMainSection from "../modules/TagsMainSection";
import MenuInfoSection from "../modules/MenuInfoSection";
import AdditionalSection from "../modules/AdditionalSection";
import SimilarGoodsSection from "../modules/SimilarGoodsSection";
class Home extends React.Component {
    state = {cards: [], popularCards: []};

    async componentDidMount(prevProps) {
        window.scrollTo(0, 0)
        // TODO getTime, isAuth, getCurrency, getName, getDate, getLocation, getSomeData

        // https://www.npmjs.com/package/axios
        var cards = [];
        var popularCards = [];
        try {
            cards = await axios.get('http://localhost:3000/goods');
            popularCards = await axios.get('http://localhost:3000/goods/popular');
            // setTimeout(()=>{this.setState({cards: cards.goods})}, 2000)
        } catch (e) {
            console.log(e);

        } finally {
            this.setState({
                cards: cards.data,
                popularCards: popularCards.data
            })
        }

        console.log(cards, 't');
        console.log(popularCards, 'p');
    }

    render() {
        return (
            <div>
                <MenuInfoSection/>
                <TagsMainSection/>
                {this.state.cards && this.state.cards.length
                  ? <CardsSection cards={this.state.cards}/>
                  : null}
                <AdditionalSection/>
                {this.state.popularCards && this.state.popularCards.length
                    ? <SimilarGoodsSection cards={this.state.popularCards} title={'Популярные'}/>
                    : null}
            </div>
        )
    }
}

export default Home;