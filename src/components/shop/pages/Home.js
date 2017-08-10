import React from "react";
import axios from "axios";
import CardsSection from "../modules/CardsSection";
import TagsMainSection from "../modules/TagsMainSection";
import MenuInfoSection from "../modules/MenuInfoSection";
import AdditionalSection from "../modules/AdditionalSection";
import SimilarGoodsSection from "../modules/SimilarGoodsSection";
class Home extends React.Component {
    state = {cards: [], popularCards: [], uniqCategory: []};

    async componentWillReceiveProps(prevProps) {
        console.log('componentWillReceiveProps', 'получил новые пропс');
        var cards = [];

        try {
            cards = await axios.get('http://localhost:3000/goods');
        } catch (e) {
            console.log(e);
        } finally {
            this.setState({
            })
        }
    }
    async componentDidMount(prevProps) {
        window.scrollTo(0, 0)
        // TODO getTime, isAuth, getCurrency, getName, getDate, getLocation, getSomeData

        // https://www.npmjs.com/package/axios
        var cards = [];
        var popularCards = [];
        var uniqCategory = [];
        try {
            cards = await axios.get('http://localhost:3000/goods');
            popularCards = await axios.get('http://localhost:3000/goods/popular');
            uniqCategory = await axios.get('http://localhost:3000/goods/tags');
            // setTimeout(()=>{this.setState({cards: cards.goods})}, 2000)
        } catch (e) {
            console.log(e);

        } finally {
            this.setState({
                cards: cards.data,
                popularCards: popularCards.data,
                uniqCategory: uniqCategory.data
            })
        }
    }

    render() {
        console.log('rerender');
        return (
            <div>
                <MenuInfoSection/>
                {this.state.uniqCategory && this.state.uniqCategory.length
                ? <TagsMainSection uniqCategory={this.state.uniqCategory}/>
                : null}
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